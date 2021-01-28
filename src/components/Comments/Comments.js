import React, { useState, useEffect } from 'react';
import { CommentsContainer, CommentWrapper } from './Comments.style';
import axios from 'axios';
import constants from '../../utils/constants';
import Loader from 'react-spinner-loader';

const Comments = props => {
    const [isLoading, setIsLoading] = useState(true);
    const [commentData, setCommentData] = useState();

    useEffect(async () => {
        const result = await axios(`${constants.API_ENDPOINT}/comments?postId=${props.post.id}`);
        setCommentData(result.data);
        setIsLoading(false);
    }, [])

    if(isLoading) {
        return (
            <div><Loader show={true} /></div>
        );
    } else {
        return (
            <CommentsContainer>
                <p>Related comments on this post: </p>
                {commentData.map(data => (
                    <CommentWrapper>
                        <div className="commentTitle">Title: {data.name}</div>
                        <div className="commentEmail">Email: {data.email}</div>
                        {data.body}
                    </CommentWrapper>
                ))}
            </CommentsContainer>
        );
    }
}

export default Comments;