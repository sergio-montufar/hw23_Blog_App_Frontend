import {Link, useNavigate} from "react-router-dom"

const divStyle = {
  textAlign: "center",
  border: "3px solid",
  margin: "10px auto",
  width: '80%'
}

const titleStyle = {
  color: "#006643",
  fontSize: "4em"
}

const Blog = ({blog, deleteBlog}) => {
  const navigate = useNavigate();
  // console.log(blog)
  const handleDelete = (event) => {
    event.preventDefault();
    deleteBlog(blog.id);
    navigate('/');
  }

  console.log('this is to tell if it goes here');
  return (
    <div style={divStyle}>
      <Link to={`/blog/${blog.id}`}>
        <h1 style={titleStyle}>{blog.title}</h1>
      </Link>
      <h2>{blog.body}</h2>
      <form onSubmit={handleDelete}>
        <input type='submit' value='Delete' />
      </form>
    </div>
  );
}

export default Blog;