import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authApi";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { Container, Page, Form, Button, Cadastro } from "./style";
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useContext(UserContext);  
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userData = await login(email, password);
      setUserData(userData);
      toast("Login realizado com sucesso!");
      navigate("/home");
    } catch (err) {
      toast.error("Não foi possível fazer o login!");
    }
  }

  return (
    <Container>
      <Page>
        <Form onSubmit={handleSubmit}>
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>
            <p>Entrar</p>
          </Button>
        </Form>
        <Cadastro>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#404040" }}
          >
            <p>Faça seu cadastro!</p>
          </Link>
        </Cadastro>
      </Page>
    </Container>
  );
}
