import { useState } from "react";

export default function useToggleState(initVal = false) {
    const [state, setState] = useState(initVal)
    const toggle = () => setState(!state)

    return [state, toggle]
}