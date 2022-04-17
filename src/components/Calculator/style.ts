import styled from "styled-components";

export const Container = styled.div `
    height:340px;
    width:235px;
    border-radius:5px;
    overflow:hidden;
    display:grid;
    grid-template-columns:repeat(4,25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    
    button:first-of-type{
        grid-column: 1/span 3;
    }
    button:nth-child(16) {
        grid-column:1/span 2;   
    }
    div:first-of-type {
        grid-column:span 4;
    }
`