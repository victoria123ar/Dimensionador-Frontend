import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E0E0E0;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  background-color: #E0E0E0;
  border-radius: 0px;
  padding: 10px;
`;

const Form = styled.form`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    box-sizing: border-box;
    width: 15%;
    height: 45px;
    border: 1px solid #202020;
    border-radius: 8px;
    background-color: #fff;
    padding: 0 18px;
    color: #202020;
    font-size: 22px;
    margin-bottom: 14px;
    @media (max-width: 1315px) {
      width: 80%;
    }
  }
  input::placeholder {
    font-size: 22px;
    color: #202020;
  }
`;

const Button = styled.button`
  width: 15%;
  height: 45px;
  background-color: #202020;
  border: none;
  border-radius: 8px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-left: 10px;
  }
  @media (max-width: 1315px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    height: 45px;
  }
  :hover {
    background-color: #A0A0A0;
    color: #202020;
  }
`;

const Cadastro = styled.button`
  margin-top: 10px;
  width: 15%;
  height: 55px;
  border-radius: 8px;
  background-color: #E0E0E0;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #404040;
  font-size: 20px;
  p {
    margin-left: 10px;
  }
  @media (max-width: 800px) {
    height: 45px;
  }
  @media (max-width: 1315px) {
    width: 80%;
  }
`;

export { Container, Page, Form, Button, Cadastro };