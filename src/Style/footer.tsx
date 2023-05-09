import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 300px;
  /* padding: 0px 50px; */
  /* background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,10,241,0.6895133053221288) 22%, rgba(119,0,255,0.6446953781512605) 100%); */
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  height:25vh;
`
export const ChildContainer = styled.div`
     display: flex;
     flex-direction:column;
  justify-content: center;
  align-items: center;
  gap:10px 0;
`
export const Heading = styled.div`
margin-top: 20px;
color: black;

`
export const Para = styled.div`
width: 600px;
text-align:center;
margin-top:12px;

`

export const SocialSec = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
`;
export const AnkerTag = styled.a`
  width: 25px;
  height: 25px;
  background: transparent;
  border: 2px solid gray;
  border-radius: 50%;
  font-size: 18px;
  color: gray;
  text-decoration: none;
  margin: 10px 15px 0 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: gray;
    color: white;
    box-shadow: 0 0 20px  gray;
  }
`;
export const SocialIcon = styled.div`
  font-size: 15px;
`;
export const CvContainer = styled.div`
    /* width:100%; */

`
// export const FooterContainer = styled.div`

// `