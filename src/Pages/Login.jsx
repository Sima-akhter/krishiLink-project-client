

import { use, useRef, useState } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router"; 
import { toast } from "react-toastify";

const Login = () => { 
  const [error, setError] = useState('');
  const { signin, signInWithGoogle, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signin(email, password)
      .then(res => {
        const user = res.user;
        setUser(user);
        navigate(location.state ? location.state : '/');
        toast.success('Login successful!');
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
        setError(errorCode);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        setUser(user);
        navigate(location.state ? location.state : '/');
        toast.success('You have logged in successfully!');
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  const handleForgotPassword = () => {
    navigate('/forgotPassword', {
      state: { email: emailRef.current?.value || '' },
    });
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-base-200'>
      <title>Login</title>
      
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">

          
          <div className="card bg-base-100 w-full max-w-md lg:max-w-lg shrink-0 shadow-2xl"> 
            <div className="card-body p-8 lg:p-10"> 
              <h1 className='font-bold text-3xl text-center mb-6'>Login your account</h1>
              
              <form onSubmit={handleLogin}>

                {/* email */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <input 
                    name='email' 
                    type="email" 
                    className="input input-bordered h-12" 
                    placeholder="Enter your email" 
                    required 
                    ref={emailRef}
                  />
                </div>

                {/* password */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text font-medium">Password</span>
                  </label>
                  <input 
                    name='password' 
                    type="password" 
                    className="input input-bordered h-12" 
                    placeholder="Enter your password" 
                    required 
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <a onClick={handleForgotPassword} className='link link-hover text-sm'>Forgot password?</a>
                </div>

                {error && <p className='text-red-600 text-sm mb-4'>{error}</p>}

                <button type='submit' className="btn btn-block text-white border-none bg-gradient-to-b from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300 mb-4">
                  Login
                </button>

                <div className='text-center font-bold my-4'>Or</div>

                <button 
                  type="button"
                  onClick={handleGoogleSignIn} 
                  className="btn btn-block bg-white text-black border border-gray-300 hover:bg-gray-50 mb-6"
                >
                  <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                      <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                      <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                      <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                    </g>
                  </svg>
                  Login with Google
                </button>

                <p className='text-center'>
                  Don’t Have An Account? {' '}
                  <Link to='/auth/register' className='text-secondary font-semibold hover:underline'>
                    Register
                  </Link>
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
