"use server";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const WEB3FORMS_ACCESS_KEY =
  process.env.WEB3FORMS_ACCESS_KEY ?? "57ca29f0-f079-4dad-937a-4e736a70580a";

export async function submitEnquiry(
  _prevState: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  // honeypot: bots fill hidden fields, humans never see this one
  if (formData.get("botcheck")) {
    return { status: "success" };
  }

  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: "New visit request — Little Britain website",
    from_name: "Little Britain Website",
    name: formData.get("name"),
    phone: formData.get("phone"),
    child_age: formData.get("child_age"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.success) {
      return { status: "success" };
    }
    return {
      status: "error",
      message: "Something went wrong. Please call us instead.",
    };
  } catch {
    return {
      status: "error",
      message: "Network error. Please call us instead.",
    };
  }
}
