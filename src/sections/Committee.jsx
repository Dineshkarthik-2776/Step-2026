import { useState } from 'react';
import { committeeData } from '../data/data';

function Committee() {
  const [activeTab, setActiveTab] = useState(committeeData.committees[0].id);

  return (
    <section id="program" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="wow fadeInUp col-md-12 col-sm-12" data-wow-delay="0.6s">
            <div className="section-title">
              <h2>Committee</h2>
            </div>
          </div>

          <div className="wow fadeInUp col-md-12 col-sm-12" data-wow-delay="0.9s">
            <ul className="nav nav-tabs" role="tablist">
              {committeeData.committees.map((c) => (
                <li
                  key={c.id}
                  className={c.id === activeTab ? 'active' : ''}
                  onClick={() => setActiveTab(c.id)}
                >
                  <a href={`#${c.id}`} aria-controls={c.id} role="tab">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="tab-content">
              {committeeData.committees.map((committee) => (
                <div
                  key={committee.id}
                  id={committee.id}
                  className={`tab-pane ${committee.id === activeTab ? 'active' : ''}`}
                  role="tabpanel"
                >
                  <div className="row">
                    {committee.sections
                      ? committee.sections.flatMap((section) =>
                          section.members.map((member, i) => (
                            <div key={i} className="col-lg-6 col-md-12 mb-3">
                              <div className="committee-member largest">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                              </div>
                            </div>
                          ))
                        )
                      : committee.members &&
                        committee.members.map((member, idx) => (
                          <div key={idx} className="col-lg-6 col-md-12 mb-3">
                            <div className="committee-member largest">
                              <h3 className="member-name">{member.name}</h3>
                              <p className="member-role">{member.role}</p>
                            </div>
                          </div>
                        ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Committee;
