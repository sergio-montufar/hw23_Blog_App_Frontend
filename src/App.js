import { useState, useEffect } from "react";
import AllBlogs from "./pages/AllBlogs";
import SingleBlog from "./pages/SingleBlog";
import Form from "./pages/Form";
import './App.css';
import { Route, Routes } from "react-router-dom"

const apiURL = 'https://blogapp-backend.herokuapp.com'

function App() {
  const [blogs, setBlogs] = useState([])

  const getBlogs = async () => {
    const response = await fetch(apiURL + `/blog/`)
    const data = await response.json()
    setBlogs(data)
  }

  useEffect(() => {
    getBlogs()
  }, [])

  const handleFormSubmission = async (data, type) => {
    if (type === "new") {
      // eslint-disable-next-line
      const response = await fetch(`${apiURL}/blog/`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      getBlogs()
    } else {
      // eslint-disable-next-line
      const response = await fetch(`${apiURL}/blog/${data.id}/`, {
        method: 'put',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      getBlogs()
    }
  }

  const deleteBlog = async (id) => {
    // eslint-disable-next-line
    const response = await fetch(`${apiURL}/blog/${id}/`, {
      method: 'delete'
    })
    getBlogs()
  }

  return (
    <div className="App">
      <h1>Blogs</h1>
      <Routes>
        <Route
          exact
          path='/'
          element={<AllBlogs blogs={blogs} deleteBlog={deleteBlog} />}
        />
        <Route
          path='/blog/:id'
          element={<SingleBlog blogs={blogs} />}
        />
        <Route
          path='/new'
          element={<Form blogs={blogs} handleSubmit={handleFormSubmission} buttonLabel='Add Blog' formType='new' />}
        />
        <Route
          path='/edit/:id'
          element={<Form blogs={blogs} handleSubmit={handleFormSubmission} buttonLabel='Edit Blog' formType='edit' />}
        />
      </Routes>
    </div>
  );
}

export default App;
