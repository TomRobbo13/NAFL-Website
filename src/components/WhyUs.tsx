import { LayersIcon, ShieldIcon, UsersIcon, ClockIcon } from "./icons";

const cards = [
  {
    Icon: LayersIcon,
    title: "Specialist contractor",
    body: "Leading specialists in computer and raised flooring, handling everything from speculative offices to data & I.T. centres.",
  },
  {
    Icon: ShieldIcon,
    title: "Tate backed",
    body: "As an approved Tate agent and contracting partner, we have the support of the world leader in access flooring.",
  },
  {
    Icon: UsersIcon,
    title: "Qualified installers",
    body: "Fully trained, CSCS-certified installers ready for technically intricate, noise- or time-sensitive projects.",
  },
  {
    Icon: ClockIcon,
    title: "Quick-start ready",
    body: "A large number of panels held in stock plus flexible, out-of-hours and 24/7 working when your schedule demands it.",
  },
];

export default function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow">Why Northern Access Floors</span>
          <h2>Unrivalled service &amp; expertise</h2>
          <p>
            From initial enquiry through to project completion, we deliver work
            to the highest possible industry standard — meeting both PSA
            performance specification and BS EN 12825.
          </p>
        </div>
        <div className="why-grid">
          {cards.map(({ Icon, title, body }) => (
            <div className="stat-card reveal" key={title}>
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
