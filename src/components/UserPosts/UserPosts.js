import axios from 'axios';
import React, { useEffect, useState } from 'react';
import constants from '../../utils/constants';
import Loader from 'react-spinner-loader';
import { PostWrapper, ShowMoreButton, ShowComments, PostItem, PostItemContainer } from './UserPosts.style';
import Comments from '../Comments/Comments';

const initialPosts = 3;

const UserPosts = props => {
    const [isLoading, setIsLoading] = useState(true);
    const [postData, setPostData] = useState();
    const [showData, setShowData] = useState();
    const [isShowMore, setIsShowMore] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedId, setExpandedId] = useState();

    useEffect(async () => {
        const result = await axios(`${constants.API_ENDPOINT}/posts?userId=${props.user.id}`);
        setPostData(result.data);
        setShowData(result.data.slice(0, 3));
        setIsLoading(false);
    }, [])

    const loadMorehandler = () => {
        setShowData(postData);
        setIsShowMore(true);
    }

    const shouldShowComments = (postId) => {
        return postId === expandedId;
    }

    if(isLoading) {
        return (
            <div><Loader show={true} /></div>
        );
    } else {
        return (
            <PostWrapper>
                <p>Posts from {props.user.name}</p>
                {showData.map((post, index) => (
                    <div>
                        <PostItemContainer>
                            <PostItem>
                                <div>{post.title}</div>
                                <div>{post.body}</div>
                            </PostItem>
                            {shouldShowComments(index) && <Comments post={post} />}
                        </PostItemContainer>
                        <ShowComments 
                            isExpanded={isExpanded && shouldShowComments(index)} 
                            onClick={() => {
                                setIsExpanded(!(expandedId === index));
                                setExpandedId(expandedId === index ? '' : index);
                            }} 
                        />
                    </div>
                ))}
                {!isShowMore && <ShowMoreButton onClick={loadMorehandler}>
                    Load more
                </ShowMoreButton>}
            </PostWrapper>
        );
    }

    
}

export default UserPosts;