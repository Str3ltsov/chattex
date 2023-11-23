import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
    FormContainer,
    FormCheckboxAndLinkContainer,
    FormButton,
    FormButtonIcon,
} from "./LoginForm.styled.js"
import InputField from '../../components/InputField/InputField.jsx'
import PasswordField from '../../components/PasswordField/PasswordField.jsx'
import ButtonLoader from '../../components/ButtonLoader/ButtonLoader.jsx'
import ButtonCheckMark from '../../components/ButtonCheckMark/ButtonCheckMark.jsx'
import { useLoginMutation } from '../../redux/slices/authApiSlice.js'
import { setUserInfo } from '../../redux/slices/authSlice.js'

/* Form for login authentication */
const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading, isError, isSuccess }] = useLoginMutation()

    const getEmail = emailValue => setEmail(emailValue)
    const getPassword = passwordValue => setPassword(passwordValue)
    const handleRememberMe = () => setRememberMe(prev => !prev)

    const submitForm = async event => {
        event.preventDefault()

        try {
            const { status, message, data } = await login({ email, password, rememberMe }).unwrap()

            dispatch(setUserInfo({ ...data }))
        }
        catch ({ data }) {
            console.error(data)
        }
    }

    return (
        <FormContainer>
            <InputField getValue={getEmail} error={isError.toString()} label={"Email*"} type={"email"}
                name={"email"} id={"email"} placeholder={"johnjohnson@gmail.com"} />
            <PasswordField getValue={getPassword} error={isError.toString()} />
            <FormCheckboxAndLinkContainer>
                <label htmlFor="rememberMe">
                    <input type="checkbox" name="rememberMe" id="rememberMe" onChange={handleRememberMe} />
                    <span>&#10003;</span>
                    Remember me for 30 days
                </label>
                <a href="/forgot-password">Forgot Password?</a>
            </FormCheckboxAndLinkContainer>
            <FormButton type="button" onClick={submitForm} disabled={isLoading || isSuccess}>
                {isLoading && <ButtonLoader />}
                {isSuccess && <ButtonCheckMark />}
                {
                    !isLoading && !isSuccess &&
                    <>
                        <FormButtonIcon />
                        Login
                    </>
                }
            </FormButton>
        </FormContainer>
    )
}

export default LoginForm