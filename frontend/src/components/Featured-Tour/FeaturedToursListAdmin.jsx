import React, { useEffect } from "react";
import { Col } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import TourCard_Admin from "../../shared/TourCard_Admin";
import { getAllTour } from "../../redux/actions/tour.tsx";

const FeaturedToursListAdmin = () => {
  const { tours } = useSelector((state) => state.tour);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTour());
  }, []);
  return (
    <>
      {tours.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard_Admin tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedToursListAdmin;
