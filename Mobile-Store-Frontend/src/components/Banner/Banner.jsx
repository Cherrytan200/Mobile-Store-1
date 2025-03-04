// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// // changed
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {
//   bannerImgOne,
//   bannerImgTwo,
//   bannerImgThree,
// } from "../../assets/images";
// import Image from "../designLayouts/Image.jsx";

// const Banner = () => {
//   const [dotActive, setDocActive] = useState(0);
//   const settings = {
//     dots: true,
//     infinite: true,
//     spped:500,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     beforeChange: (prev, next) => {
//       setDocActive(next);
//     },
//     appendDots: (dots) => (
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "7%",
//           transform: "translateY(-50%)",
//         }}
//       >
//         <ul style={{ margin: "0px" }}> {dots} </ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <div
//         style={
//           i === dotActive
//             ? {
//                 width: "30px",
//                 color: "#262626",
//                 borderRight: "3px #262626 solid",
//                 padding: "8px 0",
//                 cursor: "pointer",
//               }
//             : {
//                 width: "30px",
//                 color: "transparent",
//                 borderRight: "3px white solid",
//                 padding: "8px 0",
//                 cursor: "pointer",
//               }
//         }
//       >
//         0{i + 1}
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 576,
//         settings: {
//           dots: true,
//           appendDots: (dots) => (
//             <div
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "2%",
//                 transform: "translateY(-50%)",
//               }}
//             >
//               <ul style={{ margin: "0px" }}> {dots} </ul>
//             </div>
//           ),
//           customPaging: (i) => (
//             <div
//               style={
//                 i === dotActive
//                   ? {
//                       width: "25px",
//                       color: "#262626",
//                       borderRight: "3px #262626 solid",
//                       cursor: "pointer",
//                       fontSize: "12px",
//                     }
//                   : {
//                       width: "25px",
//                       color: "transparent",
//                       borderRight: "3px white solid",
//                       cursor: "pointer",
//                       fontSize: "12px",
//                     }
//               }
//             >
//               0{i + 1}
//             </div>
//           ),
//         },
//       },
//     ],
//   };
//   return (
//     <div className="w-full bg-white">
//       <Slider {...settings}>
//         <Link to="/offer">
//           <div>
//             <Image imgSrc={bannerImgOne} />
//           </div>
//         </Link>
//         <Link to="/offer">
//           <div>
//             <Image imgSrc={bannerImgTwo} />
//           </div>
//         </Link>
//         <Link to="/offer">
//           <div>
//             <Image imgSrc={bannerImgThree} />
//           </div>
//         </Link>
//       </Slider>
//     </div>
//   );
// };

// export default Banner;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {
//   banner1,
//   banner2,
//   banner3,
// } from "../../assets/images";
// import Image from "../designLayouts/Image.jsx";

// const Banner = () => {
//   const [dotActive, setDotActive] = useState(0);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     arrows: false,
//     beforeChange: (prev, next) => {
//       setDotActive(next);
//     },
//   };

//   return (
//     <div className="w-full bg-white">
//       <Slider {...settings}>
//         <Link to="/offer">
//           <div>
//             {/* <Image imgSrc={banner1} className={`w-full`}/> */}
//           </div>
//         </Link>
//         <Link to="/offer">
//           <div>
//             <Image imgSrc={banner2} />
//           </div>
//         </Link>
//         <Link to="/offer">
//           <div>
//             {/* <Image imgSrc={banner3} /> */}
//           </div>
//         </Link>
//       </Slider>
//     </div>
//   );
// };

// export default Banner;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  banner1,
  banner2,
  banner3,
} from "../../assets/images";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
  };

  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        <Link to="/offer">
          <div
            className="w-full h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>
        </Link>
        <Link to="/offer">
          <div
            className="w-full h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${banner2})` }}
          ></div>
        </Link>
        <Link to="/offer">
          <div
            className="w-full h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${banner3})` }}
          ></div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;