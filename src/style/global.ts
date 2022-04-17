import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-button:#f0f0f0;
        --border-button:1px solid #888;
    }
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    

    body {
        font-family:"Roboto";
        height:100vh;
        display:flex;
        justify-content: center;
        align-items:center;

        color:#FFF;     
        background:linear-gradient(to right, #0F2027, #203A43, #2c5364);   
        text-align:center;
    }
    
`