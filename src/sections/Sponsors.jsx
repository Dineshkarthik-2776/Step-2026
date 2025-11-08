import CsiLogo from '../images/csi_logo_india.png';

function Sponsors() {
  return (
    <section id="sponsors">
      <div className="sponsors-container">
        <div className="sponsors-content">
          <div className="sponsors-header">
            <h2>Our Sponsors</h2>
          </div>

          <div className="sponsors-logo">
            <img src={CsiLogo} alt="CSI India" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
