import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  const { handleChange, filterStates } = useContext(RoomContext);
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = filterStates;

  let types = getUnique(rooms, "type");
  types = ["all", ...types]; //adding type "all"

  let capacities = getUnique(rooms, "capacity");

  return (
    <section className="filter-container">
      <Title title="Serach rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* ..................................................... */}
        <div className="form-group">
          <label htmlFor="capacity">Guests </label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {capacities.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* ..................................................... */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            name="price"
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            id="price"
            className="form-control"
          />
        </div>
        {/* ..................................................... */}
        <div className="form-group">
          <label htmlFor="size">room size </label>
          <div className="size-inputs">
            <input
              name="minSize"
              type="number"
              value={minSize}
              onChange={handleChange}
              id="size"
              className="size-input"
            />
            <input
              name="maxSize"
              type="number"
              value={maxSize}
              onChange={handleChange}
              id="size"
              className="size-input"
            />
          </div>
        </div>
        {/* ..................................................... */}

        <div className="form-group">
          <div className="single-extra">
            <input
              name="breakfast"
              type="checkbox"
              checked={breakfast}
              onChange={handleChange}
              id="breakfast"
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              name="pets"
              type="checkbox"
              checked={pets}
              onChange={handleChange}
              id="pets"
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
