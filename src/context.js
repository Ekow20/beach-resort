import React, { useState, useEffect } from "react";
import items from "./data";

const RoomContext = React.createContext();

const formatData = (items) => {
  const newItems = items.map((item) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image) => image.fields.file.url);

    let room = { ...item.fields, images, id };
    return room;
  });
  return newItems;
};

const ContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStates, setFilterStates] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((item) => item.featured === true);
    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setSortedRooms(rooms);
    setLoading(false);

    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    setFilterStates((prev) => ({
      ...prev,
      price: maxPrice,
      maxPrice,
      maxSize,
    }));
  }, []);

  const getRoom = (slug) => {
    let room = rooms.find((item) => item.slug === slug);
    return room;
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let name = e.target.name;

    setFilterStates({ ...filterStates, [name]: value });
  };

  const filterRooms = () => {
    let {
      type,
      price,
      capacity,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = filterStates;
    let tempRooms = [...rooms];
    //fitler for type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    //filter by capacity
    capacity = parseInt(capacity);
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    //filter by price
    price = parseInt(price);
    tempRooms = tempRooms.filter((room) => room.price <= price);
    // filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    setSortedRooms(tempRooms);
  };

  useEffect(() => {
    filterRooms();
  }, [filterStates]);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        featuredRooms,
        sortedRooms,
        loading,
        getRoom,
        handleChange,
        filterStates,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

const ContextConsumer = RoomContext.Consumer;

export { ContextProvider, ContextConsumer, RoomContext };
