import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../styles/home.css";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import FeaturedToursListAdmin from "./../components/Featured-Tour/FeaturedToursListAdmin";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ================== Featured tour section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <div className="d-flex justify-content-between">
                <h2 className="featured__tour-title">Tour Management</h2>
                <div className="d-flex gap-5">
                  <Link
                    to="/create-tours"
                    className="btn d-flex align-item newsletter__btn"
                  >
                    Create Tour
                  </Link>

                  <Link
                    to="/chart"
                    className="btn d-flex align-item newsletter__btn"
                  >
                    Payments
                  </Link>
                </div>
              </div>
            </Col>
            <FeaturedToursListAdmin />
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Admin;
