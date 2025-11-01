function AuthorGuidelines() {
  const guidelines = [
    'Single column',
    'Font : Times new Roman, Size : 12',
    'Not exceeding six pages',
    'In Electronic PDF format',
    'Mail @icsees@svce.ac.in'
  ];

  return (
    <section id="author" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">AUTHOR GUIDELINES</h2>
            
            <div className="mb-8">
              <h4 className="text-xl font-medium text-blue-800 mb-4">
                <a 
                  href="./images/paper-format.docx" 
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  Paper Format:
                </a>
              </h4>
              
              <ul className="space-y-3">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    {guideline.includes('@') ? (
                      <span>
                        Mail{' '}
                        <a 
                          href="mailto:icsees@svce.ac.in"
                          className="text-blue-600 hover:underline"
                        >
                          @icsees@svce.ac.in
                        </a>
                      </span>
                    ) : (
                      guideline
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src="/images/author.jpg" 
              alt="Author Guidelines" 
              className="max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthorGuidelines;