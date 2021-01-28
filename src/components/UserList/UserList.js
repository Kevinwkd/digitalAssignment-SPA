import axios from 'axios';
import React, { useEffect, useState } from 'react';
import constants from '../../utils/constants';
import Loader from 'react-spinner-loader';
import { ListItem, ListWrapper } from './UserList.style';

const UserList = props => {
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState();

    useEffect(async () => {
        const result = await axios(`${constants.API_ENDPOINT}/users`);
        setUserData(result.data);
        setIsLoading(false);
    }, [])

    if(isLoading) {
        return (
            <div><Loader show={true} /></div>
        );
    } else {
        return (
            <ListWrapper>
                {userData.map(user => (
                    <ListItem 
                        isClicked={user.id === props.userId} 
                        onClick={() => {props.showPostHandler(user)}}
                    >
                        {user.name.split(' ')[1]}
                    </ListItem>
                ))}
            </ListWrapper>
        );
    }

    
}

export default UserList;