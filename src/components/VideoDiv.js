import React, {useState} from "react";
import ReactDOM from 'react-dom'

function VideoDiv({video, displayComments, handleDisplayComments}){
    const [upvotes, setUpvotes] = useState(video.upvotes);
    const [downvotes, setDownvotes] = useState(video.downvotes);

    function handleUpvotes() {
        const newUpvotes = upvotes + 1;
        setUpvotes(newUpvotes)
    }

    function handleDownvotes() {
        const newDownvotes = downvotes + 1;
        setDownvotes(newDownvotes)
    }

    function onDisplayHideComments() {
        handleDisplayComments();
    }

    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={video.title}
            />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick = {handleUpvotes}>{upvotes} 👍</button>
            <button onClick = {handleDownvotes}>{downvotes} 👍</button>
            <br />
            <button onClick = {onDisplayHideComments}>{displayComments === true ? "Hide comments" : "Show comments"}</button>
        </div>
    );
}

export default VideoDiv;
