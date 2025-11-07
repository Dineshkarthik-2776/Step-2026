import SustainableImage from '../images/Sustainable solution.png';

function Overview() {
  return (
    <section id="overview" className="overview-section">
      <div className="container">
        <div className="overview-grid">
          
          {/* Text Content */}
          <div className="overview-text">
            <h2>Sustainable and Efficient Energy Solutions</h2>
            <p>
              The International Conference on Sustainable and Efficient Energy Solutions brings together 
              industry experts, academicians, and researchers to share innovative ideas in sustainable energy 
              and efficiency. It aims to foster collaboration between industry and academia for the development 
              of practical, eco-friendly energy solutions. The conference also contributes to improving academic 
              curricula and teaching quality, promoting research and innovation in the fields of clean energy, 
              energy management, and environmental sustainability.
            </p>
          </div>

          {/* Image Section */}
          <div className="overview-image">
            <img
              src={SustainableImage}
              alt="Sustainable and Efficient Energy Solutions"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Overview;
