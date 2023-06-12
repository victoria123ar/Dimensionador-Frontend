import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 100px 250px;
  background: #f5f5f5;
  @media (max-width: 1560px) {
    padding: 50px 100px;
  }
  @media (max-width: 1420px) {
    height: 100%;
  }
  @media (max-width: 605px) {
    padding: 50px 50px;
  }
  @media (max-width: 555px) {
    padding: 50px 20px;
  }
`;

const Titulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 40px;
    text-align: center;
  }
  margin-bottom: 20px;
  @media (max-width: 420px) {
    width: 250px;
    h1 {
      font-size: 26px;
    }
  }
`;

const Options = styled.div`
  display: flex;
  @media (max-width: 1240px) {
    flex-direction: column;
  }
  @media (max-width: 420px) {
    width: 250px;
  }
`;

const Values = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  justify-content: center;
  @media (max-width: 555px) {
    width: 350px;
    justify-content: start;
  }
  @media (max-width: 420px) {
    width: 250px;
  }
`;

const ContainerNames = styled.div`
  width: 350px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  box-sizing: border-box;
  h3 {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  @media (max-width: 555px) {
    width: 120px;
  }
`;

const ContainerInputs = styled.div`
  width: 205px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  box-sizing: border-box;
  h3 {
    height: 30px;
    font-size: 14px;
  }
  input {
    width: 180px;
    height: 30px;
    font-size: 14px;
    font-weight: 400;
    color: black;
    border: 1px solid black;
    border-radius: 8px;
    padding: 15px;
    cursor: pointer;
  }
  input[disabled] {
    cursor: auto;
  }
  @media (max-width: 420px) {
    input {
      width: 100px;
    }
  }
`;

const ContainerUnits = styled.div`
  width: 100px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
  h3 {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const Middleware = styled.div`
  margin-left: 100px;
  margin-top: 80px;
  font-size: 14px;
  font-weight: 400;
  select {
    font-size: 14px;
    font-weight: 400;
    color: black;
    border: 1px solid black;
    border-radius: 8px;
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
  }

  @media (max-width: 1410px) {
    margin-left: 20px;
  }
  @media (max-width: 1240px) {
    margin-left: 0px;
    margin-top: 20px;
  }
`;

const TypeTaps = styled.div`
  width: 400px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Temperatures = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 555px) {
    width: 350px;
  }
  @media (max-width: 420px) {
    width: 250px;
  }
`;

const ContainerInletTemperature = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 14px;
  }
  input {
    width: 160px;
    height: 30px;
    font-size: 14px;
    font-weight: 400;
    color: black;
    border: 1px solid black;
    border-radius: 8px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 15px;
    cursor: pointer;
  }
  @media (max-width: 420px) {
    input {
      width: 100px;
    }
  }
`;

const ContainerOutletTemperature = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 14px;
  }
  input {
    width: 160px;
    height: 30px;
    font-size: 14px;
    font-weight: 400;
    color: black;
    border: 1px solid black;
    border-radius: 8px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 15px;
    cursor: pointer;
  }
  @media (max-width: 420px) {
    input {
      width: 100px;
    }
  }
`;

const TypeFase = styled.div`
  width: 400px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
`;

const CalculationType = styled.div`
  width: 400px;
  display: flex;

  input {
    font-size: 14px;
    font-weight: 400;
    color: black;
    padding: 15px;
    cursor: pointer;
    margin-bottom: 6px;
  }
  label {
    font-size: 14px;
    font-weight: 400;
    color: black;
    padding: 15px;
  }
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const Inputs = styled.div``;

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 15px;
  margin-left: 40px;
  cursor: pointer;
  background: #a0a0a0;
  border: none;
  border-radius: 10px;
  :hover {
    background: #202020;
    p {
      color: #fff;
    }
  }
  p {
    font-size: 16px;
    font-weight: 700;
    color: black;
    text-align: center;
  }
  @media (max-width: 420px) {
    margin-left: 0px;
  }
`;

const Components = styled.div`
  display: flex;
  margin-left: 100px;
  margin-top: 100px;
  @media (max-width: 1410px) {
    margin-left: 20px;
  }
  @media (max-width: 1240px) {
    margin-left: 0px;
    margin-top: 20px;
  }
`;

const ComponentsName = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 10px;
    text-align: center;
    font-size: 14px;
  }
  select {
    margin-bottom: 5px;
  }
`;

const Composition = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  p {
    margin-bottom: 10px;
    text-align: center;
    font-size: 14px;
  }
  input {
    margin-bottom: 5px;
    width: 100px;
    height: 19px;
    padding: 5px;
  }
  placeholder {
    padding: 5px;
  }
`;
export {
  Container,
  Titulo,
  Options,
  Values,
  ContainerNames,
  ContainerInputs,
  ContainerUnits,
  Middleware,
  TypeTaps,
  Temperatures,
  ContainerInletTemperature,
  ContainerOutletTemperature,
  TypeFase,
  CalculationType,
  Inputs,
  Button,
  Components,
  ComponentsName,
  Composition,
};
