import React, { useContext } from "react"
import { FirstContent } from "../FirstContent"


const Child1 = () => {
   let {name} = useContext(FirstContent)

    return (
        <div>
            {name} For Child1
        </div>
    )
}

export default Child1