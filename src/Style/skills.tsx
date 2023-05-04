import styled from "styled-components";

export const WrapperContainer = styled.div`
     margin-top: 150px;
     padding: 70px 10% 0;
     background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 22%, #6600cc 100%);
`;
export const Container = styled.div`
  max-width: 450px;
`;
export const Heading = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: white;
  letter-spacing: 2px;
`;
export const GridContainer = styled.div`
  display:grid;
  grid-template-columns: auto auto auto;
  padding:10px;
`;
export const GridItem = styled.div`
  border:5px solid #d9e0ec;
  padding:10px;
  text-align:center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  margin: 30px 15px 30px 0;
  font-size: 35px;
  display:flex;
  justify-content: center;
  align-items:center;
     
     svg{
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
// export const Image = styled.div`
//   font-size: 15px;
// `;
// export const SocialIcon = styled.div`
//   font-size: 15px;
// `;
// export const RightContainer = styled.div`
//   max-width: 450px;
// `;
// export const Image = styled.div`
//   font-size: 15px;
// `;