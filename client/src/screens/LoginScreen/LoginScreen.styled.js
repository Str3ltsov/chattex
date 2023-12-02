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

export const OrContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    color: ${pallete.darkGrayColor};

    @media (width <= calc(${pallete.phoneSize} + 100px)) {
        height: 0%;
        padding: 6vh 0;
    }
`

export const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 10px;
    
    span {
        color: ${pallete.grayColor};
    }
`