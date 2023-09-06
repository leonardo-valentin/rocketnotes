import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/leonardo-valentin.png"
          alt="user profile picture"
        />

        <div>
          <span>Bem vindo,</span>
          <strong>Leonardo Valentin</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
