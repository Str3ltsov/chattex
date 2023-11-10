import styled from 'styled-components'
import { GrFormCheckmark } from 'react-icons/gr'
import * as pallete from '../../helpers/Variables.js'

export const CheckMarkContainer = styled.div`
    position: relative;
`

export const CheckMarkIcon = styled(GrFormCheckmark)`
    position: relative;
    font-size: 2.5rem;
    filter: invert(99%) sepia(4%) saturate(0%) hue-rotate(244deg) brightness(117%) contrast(96%);
`

export const CheckMarkHide = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color === 'primary' ? pallete.blueColor : pallete.whiteColor};
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(100%);
    animation: moveRight 1.5s linear;

    @keyframes moveRight {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(100%);
        }
    }
`