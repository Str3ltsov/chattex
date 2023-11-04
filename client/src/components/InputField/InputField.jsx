import { InputContainer } from "./InputField.styled.js"

/* Input field for any type */
const InputField = ({ label, type, name, id, placeholder }) => {
    return (
        <InputContainer>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} />
        </InputContainer>
    )
}

export default InputField