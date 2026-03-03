import styled from 'styled-components'
import type{ Props } from '.'
import { breakPoints, cores } from '../../globalStyle'
import { Card } from '../Product/style'

export const ContainerProductList = styled.section<Props>`
  padding: 32px 0;
  background-color: ${(props)=> props.background === 'black'? cores.preta: cores.cinza};

  ${Card}{
    background-color: ${(props)=> props.background === 'black'? cores.cinza:cores.preta};
  }

`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
  @media (max-width: ${breakPoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`