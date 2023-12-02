import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import useUserInfo from "./useUserInfo.js"

const useGuest = () => {
    const navigate = useNavigate()
    const userInfo = useUserInfo()

    useEffect(() => userInfo && navigate('/'), [navigate, userInfo])
}

export default useGuest