import styled from 'styled-components'

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: ${(props) => props.theme.colors['base-button']};
  background: ${(props) => props.theme.colors['base-input']};
  transition: 0.4s;

  color: ${(props) => props.theme.colors['brand-purple']};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &:focus {
    border-color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`
