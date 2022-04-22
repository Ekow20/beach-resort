import React, { useState, useContext } from "react";
import Loading from "./loading";
import Title from "./title";
import RoomItem from "./roomItem";
import { RoomContext } from "../context";

const FeaturedRooms = () => {
  const { loading, featuredRooms } = useContext(RoomContext);

  return (
    <section className="featured-rooms">
      <Title title="Featured Rooms" />
      <div className="featured-rooms-center">
        {loading ? (
          <Loading />
        ) : (
          featuredRooms.map((room) => <RoomItem key={room.id} room={room} />)
        )}
      </div>
    </section>
  );
};

export default FeaturedRooms;
