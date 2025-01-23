import React from 'react'
import {AlertSuccess, AlertError} from '../helpers'
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom';
import styled from 'styled-components'
import {fillAuthInputs, signup} from '../slices/authSlice'

// import second from 'first'

const SignupPage = () => {

    const {
        signupInputs: {
            email,
            password,
            role
        },
        errorMessage,
        signupLoad,
        signupError,
      } = useSelector((store) => store.auth)
      const dispatch = useDispatch()
    
  return (
    <Wrapper>
        <h1>Signup</h1>
        <form>
        {signupError && <AlertError message={errorMessage}/>}
            <label htmlFor="email">
                <h3>Email</h3>
                <input type="email" 
                required 
                value={email}
                onChange={(e) =>
                    dispatch(
                      fillAuthInputs({
                        email: e.target.value,
                        password,
                        role,
                        type: 'signup',
                      })
                    )
                  }
                />
            </label>
            <label htmlFor="password">
                <h3>Password</h3>
                <input type="password" 
                required
                value={password}
                onChange={(e) =>
                    dispatch(
                      fillAuthInputs({
                        password: e.target.value,
                        email,
                        role,
                        type: 'signup',
                      })
                    )
                  }
                />
            </label>
            <label htmlFor="role">
                <h3>Role</h3>
                <input type="text" 
                required
                value={role}
                onChange={(e) =>
                    dispatch(
                      fillAuthInputs({
                        role: e.target.value,
                        email,
                        password,
                        type: 'signup',
                      })
                    )
                  }
                />
            </label>
            
            <button type="button" className={`create-btn ${signupLoad ? 'btn-loading' : 'signup-btn'}`} onClick={() => dispatch(signup({email, password, role}))}>
                Create
            </button>
            <span class="line-through">or</span> 
            <Link to={'/login'}>
            <button type="button" className='login-btn'>
                Login
            </button>
            </Link>
            
        </form>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;


    h1 {
        color: var(--header-text-color);
        margin-top: 8rem;
    }

    form {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 1rem;
    }

    h3 {
        margin-top: 1rem;
        color: var(--text-color);

    }

    label {
        width: 100%;
    }

    input {
            width: 100%;
            height: 50px;
            padding: 0 2rem 0 1rem;
            margin-top: 0.5rem;
            border: solid 1px var(--stroke-color);
            background: var(--highlight);
            color: var(--primary-font);
            border-radius: 20px;
            font-size: 1em;
            outline: none;
    }


    a {
        width: 100%;
    }

    button {
        width: 100%;
        height: 50px;
        display: grid;
        place-content: center;
        font-size: 1.2em;
        border: none;
        color: var(--white-color);
        background: var(--btn);
        margin-top: 1rem;

    }

    .btn-loading {
        opacity: 0.8;
    }

    .signup-btn {
        margin-top: 1.5rem;
        background: var(--btn);
        
    }

    .login-btn {
        margin-top: 1rem;
        background: var(--highlight-color);
        opacity: 0.8;
    }

    .line-through {
        width: 100%;
        margin-top: 1rem;
        display: grid;
        place-content: center;
}


@media only screen and (min-width: 768px) {
    form {
        width: 60%;
    }
}

@media only screen and (min-width: 992px) {
    
    form {
        width: 40%;
    }
}

`
export default SignupPage