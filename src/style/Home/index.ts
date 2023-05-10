import { ITheme } from "interfaces";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  /* background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 22%, rgba(0,212,255,1) 100%); */
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 70px 10% 0;
`;
export const LeftContainer = styled.div`
  max-width: 600px;
`;
export const Proffesion = styled.div`
  font-size: 32px;
  font-weight: 700;

  span {
    color: #6600cc;
  }
  h3 {
    animation: slide 1s ease forwards;
    animation-delay: 0.7s;
  }
`;
export const Paragraph = styled.div`
  font-size: 15px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const SButton = styled.button`
  display:flex;
  align-items: center;
  justify-content:center;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  color: white;
  width: 150px;
  background-color: #6600cc;
  box-shadow: 0 0 10px #6600cc;
  letter-spacing: 1px;
  font-weight: 600;
  border: none;

  svg {
    font-size: 20px;
    margin-left: 4px;
    text-align: center;
    color: white;
    path {
      stroke: white;
      fill: white;
    }

    animation: anime 1.5s ease infinite;

    @keyframes anime {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
  }
`;
export const FButton = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  width: 120px;
  border: none;
  background-color: transparent;
  letter-spacing: 1px;
  font-weight: 600;
  text-align:center;

  &:hover {
    background-color: lightgray;
    box-shadow: 0 0 10px lightgray;
  }

  svg {
    font-size: 20px;
    margin-left: 4px;
    text-align: center;
    animation: fadein 2.5s linear infinite;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
export const SocialSec = styled.div`
  display: inline-flex;
`;
export const AnkerTag = styled.a`
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid #6600cc;
  border-radius: 50%;
  font-size: 20px;
  color: #6600cc;
  text-decoration: none;
  margin: 30px 15px 30px 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #6600cc;
    color: white;
    box-shadow: 0 0 20px #6600cc;
  }
`;
export const SocialIcon = styled.div`
  font-size: 15px;
`;
export const RightContainer = styled.div`
  max-width: 450px;
`;
export const Image = styled.img`
  /* height:450px;
  width:450px; */
   width: 400px;
  height:400px
`;
// export const NameContain = styled.div`
//    font-size:15px;
// `
// export const NameContain = styled.div`
//    font-size:15px;
// `
// export const NameContain = styled.div`
//    font-size:15px;
// `
// export const NameContain = styled.div`
//    font-size:15px;
// `
// export const NameContain = styled.div`
//    font-size:15px;
// `
