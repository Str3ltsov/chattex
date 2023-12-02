import { useState } from "react"
import { useNavigate } from "react-router-dom"
import InputField from "../InputField/InputField.jsx"
import ButtonLoader from "../ButtonLoader/ButtonLoader.jsx"
import ButtonCheckMark from "../ButtonCheckMark/ButtonCheckMark.jsx"
import { FormButton, FormButtonIcon, FormContainer } from "./ResetPasswordForm.styled.js"
import { useResetPasswordMutation } from "../../redux/slices/authApiSlice.js"

/* Form for reset password authentication */
const ResetPasswordForm = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const [resetPassword, { isLoading, isError, isSuccess }] = useResetPasswordMutation()

    // useGuest()

    const getResetPasswordToken = () => {
        const pathname = window.location.pathname
        const names = pathname.split('/')

        return names[names.length - 1]
    }

    const getPassword = passwordValue => setPassword(passwordValue)
    const getConfirmPassword = confirmPasswordValue => setConfirmPassword(confirmPasswordValue)

    const submitForm = async event => {
        event.preventDefault()
        try {
            const resetPasswordToken = getResetPasswordToken()
            const { status, message } =
                await resetPassword({ resetPasswordToken, password, confirmPassword }).unwrap()

            navigate('/login')
            console.info(status, message)
        }
        catch ({ data }) {
            console.error(data)
        }
    }

    return (
        <FormContainer>
            <InputField getValue={getPassword} error={isError.toString()} label={"New Password*"}
                type={"text"} name={"password"} id={"password"} placeholder={"6+ characters required"} />
            <InputField getValue={getConfirmPassword} error={isError.toString()} label={"Confirm New Password*"}
                type={"text"} name={"confirmPassword"} id={"confirmPassword"} placeholder={"Repeat your new password"} />
            <FormButton type="button" onClick={submitForm} disabled={isLoading || isSuccess}>
                {isLoading && <ButtonLoader />}
                {isSuccess && <ButtonCheckMark />}
                {
                    !isLoading && !isSuccess &&
                    <>
                        <FormButtonIcon />
                        Reset Password
                    </>
                }
            </FormButton>
        </FormContainer>
    )
}

export default ResetPasswordForm