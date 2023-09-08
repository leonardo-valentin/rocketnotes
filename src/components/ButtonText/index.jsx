import { Container } from "./style";

// eslint-disable-next-line react/prop-types, no-unused-vars
export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container type="button" $isactive={isActive.toString()} {...rest}>
      {title}
    </Container>
  );
}
