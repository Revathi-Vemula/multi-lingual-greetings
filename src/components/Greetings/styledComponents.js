import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-family: 'Bree Serif';
`

export const GreetingsList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 30vw;
  justify-content: space-between;
  padding-left: 0;
`

export const GreetingImage = styled.img`
  margin: 20px;
  height: 280px;
  width: 300px;
`
