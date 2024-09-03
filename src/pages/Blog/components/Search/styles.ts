import { styled } from "styled-components"

export const FormContainer = styled.form`
  display: flex;
  align-items: center;

  input {
    flex: 1;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme["base-border"]};
    background: ${(props) => props.theme["base-input"]};

    color: ${(props) => props.theme["base-label"]};
    font-size: 16px;
    font-weight: 400;

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
      transition: border 0.2s ease-in-out;
    }

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
      font-size: 16px;
    }
  }
`
