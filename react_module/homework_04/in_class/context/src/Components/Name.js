import { useContext } from "react";
import { NameContext } from "../context/ChangeName";

const Name = () => {
    const {name,setName} = useContext(NameContext);
    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <p>Name: {name}</p>
        </div>
    )
}

export default Name;