/// <reference types="react" />
export interface IProps {
    minLenth: number;
    content: string;
    moreText: string;
    lessText: string;
}
export default function ShowMore(props: IProps): JSX.Element;
