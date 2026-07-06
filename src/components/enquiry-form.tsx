"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
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
import { site } from "@/lib/site-config";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";

const initialState: EnquiryState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="h-auto w-full rounded-full bg-red py-3.5 font-heading text-base font-semibold text-white hover:bg-red-deep disabled:opacity-70"
    >
      {pending ? "Sending…" : "Request a visit"}
    </Button>
  );
}

export function EnquiryForm() {
  const [state, formAction] = useActionState(submitEnquiry, initialState);

  if (state.status === "success") {
    return (
      <div className="py-4.5 text-center">
        <CheckCircle2 className="mx-auto mb-3 size-14 text-sky" />
        <h3 className="mb-1.5 text-[1.4rem] text-ink">Thank you!</h3>
        <p className="text-ink-soft">
          We&apos;ve received your request and will call you back shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] opacity-0" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="text-left">
          <Label htmlFor="name" className="mb-1.5 block font-extrabold text-ink">
            Your name
          </Label>
          <Input id="name" name="name" placeholder="Parent's name" required />
        </div>
        <div className="text-left">
          <Label htmlFor="phone" className="mb-1.5 block font-extrabold text-ink">
            Phone number
          </Label>
          <Input id="phone" name="phone" type="tel" placeholder="+998 ..." required />
        </div>
      </div>

      <div className="text-left">
        <Label htmlFor="child_age" className="mb-1.5 block font-extrabold text-ink">
          Child&apos;s age
        </Label>
        <Select name="child_age" required>
          <SelectTrigger id="child_age" className="w-full">
            <SelectValue placeholder="Select age" />
          </SelectTrigger>
          <SelectContent>
            {["2 years", "3 years", "4 years", "5 years", "6 years"].map(
              (age) => (
                <SelectItem key={age} value={age}>
                  {age}
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
      </div>

      <div className="text-left">
        <Label htmlFor="message" className="mb-1.5 block font-extrabold text-ink">
          Message (optional)
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Anything you'd like us to know, or a good time to call"
          className="min-h-24"
        />
      </div>

      <SubmitButton />

      {state.status === "error" && (
        <p className="text-center text-sm font-semibold text-red">
          {state.message}
        </p>
      )}

      <p className="text-center text-[0.82rem] text-ink-soft">
        Or call us directly at <strong>{site.phone}</strong> — we&apos;d love
        to hear from you.
      </p>
    </form>
  );
}
