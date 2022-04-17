import styled from "styled-components";

interface ButtonStyleProps {
    bg:boolean;
    left:boolean;
} 

export const Button = styled.button<ButtonStyleProps>`

    text-align:${({left}) => left ? 'left' : 'center'};
    padding-left:${({left}) => left ? '20px' : '0px'};;
    font-size:1.4em;
    background-color:${({bg}) => bg ? '#FAB231' : '#f0f0f0'};
    color:${({bg}) => bg ? '#FFF' : '#000'};
    border:none;
    border-right:var(--border-button);
    border-bottom:var(--border-button);
    outline:none;
    cursor:pointer;
    transition:.1s ease-in;
    &:active {
        filter:brightness(0.8)

    }
`