import styled from 'styled-components'
import * as pallete from '../../helpers/Variables.js'

export const Loader = styled.div`
    min-width: 24px;
    min-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: '';
        min-width: 24px;
        min-height: 24px;
        border: calc(24px / 8) solid ${({ borderColor }) => borderColor === 'primary' ? pallete.blueColor : pallete.whiteColor};
        border-right-color: transparent;
        border-radius: 100%;
        animation: rotation 800ms ease infinite;

        @keyframes rotation {
            from {
                transform: rotate(0turn);
            }
            to {
                transform: rotate(1turn);
            }
        }
    }
`