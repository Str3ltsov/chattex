import styled from 'styled-components';
import * as pallete from '../../helpers/Variables.js'

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: inherit;

    label {
        color: ${pallete.grayColor};
    }

    input {
        position: relative;
        border: ${({ error }) => error === 'true' ? pallete.inputErrorBorder : pallete.inputBorder};
        background-color: ${pallete.inputBackgroundColor};
        color: ${({ error }) => error === 'true' ? pallete.errorColor : pallete.inputColor};
        padding: 16px 22px;
        font-size: 1rem;
        transition: all 200ms ease;

        &:focus, &:active {
            outline: none;
            border: ${pallete.inputOutline};
            color: ${pallete.inputColor};
        }

        &::placeholder {
            color: ${pallete.inputPlaceholderColor};
            opacity: 1;
        }

        &::-ms-input-placeholder {
            color: ${pallete.inputPlaceholderColor};
        }
    }
`