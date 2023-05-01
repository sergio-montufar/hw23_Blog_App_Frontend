import Blog from "../components/Blog"
import {Link} from "react-router-dom"

const AllBlogs = (props) => (
  <div className="all-blogs">
    <Link to='/new'>
      <button>Create a Blog!</button>
    </Link>
    {props.blogs.map(
      (blog) => <Blog blog={blog} key={blog.id} deleteBlog={props.deleteBlog} />
    )}
  </div>
)

export default AllBlogs;