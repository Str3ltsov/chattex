import InputField from "../InputField/InputField.jsx"
import { FormButton, FormButtonIcon, FormContainer } from "./ForgotPasswordForm.styled.js"

/* Form for forgot password authentication */
const ForgotPasswordForm = () => {
    return (
        <FormContainer>
            <InputField label={"Email*"} type={"email"} name={"email"} id={"email"} placeholder={"johnjohnson@gmail.com"} />
            <FormButton type="submit">
                <FormButtonIcon />
                Send Email
            </FormButton>
        </FormContainer>
    )
}

export default ForgotPasswordForm