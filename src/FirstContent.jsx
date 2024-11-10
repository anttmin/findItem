import { createContext, useState } from "react";


export let FirstContent = createContext(null);

const FirstContentProvider = (props) => {
    let [name, setName] = useState('This is')
    return (
        <FirstContent.Provider value={{ name }}>
            {props.children}
        </FirstContent.Provider>
    )
}

export default FirstContentProvider