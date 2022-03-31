import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './FirebaseContent.css'
import fireDB from '../../config/firebase-config'
import { toast } from 'react-toastify'

const initialState = {
  name: 'Yuvraj Thapa',
  email: 'yuvrajthapa692@gmail.com',
  contact: '7906240515',
}

const FirebaseContent = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    fireDB.child('contacts').on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() })
      } else {
        setData({})
      }
    })
    return () => {
      setData({})
    }
  }, [])

  const onDelete = (id: any) => {
    if (window.confirm('Are you sure you want to delete that contact ?')) {
      fireDB.child(`contacts/${id}`).remove((err) => {
        if (err) {
          toast.error(err)
        } else {
          toast.success('Contacts deleted successfully !')
        }
      })
    }
  }

  const navigate = useNavigate()
  const onEdit = (id: any) => {}

  return (
    <div style={{ marginTop: '22px' }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>No.</th>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Email</th>
            <th style={{ textAlign: 'center' }}>Contact</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className="btn btn-edit" onClick={() => onEdit(id)}>
                      Edit
                    </button>
                  </Link>
                  <button className="btn btn-delete" onClick={() => onDelete(id)}>
                    Delete
                  </button>
                  <Link to={`/view/${id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default FirebaseContent
