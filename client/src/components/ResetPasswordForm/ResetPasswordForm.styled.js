import styled from 'styled-components';
import { MdLockReset } from "react-icons/md";
import * as pallete from '../../helpers/Variables.js'

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 25px;
    width: inherit;
`

export const FormButton = styled.button`
    border: none;
    background-color: ${pallete.primaryButtonColor};
    color: ${pallete.whiteColor};
    font-weight: bold;
    font-size: 1.05rem;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    width: 100%;
    height: 60px;
    transition: all 250ms ease-in-out;
    cursor: pointer;
    overflow: hidden;
    margin-top: .9rem;

    &:hover, &:focus, &:active {
        background-color: ${pallete.primaryButtonHoverColor};
    }

    &:disabled {
        opacity: .8;
        cursor: not-allowed;

        &:hover, &:focus, &:active {
            background-color: ${pallete.primaryButtonColor};
        }
    }
`

export const FormButtonIcon = styled(MdLockReset)`
    filter: invert(100%) sepia(100%) saturate(0%) 
            hue-rotate(161deg) brightness(105%) contrast(104%);
    font-size: 1.5rem;
    margin-bottom: 2px;
`