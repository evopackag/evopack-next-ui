import {
  forwardRef,
  MutableRefObject,
  useContext,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";

import Text, { TextColour, TextSize } from "../base/Text/Text";
import Button, { ButtonTypes } from "../base/Buttons/Button";
import Checkbox from "../base/Checkbox/Checkbox";
import Heading, {
  HeadingColour,
  HeadingSizes,
  HeadingWeights,
} from "../base/Heading/Heading";
import VerticalSpacing, { SpacingSizes } from "../base/Spacing/VerticalSpacing";
import TextInput from "../base/TextInput/TextInput";
import styles from "./ContactForm.module.css";
import GlobalContext from "../../contexts/GlobalContext";
import { globalContactFormContent } from "../../constants/globalConstants";
import TextArea from "../base/TextArea/TextArea";

// interface IProps {
//   data: any;
//   ref: any;
// }

const ContactForm = forwardRef((data?: any, ref?: any) => {
  const { language } = useContext(GlobalContext);
  const contactFormRef = useRef();
  const router = useRouter();

  const {
    heading,
    firstNamePlaceholder,
    lastNamePlaceholder,
    emailPlaceholder,
    phonePlaceholder,
    messagePlaceholder,
    GDPRCheckboxText,
    buttonText,
  } = globalContactFormContent[language];

  const [message, setMessage] = useState<any>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
    // GDPRAccepted: false,
    // error: null,
  });
  const [error, setError] = useState<any>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [mailSent, setMailSent] = useState<boolean>(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(contactFormRef.current);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(message).toString(),
      });
      // router.push("/thankyou");
      setSent(true);
    } catch (error) {}
  }

  return (
    <div>
      <VerticalSpacing size={SpacingSizes.xs16px} />
      <div
        className={`${styles.contactFormContainer} row center-xs justify-center`}
        id="contactForm"
      >
        <section className={`${styles.contactForm} width-100`}>
          {sent ? (
            <>
              <Heading
                level="h2"
                size={HeadingSizes.md}
                theme="dark"
                weight={HeadingWeights.semibold}
                colour={HeadingColour.offWhite}
                accent={false}
              >
                Thank you for your getting in touch
              </Heading>
              <VerticalSpacing size={SpacingSizes.xs16px} />
              <Text color={TextColour.offWhite} theme="dark" size={TextSize.xl}>
                We&apos;ll get back to you as soon as possible.
              </Text>
              <VerticalSpacing size={SpacingSizes.xl40px} />
              <Button
                label="Send another?"
                type={ButtonTypes.secondaryWhite}
                handleClick={() => setSent(false)}
              />
            </>
          ) : (
            <>
              <Heading
                level="h2"
                size={HeadingSizes.xl}
                colour={HeadingColour.offWhite}
                weight={HeadingWeights.semibold}
                theme="dark"
                accent={false}
              >
                {heading}
              </Heading>
              <form
                className="padding-top-8 col"
                method="POST"
                name="ContactForm"
                id="ContactForm"
                ref={ref}
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="ContactForm" />
                <div className={`${styles.xcontactForm__inputs} row`}>
                  {" "}
                  <div
                    className={`${styles.contactForm__details} col-xs-12 col-md-4 margin-right-2`}
                  >
                    <TextInput
                      label={firstNamePlaceholder}
                      icon="person"
                      handleChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                        setMessage({ fname: e.currentTarget.value })
                      }
                      fieldID="name"
                      required
                    />
                    <TextInput
                      label={lastNamePlaceholder}
                      icon="person"
                      handleChange={(e) =>
                        setMessage({ lname: e.currentTarget.value })
                      }
                      fieldID="company"
                    />
                    <TextInput
                      label={emailPlaceholder}
                      icon="mail"
                      handleChange={(e) =>
                        setMessage({ email: e.currentTarget.value })
                      }
                      fieldID="mail"
                      required
                    />
                    <TextInput
                      label={phonePlaceholder}
                      icon="phone"
                      handleChange={(e) =>
                        setMessage({ phone: e.currentTarget.value })
                      }
                      fieldID="phone"
                    />
                  </div>
                  <div
                    className={`${styles.contactForm__message} col-xs-12 col-md-8`}
                  >
                    <TextArea
                      label="Message"
                      fieldID="message"
                      handleChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                        setMessage({ message: e.currentTarget.value })
                      }
                    />
                    {/* <TextInput
                      label={messagePlaceholder}
                      type="textarea"
                      handleChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                        setMessage({ message: e.currentTarget.value })
                      }
                      fieldID="message"
                      required
                    /> */}
                  </div>
                </div>

                <div
                  className={`row-md width-100 col-md-8 padding-top-8 justify-between col-xs`}
                >
                  <Checkbox label={GDPRCheckboxText} inputID="GDPRConsent" />
                  <Button
                    label={buttonText}
                    type={ButtonTypes.secondaryWhite}
                    formFunction="submit"
                  />
                </div>
              </form>
            </>
          )}
        </section>
      </div>
    </div>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
