import styled from "styled-components";

export const WrapperContainer = styled.div`
  margin-top: 150px;
  padding: 0px 50px;
  background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,10,241,0.6895133053221288) 22%, rgba(119,0,255,0.6446953781512605) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  border:none;
  transition: 3s ease-in-out;
  height:40vh;
`;
export const Container = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Heading = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: white;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-bottom: 2px dotted white;
  margin-top:0;

`;
export const GridContainer = styled.div`
  display: flex;
  gap: 70px;
  padding: 50px 0 50px 0;
`;
export const GridItem = styled.div`
  border: 5px solid #d9e0ec;
  padding: 10px;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  margin: 30px 15px 30px 0;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation: anime 1.5s ease infinite;
    font-weight: 0;

    @keyframes anime {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-10px);
      }
    }
  }
`;
export const SkilName = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:0px;
`;
// export const SocialIcon = styled.div`
//   font-size: 15px;
// `;
// export const RightContainer = styled.div`
//   max-width: 450px;
// `;
// export const Image = styled.div`
//   font-size: 15px;
// `;
