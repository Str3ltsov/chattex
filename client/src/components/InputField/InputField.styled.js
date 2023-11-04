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
        border: ${pallete.inputBorder};
        background-color: ${pallete.inputBackgroundColor};
        color: ${pallete.inputColor};
        padding: 16px 22px;
        font-size: 1rem;
        transition: all 200ms ease;

        &:focus, &:active {
            outline: none;
            border: ${pallete.inputOutline};
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