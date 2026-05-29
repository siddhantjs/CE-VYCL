import { ContactCalendar } from "./contact/ContactCalendar";
import { ContactForm } from "./contact/ContactForm";
import { ContactIntro } from "./contact/ContactIntro";

export function Contact() {
  return (
    <>
      <ContactCalendar />
      <section
        id="contact"
        className="bg-vycl-cream-muted px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <ContactIntro centered />
          <div className="mx-auto mt-12 max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
