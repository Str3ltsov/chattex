import styled from 'styled-components'
import * as pallete from '../../helpers/Variables.js'

export const AuthMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: ${pallete.authMainBackgroundColor};
    animation: 500ms alternate fadeIn;

    @keyframes fadeIn {
        from {
            opacity: .2;
        }
        to {
            opacity: 1;
        }
    }
`

export const AuthContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: ${pallete.whiteColor};
    height: 820px;
    width: ${pallete.phoneSize};
    transition: all 200ms ease;
    padding: 70px 50px;

    @media (width <= calc(${pallete.phoneSize} + 100px)) {
        min-height: 100vh;
        width: 100%;
    }
`

export const AuthLogo = styled.h1`
    color: ${pallete.logoColor};
    font-weight: bold;
    font-size: 2.3em;
`