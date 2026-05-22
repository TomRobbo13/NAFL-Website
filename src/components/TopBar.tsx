import { PhoneIcon, MailIcon } from "./icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="tb-left">
          <a href="tel:01482483950" className="tb-item">
            <PhoneIcon />
            01482 483950
          </a>
          <a href="mailto:info@nafl.co.uk" className="tb-item">
            <MailIcon />
            info@nafl.co.uk
          </a>
          <span className="tb-item fax">Fax: 01482 483951</span>
        </div>
        <div className="tb-badge">
          <span className="dot" />
          Approved Tate Access Floors Agent
        </div>
      </div>
    </div>
  );
}
