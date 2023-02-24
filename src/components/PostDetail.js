import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import Radium from 'radium'; 


function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();


  useEffect(() => {
    firestore
      .collection('posts')
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log('snapshot', snapshot.data());
        setPost(snapshot.data());
      });
  }, []);

  return (
    <div className="post-detail">
      <h1 style={styles.heading}>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;


const styles = {
  heading:{
    textAlign: 'center',
    color: 'orange',
    
  }
}