import { ReactNode, useRef } from "react";
import { useRouter } from "next/router";

interface IProps {
  name: string;
  subject: string;
  children: ReactNode;
  className: string;
}

export default function Form({
  name,
  subject,
  children,
  className = "",
}: IProps) {
  const formRef = useRef<any>();
  const router = useRouter();

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData: any = new FormData(formRef.current);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      // router.push("/thankyou");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      method="POST"
      name={name}
      className={className}
      data-netlify="true"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <input type="hidden" name="form-name" value={name} />
      <input type="hidden" name="subject" value={subject} />
      {children}
    </form>
  );
}
