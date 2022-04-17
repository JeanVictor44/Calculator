import * as S from './style'

interface ButtonProps {
    click(label:string): void;
    label: string;
    bg?:boolean;
    left?:boolean;
}
export const Button = ({click,label, bg = false, left = false}: ButtonProps) => {
    return (
        <S.Button 
            onClick={() => click(label)}
            bg={bg} 
            left={left}>
             
             {label}
        </S.Button>
    )
}