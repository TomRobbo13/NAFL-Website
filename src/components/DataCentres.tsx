import { CheckIcon } from "./icons";

const reqs = [
  "Supports heavy racks of computer and telecoms equipment",
  "Conceals masses of cable while allowing easy access",
  "Houses all required M&E services — air conditioning, ducting, cabling",
  "Finished in anti-static vinyl, laminate or carpet",
];

const panelFeatures = [
  "Anti-static vinyl panels held in stock",
  "New installs & full refurbishments",
  "Right floor, right time, right price",
];

export default function DataCentres() {
  return (
    <section className="comms" id="comms">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Data Centres</span>
          <h2>Your data centre is too important to take chances on</h2>
          <p>
            Also known as server, hub or computer rooms, these spaces are the
            convergence point for your data and telecoms cabling — often running
            the entire I.T. infrastructure. They&apos;re critical to the
            successful operation of your business.
          </p>
          <p>
            Whether you want a totally new floor or an existing one refurbished,
            our expert staff will guide you through the options — anti-static
            vinyl, carpet, high-pressure laminate or bare-faced panels.
          </p>
          <ul className="reqs">
            {reqs.map((r) => (
              <li key={r}>
                <CheckIcon /> {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="comms-panel reveal">
          <div className="big">Use the specialists.</div>
          <p className="quote-line">
            We&apos;re often called in to strengthen or replace data centre floors
            installed by non-specialists — work that can mean costly downtime. Get
            it right the first time.
          </p>
          <div className="floor-feat" style={{ marginBottom: 28 }}>
            {panelFeatures.map((f) => (
              <div className="ff" key={f}>
                <CheckIcon /> {f}
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Discuss your data centre
          </a>
        </div>
      </div>
    </section>
  );
}
