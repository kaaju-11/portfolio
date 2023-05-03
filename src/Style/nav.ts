import styled from "styled-components";

export const Unorderli = styled.ul`
  text-decoration: none;
  display: flex;
  justify-content: center;
  gap: 40px;
`;
export const Listitems = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: gray;
  opacity: 0.8;
  transition: 5s ease;
  margin-top: 10px;
  gap: 0;

  &:hover {
    opacity: 2;

    a {
      opacity: 2;
      border-bottom: 1px solid gray;
    }
  }

  a {
    text-decoration: none;
    color: gray;
    border-bottom: 1px solid transparent;
    transition: 3s ease;
  }
`;
export const Header = styled.div`
  height: 10vh;
  background-color: transparent;
  z-index: 5;
`;
// export const Unorderli = styled.ul`

// `
// export const Unorderli = styled.ul`

// `
// export const Unorderli = styled.ul`

// `
// export const Unorderli = styled.ul`

// `
