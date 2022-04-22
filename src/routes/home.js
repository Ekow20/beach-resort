import React from "react";
import HeroHeader from "../components/heroHeader";
import { Link } from "react-router-dom";
import Services from "../components/services";
import FeaturedRooms from "../components/featuredRooms";

const Home = () => {
  return (
    <>
      <HeroHeader
        title="Luxirious rooms"
        subtitle="deluxe rooms starting at $299"
      >
        <Link to="/rooms" className="btn-primary">
          Our Rooms
        </Link>
      </HeroHeader>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
