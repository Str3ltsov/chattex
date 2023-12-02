import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import InputField from "../InputField/InputField.jsx"
import PasswordField from "../PasswordField/PasswordField.jsx"
import { FormButton, FormButtonIcon, FormContainer } from "./RegisterForm.styled.js"
import ButtonLoader from "../ButtonLoader/ButtonLoader.jsx"
import ButtonCheckMark from "../ButtonCheckMark/ButtonCheckMark.jsx"
import { useRegisterMutation } from "../../redux/slices/authApiSlice.js"

/* Form for register authentication */
const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const [register, { isLoading, isError, isSuccess }] = useRegisterMutation()

    const getUsername = usernameValue => setUsername(usernameValue)
    const getEmail = emailValue => setEmail(emailValue)
    const getPassword = passwordValue => setPassword(passwordValue)
    const getConfirmPassword = confirmPasswordValue => setConfirmPassword(confirmPasswordValue)

    const submitForm = async event => {
        event.preventDefault()
        try {
            const { status, message } =
                await register({ username, email, password, confirmPassword }).unwrap()

            navigate('/login')
            console.info(status, message)
        }
        catch ({ data }) {
            console.error(data)
        }
    }

    return (
        <FormContainer>
            <InputField getValue={getUsername} error={isError.toString()} label={"Username*"} type={"text"}
                name={"username"} id={"username"} placeholder={"johnjohnson"} />
            <InputField getValue={getEmail} error={isError.toString()} label={"Email*"} type={"email"}
                name={"email"} id={"email"} placeholder={"johnjohnson@gmail.com"} />
            <PasswordField getValue={getPassword} error={isError.toString()} />
            <InputField getValue={getConfirmPassword} error={isError.toString()} label={"Confirm Password*"} type={"password"}
                name={"confirmPassword"} id={"confirmPassword"} placeholder={"Repeat your password"} />
            <FormButton type="button" onClick={submitForm} disabled={isLoading || isSuccess}>
                {isLoading && <ButtonLoader />}
                {isSuccess && <ButtonCheckMark />}
                {
                    !isLoading && !isSuccess &&
                    <>
                        <FormButtonIcon />
                        Register
                    </>
                }
            </FormButton>
        </FormContainer>
    )
}

export default RegisterForm