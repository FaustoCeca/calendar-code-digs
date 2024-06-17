import styled from "styled-components/native";

interface IStyledScheduleCard {
    bgColor: string;
}

export const StyledScheduleCard = styled.View<IStyledScheduleCard>`
    background-color: ${(props) => props.bgColor};
    padding: 10px;
    margin: 10px 5px;
    border-radius: 5px;
    width: 80%;
`