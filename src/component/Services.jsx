import services from "../data/Services";

function Services() {
  return (
    <div className="service">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <service.Icon className="service-icon" />

          <div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
