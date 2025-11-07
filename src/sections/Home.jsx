import Brochure from '../assets/ICSEES-2026_Brochure.pdf';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="inner-home">
        
        {/* Top Marquee */}
        <div className="marquee-container">
          <div className="marquee-content">
            <a href={Brochure} target="_blank" rel="noopener noreferrer">
              ICSEES-2026 BROCHURE
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="#jp">
              Journal Publication <sup id="text-red">New</sup>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a
              href="STEP_2021_Inaugural_Invitation_and_Agenda.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inaugural Function Invitation
            </a>
            &nbsp;&nbsp;&nbsp;
          </div>
        </div>

        {/* Main Content */}
        <div className="home-content">
          <h3>DEPARTMENT OF INFORMATION TECHNOLOGY</h3>
          <h3>DEPARTMENT OF ELECTRICAL & ELECTRONICS ENGINEERING</h3>
          <h1>AICTE Sponsored International E-Conference</h1>
          <h2>SUSTAINABLE AND EFFICIENT ENERGY SOLUTIONS</h2>
          <h1>ICSEES-2026</h1>

          <div className="home-buttons">
            <a href="#overview" className="btn">LEARN MORE</a>
            <a href="#contact" className="btn btn-danger">REGISTER NOW</a>
            <a
              href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fwww.svce.ac.in%2Fstep2021%2Fimages%2Fpaper-format.docx&wdOrigin=BROWSELINK"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              PAPER FORMAT
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfc4UXQvTxYntEW3cEbtbVZxTa4sKLmE5d1tPxA68MbtmqI0A/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Register & Payment Proof
            </a>
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="marquee-container">
          <div className="marquee-content bottom-marquee">
            <a
              href="final_Program_Schedule.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Programme Schedule
            </a>
            &nbsp;&nbsp;&nbsp;
            <a
              href="STEP_2021_Valedictory_Invitation_and_Agenda.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Valedictory Function Invitation
            </a>
            &nbsp;&nbsp;&nbsp;
            <a
              href="https://aicte.gov.in/schemes/other-schemes"
              target="_blank"
              rel="noopener noreferrer"
            >
              AICTE SCHEMES
            </a>
            &nbsp;&nbsp;&nbsp;
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
