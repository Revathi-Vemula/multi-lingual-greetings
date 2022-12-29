import styled from 'styled-components'

export const LanguageItem = styled.li`
  list-style-type: none;
`

export const LanguageButton = styled.button`
  background-color: ${props => (props.isActive ? '#db1c48' : 'transparent')};
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  border: solid 1px #db1c48;
  width: 80px;
  border-radius: 20px;
  padding: 5px;
`
