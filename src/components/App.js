import React, {useState} from "react";
import ReactDOM from 'react-dom';
import video from "../data/video.js";
import VideoDiv from "./VideoDiv";
import CommentsDiv from "./CommentsDiv";


function App() {
  console.log("Here's your data:", video);

  const [displayComments, setDisplayComments] = useState(true);

  function handleDisplayComments() {
    setDisplayComments(!displayComments);
  }

  return (
    <div className="App">
      <VideoDiv video = {video} displayComments = {displayComments} handleDisplayComments = {handleDisplayComments} />
      <CommentsDiv comments = {video.comments} displayComments = {displayComments} />
    </div>
  );
}

export default App;
