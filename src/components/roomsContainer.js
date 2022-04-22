import React, { useContext } from "react";
import RoomsFilter from "./roomsFilter";
import RoomsList from "./roomsList";
import Loading from "./loading";
import { RoomContext } from "../context";

const RoomsContainer = () => {
  const { loading, sortedRooms, rooms } = useContext(RoomContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList sortedRooms={sortedRooms} />
    </>
  );
};

export default RoomsContainer;
