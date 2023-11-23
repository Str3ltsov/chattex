import { useSelector } from "react-redux"

const useUserInfo = () => {
    const { userInfo } = useSelector(state => state.auth)

    return userInfo
}

export default useUserInfo