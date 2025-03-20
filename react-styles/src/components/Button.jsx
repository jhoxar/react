import styled from "styled-components"

const StyledButton = styled.button`
background-color: ${(props) => props.blue ? "blue": "gray"}
`

//Debe recibir las props para hacerlo dinamico
export function Button({children, blue}){
    return <StyledButton blue = {blue}>{children}</StyledButton>
}