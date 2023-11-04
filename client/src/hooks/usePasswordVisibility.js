import { useState } from "react"

const usePasswordVisibility = (defaultState = false) => {
    const [visibilty, setVisibilty] = useState(defaultState)

    const setVisibility = () => setVisibilty((prev) => !prev)

    return { visibilty, setVisibility }
}

export default usePasswordVisibility