import { useState } from "react";

function UseLoading() {
    const [loading, setLoading] = useState(true)

    return { loading, loadingTrue, loadingFalse, loadingNegation }

    function loadingTrue() { setLoading(true) }
    
    function loadingFalse() { setLoading(false) }

    function loadingNegation() { setLoading(!loading) }
}

export default UseLoading