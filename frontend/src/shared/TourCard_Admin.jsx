import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import "./tour-card.css";
import calculateAvgRating from "../utils/AvgRating";
import { server } from "./server.tsx";
import { useDispatch } from "react-redux";
import { deleteTour, getAllTour, updateTour } from "../redux/actions/tour.tsx";

const TourCard_Admin = ({ tour }) => {
  const { id, title, photo, price, city, featured, reviews, address } = tour;
  const dispatch = useDispatch();
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const handleDelte = () => {
    dispatch(deleteTour(id));
    window.location.reload();
  };

  const handleUpdate = (tour) => {
    dispatch(updateTour(tour.id));
    window.location.reload();
  };

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={`${server}/${photo}`} alt="" />
          {featured && <span>Featured</span>}
        </div>
      </Card>
      <CardBody>
        <div className="card__top d-flex align-items-center justify-content-between">
          <span className="tour__location d-flex align-items-center gap-1">
            <i className="ri-map-pin-line"></i> {city} - {address}
          </span>
          <span className="tour__rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i>{" "}
            {avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? "Not rated" : <span>({reviews.length})</span>}
          </span>
        </div>

        <h5 className="tour__title">
          <Link to={`/tours/${id}`}>{title}</Link>
        </h5>
        <div className="card__bottom d-flex align-items-center justify-content-between">
          <h5 className="w-50">
            ${price} <span>/ Per person</span>
          </h5>
          <div className="d-flex flex-wrap justify-content-between w-50 gap-3">
            <button
              style={{ width: "60px" }}
              className="btn booking__btn edit__btn"
            >
              <Link to={handleUpdate}>Edit</Link>
            </button>
            <button
              style={{ width: "60px" }}
              className="btn booking__btn details__btn"
            >
              <Link to={`/tours/${id}`}>Detail</Link>
            </button>
            <button
              style={{ width: "60px" }}
              className="btn booking__btn edit__btn"
            >
              <Link onClick={handleDelte}>Delete</Link>
            </button>
          </div>
        </div>
      </CardBody>
    </div>
  );
};

export default TourCard_Admin;
