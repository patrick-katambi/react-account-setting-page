import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Colors } from '../utils/colors'
import { borderRadius } from '../utils/measurements'

export const BorderButton = styled(motion.button)`
    border: ${`1px ${Colors.faint} solid`};
    outline: none;
    padding: 15px 30px;
    background-color: ${Colors.background};
    font-weight: bold;
    border-radius: ${borderRadius};
    color: ${Colors.buttonText};
    transition: 0.3s;
    cursor: pointer;

    /* &:hover {
        background-color: ${Colors.primary};
        color: #fff;
    } */
`