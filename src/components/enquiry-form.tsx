"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useLocale, useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { pricingPlans, site } from "@/lib/site-config";
import { submitEnquiry, type EnquiryState } from "@/app/[locale]/contact/actions";

const initialState: EnquiryState = { status: "idle" };
const CHILD_AGES = [2, 3, 4, 5, 6];

function SubmitButton() {
  const { pending } = useFormStatus();
  const t = useTranslations("EnquiryForm");
  return (
    <Button
      type="submit"
      disabled={pending}
      className="h-auto w-full rounded-full bg-red py-3.5 font-heading text-base font-semibold text-white transition-colors duration-200 ease-out hover:bg-red-deep disabled:opacity-70"
    >
      {pending ? t("sending") : t("requestVisit")}
    </Button>
  );
}

export function EnquiryForm({
  initialProgram,
}: {
  initialProgram?: string;
}) {
  const t = useTranslations("EnquiryForm");
  const tPricing = useTranslations("Pricing");
  const locale = useLocale();
  const [state, formAction] = useActionState(submitEnquiry, initialState);

  const notSureYet = t("notSureYet");
  const programOptions = [
    ...pricingPlans.map((plan) => tPricing(`plans.${plan.key}.name`)),
    notSureYet,
  ];

  const errorMessage =
    state.status === "error"
      ? state.message === "network"
        ? t("errorNetwork")
        : t("errorGeneric")
      : undefined;

  if (state.status === "success") {
    return (
      <div className="py-4.5 text-center">
        <CheckCircle2 className="mx-auto mb-3 size-14 text-sky" />
        <h3 className="mb-1.5 text-[1.4rem] text-ink">{t("thankYouTitle")}</h3>
        <p className="text-ink-soft">{t("thankYouBody")}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="locale" value={locale} />
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] opacity-0" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="text-left">
          <Label htmlFor="name" className="mb-1.5 block font-extrabold text-ink">
            {t("yourName")}
          </Label>
          <Input id="name" name="name" placeholder={t("namePlaceholder")} required />
        </div>
        <div className="text-left">
          <Label htmlFor="phone" className="mb-1.5 block font-extrabold text-ink">
            {t("phoneNumber")}
          </Label>
          <Input id="phone" name="phone" type="tel" placeholder={t("phonePlaceholder")} required />
        </div>
      </div>

      <div className="text-left">
        <Label htmlFor="program" className="mb-1.5 block font-extrabold text-ink">
          {t("program")}
        </Label>
        <Select
          name="program"
          required
          defaultValue={initialProgram ?? notSureYet}
        >
          <SelectTrigger id="program" className="w-full">
            <SelectValue placeholder={t("selectProgram")} />
          </SelectTrigger>
          <SelectContent>
            {programOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="text-left">
        <Label htmlFor="child_age" className="mb-1.5 block font-extrabold text-ink">
          {t("childAge")}
        </Label>
        <Select name="child_age" required>
          <SelectTrigger id="child_age" className="w-full">
            <SelectValue placeholder={t("selectAge")} />
          </SelectTrigger>
          <SelectContent>
            {CHILD_AGES.map((age) => (
              <SelectItem key={age} value={t("ageOption", { n: age })}>
                {t("ageOption", { n: age })}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="text-left">
        <Label htmlFor="message" className="mb-1.5 block font-extrabold text-ink">
          {t("message")}
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t("messagePlaceholder")}
          className="min-h-24"
        />
      </div>

      <SubmitButton />

      {errorMessage && (
        <p className="text-center text-sm font-semibold text-red">
          {errorMessage}
        </p>
      )}

      <p className="text-center text-[0.82rem] text-ink-soft">
        {t("callDirectlyPre")} <strong>{site.phone}</strong> {t("callDirectlyPost")}
      </p>
    </form>
  );
}
