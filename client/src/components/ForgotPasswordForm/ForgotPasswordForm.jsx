import { useState } from "react"
import InputField from "../InputField/InputField.jsx"
import ButtonLoader from "../ButtonLoader/ButtonLoader.jsx"
import ButtonCheckMark from "../ButtonCheckMark/ButtonCheckMark.jsx"
import { FormButton, FormButtonIcon, FormContainer } from "./ForgotPasswordForm.styled.js"
import { useForgotPasswordMutation } from "../../redux/slices/authApiSlice.js"

/* Form for forgot password authentication */
const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('')

    const [forgotPassword, { isLoading, isError, isSuccess }] = useForgotPasswordMutation()

    // useGuest()

    const getEmail = emailValue => setEmail(emailValue)

    const submitForm = async event => {
        event.preventDefault()
        try {
            const { status, message } = await forgotPassword({ email }).unwrap()

            console.info(status, message)
        }
        catch ({ data }) {
            console.error(data)
        }
    }

    return (
        <FormContainer>
            <InputField getValue={getEmail} error={isError.toString()} label={"Email*"}
                type={"email"} name={"email"} id={"email"} placeholder={"johnjohnson@gmail.com"} />
            <FormButton type="button" onClick={submitForm}>
                {isLoading && <ButtonLoader />}
                {isSuccess && <ButtonCheckMark />}
                {
                    !isLoading && !isSuccess &&
                    <>
                        <FormButtonIcon />
                        Send Email
                    </>
                }
            </FormButton>
        </FormContainer>
    )
}

export default ForgotPasswordForm