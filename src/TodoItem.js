import "./TodoItem.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${
                    props.completed && "Icon-check--active"
                }`}
                onClick={props.onComplete}
            >
                <FaRegCheckCircle />
            </span>
            <p
                className={`TodoItem-p ${
                    props.completed && "TodoItem-p--complete"
                }`}
            >
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <MdDeleteOutline />
            </span>
        </li>
    );
}
export { TodoItem };
