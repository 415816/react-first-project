import { NavLink } from "react-router-dom";
import di from "./DialogItem.module.css";

const DialogItem = (props) => {
    return (
        <div className={di.dialog}>
            <NavLink to={"/Messages/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;