import styled from 'styled-components'
import * as pallete from '../../helpers/Variables.js'

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const InfoContainer = styled.div`
    text-align: center;
    margin-top: 25px;
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: inherit;

    h1 {
        color: ${pallete.darkGrayColor};
    }

    p {
        color: ${pallete.grayColor};
        line-height: 1.4rem;
    }
`