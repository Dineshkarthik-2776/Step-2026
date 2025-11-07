import { useState } from 'react';

function Registration() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = async (text, fieldName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (e) {
      console.error('Copy failed:', e);
    }
  };

  const faqs = [
    {
      question: "What are the registration fees?",
      answer: (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>National</th>
                <th>International</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Academicians</td>
                <td>Rs.1000/-</td>
                <td>30 USD</td>
              </tr>
              <tr>
                <td>Research Scholars & Students</td>
                <td>Rs.1000/-</td>
                <td>30 USD</td>
              </tr>
              <tr>
                <td>Industry / R&D</td>
                <td>Rs.2000/-</td>
                <td>75 USD</td>
              </tr>
              <tr>
                <td>Co-Author</td>
                <td>Rs.250/-</td>
                <td>15 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      question: "How can I make the payment?",
      answer: (
        <div>
          <p><strong>Bank Details:</strong></p>
          <ul className="list-unstyled">
            <li>
              <strong>Beneficiary:</strong> THE PRINCIPAL, SRI VENKATESWARA COLLEGE OF ENGINEERING
            </li>
            <li>
              <strong>Account Number:</strong>
              <div className="copy-wrapper" style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                <code style={{ padding: '4px 8px', background: '#f8f9fa', borderRadius: '4px' }}>467302331</code>
                <button 
                  className="btn btn-sm btn-default" 
                  style={{ marginLeft: 8 }} 
                  onClick={() => handleCopy('467302331', 'account')}
                >
                  <i className={`fa ${copiedField === 'account' ? 'fa-check' : 'fa-copy'}`}></i>
                  {copiedField === 'account' ? ' Copied!' : ' Copy'}
                </button>
              </div>
            </li>
            <li><strong>Bank Name:</strong> INDIAN BANK</li>
            <li><strong>Branch:</strong> SRIPERUMBUDUR</li>
            <li>
              <strong>IFSC Code:</strong>
              <div className="copy-wrapper" style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                <code style={{ padding: '4px 8px', background: '#f8f9fa', borderRadius: '4px' }}>IDIB000S080</code>
                <button 
                  className="btn btn-sm btn-default" 
                  style={{ marginLeft: 8 }} 
                  onClick={() => handleCopy('IDIB000S080', 'ifsc')}
                >
                  <i className={`fa ${copiedField === 'ifsc' ? 'fa-check' : 'fa-copy'}`}></i>
                  {copiedField === 'ifsc' ? ' Copied!' : ' Copy'}
                </button>
              </div>
            </li>
            <li><strong>MICR Code:</strong> 600019112</li>
          </ul>
          <div className="alert alert-info">
            <i className="fa fa-info-circle"></i> Please save your transaction receipt for registration verification.
          </div>
        </div>
      )
    },
    {
      question: "How can I contact the organizers?",
      answer: (
        <div>
          <p><strong>Mailing Address:</strong></p>
          <address>
            Coordinator, ICSEES - 2026,<br />
            IT Department,<br />
            Sri Venkateswara College of Engineering,<br />
            Pennalur, Sriperumbudur - 602117
          </address>
          
          <p><strong>Contact Information:</strong></p>
          <ul className="list-unstyled">
            <li><i className="fa fa-phone"></i> 044-27152000, Extn-251,264</li>
            <li><i className="fa fa-mobile"></i> 9840956105, 917010965461</li>
            <li><i className="fa fa-envelope"></i> <a href="mailto:icsees@svce.ac.in">icsees@svce.ac.in</a></li>
          </ul>
        </div>
      )
    },
    {
      question: "What should I do after making the payment?",
      answer: (
        <div>
          <ol>
            <li>Save the payment transaction receipt/screenshot</li>
            <li>Keep your registration details ready</li>
            <li>Contact the organizers via email with your payment proof</li>
            <li>Wait for confirmation from the organizing committee</li>
          </ol>
          <div className="alert alert-warning">
            <i className="fa fa-exclamation-triangle"></i> Registration is complete only after payment verification.
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="faq" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="wow bounceIn col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 text-center">
            <div className="section-title">
              <h2>Registration Information</h2>
              <p>Frequently Asked Questions about Registration and Payment</p>
            </div>
          </div>

          <div className="wow fadeInUp col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10" data-wow-delay="0.9s">
            <div className="panel-group" id="registration-faq">
              {faqs.map((faq, index) => (
                <div key={index} className="panel panel-default">
                  <div 
                    className="panel-heading" 
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h4 className="panel-title">
                      <i className={`fa ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`} style={{ marginRight: '10px' }}></i>
                      {faq.question}
                    </h4>
                  </div>
                  <div 
                    className={`panel-collapse ${activeIndex === index ? 'in' : 'collapse'}`}
                  >
                    <div className="panel-body">
                      {faq.answer}
                    </div>
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

export default Registration;