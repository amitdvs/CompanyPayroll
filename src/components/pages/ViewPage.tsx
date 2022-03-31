import { useState, useEffect } from 'react'
import fireDB from '../../config/firebase-config'
import { useNavigate, useParams, Link } from 'react-router-dom'
import './View.css'

const initialState = {
  id: 'khag12948123',
  name: 'Yuvraj Thapa',
  email: 'yuvrajthapa692@gmail.com',
  contact: 7906240515,
}

const ViewPage = () => {
  const [user, setUser] = useState({ initialState })
  const { id } = useParams()
  useEffect(() => {
    fireDB
      .child(`contact/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() })
        } else {
          setUser({ initialState })
        }
      })
  }, [id])
  return (
    <div style={{ marginTop: '10px' }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>Yuvraj Thapa</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>yuvrajthapa692@gmail.com</span>
          <br />
          <br />
          <strong>Contact: </strong>
          <span>7906240515</span>
          <br />
          <br />
          <Link to="/employees">
            <button className="btn btn-edit">Go back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ViewPage
