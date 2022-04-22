import React from "react";
import HeroHeader from "../components/heroHeader";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <HeroHeader title="404" subtitle="page not found ">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </HeroHeader>
      Error
    </div>
  );
};

export default Error404;
