import { Container } from "./styles.js";
import { Header } from "../../components/Header/index.jsx";
import { Button } from "../../components/Button/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />
      <Button title={"Voltar"} />
    </Container>
  );
}
