import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  description,
  as = "h2",
  className,
}: {
  kicker: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  const Heading = as;

  return (
    <Reveal className={cn("mx-auto mb-11 max-w-xl text-center", className)}>
      <span className="mb-2 block font-heading text-base font-bold text-red">
        {kicker}
      </span>
      <Heading className="mb-3 text-[clamp(1.9rem,3.6vw,2.6rem)] text-ink">
        {title}
      </Heading>
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
