import {
  Container,
  InputText,
  PlusIcon,
  CloseIcon,
  IconHolder,
} from "./styles";

export function Mark({ $isNew = false, value, onClick, ...rest }) {
  const prevent = () => {
    event.preventDefault();
  };

  return (
    <Container $isNew={$isNew}>
      <InputText
        type="text"
        value={value}
        readOnly={!$isNew}
        disabled={!$isNew}
        {...rest}
      />

      <IconHolder
        onClick={onClick}
        className={$isNew ? "button-add" : "button-delete"}
      >
        {$isNew ? (
          <PlusIcon
            onClick={() => {
              prevent();
            }}
          />
        ) : (
          <CloseIcon />
        )}
      </IconHolder>
    </Container>
  );
}
