import styled from 'styled-components';
import * as pallete from '../../helpers/Variables.js'
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export const SessionMessageContainer = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: clamp(350px, 100%, 400px);
    height: min(80px, auto);
    background-color: ${pallete.whiteColor};
    box-shadow: 0 0 20px 5px ${pallete.sessionMessageShadowColor};
    animation: ${({ clear }) => clear ? 'moveDown' : 'moveLeft'} 500ms linear;
    overflow: hidden;

    @media (width <= calc(${pallete.phoneSize} + 100px)) {
        bottom: 0;
        right: 0;
        width: 100%;
        height: min(100px, auto);
        box-shadow: 0 1px 15px 5px ${pallete.sessionMessageShadowColorMobile};
    }

    @keyframes moveLeft {
        0% { transform: translateX(200%) }
        50% { transform: translateX(100%) }
        80% { transform: translateX(-10%) }
        100% { transform: translateX(0%) }
    }

    @keyframes moveDown {
        0% { transform: translateY(0%) }
        30% { transform: translateY(-15%) }
        50% { transform: translateY(100%) }
        100% { transform: translateY(200%) }
    }

    section {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 20px;

        div {
            display: flex;
            flex-direction: column;
            gap: 5px;
            width: 100%;
            padding-inline: 20px 10px;

            h1 {
                font-size: 1.1rem;
                color: ${pallete.darkGrayColor};
            }

            p {
                color: ${pallete.grayColor};
            }
        }
    }
`

export const LoaderContainer = styled.div`
    display: flex;
    background-color: ${({ status }) => {
        return status === 'Error'
            ? pallete.sessionMessageLoaderErrorBackgroundColor
            : pallete.sessionMessageLoaderSuccessBackgroundColor;
    }};
    width: 100%;
    height: 8px;

    @media (width <= calc(${pallete.phoneSize} + 100px)) {
        height: 10px;
    }

    div {
        background-color: ${({ status }) => status === 'Error' ? pallete.errorColor : pallete.successColor};
        width: 80%;
        height: inherit;
    }
`

export const Loader = styled.div`
    background-color: ${({ status }) => status === 'Error' ? pallete.errorColor : pallete.successColor};
    width: 80%;
    height: inherit;
`

export const SuccessIcon = styled(FaCheckCircle)`
    filter: invert(50%) sepia(68%) saturate(409%) hue-rotate(73deg) brightness(92%) contrast(89%);
    font-size: 2.2rem;
`

export const ErrorIcon = styled(MdError)`
    filter: invert(39%) sepia(40%) saturate(5265%) hue-rotate(339deg) brightness(107%) contrast(103%);
    font-size: 2.6rem;
`

export const CloseIcon = styled(IoClose)`
    font-size: 2rem;
    transition: opacity 150ms ease;
    cursor: pointer;

    &:hover, &:focus, &:active {
        opacity: .5;
    }
`