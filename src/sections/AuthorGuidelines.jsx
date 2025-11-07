import AuthorImage from '../images/author.jpg';

function AuthorGuidelines() {
  return (
    <section id="author" className="author-section">
      <section id="video" className="parallax-section authorguide">
        <div className="container">
          
          <div className="author-grid">
            
            {/* Left Column: Text */}
            <div className="author-text">
              <h2>AUTHOR GUIDELINES</h2>

              <h4 className="paper-link">
                <a
                  href="/paper-format.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paper Format:
                </a>
              </h4>

              <div className="guidelines">
                <p>• Single column</p>
                <p>• Font : Times New Roman, Size : 12</p>
                <p>• Not exceeding six pages</p>
                <p>• In Electronic PDF format</p>
                <p>
                  • Mail @{' '}
                  <a href="mailto:icsees@svce.ac.in">
                    icsees@svce.ac.in
                  </a>
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="author-image">
              <img
                src={AuthorImage}
                alt="Author Guidelines"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AuthorGuidelines;
