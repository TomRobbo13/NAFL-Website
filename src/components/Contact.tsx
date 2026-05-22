import { PhoneIcon, MailIcon, PinDotIcon, CalendarIcon } from "./icons";
import QuoteForm from "./QuoteForm";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <span className="eyebrow">Get in touch</span>
            <h2>Request a free quote</h2>
            <p className="intro">
              Fill in the form and we&apos;ll get back to you, or reach us
              directly using the details below. From initial enquiry to
              completion, we&apos;re on hand to help.
            </p>

            <div className="ci-item">
              <div className="ico">
                <PhoneIcon />
              </div>
              <div>
                <div className="lbl">Telephone</div>
                <a className="val" href="tel:01482483950">
                  01482 483950
                </a>
              </div>
            </div>
            <div className="ci-item">
              <div className="ico">
                <MailIcon />
              </div>
              <div>
                <div className="lbl">Email</div>
                <a className="val" href="mailto:info@nafl.co.uk">
                  info@nafl.co.uk
                </a>
              </div>
            </div>
            <div className="ci-item">
              <div className="ico">
                <PinDotIcon />
              </div>
              <div>
                <div className="lbl">Address</div>
                <address>
                  Northern Access Floors Ltd
                  <br />
                  Unit 5a, Marfleet Environmental Technology Park,
                  <br />
                  Westgate Way, Hull HU9 5LW
                </address>
              </div>
            </div>
            <div className="ci-item">
              <div className="ico">
                <CalendarIcon />
              </div>
              <div>
                <div className="lbl">Fax</div>
                <div className="val" style={{ fontWeight: 600 }}>
                  01482 483951
                </div>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
