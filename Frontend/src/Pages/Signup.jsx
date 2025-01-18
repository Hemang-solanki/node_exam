import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [role, setRole] = useState('');
  const [adminInput, setAdminInput] = useState('');
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    role: "",
    adminCode: '',
  })

  const handlechange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
    if (name === 'role') {
      setRole(value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(state)

    const secretKey = role === 'admin' ? adminInput : undefined;

      try {
        const response = await fetch('http://localhost:5110/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state),
        });

        const result = await response.json();
        if (response.ok) {
          toast.success(result.msg);
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        } else {
          toast.error(result.msg);
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred while registering.');
      }
  };

  return (
    <>
      <ToastContainer />
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="row w-100 m-0">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
              <div className="card col-lg-4 mx-auto">
                <div className="card-body px-5 py-5">
                  <h3 className="card-title text-left mb-3">Register</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control p_input" name='username' onChange={handlechange} required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control p_input" name='email' onChange={handlechange} required />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control p_input" name='password' onChange={handlechange} required />
                    </div>

                    <div className="form-group">
                      <label>Role</label>
                      <select className="form-select" aria-label="Default select example" name='role' onChange={handlechange} required>
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>

                    {role === 'admin' && (
                      <div className="form-group">
                        <label>Admin Code</label>
                        <input type="text" className="form-control p_input" name='adminCode' onChange={handlechange} required />
                      </div>
                    )}

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-block enter-btn">Register</button>
                    </div>
                  </form>
                  
                  <p className="sign-up text-center">Already have an Account?<Link to='/login'> Sign Up</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup