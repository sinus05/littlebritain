import { Reveal } from "@/components/reveal";

export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-11 max-w-xl text-center">
      <span className="mb-2 block font-heading text-base font-bold text-red">
        {kicker}
      </span>
      <h2 className="mb-3 text-[clamp(1.9rem,3.6vw,2.6rem)] text-ink">
        {title}
      </h2>
      {description && (
        <p className="text-[1.08rem] text-ink-soft">{description}</p>
      )}
    </Reveal>
  );
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-6 ${className ?? ""}`}>
      {children}
    </div>
  );
}
