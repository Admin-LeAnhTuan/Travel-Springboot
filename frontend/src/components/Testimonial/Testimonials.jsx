import React from "react";
import Slider from "react-slick";

import avt1 from "../../assets/images/Customers/Crush.jpg";
import avt2 from "../../assets/images/Customers/Avatar.jpg";
import avt3 from "../../assets/images/Customers/HR.jpg";
import avt4 from "../../assets/images/Customers/User2.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlider: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    // slidesToScroll: 1,

    responsive: [
      {
        bearkpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        bearkpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonails py-4 px-3">
        <p>
          Hà Nội, thủ đô của Việt Nam. Trung tâm của nó là Khu phố cổ hỗn loạn,
          nơi những con phố hẹp được sắp xếp đại khái theo ngành nghề buôn bán.
          Có nhiều ngôi chùa nhỏ,chợ Đồng Xuân bán đồ gia dụng và thức ăn đường
          phố.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avt1} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Quỳnh Như</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonails py-4 px-3">
        <p>
          Sa Pa là một thị trấn cấp huyện của tỉnh Lào Cai, vùng Tây Bắc Việt
          Nam. Tính đến năm 2018, thị trấn có dân số 61.498 người. Thị trấn có
          diện tích 677 km². Thị xã lỵ là phường Sa Pa.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avt2} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Thành An</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonails py-4 px-3">
        <p>
          Vũng Tàu là một thành phố cảng và là thủ phủ của tỉnh Bà Rịa-Vũng Tàu,
          Bờ biển đầy cát trải dài và sầm uất, bao gồm Bãi Trước và Bãi Dứa, có
          Núi Nhỏ và Núi Lớn xanh tươi làm nền
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avt3} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Duong Duong</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonails py-4 px-3">
        <p>
          The company itself is a very smart company, adipsic developer. He has
          chosen for us the pleasures that are more severe than those pleasures,
          which are the most worthy pleasures, to endure the distresses of the
          mind. I was born after being released.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avt4} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Nhựt Trần</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
