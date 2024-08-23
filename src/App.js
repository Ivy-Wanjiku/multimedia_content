import Home from './Home';
import Video from "./Videosection";
import Blog from "./Blog";
import Podcast from './Podcast';
import './App.css';
import Homepage from './Homepage';
import Review from './Review/review';
import Contact from './Contacts';




const App = () =>{
return (
    <div>
   <Home/>
   <Video/>
      <Blog/>
      <Review/>
  <Podcast/>
    <Homepage/>
 <Contact/>
    </div>
    )
    }
export default App;
