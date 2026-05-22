import {
  ConsultIcon,
  CadIcon,
  InstallIcon,
  WrenchIcon,
  ChartIcon,
  StairsIcon,
} from "./icons";

const services = [
  {
    Icon: ConsultIcon,
    title: "Consultancy & survey",
    body: "Expert advice plus full site inspection and survey services to specify the right system for your project.",
  },
  {
    Icon: CadIcon,
    title: "CAD setting-out drawings",
    body: "Production of detailed CAD setting-out drawings so every panel, cut-out and edge is planned before we start.",
  },
  {
    Icon: InstallIcon,
    title: "Supply & installation",
    body: "Supply and installation of all types of new raised access flooring, to PSA spec and BS EN 12825.",
  },
  {
    Icon: WrenchIcon,
    title: "Removal & replacement",
    body: "Removal and/or replacement of existing raised floors, including strengthening works for heavier loads.",
  },
  {
    Icon: ChartIcon,
    title: "Alterations & floor boxes",
    body: "Alterations following wall or partition changes, plus relocation, removal or addition of floor boxes.",
  },
  {
    Icon: StairsIcon,
    title: "Ramps, steps & handrails",
    body: "New ramps, steps and handrails to finish off and provide safe, compliant access to your raised floor.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Our Services</span>
          <h2>A complete raised flooring service</h2>
          <p>
            From consultancy and survey through to installation, alteration and
            strengthening — whatever the project, we can handle it.
          </p>
        </div>
        <div className="svc-grid">
          {services.map(({ Icon, title, body }) => (
            <div className="svc reveal" key={title}>
              <div className="ico">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
