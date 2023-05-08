import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid #bcc6fc;
`;
export const WebName = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

export const CloseBtn = styled.div`
  svg {
    font-size: 25px;
    cursor: pointer;
  }
`;

export const Para = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 32px;
  padding: 0 24px;
  margin-top: 24px;
`;

export const ColorContainer = styled.div`
  display: flex;
  gap: 9px;
  padding: 0 24px;
`;
export const Box1 = styled.div`
  width: 84px;
  height: 50px;
  background: #8896e1;
  border-radius: 12px;
`;
export const Image = styled.img`
  width: 84px;
  height: 50px;
  border-radius: 12px;
  margin-top: 14px;
`;
export const Form = styled.form`
  margin-top: 28px;
  padding: 0 24px;
`;
export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  padding-bottom:10px;
  color:white;
  width: 200px;
`;

export const Input = styled.input`
  width: 608px;
  height: 24px;
  padding: 10px;
  border-radius: 12px;
  outline: none;
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;

  ::placeholder {
    color: #b9b9b9;
  }
`;

export const Textarea = styled.textarea`
  width: 608px;
  height: 100px;
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  padding: 10px;
  margin-top: 4px;
  margin-bottom: 36px;

  ::placeholder {
    color: #b9b9b9;
    line-height: 24px;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const TextareaWrapper = styled.div`
  /* margin-top: 28px; */
  /* margin-bottom:36px; */
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  /* float: right; */
  padding: 20px;
  height: 44px;
  
`;
export const Button = styled.button`
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #e8e8e8;
  border: none;
  padding: 10px 44px;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 0 20px #6600cc;
`;

export const OpenButton = styled.button`
  width: 50px;
  height: 50px;
  background: transparent;
  border: 2px solid #6600cc;
  border-radius: 50%;
  font-size: 25px;
  color: #6600cc;
  text-decoration: none;
  margin: 30px 15px 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: hithere 1s ease infinite;

  &:hover {
    background-color: #6600cc;
    color: white;
    box-shadow: 0 0 20px #6600cc;
  }

@keyframes hithere {
  40%, 60% { transform: rotate(-20deg); }
  50% { transform: rotate(20deg); }
  70% { transform: rotate(0deg) ; }
}
`;
