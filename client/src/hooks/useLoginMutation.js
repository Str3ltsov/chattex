import { useMutation } from 'react-query'
import axios from 'axios'

const useLoginMutation = () => {
    const login = async ({ email, password, rememberMe }) => {
        const { data } = await axios.post('http://localhost:4000/api/v1/auth/login',
            { email, password, rememberMe },
            { withCredentials: true }
        )
        return data
    }

    const { mutate, isLoading, isError, isSuccess } = useMutation({
        mutationFn: login,
        onError: (error) => {
            console.error(error)
        },
        onSuccess: (data) => {
            console.log(data)
        }
    })

    return { mutate, isLoading, isError, isSuccess }
}

export default useLoginMutation