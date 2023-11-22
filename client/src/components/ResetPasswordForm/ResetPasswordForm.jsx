import InputField from "../InputField/InputField.jsx"
import { FormButton, FormButtonIcon, FormContainer } from "./ResetPasswordForm.styled.js"

/* Form for reset password authentication */
const ResetPasswordForm = () => {
    return (
        <FormContainer>
            <InputField label={"New Password*"} type={"text"} name={"password"} id={"password"} placeholder={"6+ characters required"} />
            <InputField label={"Confirm New Password*"} type={"text"} name={"confirmPassword"} id={"confirmPassword"} placeholder={"Repeat your new password"} />
            <FormButton type="submit">
                <FormButtonIcon />
                Reset Password
            </FormButton>
        </FormContainer>
    )
}

export default ResetPasswordForm