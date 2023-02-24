import { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogHeading = styled.h1`
text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;
const Para = styled.p`
font-size: px;
`
  


function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore
      .collection('posts')
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        console.log('posts', posts);
        setPosts(posts);
      });
  }, []);

  return (
    <div className="home">
     <BlogHeading >Tech Blog</BlogHeading>
    {/* <h1 style={styles.heading}>Tech Blog</h1> */}
      <div id="blog-by">Narayan</div>
      <h1 style={styles.heading}>Hello World</h1>
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          <Para>{post.subTitle}</Para>
        </div>
      ))}
    </div>
  );
}

export default Home;

//Inline Css

const styles = {
  heading : {
    marginTop:30,
    color: 'red'
  }
}