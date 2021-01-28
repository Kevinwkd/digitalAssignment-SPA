import styled from 'styled-components';

export const ListWrapper = styled.div`
    display: flex;
`;

export const ListItem = styled.button`
    border-color: #41719C;
    border-width: 2px;
    background-color:${ props => props.isClicked ? `#ED7D31` : `#5B9BD5`};
    margin: 5px;
    padding: 5px;
    color: white;
`;