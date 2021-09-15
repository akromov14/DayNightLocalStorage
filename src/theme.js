import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: '#fff',
    color: '#000'
    
}

export const darkTheme = {
    body: '#000',
    color: '#ffffff'
}

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${(props)=> props.theme.body};
        color: ${(props)=> props.theme.color};
        text-align: center;
    }
`