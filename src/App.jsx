import axios from "axios"
import { useState, useEffect } from "react"
import { Table } from "react-bootstrap"

function App() {
 let [data,setData] = useState([])
 
 let getUsers = async()=>{
  try {
    let res = await axios.get(`${import.meta.env.VITE_API_URL}/users`)
    console.log(res)
    if(res.status===200){
      setData(res.data.user)
    }
  } catch (error) {
    
  }
 }
 useEffect(()=>{
  getUsers()
 },[])

  return (
    <>
     <h1>Welcome</h1>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>E-mail</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <tr key={e._id}>
              <td>{i+1}</td>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.role}</td>
              <td>{e.status ? "Active" : "In-Active"}</td>              
            </tr>
          })
        }
      </tbody>
     </Table>
    </>
  )
}

export default App
