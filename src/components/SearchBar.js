import React from "react"
import useInputState from "../hooks/useInputState"

function SearchBar() {
    const [value, changeVal] = useInputState("")
    return (
        <div className="SearchBar-main">
            <form>
                <div>
                    <input className="SearchBar-fill" value={value} onChange={changeVal} />
                </div>
                <div>
                    <button>
                        <div>
                            <span></span>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar