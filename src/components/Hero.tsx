import Image from "next/image";
import { ArrowRightIcon, PhoneIcon, CheckIcon } from "./icons";

export default function Hero() {
  return (
    <section className="hero" id="top" style={{ padding: 0 }}>
      <div className="wrap">
        <div className="hero-copy reveal">
          <span className="eyebrow">Raised Access Flooring Specialists</span>
          <p className="lead">
            Leading specialists in new and existing raised access flooring across
            Northern England and the Midlands — backed by over 20 years of
            industry experience and the Tate product portfolio.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Request a Free Quote
              <ArrowRightIcon />
            </a>
            <a href="tel:01482483950" className="btn btn-ghost">
              <PhoneIcon />
              01482 483950
            </a>
          </div>
          <div className="hero-trust">
            <div className="ht">
              <b>20+</b>
              <span>Years&apos; experience</span>
            </div>
            <div className="ht">
              <b>Tate</b>
              <span>Approved agent</span>
            </div>
            <div className="ht">
              <b>CSCS</b>
              <span>Certified installers</span>
            </div>
            <div className="ht">
              <b>24/7</b>
              <span>Out-of-hours service</span>
            </div>
          </div>
        </div>
        <div className="floor-card reveal">
          <h3>Built for what goes underneath</h3>
          <p className="sub">
            Load-bearing panels on adjustable pedestals — fast access to every
            service.
          </p>
          <div className="stack">
            <div className="panel p3" />
            <div className="panel p2" />
            <div className="panel p1" />
          </div>
          <div className="floor-feat">
            <div className="ff">
              <CheckIcon /> Power, data, voice &amp; air conditioning
            </div>
            <div className="ff">
              <CheckIcon /> Removable panels for quick access
            </div>
            <div className="ff">
              <CheckIcon /> Anti-static vinyl, carpet or laminate finish
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
