import {useMemo, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const Form = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  const currentBlog = useMemo(() => props.blogs.find(blog => blog.id === parseInt(params.id)
  ), [params.id, props.blogs])

  // console.log(props.formType)

  const [formData, setFormData] = useState(
    props.formType === 'new' ? {
      title: '',
      body: '',
    } : {
      title: currentBlog.title,
      body: currentBlog.body,
      id: parseInt(currentBlog.id)
    }
  )

  const handleChange = (event) => {
    setFormData((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  const handleSubmission = (event) => {
    event.preventDefault();
    props.handleSubmit(formData, props.formType);
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmission}>
      <h3>Title:</h3>
      <input 
        type='text'
        onChange={handleChange}
        value={formData.title}
        name='title'
      />
      <h3>Body:</h3>
      <input
        type='text'
        onChange={handleChange}
        value={formData.body}
        name='body'
      />
      <input type='submit' value={props.buttonLabel} />
    </form>
  );
}

export default Form;