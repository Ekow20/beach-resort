import React, { useState } from "react";
import { FaHiking, FaShuttleVan, FaCocktail, FaBeer } from "react-icons/fa";
import Title from "./title";

const initSer = [
  {
    icon: <FaCocktail />,
    title: "free Cocktail",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, veritatis",
  },
  {
    icon: <FaShuttleVan />,
    title: "free shuttles",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, veritatis",
  },
  {
    icon: <FaBeer />,
    title: "Variety of beer ",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, veritatis",
  },
  {
    icon: <FaHiking />,
    title: "Endless hiking",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, veritatis",
  },
];

const Services = () => {
  const [services, setServices] = useState(initSer);
  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((item) => (
          <article key={item.title} className="service">
            <span>{item.icon} </span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
