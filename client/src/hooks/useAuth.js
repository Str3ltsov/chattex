import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import useUserInfo from "./useUserInfo.js"

const useAuth = () => {
    const navigate = useNavigate()
    const userInfo = useUserInfo()

    useEffect(() => {
        if (!userInfo || userInfo.expirationTimestamp < new Date().getTime()) {
            navigate('/login')
        }
    }, [navigate, userInfo])
}

export default useAuth