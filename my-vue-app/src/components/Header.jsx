import { useDispatch, useSelector } from "react-redux";
import { setName } from "../redux/nameSlice";

export const Header = () =>{
const dispatch = useDispatch();
const name = useSelector((state) => state.name.name);

return (
    <div>
        <h2>{name} ToDo Lista</h2>

        <br />
        <input
            type="text"
            placeholder="Enter your name" 
            id="nameValue"
        />
        <button
            onClick={() => {
                dispatch(setName(document.getElementById("nameValue").value));
            }}
        >
            Set Name
        </button>
    </div>
    );

};