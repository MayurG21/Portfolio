import React from "react";

const Services = ({ items, Heading }) => {
  return (
    <>
      <div className="about_services">
        <Heading title="What I Do?" />
        <div className="about_services_boxs">
          {items.serives.map((item) => {
            return (
              <>
                <div className="card">
                  <div className="icon">
                    <span>{item.title}</span>
                  </div>
                  <div className="text">
                    <h3>{item.title}</h3>
                    <label>{item.text}</label>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
