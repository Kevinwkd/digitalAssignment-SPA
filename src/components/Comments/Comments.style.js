import styled from 'styled-components';

export const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    border: 2px solid grey;
    width: 80%;
`;

export const CommentWrapper = styled.div`
    border-color: #41719C;
    border-width: 2px;
    background-color:#888888;
    margin: 15px;
    padding: 15px;
    color: white;
    font-size: 12px;

    .commentTitle,
    .commentEmail {
        text-align: left;
        font-size: 16px;
    }
`;
