function Contact() {
  return (
    <>
      {/* Registration Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">REGISTER HERE</h3>
              <div className="flex flex-col items-start space-y-6">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdzPu5keRE5DGIDAowO-Y7wum9IY0lIOwMcw7p_ofpvJA0FjQ/viewform?usp=header" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Pre-Registration & Paper Submission
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section id="contact_1" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Address for Communication
            </h2>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-3 text-gray-700">
                <h3>Coordinator, ICSEES - 2026,</h3>
                <h3>IT Department,</h3>
                <h3>Sri Venkateswara College of Engineering,</h3>
                <h3>Pennalur, Sriperumbudur - 602117</h3>
                <h3>Phone No: 044-27152000, Extn-251,264</h3>
                <h3>Cell No: 9840956105,917010965461</h3>
                <h3>
                  E-mail:{' '}
                  <a 
                    href="mailto:icsees@svce.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    icsees@svce.ac.in
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;