import styled from 'styled-components';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import * as pallete from '../../helpers/Variables.js'

export const PasswordContainer = styled.div`
    display: flex;
    width: inherit;
    position: relative;

    input {
        border: ${({ error }) => error === 'true' ? pallete.inputErrorBorder : pallete.inputBorder};
        color: ${({ error }) => error === 'true' ? pallete.errorColor : pallete.inputColor};
        width: inherit;

        &:focus, &:active {
            border: none;
            border: ${pallete.inputOutline};
            color: ${pallete.inputColor};
        }
    }
`

export const PasswordButton = styled.button`
    border: none;
    background-color: ${pallete.inputBackgroundColor};
    position: absolute;
    bottom: 14px;
    right: 15px;
`

const iconStyling = `
    font-size: 1.65rem;
    opacity: calc(1 - .5);
    transition: opacity 100ms ease;
    cursor: pointer;

    &:hover, &:focus, &:active {
        opacity: calc(1 - .25);
    }
`

export const InvisibleIcon = styled(AiOutlineEyeInvisible)`
    ${iconStyling};
`

export const VisibleIcon = styled(AiOutlineEye)`
    ${iconStyling};
`