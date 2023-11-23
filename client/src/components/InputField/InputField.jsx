import { InputContainer } from "./InputField.styled.js"

/* Input field for any type */
const InputField = ({ getValue, error, label, type, name, id, placeholder }) => {
    return (
        <InputContainer error={error}>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} placeholder={placeholder}
                onChange={event => getValue(event.target.value)} />
        </InputContainer>
    )
}

export default InputField