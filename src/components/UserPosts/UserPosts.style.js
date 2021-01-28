import styled, { css } from 'styled-components';

export const PostWrapper = styled.div`
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;

     > div {
        display:flex;
        justify-content: space-between;
    }

`;

export const PostItem = styled.div`
    border-color: #41719C;
    border-width: 2px;
    background-color:#5B9BD5;
    margin: 5px;
    padding: 5px;
    color: white;
    width: 80%;

    div:last-child {
        text-align: left;
    }
    > div {
        text-align: center;
        margin-bottom: 20px;
    }

`;

export const PostItemContainer = styled.div``;

export const ShowComments = styled.button`
    width: 30px;
    height: 30px;
    position: relative;
    border: 0;
    background-color: transparent;
    

    &:before,
    &:after{
        content: "";
        position: absolute;
        background-color: #5B9BD5;
        transition: transform 0.25s ease-out;
    }

    /* Vertical line */
    &:before{
        top: 0;
        left: 50%;
        width: 4px;
        height: 100%;
        margin-left: -2px;
    }

    /* horizontal line */
    &:after{
        top: 50%;
        left: 0;
        width: 100%;
        height: 4px;
        margin-top: -2px;
    }
    
    &:hover{
        cursor: pointer;
        
        &:before{ transform: rotate(90deg); }
        &:after{ transform: rotate(180deg); }
    }

    ${props => {
        if(props.isExpanded) {
            return css`
                &:before{ transform: rotate(90deg); }
                &:after{ transform: rotate(180deg); }
            `
        }
    }}

`;

export const ShowMoreButton = styled.button`
    border-color: #41719C;
    border-width: 2px;
    background-color:#5B9BD5;
    margin: 5px;
    padding: 5px;
    color: white;
    align-self: flex-end;
`;