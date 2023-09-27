

const Post = ({ post }) => {
    return (
        <article>
            <p>{post.author.username}</p>
            <br></br>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          
      
        </article>
    )
}
export default Post