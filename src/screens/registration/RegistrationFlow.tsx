import { useState, type ReactNode } from "react";
import { Header, Logo, Button, TextLink, Input, Divider, ListRow, Tag } from "../../components";
import s from "./RegistrationFlow.module.css";

/* Reproduction of the New Registration Flow (Figma cVNEiNf9y2Ga3uORjJpMRW, frames at y=-378).
   Navigable 6-step flow composed ONLY from DS instances; all visual values token-bound.
   Functional: password show/hide, input validation (Continue gating). Stubs: social auth,
   Translate, payment (no-op). */

/* ---- inline 1em/currentColor icons (no external asset dependency) ---- */
const I = (p: { d: string; fill?: boolean }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill={p.fill ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={p.d} />
  </svg>
);
const Globe = () => <I d="M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3C9.5 5.5 9.5 18.5 12 21" />;
const Plane = () => <I d="M2 13l20-7-7 20-3-8-10-5z" />;
const Briefcase = () => <I d="M3 8h18v12H3zM8 8V5a2 2 0 012-2h4a2 2 0 012 2v3" />;
const Sparkle = () => <I d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />;
const Smile = () => <I d="M12 21a9 9 0 100-18 9 9 0 000 18zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />;
const Eye = () => <I d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z M12 15a3 3 0 100-6 3 3 0 000 6z" />;
const EyeOff = () => <I d="M17.9 17.9A10.6 10.6 0 0112 19C5 19 1 12 1 12a18 18 0 015.1-5.9M9.9 4.2A10.6 10.6 0 0112 4c7 0 11 7 11 7a18 18 0 01-2.2 3.2M1 1l22 22" />;
const Apple = () => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 13c0-2 1.6-3 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7s-1.6-.7-2.6-.7c-1.3 0-2.6.8-3.2 2-1.4 2.4-.4 6 1 8 .6 1 1.4 2.1 2.4 2 1-.04 1.3-.6 2.5-.6s1.5.6 2.6.6c1 0 1.7-1 2.3-2 .5-.7.7-1.4.7-1.4s-1.5-.6-1.5-2.4zM14.5 6.2c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9 0 1.8-.5 2.3-1.1z"/></svg>;
const Google = () => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.8 12.2c0-.7-.1-1.3-.2-2H12v3.8h5.5a4.7 4.7 0 01-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.5z"/><path d="M12 22c2.7 0 5-.9 6.6-2.4l-3.3-2.6c-.9.6-2 1-3.3 1-2.6 0-4.7-1.7-5.5-4.1H3.1v2.6A10 10 0 0012 22z"/><path d="M6.5 13.9a6 6 0 010-3.8V7.5H3.1a10 10 0 000 9z"/><path d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 003.1 7.5l3.4 2.6C7.3 7.8 9.4 6.1 12 6.1z"/></svg>;
const Card = () => <I d="M2 6h20v12H2zM2 10h20" />;

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const GOALS = [
  { id: "travel", label: "For travel", icon: <Plane /> },
  { id: "work", label: "For work or study", icon: <Briefcase /> },
  { id: "anime", label: "Anime, games & culture", icon: <Sparkle /> },
  { id: "fun", label: "Just for fun", icon: <Smile /> },
];
const LEVELS = [
  { id: "beginner", label: "Beginner" },
  { id: "elementary", label: "Elementary" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

function Segments({ total, filled }: { total: number; filled: number }) {
  return (
    <div className={s.progress} role="progressbar" aria-valuenow={filled} aria-valuemax={total}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={i < filled ? `${s.seg} ${s.segFilled}` : s.seg} />
      ))}
    </div>
  );
}

type OptionDef = { id: string; label: string; icon?: ReactNode };
function Options({ items, value, onSelect }: { items: OptionDef[]; value: string | null; onSelect: (id: string) => void }) {
  return (
    <div className={s.options}>
      {items.map((o) => (
        <div
          key={o.id}
          className={value === o.id ? `${s.option} ${s.optionSelected}` : s.option}
          onClick={() => onSelect(o.id)}
          role="button"
          tabIndex={0}
        >
          <ListRow type="action" icon={!!o.icon} iconSlot={o.icon} label={o.label} />
        </div>
      ))}
    </div>
  );
}

export function RegistrationFlow() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const next = () => setStep((n) => Math.min(n + 1, 5));
  const back = () => setStep((n) => Math.max(n - 1, 0));

  // 0 Welcome
  if (step === 0) {
    return (
      <div className={`${s.frame} ${s.welcomeGlow}`}>
        <div className={s.body}>
          <div className={s.topbar}>
            <Globe />
            <span className={s.topbarLabel}>Translate</span>
          </div>
          <div className={s.welcomeMain}>
            <Logo state="textActive" />
            <h1 className={s.welcomeTitle}>Learn Japanese with unlimited lessons</h1>
            <span className={s.trialPill}>7-day free trial · $0.00</span>
          </div>
          <div className={s.welcomeFooter}>
            <Button className={s.cta} variant="primary" size="l" label="Start Free Trial" onClick={next} />
            <TextLink size="m" label="Already have an account? Log in" href="#" />
            <TextLink size="s" label="Are you working as a tutor?" href="#" />
          </div>
        </div>
      </div>
    );
  }

  // 1 Goal / 2 Level — shared question layout
  if (step === 1 || step === 2) {
    const isGoal = step === 1;
    const value = isGoal ? goal : level;
    return (
      <div className={s.frame}>
        <div className={s.body}>
          <Segments total={4} filled={isGoal ? 1 : 2} />
          <h1 className={s.stepTitle}>{isGoal ? "Why are you learning Japanese?" : "What's your current Japanese level?"}</h1>
          <Options items={isGoal ? GOALS : LEVELS} value={value} onSelect={isGoal ? setGoal : setLevel} />
          <div className={`${s.navRow} ${isGoal ? s.navRowEnd : ""}`}>
            {!isGoal && <TextLink size="m" label="‹ Back" href="#" onClick={(e) => { e.preventDefault(); back(); }} />}
            <TextLink size="m" label="Next ›" href="#" onClick={(e) => { e.preventDefault(); next(); }} />
          </div>
        </div>
      </div>
    );
  }

  // 3 Email sign up / 4 Email + password — shared
  if (step === 3 || step === 4) {
    const withPw = step === 4;
    const valid = isEmail(email) && (!withPw || password.length > 0);
    return (
      <div className={s.frame}>
        <div className={s.body}>
          <Segments total={4} filled={3} />
          <h1 className={s.signupTitle}>Sign up</h1>
          <div className={s.fields}>
            <Input label helper={false} labelText="Email address" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            {withPw && (
              <Input
                label
                helper={false}
                labelText="Password"
                type={showPw ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                iconArea
                icon={<button type="button" className={s.iconBtn} onClick={() => setShowPw((v) => !v)} aria-label={showPw ? "パスワードを隠す" : "パスワードを表示"}>{showPw ? <EyeOff /> : <Eye />}</button>}
              />
            )}
            {withPw && <TextLink size="s" label="Forget your password?" href="#" />}
          </div>
          <Button className={s.cta} variant="primary" size="l" label="Continue" state={valid ? "default" : "disabled"} onClick={next} />
          <Divider type="withLabel" label="or" />
          <div className={s.social}>
            <Button variant="secondary" size="l" label="Continue with Apple" iconLeft={<Apple />} className={s.cta} />
            <Button variant="secondary" size="l" label="Continue with Google" iconLeft={<Google />} className={s.cta} />
          </div>
          <div className={s.center}>
            <TextLink size="m" label="Already have an account? Log in" href="#" />
          </div>
        </div>
      </div>
    );
  }

  // 5 Trial & Card (final)
  return (
    <div className={s.frame}>
      <Header pageTitle="Free Trial" />
      <div className={s.body}>
        <h1 className={s.signupTitle}>This is the final step!</h1>
        <div className={s.planBlock}>
          <div className={s.planHeader}>
            <span className={s.planName}>Premium Plan</span>
            <Tag color="warning" label="7-day free trial" />
          </div>
          <div className={s.planRow}><span className={s.planRowKey}>today</span><span className={s.planRowVal}>$0.00</span></div>
          <div className={s.planRow}><span className={s.planRowKey}>From Day 7</span><span className={s.planRowVal}>$99.00 / month</span></div>
          <div className={s.planLine} />
          <span className={s.planNote}>Cancel anytime during the free trial — you won't be charged.</span>
        </div>
        <div className={s.fields}>
          <div className={s.cardBrands}><Card /><Card /><Card /></div>
          <Input label helper={false} labelText="Card number" placeholder="1234 5678 9012 3456" inputMode="numeric" />
          <Input label helper={false} labelText="Cardholder's name" placeholder="TARO YAMADA" />
          <div className={s.row2}>
            <Input label helper={false} labelText="Expiry date" placeholder="MM / YY" />
            <Input label helper={false} labelText="Security code" placeholder="CVC" inputMode="numeric" />
          </div>
        </div>
        <span className={s.caption}>You won't be charged unless you continue after the 7-day trial.</span>
        <Button className={s.cta} variant="primary" size="l" label="Start Free Trial · $0.00" onClick={() => setStep(0)} />
        <div className={s.center}>
          <TextLink size="s" label="‹ Back" href="#" onClick={(e) => { e.preventDefault(); back(); }} />
        </div>
      </div>
    </div>
  );
}

export default RegistrationFlow;
