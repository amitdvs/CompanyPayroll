import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './AddEdit.css'
import fireDB from '../../config/firebase-config'
import { toast } from 'react-toastify'
import { TextField } from '@mui/material'

const initialState = {
  name: '',
  email: '',
  contact: '',
}

const AddEdit = () => {
  const [state, setState] = useState(initialState)
  const [data, setData] = useState({})
  const { id } = useParams()
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
  }, [id])

  useEffect(() => {
    if (id) {
      setState({ ...data[id] })
    } else {
      setState({ ...initialState })
    }
    return () => {}
  }, [id, data])

  const { name, email, contact } = state

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const navigate = useNavigate()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!name || !email || !contact) {
      toast.error('Please provide value in each input field')
    } else {
      if (!id) {
        fireDB.child('contacts').push(state, (err) => {
          console.log(state)
          if (err) {
            toast.error(err)
          } else {
            toast.success('Contact added successfully !')
          }
        })
      } else {
        fireDB.child(`contacts${id}`).set(state, (err) => {
          console.log(state)
          if (err) {
            toast.error(err)
          } else {
            toast.success('Contact updated successfully !')
          }
        })
      }
      setTimeout(() => navigate('/employees'), 500)
    }
  }

  return (
    <div style={{ marginTop: '0px' }}>
      <form
        style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center' }}
        onSubmit={handleSubmit}
      >
        {/* <Grid container>
          <Grid item x6={6}> */}
        <TextField
          id="name"
          label="Your Name"
          variant="outlined"
          name="name"
          value={name || ''}
          onChange={handleInputChange}
          style={{ margin: '8px 0', width: '100%' }}
        />
        {/* </Grid>
        </Grid> */}
        {/* <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name..."
          value={name || ''}
          onChange={handleInputChange}
        /> */}
        {/* <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email..."
          value={email || ''}
          onChange={handleInputChange}
        /> */}
        {/* <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your Contact No..."
          value={contact || ''}
          onChange={handleInputChange}
        /> */}
        {/* <TextField
          id="name"
          label="Your Name"
          variant="outlined"
          name="name"
          value={name || ''}
          onChange={handleInputChange}
        /> */}
        <TextField
          typeof="text"
          id="email"
          label="Your Email"
          variant="outlined"
          name="email"
          value={email || ''}
          onChange={handleInputChange}
          style={{ margin: '8px 0', width: '100%' }}
        />
        <TextField
          id="name"
          label="Your Contact Number"
          variant="outlined"
          name="contact"
          value={contact || ''}
          onChange={handleInputChange}
          style={{ margin: '8px 0', width: '100%' }}
        />
        <input type="submit" value={id ? 'Update' : 'Save'} />
      </form>
    </div>
  )
}

export default AddEdit

// import React from 'react'
// import { makeStyles } from '@mui/material'
// import { TextField } from '@mui/material'

// const useStyles = makeStyles((theme: any) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: '25ch',
//   },
// }))

// export default function App() {
//   // const classes = useStyles()

//   return (
//     <>
//       <div>
//         <TextField
//           id="filled-full-width"
//           label="Label"
//           style={{ margin: 8 }}
//           placeholder="Placeholder"
//           helperText="Full width!"
//           fullWidth
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="filled"
//         />
//         <TextField
//           label="None"
//           id="filled-margin-none"
//           defaultValue="foo"
//           // className={classes.textField}
//           helperText="foo"
//         />
//         <TextField
//           label="Dense"
//           style={{ margin: 3 }}
//           id="filled-margin-dense"
//           defaultValue="bar"
//           // className={classes.textField}
//           helperText="bar"
//           margin="dense"
//         />
//       </div>
//     </>
//   )
// }
