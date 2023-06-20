import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getAllPayment } from "../redux/actions/payment.tsx";
import PaymentsList from "./../components/Layout/PaymentsList.tsx";
import { moneyFormatter } from "../shared/GlobalFunction.tsx";

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataTour = {
  labels: [
    "Hồ Chí Minh",
    "Sapa",
    "Nha Trang",
    "Vũng Tàu",
    "Cần Thơ",
    "Đà Nẵng",
  ],
  datasets: [
    {
      label: "Tour Top",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const dataCustomer = {
  labels: [
    "Hồ Chí Minh",
    "Sapa",
    "Nha Trang",
    "Vũng Tàu",
    "Cần Thơ",
    "Đà Nẵng",
  ],
  datasets: [
    {
      label: "Customer",
      data: [200, 300, 500, 200, 150, 210],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const ChartPage = () => {
  const dispatch = useDispatch();
  const { payments } = useSelector((state) => state.payment);
  let totalIncome = 0;
  const format = moneyFormatter();
  payments.map((payment) => {
    totalIncome += payment.amount;
  });

  console.log(payments);
  useEffect(() => {
    dispatch(getAllPayment());
  }, []);
  return (
    <>
      <div className="mt-5 container">
        <PaymentsList payments={payments}></PaymentsList>
      </div>
      <section>
        <Container>
          <Row className="d-flex">
            <div className="d-flex gap-5">
              {/* cart */}
              <div className="flex-1">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Total Income
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {format.format(totalIncome * 1000)}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* cart */}
              <div className="flex-1">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Earnings (Monthly)
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {format.format(totalIncome * 1000)}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* cart */}
              <div className="flex-1">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Total Amount Of Transactions
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800 text-center">
                          {payments.length}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Successful Transaction Rate
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800 text-center">
                          {(100).toFixed(0) + "%"}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="d-flex">
            <Col lg="3"></Col>
            <Col lg="3">
              <Pie data={dataTour} />
              <p className="text-center mt-4">Tour Thinh Hành</p>
            </Col>
            <Col lg="3">
              <Pie data={dataCustomer} />
              <p className="text-center mt-4">Số lượng du khach</p>
            </Col>
            <Col lg="3"></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ChartPage;
