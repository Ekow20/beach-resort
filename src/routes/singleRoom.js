import React, { useContext, useState } from "react";
import HeroHeader from "../components/heroHeader";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";

const SingleRoom = (props) => {
  const [slug, setSlug] = useState(props.match.params.slug);
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(slug);
  console.log(room);

  if (!room) {
    return (
      <div className="error">
        <h4>Room not found</h4>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    images,
    size,
    price,
    extras,
    breakfast,
    pets,
  } = room;
  return (
    <>
      <HeroHeader heroClass="roomsHero" title={`${name} room`}>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </HeroHeader>
      <section className="single-room">
        <div className="single-room-images">
          {images.map((item) => (
            <img src={item} key={item} alt={name} />
          ))}
        </div>

        <div className="single-room-info">
          <article className="desc">
            <h3>description</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size} SQFT </h6>
            <h6>
              capacity{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}{" "}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast available"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item) => (
            <li key={item}> -{item} </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
