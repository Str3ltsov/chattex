import styled from 'styled-components';
import { BiLogIn } from 'react-icons/bi';
import * as pallete from '../../helpers/Variables.js'

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 20px;
    width: inherit;
`

export const FormCheckboxAndLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 25px;
    width: 100%;
    margin: 10px 0;

    label {
        display: flex;
        align-items: center;
        column-gap: 10px;
        position: relative;
        color: ${pallete.grayColor};
        cursor: pointer;

        input[type="checkbox"] {
            appearance: none;
            -webkit-appearance: none;
            width: 25px;
            height: 25px;
            background-color: ${pallete.inputBackgroundColor};
            border: ${pallete.inputBorder};
            border-radius: 0;

            &:checked ~ span {
                opacity: 1;
            }
        }

        span {
            opacity: 0;
            position: absolute;
            top: .5px;
            left: 5.5px;
            font-size: 1.2rem;
            transition: opacity 60ms linear;
        }
    }

    a {
        transition: color 200ms ease;
    }
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

export const FormButtonIcon = styled(BiLogIn)`
    filter: invert(100%) sepia(100%) saturate(0%) 
            hue-rotate(161deg) brightness(105%) contrast(104%);
    font-size: 1.5rem;
    margin-bottom: 1px;
`