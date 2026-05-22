const brands = ["Hewetson", "Tate", "System Floors", "Durabella", "Torfloor"];

export default function PartnerBand() {
  return (
    <div className="partner">
      <div className="wrap">
        <span className="lbl">Full Tate portfolio supplied &amp; installed</span>
        <div className="brands">
          {brands.map((b) => (
            <span key={b} className="chip">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
