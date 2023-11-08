import { Container } from "./styles";

import { useNavigate } from "react-router-dom";

export function PlaceLink({ path, ...rest }) {
  const navigate = useNavigate();

  function handleNavigation(path) {
    navigate(`/${path}`);
  }

  return (
    <Container>
      <a onClick={handleNavigation(path)} {...rest}></a>
    </Container>
  );
}
