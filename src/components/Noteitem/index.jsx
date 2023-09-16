import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./style";

export function Noteitem({ $isnew = "false", value, onClick, ...rest }) {
  return (
    <Container $isnew={$isnew}>
      <input
        type="text"
        value={value}
        readOnly={$isnew === "false"}
        {...rest}
      />
      <button
        type="button"
        onClick={onClick}
        className={$isnew === "true" ? "button-add" : "button-delete"}
      >
        {$isnew === "true" ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
