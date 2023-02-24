import {Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import PostDetail from './PostDetail';
import Home from './Home';
import CreatePost from './CreatePost';
//import firebase from 'firebase/app';

function App() {
  return (
    <div className="container">
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/navbar' element={<Navbar/>}/>
      <Route exact path='/post/:postId' element={<PostDetail/>}/>
      <Route exact path='/create-post' element={<CreatePost/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
