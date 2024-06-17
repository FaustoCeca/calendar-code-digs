import styled from 'styled-components/native';
interface IHomeView {
    color: string;
}

interface ITitle {
    color: string;
    size: string;
    margin: string;
}

interface IDesc {
    color: string;
    size: string;
}

export const StyledView = styled.View<IHomeView>`
    flex: 1;
    background-color: ${(props) => props.color};
    align-items: 'center';
`

export const StyledTitle = styled.Text<ITitle>`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: 700;
    margin: ${(props) => props.margin || '5px'};
`

export const StyledList = styled.SectionList`
    padding:  0 30px;
    margin-top: 20px;
    flex: 1;
    width: 100%;
`

export const StyledDesc = styled.Text<IDesc>`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: 700;
    margin: 5px;
`