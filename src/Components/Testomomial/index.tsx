// import React, { useEffect, useState } from "react";
// import { Carousel } from "antd";
// import { BackwardOutlined, ForwardOutlined } from "@ant-design/icons";
// import {
//   OpenButton,
//   CaroselContainer,
//   WCaroselContainer,
// } from "style/Testomonial";
// import { FaPenAlt } from "react-icons/fa";
// import { Heading } from "style/Skill";
// import { Container } from "style/Home";
// import { ValueObject } from "interfaces";
// import TestomonialModal from "Components/Modal";

// const SampleNextArrow = (props: {
//   className: any;
//   style: any;
//   onClick: any;
// }) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         color: "black",
//         fontSize: "15px",
//         lineHeight: "1.5715",
//       }}
//       onClick={onClick}
//     >
//       <ForwardOutlined />
//     </div>
//   );
// };

// const SamplePrevArrow = (props: {
//   className: any;
//   style: any;
//   onClick: any;
// }) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         color: "black",
//         fontSize: "15px",
//         lineHeight: "1.5715",
//       }}
//       onClick={onClick}
//     >
//       <BackwardOutlined />
//     </div>
//   );
// };
// const settings = {
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 1500,
//   nextArrow: (
//     <SampleNextArrow
//       className={undefined}
//       style={undefined}
//       onClick={undefined}
//     />
//   ),
//   prevArrow: (
//     <SamplePrevArrow
//       className={undefined}
//       style={undefined}
//       onClick={undefined}
//     />
//   ),
// };

// const contentStyle: React.CSSProperties = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#6600cc",
// };

// interface IProps {
//   addModalTest: (testo: ValueObject) => void;
// }
// const Testomonial: React.FC<IProps> = ({ addModalTest }) => {
//   const [isProductHistoryModalVisible, setIsProductHistoryModalVisible] =
//     useState(false);

//   const openModal = () => {
//     setIsProductHistoryModalVisible(true);
//   };

//   const closeModal = () => {
//     setIsProductHistoryModalVisible(false);
//   };
//   const disableScrolling = () => {
//     const x = window.scrollX;
//     const y = window.scrollY;
//     window.onscroll = () => {
//       window.scrollTo(x, y);
//     };
//   };
//   const enableScrolling = () => {
//     window.onscroll = () => {
//       return false;
//     };
//   };

//   useEffect(() => {
//     if (isProductHistoryModalVisible) disableScrolling();
//     else enableScrolling();
//   }, [isProductHistoryModalVisible]);

//   return (
//     <Container style={{ flexDirection: "column", marginBottom: "100px" }}>
//       <Heading style={{ color: "#6600cc", borderBottom: "2px dotted #6600cc" }}>
//         Testimonial
//       </Heading>
//       <WCaroselContainer>
//         <CaroselContainer>
//           <Carousel arrows {...settings}>
//             <div>
//               <h3 style={contentStyle}>1</h3>
//             </div>
//             <div>
//               <h3 style={contentStyle}>2</h3>
//             </div>
//             <div>
//               <h3 style={contentStyle}>3</h3>
//             </div>
//             <div>
//               <h3 style={contentStyle}>4</h3>
//             </div>
//           </Carousel>
//         </CaroselContainer>
//       </WCaroselContainer>
//       <OpenButton onClick={openModal}>
//         <FaPenAlt />
//       </OpenButton>
//       {isProductHistoryModalVisible && (
//         <TestomonialModal closeModal={closeModal} />
//       )}
//     </Container>
//   );
// };

// export default Testomonial;

import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { ForwardOutlined, BackwardOutlined } from "@ant-design/icons";
import { OpenButton, CaroselContainer, WCaroselContainer, FeedBackParagrap } from "style/Testomonial";
import { FaPenAlt } from "react-icons/fa";
import { Heading } from "style/Skill";
import { Container } from "style/Home";
import TestomonialModal from "Components/Modal";
import { RootState } from "store";
import { useDispatch, useSelector } from "react-redux";
import { addTestimonial } from "store/testimonialSlice";
import NextArrow from "assets/svg/NextArrow";
import PreviousArrow from "assets/svg/PreviousArrow";

const SampleNextArrow = (props: { className: string; style: React.CSSProperties; onClick: () => void }) => (
  <div className={props.className} style={{ ...props.style, color: "black" }} onClick={props.onClick}>
    <NextArrow />
  </div>
);

const SamplePrevArrow = (props: { className: string; style: React.CSSProperties; onClick: () => void }) => (
  <div className={props.className} style={{ ...props.style, color: "black" }} onClick={props.onClick}>
    <PreviousArrow />
  </div>
);

const carouselSettings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  nextArrow: <SampleNextArrow className="" style={{}} onClick={() => {}} />,
  prevArrow: <SamplePrevArrow className="" style={{}} onClick={() => {}} />,
};

const contentStyle: React.CSSProperties = {
  height: "186px",
  color: "#fff",
  textAlign: "center",
};

const Testomonial: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const dispatch = useDispatch();
  const testimonials = useSelector((state: RootState) => state.testimonial.testimonials);
  
  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleAddTestimonial = (testimonial: { username: string; message: string }) => {
    const newTestimonial = {
      id: Date.now().toString(), 
      ...testimonial,
    };
    dispatch(addTestimonial(newTestimonial)); 
    setIsModalVisible(false); 
  };
  
  const disableScrolling = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  };
  const enableScrolling = () => {
    window.onscroll = () => {
      return false;
    };
  };

  useEffect(() => {
    if (isModalVisible) disableScrolling();
    else enableScrolling();
  }, [isModalVisible]);
  return (
    <Container className="testomonial-class">
      <Heading style={{ color: "#6600cc", borderBottom: "2px dotted #6600cc" }}>Testimonial</Heading>
      <WCaroselContainer>
        <CaroselContainer>
          <Carousel arrows {...carouselSettings}>
            {testimonials.length === 0 ? (
              <div>
                <FeedBackParagrap style={contentStyle}>No Testimonials Yet</FeedBackParagrap>
              </div>
            ) : (
              testimonials.map((testimonial, index) => (
                <div key={index} >
                  <div >
                  <FeedBackParagrap style={contentStyle}>User: {testimonial.username} <span>Message: {testimonial.message}</span> </FeedBackParagrap>
                  </div>
                 
                </div>
              ))
            )}
          </Carousel>
        </CaroselContainer>
      </WCaroselContainer>
      <OpenButton onClick={openModal}>
        <FaPenAlt />
      </OpenButton>
      {isModalVisible && <TestomonialModal closeModal={closeModal} addTestimonial={handleAddTestimonial} />}
    </Container>
  );
};

export default Testomonial;
