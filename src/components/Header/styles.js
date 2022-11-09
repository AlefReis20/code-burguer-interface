import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background-color: #fff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${props => (props.isActive ? '#9758A6' : '#555555')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')}; ;
`
export const Line = styled.div`
  height: 40px;
  border-right: 0.5px solid #bababa;
`

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`

export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #9758a6;
  cursor: pointer;
`
