import React from "react";
import RoomItem from "./roomItem";

const RoomsList = ({ sortedRooms }) => {
  if (sortedRooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>no rooms available for the search filter </h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {sortedRooms.map((item) => (
          <RoomItem key={item.id} room={item} />
        ))}
      </div>
    </section>
  );
};

export default RoomsList;
