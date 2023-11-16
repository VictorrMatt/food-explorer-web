import { Container } from "./styles";

import { useNavigate } from "react-router-dom";

export function PlaceLink({ ...props }) {
  const navigate = useNavigate();

  function handleNavigation(path) {
    navigate(`/${path}`);
  }

  return (
    <Container>
      <a onClick={handleNavigation(props.path)} {...rest}></a>
    </Container>
  );
}
