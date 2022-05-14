import styled from 'styled-components'
import { Colors } from '../utils/colors'

export const ProfileImage = () => {
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPeNwAEBjTrD6Boco_MimnuGKh67lekNnPHrKevt9ibtiZTx8NReceXyRPNlyPkRa3V2o&usqp=CAU'
    return <Circle>
        <Image src={imageUrl} alt='' />
    </Circle>
}

const Circle = styled.div`
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: tomato;
    overflow: clip;
    border: ${`2px ${Colors.primary} solid`};
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`