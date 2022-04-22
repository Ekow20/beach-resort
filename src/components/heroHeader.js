import React from "react";

const HeroHeader = ({ heroClass, children, title, subtitle }) => {
  return (
    <header className={heroClass}>
      <div className="banner">
        <h1>{title}</h1>
        <div></div>
        <p>{subtitle}</p>
        {children}
      </div>
    </header>
  );
};

export default HeroHeader;

HeroHeader.defaultProps = {
  heroClass: "defaultHero",
};
