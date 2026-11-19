// Contact form endpoint. Verifies the GeeTest v4 puzzle result when a
// project is configured (single-use — so this must be the ONLY place it's
// checked), then actually delivers the message via Brevo's transactional
// email API. This guarantees the enquiry reaches the inbox regardless of
// whether the visitor has an email client configured.

import { realEnvValue } from "../../lib/site";

// Set once a CAPTCHA v4 project exists at https://console.geetest.com — must
// match the CAPTCHA ID in app/lib/site.ts (NEXT_PUBLIC_GEETEST_CAPTCHA_ID).
// Empty (including a leftover PASTE_YOUR_..._HERE placeholder) means no bot
// check runs at all — see the skip below — rather than every submission
// failing against an invalid captcha_id.
const GEETEST_CAPTCHA_ID = realEnvValue(process.env.NEXT_PUBLIC_GEETEST_CAPTCHA_ID);
const GEETEST_CAPTCHA_KEY = realEnvValue(process.env.GEETEST_CAPTCHA_KEY);
const CAPTCHA_CONFIGURED = Boolean(GEETEST_CAPTCHA_ID && GEETEST_CAPTCHA_KEY);

const BREVO_URL = "https://api.brevo.com/v3/smtp/email";

// Where enquiries are delivered.
const TO_EMAIL = "patrick@metroassoc.com";
const TO_NAME = "Metro Associates";

// Verified Brevo sender. Override with BREVO_SENDER_EMAIL in production if a
// different verified sender/domain is preferred.
const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL ?? "patrick@metroassoc.com";
const SENDER_NAME = process.env.BREVO_SENDER_NAME ?? "Metro Associates Website";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type GeetestCaptchaBody = {
  lot_number?: string;
  captcha_output?: string;
  pass_token?: string;
  gen_time?: string;
};

export async function POST(request: Request) {
  let body: {
    captcha?: GeetestCaptchaBody;
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    message?: string;
    sms?: boolean;
  };
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, error: "invalid-request" }, { status: 400 });
  }

  const lotNumber = (body.captcha?.lot_number ?? "").toString();
  const captchaOutput = (body.captcha?.captcha_output ?? "").toString();
  const passToken = (body.captcha?.pass_token ?? "").toString();
  const genTime = (body.captcha?.gen_time ?? "").toString();
  const name = (body.name ?? "").toString().trim().slice(0, 200);
  const email = (body.email ?? "").toString().trim().slice(0, 200);
  const phone = (body.phone ?? "").toString().trim().slice(0, 100);
  const company = (body.company ?? "").toString().trim().slice(0, 200);
  const message = (body.message ?? "").toString().trim().slice(0, 5000);
  const sms = body.sms ? "Yes" : "No";

  if (!name || !email || !message) {
    return Response.json({ success: false, error: "missing-fields" }, { status: 400 });
  }

  // 1) Verify the GeeTest puzzle (bot check) — only when a real project is
  // configured. Left unconfigured (see CAPTCHA_CONFIGURED above), every
  // submission would otherwise fail here against an invalid captcha_id, so
  // this step is skipped entirely rather than rejecting real enquiries.
  if (CAPTCHA_CONFIGURED) {
    if (!lotNumber || !captchaOutput || !passToken || !genTime) {
      return Response.json({ success: false, error: "missing-token" }, { status: 400 });
    }
    try {
      const { createHmac } = await import("node:crypto");
      const signToken = createHmac("sha256", GEETEST_CAPTCHA_KEY).update(lotNumber).digest("hex");
      const params = new URLSearchParams({
        lot_number: lotNumber,
        captcha_output: captchaOutput,
        pass_token: passToken,
        gen_time: genTime,
        sign_token: signToken,
      });
      const res = await fetch(
        `https://gcaptcha4.geetest.com/validate?captcha_id=${encodeURIComponent(GEETEST_CAPTCHA_ID)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
        }
      );
      const data = (await res.json()) as { result?: string };
      if (data.result !== "success") {
        return Response.json({ success: false, error: "geetest-failed" }, { status: 400 });
      }
    } catch {
      return Response.json({ success: false, error: "geetest-unreachable" }, { status: 502 });
    }
  }

  // 2) Deliver the message via Brevo.
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return Response.json({ success: false, error: "email-not-configured" }, { status: 500 });
  }

  const html = `
    <table cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1a1a1a;line-height:1.6;">
      <tr><td><strong>New website inquiry</strong></td></tr>
      <tr><td style="padding-top:10px"><strong>Name:</strong> ${esc(name)}</td></tr>
      <tr><td><strong>Email:</strong> ${esc(email)}</td></tr>
      <tr><td><strong>Phone:</strong> ${esc(phone) || "Not provided"}</td></tr>
      <tr><td><strong>Company / Agency:</strong> ${esc(company) || "Not provided"}</td></tr>
      <tr><td><strong>SMS consent:</strong> ${sms}</td></tr>
      <tr><td style="padding-top:14px;white-space:pre-wrap">${esc(message)}</td></tr>
    </table>`;

  const payload = {
    sender: { email: SENDER_EMAIL, name: SENDER_NAME },
    to: [{ email: TO_EMAIL, name: TO_NAME }],
    replyTo: { email, name: name || email },
    subject: `Website Inquiry: ${name || "New contact"}`,
    htmlContent: html,
  };

  try {
    const res = await fetch(BREVO_URL, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return Response.json(
        { success: false, error: "send-failed", status: res.status, detail: detail.slice(0, 300) },
        { status: 502 }
      );
    }
  } catch {
    return Response.json({ success: false, error: "send-unreachable" }, { status: 502 });
  }

  return Response.json({ success: true });
}
