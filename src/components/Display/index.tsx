import * as S from './style'

interface DisplayProps {
    value: string;
    storeValue: number;
}
export const Display = ({value, storeValue}: DisplayProps) => {
    return (
        <S.Container>
            <div>{storeValue}</div>
            {value}
        </S.Container>
    )
}