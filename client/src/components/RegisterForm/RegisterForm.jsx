import InputField from "../InputField/InputField.jsx"
import PasswordField from "../PasswordField/PasswordField.jsx"
import { FormButton, FormButtonIcon, FormContainer } from "./RegisterForm.styled.js"

/* Form for register authentication */
const RegisterForm = () => {
    return (
        <FormContainer>
            <InputField label={"Username*"} type={"text"} name={"username"} id={"username"} placeholder={"johnjohnson"} />
            <InputField label={"Email*"} type={"email"} name={"email"} id={"email"} placeholder={"johnjohnson@gmail.com"} />
            <PasswordField />
            <InputField label={"Confirm Password*"} type={"password"} name={"confirmPassword"} id={"confirmPassword"} placeholder={"Repeat your password"} />
            <FormButton type="submit">
                <FormButtonIcon />
                Register
            </FormButton>
        </FormContainer>
    )
}

export default RegisterForm