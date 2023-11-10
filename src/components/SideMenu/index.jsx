import { Container } from "./styles";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Title>
          <CheckCircle /> e-Tasks
        </Title>

        {menuIsOpen && (
          <Button type="button" onClick={onCloseMenu}>
            <X />
          </Button>
        )}
      </Header>
    </Container>
  );
}
