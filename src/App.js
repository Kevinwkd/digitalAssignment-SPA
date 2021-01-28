import logo from './logo.svg';
import { Container } from './App.style';
import UserList from './components/UserList/UserList';
import UserPosts from './components/UserPosts/UserPosts';
import { useState } from 'react';


function App() {
  const [showPost, setShowPost] = useState(false);
  const [postUser, setPostUser] = useState({});

  const showPostHandler = (user) => {
    setShowPost(true);
    setPostUser(user);
  }

  return (
    <Container>
        <p>Please select a user to find their comments:</p>
        
          <div>
            <UserList userId={postUser.id} showPostHandler={showPostHandler} />
          </div>
          <div>{showPost && <UserPosts  user={postUser} />}</div>
        
    </Container>
  );
}

export default App;
