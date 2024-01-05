import {
    CloseIcon,
    ErrorIcon,
    Loader,
    LoaderContainer,
    SessionMessageContainer,
    SuccessIcon
} from "./SessionMessage.styled.js"

const SessionMessage = ({ status, message, clear }) => {
    return (
        <SessionMessageContainer clear={clear}>
            <section>
                {status === 'Error' ? <ErrorIcon /> : <SuccessIcon />}
                <div>
                    <h1>{status === 'Error' ? 'Error' : 'Success'}</h1>
                    <p>{message ?? 'Some random placeholder message.'}</p>
                </div>
                <CloseIcon />
            </section>
            <LoaderContainer status={status}>
                <Loader status={status} />
            </LoaderContainer>
        </SessionMessageContainer>
    )
}

export default SessionMessage