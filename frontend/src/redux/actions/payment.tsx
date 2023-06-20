import axios from "axios";
import { server } from "../../shared/server.tsx";
import { getCookie } from "../../shared/GlobalFunction.tsx";

export const getPaymentUrl =
  (money: any, userId, tourId, userMail) => async (dispatch: any) => {
    try {
      dispatch({
        type: "LoadUserRequest",
      });

      console.log(userMail);

      const token = getCookie("token");
      const config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        withCredentials: true,
        crossDomain: true,
        timeout: 5000,
      };

      const payment = {
        money: money * 1000,
        userId: userId,
        tourId: tourId,
        quantity: 1,
        gmail: userMail,
      };
      const response = await axios
        .post(`${server}/api/payment/create_payment`, payment, config)
        .then((res) => {
          const paymentUrl = res.data;

          window.location.assign(paymentUrl);
        })
        .catch((error) => {
          console.log(error);
        });
      dispatch({
        type: "LoadUserSuccess",
        payload: response,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "LoadUserFail",
        payload: error.response.data.message,
      });
    }
  };

export const getAllPayment = () => async (dispatch: any) => {
  try {
    dispatch({
      type: "getAllPaymentRequest",
    });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
      crossDomain: true,
    };

    const data = await axios
      .get(`${server}/api/payment/get-payment`, config)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch({
      type: "getAllPaymentSuccess",
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: "getAllPaymentFail",
      payload: error.response.data.message,
    });
  }
};
