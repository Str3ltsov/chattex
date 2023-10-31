import styled from 'styled-components'
import * as pallete from '../../helpers/Variables.js'

export const AuthMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: ${pallete.authMainBackgroundColor};
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
    padding: 60px calc(60px * 2);

    @media (width <= calc(${pallete.phoneSize} + 100px)) {
        width: 100%;
        height: 100vh;
    }
`

export const AuthLogo = styled.h1`
    color: ${pallete.logoColor};
    font-weight: bold;
    font-size: 2.3em;
`