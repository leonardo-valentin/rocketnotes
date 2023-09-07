import { Container } from "./style";

// eslint-disable-next-line react/prop-types, no-unused-vars
export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container type="button" isActive={isActive} {...rest}>
      {title}
    </Container>
  );
}
