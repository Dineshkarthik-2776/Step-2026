function AuthorGuidelines() {
  return (
    <section id="author">
        <h2 className="author-title">AUTHOR GUIDELINES</h2>
        <div className="title-underline"></div>
      <div className="author-card">
        {/* Title */}

        {/* Paper Link */}
        <h4 className="paper-link">
          <a
            href="/paper-format.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paper Format
          </a>
        </h4>

        {/* Guidelines */}
        <div className="guidelines-container">
          <ul className="guidelines-list">
            <li>
              <span className="bullet">•</span> Single column
            </li>
            <li>
              <span className="bullet">•</span> Font: Times New Roman, Size: 12
            </li>
            <li>
              <span className="bullet">•</span> Not exceeding six pages
            </li>
            <li>
              <span className="bullet">•</span> In Electronic PDF format
            </li>
            <li>
              <span className="bullet">•</span> Mail @{' '}
              <a href="mailto:icsees@svce.ac.in">icsees@svce.ac.in</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AuthorGuidelines;
