import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="logo-chip">
              <Image
                src="/logo.jpg"
                alt="Northern Access Floors Ltd"
                width={2242}
                height={624}
                style={{ height: 38, width: "auto" }}
              />
            </span>
            <p>
              Leading specialists in new and existing raised access flooring
              across Northern England and the Midlands. Approved Tate agent with
              over 20 years&apos; experience.
            </p>
          </div>
          <div className="foot-col">
            <h4>Explore</h4>
            <a href="#what">Raised Access Flooring</a>
            <a href="#why">Why Choose Us</a>
            <a href="#services">Services</a>
            <a href="#comms">Data Centres</a>
            <a href="#contact">Request a Quote</a>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <a href="tel:01482483950">Tel: 01482 483950</a>
            <p>Fax: 01482 483951</p>
            <a href="mailto:info@nafl.co.uk">info@nafl.co.uk</a>
            <p>
              Unit 5a, Marfleet Environmental
              <br />
              Technology Park, Westgate Way,
              <br />
              Hull HU9 5LW
            </p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            © {year} Northern Access Floors Ltd. All rights reserved.
          </span>
          <span>Approved Tate Access Floors Agent</span>
        </div>
      </div>
    </footer>
  );
}
