import styled from "styled-components";

const Books = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  font-family: "Spartan", sans-serif;
`;

const BookItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1.5em;
  padding: 2.5em;
  border-radius: 5px !important;
  -webkit-box-shadow: -2px 2px 53px -34px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: -2px 2px 53px -34px rgba(0, 0, 0, 0.44);
  box-shadow: -2px 2px 53px -34px rgba(0, 0, 0, 0.44);
  &:hover {
    -webkit-box-shadow: -2px 2px 53px -23px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: -2px 2px 53px -23px rgba(0, 0, 0, 0.45);
    box-shadow: -2px 2px 53px -23px rgba(0, 0, 0, 0.45);
    transition: 0.3s;
  }
`;
const Actions = styled.div`
  display: flex;
`;
const Header = styled.h2`
  text-align: center;
  margin: 20px 0;
`;

const AddBook = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export { Books, BookItem, Actions, Header, AddBook };
