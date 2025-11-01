function Overview() {
  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Sustainable and Efficient Energy Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The International Conference on Sustainable and Efficient Energy Solutions brings together industry experts, academicians, and researchers to share innovative ideas in sustainable energy and efficiency. It aims to foster collaboration between industry and academia for the development of practical, eco-friendly energy solutions. The conference also contributes to improving academic curricula and teaching quality, promoting research and innovation in the fields of clean energy, energy management, and environmental sustainability.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/Sustainable solution.png" 
              alt="Overview" 
              className="max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;