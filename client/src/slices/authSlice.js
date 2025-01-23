import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { url} from '../url/url'

const storedAuths = () => {
    const checkAuths = localStorage.getItem('storedAuths');
        if (checkAuths) {
          return JSON.parse(localStorage.getItem('storedAuths'))
        } else {
          return []
        }
  }

const initialState = {
    loading: false,

    // login 
    loginInputs: {
        email: '',
        password: '',
    },
    loginLoad: false,
    loginError: false,

    // signup 
    signupInputs: {
        email: '',
        password: '',
        role: ''
    },
    signupLoad: false,
    signupError: false,

    // logout 
    logoutLoad: false,
    logoutError: false,
    logoutErrorMsg: '',

    // error message 
    errorMessage: '',

    // user
    user: [],
    isAuthenticated: false,
    token: storedAuths()
}

export const login = createAsyncThunk(
    'actions/login',
    async (payload, thunkAPI) => {
      const { email, password } = payload
      try {
        const resp = await axios.post(
          `${url}/api/login/`,
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        )
        window.location.href = '/'
        
        return { response: resp, status: 'success' }
      } catch (error) {
        return {
          response: error.response.data,
          status: 'error',
          code: error.response.status,
        }
      }
    }
  )

  export const signup = createAsyncThunk(
    'actions/signup',
    async (payload, thunkAPI) => {
      const { email, password, role} = payload
      try {
        const resp = await axios.post(
          `${url}/api/signup/`,
          {
            email,
            password,
            role
          },
          {
            withCredentials: true,
          }
        )
        window.location.href = '/login'
        return { response: resp, status: 'success' }
      } catch (error) {
        return {
          response: error.response.data,
          status: 'error',
          code: error.response.status,
        }
      }
    }
  )

  

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loadingState: (state, action) => {
            state.loading = true
        },
        fillAuthInputs: (state, action) => {
            switch (action.payload.type) {
                case 'login':
                    const {email, password} = action.payload
                    state.loginInputs.email = email
                    state.loginInputs.password = password
                    break;
                case 'signup':
                    const {email: userEmail, password: userPassword, role} = action.payload
                    state.signupInputs.email = userEmail
                    state.signupInputs.password = userPassword
                    state.signupInputs.role = role
                    break;
                default:
                    break;
            }
          },
      
    },
    extraReducers(builder) {
        builder
        // login
        .addCase(login.pending, (state, action) => {
            state.loginLoad = true
            state.loginError = false
          })
          .addCase(login.fulfilled, (state, action) => {
            state.loginLoad = true
            const { status, code, response } = action.payload
            if (code === 500) {
              state.loginLoad = false
              state.loginError = true
              state.errorMessage = `Can't login due to network`

            } else if (status === 'success') {
              state.loginLoad = false
              state.loginError = false 
              localStorage.setItem(
                'storedAuths',
                JSON.stringify(response.data)
              );      
              state.token = state.token.push(response.data)
              
              
            } else {
              state.loginLoad = false
              state.loginError = true
              state.errorMessage = 'Could not login'           
            }
          })
          .addCase(login.rejected, (state, action) => {
            state.loginLoad = false
            state.loginError = true
            state.errorMessage = 'Unable to login'
          })

          // signup
          .addCase(signup.pending, (state, action) => {
            state.signupLoad = true
            state.signupError = false
          })
          .addCase(signup.fulfilled, (state, action) => {
            state.signupLoad = true
        
            const { status, code, response } = action.payload
            if (code === 500) {
              state.signupLoad = false
              state.signupError = true
              state.errorMessage = `Can't login due to network`

            } else if (status === 'success') {
              state.signupError = false
              state.signupLoad = false

            } else {
              state.signupLoad = false
              state.signupError = true
              state.errorMessage = 'Please fill up all credentials properly'
            }
          })
          .addCase(signup.rejected, (state, action) => {
            state.signupLoad = false
            state.signupError = true
            state.errorMessage = 'Unable to signup'
          })


    }
})

export default authSlice.reducer
export const {
  loadingState,
  fillAuthInputs
} = authSlice.actions