import React from "react";
import Comment from "./Comment";

function CommentsDiv({comments, displayComments}){
    const numberOfComments = comments.length;
    return (
        <div style={displayComments === true ? {display: "block"}: {display: "none"}}>
            <h2>{numberOfComments} Comments</h2>
            {comments.map((comment) => (
          <Comment key={comment.id} user={comment.user} comment={comment.comment} />
        ))}
        </div>
    );
}

export default CommentsDiv;
