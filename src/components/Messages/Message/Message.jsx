import mesa from "./Message.module.css";



const Message = (props) => {
    return (
        <div className={mesa.message}>{props.textMessage}</div>
    );
}

export default Message;