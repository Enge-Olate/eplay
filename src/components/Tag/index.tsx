import { TagContainer } from "./style";
export type Props ={
    size?: 'small' | 'big';
    children: string;
}
export function Tag({size = 'small', children}: Props){
    return(
        <TagContainer size={size}>
            {children}
        </TagContainer>
    );
}