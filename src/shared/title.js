import styled from 'styled-components'

export const Title = styled.p`
    font-size: ${props => {
        if(props.large) return 'xx-large'
        if(props.small) return 'x-large'
        return 'large'
    }};
    font-weight: bold;
`