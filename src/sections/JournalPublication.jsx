function JournalPublication() {
  return (
    <section id="jp" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            JOURNAL PUBLICATIONS
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <div className="prose max-w-none">
              <h4 className="text-gray-700 leading-relaxed">
                The selected extended papers after peer review will be considered for publication in Anna University listed Annexure journal, Scopus indexed journals, Web of Science & UGC approved Journals. The publication will be considered as per the Journal norms. (Plagiarism policy and Journal Publication charges)
              </h4>

              <h5 className="font-bold mt-4">
                * Publication will be considered as per the Journal norms. (Plagiarism policy and Journal Publication charges)
              </h5>

              <h3 className="mt-6">
                <a 
                  href="./images/List-of-Journals.pdf"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Click the list of Journals
                </a>
              </h3>

              <div className="mt-8">
                <h4 className="text-gray-700">
                  You can download the sample conference paper format here.
                </h4>
                <a  
                  href="./Conference Paper Format.doc" 
                  className="inline-block mt-4 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  DOWNLOAD NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JournalPublication;