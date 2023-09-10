import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie a sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <a href="#"> Volte para o login </a>
      </Form>
    </Container>
  );
}
