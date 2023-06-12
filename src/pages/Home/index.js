import {
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
} from "./style";
import {
  getNames,
  specificMassAndViscosity,
} from "../../services/componentsApi";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
export default function Home() {
  const [names, setNames] = useState([]);
  const [inletPressure, setInletPressure] = useState("");
  const [ddp, setDdp] = useState("");
  const [flow, setFlow] = useState("");
  const [orificeDiameter, setOrificeDiameter] = useState("");
  const [pipeDiameter, setPipeDiameter] = useState("");
  const [l1, setL1] = useState("");
  const [l2, setL2] = useState("");
  const [beta, setBeta] = useState("");
  const [inletTemperature, setInletTemperature] = useState("");
  const [outletTemperature, setOutletTemperature] = useState("");
  const [typeFase, setTypeFase] = useState("Líquido");
  const [typeTaps, setTypeTaps] = useState("Flange");
  const [component1, setComponent1] = useState("Acetona");
  const [component2, setComponent2] = useState("Acetona");
  const [component3, setComponent3] = useState("Acetona");
  const [component4, setComponent4] = useState("Acetona");
  const [component5, setComponent5] = useState("Acetona");
  const [composition1, setComposition1] = useState("0");
  const [composition2, setComposition2] = useState("0");
  const [composition3, setComposition3] = useState("0");
  const [composition4, setComposition4] = useState("0");
  const [composition5, setComposition5] = useState("0");
  const [calculationType, setCalculationType] = useState("orifice");

  useEffect(() => {
    getNames()
      .then((res) => {
        const names = res;
        setNames(names);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const validateFields = () => {
    if (!calculationType) {
      toast("Selecione um tipo de cálculo.");
      return false;
    }
  
    if (!typeTaps) {
      toast("Selecione um tipo de tomada.");
      return false;
    }
  
    if (!typeFase) {
      toast("Selecione um tipo de fase.");
      return false;
    }
  
    if (!component1) {
      toast("Selecione pelo menos um componente.");
      return false;
    }
  
    if (calculationType !== "ddp" && !inletPressure) {
      toast("Preencha o campo Pressão de entrada na placa (P1).");
      return false;
    }
  
    if (calculationType === "ddp" && !ddp) {
      toast("Preencha o campo Diferença de pressão (ΔP).");
      return false;
    }
  
    if (calculationType !== "flow" && !flow) {
      toast("Preencha o campo Vazão mássica (Qm).");
      return false;
    }
  
    if (!pipeDiameter) {
      toast("Preencha os campos Diâmetro do orifício (d) e Diâmetro da tubulação (D).");
      return false;
    }
  
    if (typeTaps === "Outros" && (!l1 || !l2)) {
      toast("Preencha os campos Distância à montante da tomada (l1) e Distância à jusante da tomada (l’2).");
      return false;
    }
  
    if (calculationType !== "orifice" && (!beta || !orificeDiameter)) {
      toast("Preencha o campo Razão entre d e D (β).");
      return false;
    }
  
    if (!inletTemperature || !outletTemperature) {
      toast("Preencha os campos Temperatura de entrada e Temperatura de saída.");
      return false;
    }
  
    const compositionSum = Number(composition1) + Number(composition2) + Number(composition3) + Number(composition4) + Number(composition5);
    if (compositionSum !== 1) {
      toast("A soma dos valores de composição deve ser igual a 1.");
      return false;
    }
  
    return true;
  };
  

  const handleSubmit = async () => {
    const inputData = {
      inletPressure,
      ddp,
      flow,
      orificeDiameter,
      pipeDiameter,
      l1,
      l2,
      beta,
      inletTemperature,
      outletTemperature,
      typeFase,
      typeTaps,
      component1,
      component2,
      component3,
      component4,
      component5,
      composition1,
      composition2,
      composition3,
      composition4,
      composition5,
      calculationType,
    };

    try {
      const response = await specificMassAndViscosity(inputData);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCalculation = () => {
    if (validateFields()) {
      handleSubmit();
    }
  };

  console.log(inletPressure, )

  return (
    <Container>
      <Titulo>
        <h1>Calculadora: Placa de Orifício</h1>
      </Titulo>
      <Options>
        <Values>
          <ContainerNames>
            <h3>Pressão de entrada na placa (P1)</h3>
            <h3>Diferença de pressão (ΔP)</h3>
            <h3>Vazão mássica (Qm)</h3>
            <h3>Diâmetro do orifício(d)</h3>
            <h3>Diâmetro da tubulação(D)</h3>
            <h3>Distância à montante da tomada (l1)</h3>
            <h3>Distância à jusante da tomada (l’2)</h3>
            <h3>Razão entre d e D (β)</h3>
          </ContainerNames>
          <ContainerInputs>
            <input
              name="P1"
              placeholder="Pressão em atm"
              value={inletPressure}
              onChange={(e) => setInletPressure(e.target.value)}
            />
            <input
              name="dP"
              placeholder={calculationType === "ddp" ? "" : "Pressão em inH2O"}
              disabled={calculationType === "ddp"}
              value={ddp}
              onChange={(e) => setDdp(e.target.value)}
            />
            <input
              name="Q"
              placeholder={
                calculationType === "flow" ? "" : "Vazão do fluído em Kg/h"
              }
              disabled={calculationType === "flow"}
              value={flow}
              onChange={(e) => setFlow(e.target.value)}
            />
            <input
              name="d"
              placeholder={calculationType === "orifice" ? "" : "Diâmetro em m"}
              disabled={calculationType === "orifice"}
              value={orificeDiameter}
              onChange={(e) => setOrificeDiameter(e.target.value)}
            />
            <input
              name="D"
              placeholder="Diâmetro em m"
              value={pipeDiameter}
              onChange={(e) => setPipeDiameter(e.target.value)}
            />
            <input
              name="l1"
              placeholder={typeTaps === "Outros" ? "Distância em m" : ""}
              disabled={typeTaps !== "Outros"}
              value={l1}
              onChange={(e) => setL1(e.target.value)}
            />
            <input
              name="l2"
              placeholder={typeTaps === "Outros" ? "Distância em m" : ""}
              disabled={typeTaps !== "Outros"}
              value={l2}
              onChange={(e) => setL2(e.target.value)}
            />
            <input
              name="beta"
              disabled={calculationType === "orifice"}
              value={beta}
              onChange={(e) => setBeta(e.target.value)}
            />
          </ContainerInputs>
          <ContainerUnits>
            <h3>atm</h3>
            <h3>inH2O</h3>
            <h3>Kg/h</h3>
            <h3>m</h3>
            <h3>m</h3>
            <h3>m</h3>
            <h3>m</h3>
          </ContainerUnits>
        </Values>
        <Middleware>
          <TypeTaps>
            <label for="taps-select">Tipo de tomada</label>
            <select
              id="taps-select"
              value={typeTaps}
              onChange={(e) => setTypeTaps(e.target.value)}
            >
              <option>Flange</option>
              <option>Canto</option>
              <option>Radius taps</option>
              <option>Pipe taps</option>
              <option>Outros</option>
            </select>
          </TypeTaps>
          <Temperatures>
            <ContainerInletTemperature>
              <h3>Temperatura de entrada</h3>
              <input
                placeholder="Temperatura em C°"
                value={inletTemperature}
                onChange={(e) => setInletTemperature(e.target.value)}
              />
              <h3>C°</h3>
            </ContainerInletTemperature>
            <ContainerOutletTemperature>
              <h3>Temperatura de saída</h3>
              <input
                placeholder="Temperatura em C°"
                value={outletTemperature}
                onChange={(e) => setOutletTemperature(e.target.value)}
              />
              <h3>C°</h3>
            </ContainerOutletTemperature>
          </Temperatures>
          <TypeFase>
            <label for="fase">Fase</label>
            <select
              id="fase"
              value={typeFase}
              onChange={(e) => setTypeFase(e.target.value)}
            >
              <option>Líquido</option>
              <option>Vapor</option>
            </select>
          </TypeFase>
          <CalculationType>
            <Inputs>
              {" "}
              <p>Tipo de cálculo</p>
              <br />
              <input
                type="radio"
                id="orifice"
                name="fav_language"
                value="orifice"
                onChange={(e) => setCalculationType(e.target.value)}
              />
              <label for="orifice">Orifício</label>
              <br />
              <input
                type="radio"
                id="flow"
                name="fav_language"
                value="flow"
                onChange={(e) => setCalculationType(e.target.value)}
              />
              <label for="flow">Vazão</label>
              <br />
              <input
                type="radio"
                id="ddp"
                name="fav_language"
                value="ddp"
                onChange={(e) => setCalculationType(e.target.value)}
              />
              <label for="ddp">Diferença de pressão</label>
            </Inputs>
            <Button onClick={handleCalculation}>
              <p>Calcular</p>
            </Button>
          </CalculationType>
        </Middleware>
        <Components>
          <ComponentsName>
            <label for="components">Componentes</label>
            <select
              id="components"
              value={component1}
              onChange={(e) => setComponent1(e.target.value)}
            >
              {names && names.length > 0 ? (
                names.map((component) => (
                  <option key={component.name} value={component.name}>
                    {component.name}
                  </option>
                ))
              ) : (
                <option value="">Carregando...</option>
              )}
            </select>
            <select
              id="components"
              value={component2}
              onChange={(e) => setComponent2(e.target.value)}
            >
              {names && names.length > 0 ? (
                names.map((component) => (
                  <option key={component.name} value={component.name}>
                    {component.name}
                  </option>
                ))
              ) : (
                <option value="">Carregando...</option>
              )}
            </select>
            <select
              id="components"
              value={component3}
              onChange={(e) => setComponent3(e.target.value)}
            >
              {names && names.length > 0 ? (
                names.map((component) => (
                  <option key={component.name} value={component.name}>
                    {component.name}
                  </option>
                ))
              ) : (
                <option value="">Carregando...</option>
              )}
            </select>
            <select
              id="components"
              value={component4}
              onChange={(e) => setComponent4(e.target.value)}
            >
              {names && names.length > 0 ? (
                names.map((component) => (
                  <option key={component.name} value={component.name}>
                    {component.name}
                  </option>
                ))
              ) : (
                <option value="">Carregando...</option>
              )}
            </select>
            <select
              id="components"
              value={component5}
              onChange={(e) => setComponent5(e.target.value)}
            >
              {names && names.length > 0 ? (
                names.map((component) => (
                  <option key={component.name} value={component.name}>
                    {component.name}
                  </option>
                ))
              ) : (
                <option value="">Carregando...</option>
              )}
            </select>
          </ComponentsName>
          <Composition>
            <p>Composição</p>
            <input
              placeholder="De 0 a 1"
              value={composition1}
              onChange={(e) => setComposition1(e.target.value)}
            />
            <input
              placeholder="De 0 a 1"
              value={composition2}
              onChange={(e) => setComposition2(e.target.value)}
            />
            <input
              placeholder="De 0 a 1"
              value={composition3}
              onChange={(e) => setComposition3(e.target.value)}
            />
            <input
              placeholder="De 0 a 1"
              value={composition4}
              onChange={(e) => setComposition4(e.target.value)}
            />
            <input
              placeholder="De 0 a 1"
              value={composition5}
              onChange={(e) => setComposition5(e.target.value)}
            />
          </Composition>
        </Components>
      </Options>
    </Container>
  );
}
