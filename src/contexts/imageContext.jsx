import { createContext, useContext, useState } from "react";

const imageContext = createContext()

export function useImage() {
    const context = useContext(imageContext)
    return context
}

function ImageProvider({ children }) {
    const [imageUid, setImageUid] = useState(null)

    return <imageContext.Provider value={{ imageUid, changeImageUid }}>{children}</imageContext.Provider>

    function changeImageUid(image) { setImageUid(image) }
}

export default ImageProvider