import styled from 'styled-components'
import { Colors } from '../utils/colors'

export const Row = styled.div`
    display: flex;
    width: ${props => {
        if(props.widthPercent) return `${props.widthPercent}%`
        if(props.width) return `${props.width}px`
        if(props.widthFitContent) return 'fit-content'
        return '100%'
    }};
    padding: ${props => {
        if(props.paddingHorizontal) return `0 ${props.paddingHorizontal}px 0 ${props.paddingHorizontal}px`
        if(props.paddingHorizontalPercent) return `0 ${props.paddingHorizontalPercent}% 0 ${props.paddingHorizontalPercent}%`
        if(props.paddingVertical) return `${props.paddingVertical}px 0 ${props.paddingVertical}px 0`
        if(props.paddingVerticalPercent) return `${props.paddingVerticalPercent}% 0 ${props.paddingVerticalPercent}% 0`
        if(props.paddingAll) return `${props.paddingAll}px`
        if(props.paddingAllpercent) return `${props.paddingAllpercent}%`
        return 0
    }};
    align-items: ${props => props.alignCenter ? 'center' : 'flex-start'};
    justify-content: ${props => {
        if(props.justifyCenter) return 'center'
        if(props.justifyBetween) return 'space-between'
        if(props.justifyEvenly) return 'space-evenly'
        return 'flex-start'
    }};
    gap: ${props => props.gap ? `${props.gap}px` : 0};
    border-bottom: ${props => props.borderBottom ? `1px ${Colors.border} solid`: 'none'};
`