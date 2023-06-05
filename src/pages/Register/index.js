import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/userApi";
import { Link } from "react-router-dom";
import { Container, Page, Form, Button, Cadastro } from "./style";
import { toast } from 'react-toastify';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  console.log(name, email, password);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("As senhas devem ser iguais!");
    } else {
      try {
        await register(name, email, password);
        console.log(name, email, password);
        toast("Inscrito com sucesso! Por favor, faça login.");
        navigate("/");
      } catch (error) {
        console.log(error);
        toast.error("Não foi possível fazer o cadastro!");
      }
    }
  }

  return (
    <Container>
      <Page>
        <Form onSubmit={handleSubmit}>
          <input
            placeholder="Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
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
          <input
            placeholder="Confirme sua senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button>
            <p>Cadastrar</p>
          </Button>
        </Form>
        <Cadastro>
          <Link to="/" style={{ textDecoration: "none", color: "#404040" }}>
            <p>Já tem cadastro? Faça seu login!</p>
          </Link>
        </Cadastro>
      </Page>
    </Container>
  );
}
