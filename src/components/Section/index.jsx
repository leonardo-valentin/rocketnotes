import { Container } from "./style";
import PropTypes from "prop-types";

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
