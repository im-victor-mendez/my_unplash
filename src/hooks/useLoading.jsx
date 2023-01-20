import { useState } from "react";

function UseLoading() {
    const [loading, setLoading] = useState(true)

    return { loading, loadingTrue, loadingFalse }

    function loadingTrue() { setLoading(true) }
    
    function loadingFalse() { setLoading(false) }
}

export default UseLoading