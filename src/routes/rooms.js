import React from "react";
import HeroHeader from "../components/heroHeader";
import RoomsContainer from "../components/roomsContainer";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <div>
      <HeroHeader heroClass="roomsHero" title="our rooms">
        <Link to="/" className="btn-primary">
          Return home
        </Link>
      </HeroHeader>
      <RoomsContainer />
    </div>
  );
};

export default Rooms;
