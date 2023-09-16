import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Noteitem } from "../../components/Noteitem";
import { Section } from "../../components/Section";
import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título"></Input>
          <Textarea placeholder="Observações" />

          <Section title="Links Úteis">
            <Noteitem value="https://rocketseat.com.br" />
            <Noteitem placeholder="Novo Link" $isnew="true" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <Noteitem value="React" />
              <Noteitem placeholder="Nova tag" $isnew="true" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
