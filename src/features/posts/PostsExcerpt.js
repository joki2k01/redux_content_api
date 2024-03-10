import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import React from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById, } from "./postsSlice";




let PostsExcerpt = ({ postId }) => {
const post = useSelector(state=> selectPostById(state, postId))

    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            
            <ReactionButtons post={post} /></p>
        </article>
    )
}
PostsExcerpt = React.memo(PostsExcerpt)
export default PostsExcerpt