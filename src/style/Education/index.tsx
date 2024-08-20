import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap:60px;
  padding: 50px 120px;
  position: relative;
`;
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;
export const IconWrap = styled.div`
width: 100%;
max-width: 100px;
display: flex;
justify-content: center;
align-items: center;
     svg{
          width: 55px;
          height: 55px;
          backface-visibility: visible !important;
          animation: flip 2.4s ease infinite;
          color:#7d64b0;
@keyframes flip {
     0% {
          transform: perspective(500px) rotateY(0);
          animation-timing-function: ease-in-out;
          
     }
     40% {
          transform: perspective(500px) translateZ(150px) rotateY(170deg);
          animation-timing-function: ease-in-out;
          color:#8650f5;
     }
     50% {
          transform: perspective(500px) translateZ(150px) rotateY(190deg) scale(1);
          animation-timing-function: ease-in-out;
     
     }
     80% {
          transform: perspective(500px) rotateY(360deg) scale(.95);
          animation-timing-function: ease-in-out;
       
     }
     100% {
          transform: perspective(500px) scale(1);
          animation-timing-function: ease-in-out;
     }
}
     }
`

export const Box = styled.div`
  width: 100%;
  border: none;
  text-align: left;
  padding: 30px;
  display: flex;
  gap:10px;
  border: 1px solid rgb(150, 79, 221);
  max-width: 634px;
  box-shadow: lightgray 0px 0px 10px;
  animation: fadeInAndMoveRight1 1.5s ease-out;

  /* &:hover{
     box-shadow: lightgray 0px 0px 10px;
  } */
  @keyframes fadeInAndMoveRight1 {
    0% {
      opacity: 0;
      transform: translateX(-150px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

`;
export const BoxWrapper = styled(Box)`
max-width: unset;
border: none;
  display: flex;
  justify-content: end;
  box-shadow: unset;
  animation: fadeInAndMoveRight2 1.5s ease-out;

  /* &:hover{
     box-shadow: unset;
  } */
@keyframes fadeInAndMoveRight2 {
   0% {
     opacity: 0;
     transform: translateX(150px);
   }
   100% {
     opacity: 1;
     transform: translateX(0);
   }
 }
`;

export const SecondEduWrapper = styled.div`
 width: 100%;
 max-width: 681px;
 border: 1px solid #964fdd;
 padding: 30px;
 box-shadow: lightgray 0px 0px 10px;
 display: flex;
  gap:10px;

 /* &:hover{
     box-shadow: lightgray 0px 0px 10px;
  } */
`;
export const DateWrapper = styled.div`
  font-size: 14px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  line-height: 30px;
  color: #ffffffb3;
`;

export const Degree = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #fff;
`;
export const AboutDegree = styled.div`
  color: #ffffffb3;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  font-family: Poppins, sans-serif;
`;
export const CarDivider = styled.div`
    position: absolute;
    min-height: 284px;
    border-left: 3px dashed #964fdd;
    border-bottom: 3px dashed #964fdd;
    width: 40%;
    top: 51%;
    left: 18%;
`
export const CarTraveller = styled.div`
  position: absolute;
    top: 78%;
    left: 270px;
    font-size: 26px;
      animation: fadeInAndMoveRight1 3.5s ease-out;

  @keyframes fadeInAndMoveRight1 {
    0% {
      opacity: 0;
      transform: translateX(-150px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
