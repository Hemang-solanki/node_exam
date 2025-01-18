import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  {jwtDecode}  from 'jwt-decode';
import '../assets/css/admin.css'

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
    try {
      const response = await fetch('http://localhost:5110/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.msg);
        const token = result.token;

        sessionStorage.setItem("token", token);

        const decoded = jwtDecode(token); 

        if (decoded.role === 'admin') {
          setTimeout(() => {
            navigate('/admin');
          }, 3000);
        } else {
          setTimeout(() => {
            navigate('/');
          }, 3000);
        }
      } else {
        toast.error(result.msg);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while logging in.');
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
                  <h3 className="card-title text-left mb-3">Login</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Email *</label>
                      <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        className="form-control p_input"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password *</label>
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        className="form-control p_input"
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-block enter-btn">
                        Login
                      </button>
                    </div>
                  </form>
                  <p className="sign-up">
                    Don't have an Account? <Link to={'/signup'}>Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
