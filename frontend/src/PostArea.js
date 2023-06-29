import React from 'react';
import PostElement from "./PostElement";
import test_pp_icon from "./photos/1.jpg";
import test_post_video
    from "./posts/pavan.mp4";


function PostArea() {
    return (
        <div>
            <PostElement media={test_pp_icon} likeCount="10" profilePicture={test_pp_icon} time="6s" username="prince dhote" explanation="explanation..."/>
            <PostElement mediaType="video" media={test_post_video} likeCount="10" profilePicture={test_pp_icon} time="6s" username="prince dhote" explanation="explanation..."/>
        </div>
    );
}

export default PostArea;