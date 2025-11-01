import { researchDomains } from '../data/data';

function ResearchDomains() {
  return (
    <section id="video" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="wow fadeInUp col-md-6 col-sm-10" data-wow-delay="0.9s">
            <img src="www.svce.ac.in/images/Books.svg" alt="Overview" />
          </div>

          <div className="wow fadeInUp col-md-6 col-sm-10" data-wow-delay="1.3s">
            <h2>CALL FOR PAPERS</h2>
            <h3 className="tanush">Authors are invited to submit research papers in topics related to the theme of the conference. </h3>
          </div>
        </div>

        <div className="PS">
          {researchDomains.researchDomains.map((domain, idx) => (
            <div key={idx} className="domain-block">
              <h2 className="domain-title">{domain.title}</h2>
              <div className="subtopics-container">
                {domain.subtopics.map((sub, sidx) => (
                  <div key={sidx} className="subtopic">
                    <h3>{sub.name}</h3>
                    <ul className="subtopic-list">
                      {sub.items.map((item, iidx) => (
                        <li key={iidx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchDomains;