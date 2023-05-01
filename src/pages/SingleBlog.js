import {useMemo} from "react";
import {Link, useParams} from "react-router-dom";

const SingleBlog = ({blogs}) => {

  const params = useParams()
  const currentBlog = useMemo(() => blogs.find(blog => blog.id === parseInt(params.id)
  ), [params.id, blogs])
  // console.log(currentBlog)

  return (
    <div>
      {/* {console.log(currentBlog)}  */}
      <h1>{currentBlog.title}</h1>
      <h2>{currentBlog.body}</h2>
      <Link to={`/edit/${params.id}`}>
        <button>Edit Blog</button>
      </Link>
      <Link to={"/"}>
        <button>Go Back</button>
      </Link>
    </div>
    
  );
}

export default SingleBlog;