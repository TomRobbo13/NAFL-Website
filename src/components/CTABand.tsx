export default function CTABand() {
  return (
    <div className="cta-band">
      <div className="wrap reveal">
        <div>
          <h2>Ready to start your project?</h2>
          <p>
            Tell us what you need and our experienced team will get straight back
            to you with advice and a quote.
          </p>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="#contact" className="btn btn-dark">
            Request a Quote
          </a>
          <a href="tel:01482483950" className="btn btn-ghost">
            Call 01482 483950
          </a>
        </div>
      </div>
    </div>
  );
}
