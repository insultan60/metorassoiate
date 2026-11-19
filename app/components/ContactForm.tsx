"use client";

import { useEffect, useRef, useState } from "react";
import { IconArrow, IconCheck } from "./Icons";
import { EMAIL, GEETEST_CAPTCHA_ID } from "../lib/site";

const inputCls =
  "w-full border border-white/12 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-ink-500 transition-colors focus:border-amber-500 focus:outline-none";

/** The four fields GeeTest's client SDK returns on a solved puzzle — all four
 *  travel to our API and on to GeeTest's own server-side validate call, which
 *  is what actually confirms the puzzle was solved (the client result alone
 *  is not trustworthy). */
export type GeetestResult = {
  lot_number: string;
  captcha_output: string;
  pass_token: string;
  gen_time: string;
};

type GeetestCaptcha = {
  appendTo: (target: string | HTMLElement) => void;
  showCaptcha: () => void;
  onSuccess: (cb: () => void) => void;
  onError: (cb: (err: { code: string; msg: string }) => void) => void;
  getValidate: () => GeetestResult | false;
  reset: () => void;
};

type InitGeetest4 = (
  options: { captchaId: string; product?: "float" | "popup" | "bind"; language?: string },
  callback: (captcha: GeetestCaptcha) => void
) => void;

declare global {
  interface Window {
    initGeetest4?: InitGeetest4;
  }
}

const SCRIPT_ID = "geetest-v4-api";

/** Load GeeTest v4's script once and resolve when the API is ready. */
function loadGeetest(): Promise<InitGeetest4> {
  return new Promise((resolve) => {
    if (window.initGeetest4) return resolve(window.initGeetest4);

    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = "https://static.geetest.com/v4/gt4.js";
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }

    const poll = () => {
      if (window.initGeetest4) resolve(window.initGeetest4);
      else window.setTimeout(poll, 100);
    };
    poll();
  });
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [captcha, setCaptcha] = useState<GeetestResult | null>(null);
  const [status, setStatus] = useState<"idle" | "verifying">("idle");
  const [error, setError] = useState("");

  const boxRef = useRef<HTMLDivElement>(null);
  const captchaRef = useRef<GeetestCaptcha | null>(null);

  // No GeeTest project configured yet — don't even try to load/render the
  // widget (an invalid captchaId just shows a broken-looking placeholder),
  // and don't gate submission on a captcha result that can never arrive.
  const captchaConfigured = Boolean(GEETEST_CAPTCHA_ID);

  useEffect(() => {
    if (!captchaConfigured) return;
    let active = true;
    loadGeetest().then((initGeetest4) => {
      if (!active || !boxRef.current || captchaRef.current) return;
      initGeetest4({ captchaId: GEETEST_CAPTCHA_ID, product: "float" }, (instance) => {
        if (!active) return;
        captchaRef.current = instance;
        instance.appendTo(boxRef.current!);
        instance.onSuccess(() => {
          const result = instance.getValidate();
          if (result) {
            setCaptcha(result);
            setError("");
          }
        });
        instance.onError(() => setCaptcha(null));
      });
    });
    return () => {
      active = false;
    };
  }, [captchaConfigured]);

  const resetCaptcha = () => {
    setCaptcha(null);
    captchaRef.current?.reset();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Read the form synchronously — currentTarget is not stable after `await`.
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");
    const sms = data.get("sms") ? "Yes" : "No";

    if (captchaConfigured && !captcha) {
      setError("Please complete the verification before sending.");
      return;
    }

    setStatus("verifying");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          captcha,
          name,
          email,
          phone,
          company,
          message,
          sms: sms === "Yes",
        }),
      });
      const result = await res.json();
      if (!result.success) {
        setError(
          result.error === "geetest-failed"
            ? "Verification failed. Please try again."
            : "Sorry, your message couldn't be sent. Please email us directly."
        );
        resetCaptcha();
        setStatus("idle");
        return;
      }
    } catch {
      setError("Could not reach the server. Please try again in a moment.");
      setStatus("idle");
      return;
    }

    resetCaptcha();
    setStatus("idle");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 border border-amber-500/40 bg-amber-500/5 p-8">
        <span className="inline-flex h-12 w-12 items-center justify-center bg-amber-500 text-navy-950">
          <IconCheck className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-xl font-bold text-white">Thanks, your message has been sent.</h3>
          <p className="mt-2 text-ink-300">
            We&apos;ve received your inquiry and will be in touch shortly. You can
            also reach us directly at{" "}
            <a href={`mailto:${EMAIL}`} className="text-amber-400 hover:underline">
              {EMAIL}
            </a>{" "}
            or +1 312-500-1878.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mono-label mt-2 text-amber-400 hover:text-amber-300"
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="mono-label text-ink-400">Full Name *</span>
          <input name="name" required placeholder="Jane Doe" className={inputCls} />
        </label>
        <label className="grid gap-2">
          <span className="mono-label text-ink-400">Email *</span>
          <input
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputCls}
          />
        </label>
        <label className="grid gap-2">
          <span className="mono-label text-ink-400">Phone</span>
          <input name="phone" type="tel" placeholder="+1 (555) 000-0000" className={inputCls} />
        </label>
        <label className="grid gap-2">
          <span className="mono-label text-ink-400">Company / Agency</span>
          <input name="company" placeholder="Department of Transportation" className={inputCls} />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="mono-label text-ink-400">Message *</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell us about the role you're hiring for, or the position you're seeking…"
          className={`${inputCls} resize-y`}
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-ink-400">
        <input
          name="sms"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-amber-500"
        />
        <span>
          By submitting this form you agree to receive SMS from Metro Associates.
          Carrier and data rates may apply. Message frequency may vary. Reply STOP
          at any time to end messaging, or reply HELP for more information.
        </span>
      </label>

      {/* GeeTest v4 — "float" product mode, so this always requires the
          visitor to actually solve the slider puzzle; nothing auto-passes.
          Omitted entirely (not just hidden) while no CaptchaId is set — see
          GEETEST_CAPTCHA_ID in app/lib/site.ts. */}
      {captchaConfigured && (
        <div className="min-h-13">
          <div ref={boxRef} />
        </div>
      )}

      {error && (
        <p className="mono-label text-[11px] text-red-400" role="alert">
          {error}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "verifying"}
          className="group inline-flex items-center gap-2 bg-amber-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "verifying" ? "Verifying…" : "Send Message"}
          <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
