import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = async (e) => {
        e.preventDefault();
        const {name, email, password} = data;
        try {
          const {data} = await axios.post("/register", {
            name, email, password
          })
          if (data.error) {
            toast.error(data.error)
          } else {
            setData({})
            toast.success('Register successfully!')
            navigate('/main')
          }
        } catch (error) {
          console.log(error);
        }
    }

  return (
    <div>
        <form onSubmit={registerUser} className='register_form'>
            <label>Name</label>
            <input type='text' placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}></input>
            <label>Email</label>
            <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></input>
            <label>Password</label>
            <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>

            <button type = 'text' className='btn_secondary'>Submit</button>
      </form>
    </div>
  )
}
