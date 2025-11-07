function ImportantDates() {
  const dates = [
    {
      icon: "fa-book",
      date: "December 18, 2025",
      description: "Paper Submission Deadline"
    },
    {
      icon: "fa-check-circle",
      date: "December 23, 2025",
      description: "Paper Acceptance Notification"
    },
    {
      icon: "fa-flag",
      date: "December 29, 2025",
      description: "Submission of Final Paper"
    }
  ];

  return (
    <section id="detail" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Save the Dates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {dates.map((item, index) => (
            <div 
              key={index}
              className="text-center space-y-4 transform hover:scale-105 transition-transform duration-300"
            >
              <i className={`fas ${item.icon} text-4xl text-blue-600`}></i>
              <h3 className="text-xl font-semibold text-gray-900">{item.date}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          Conference Date <br />
          <span className="text-blue-600">5th to 7th January, 2026</span>
        </h2>
      </div>
    </section>
  );
}

export default ImportantDates;