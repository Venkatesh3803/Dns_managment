import { useState } from "react";
import "./TaskTable.css"
import { HiDotsVertical } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify"
import { Link } from "react-router-dom";

const TaskTable = ({ tasks, setTasks }) => {

    const [actions, setActions] = useState(false);
    const [status, setStatus] = useState("")


    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/task/${id}`)
            if (res.status === 200) {
                toast.success(res.data);
                setTasks(tasks.filter((items) => items._id !== id));
            }
        } catch (error) {
            throw error
        }
    }


    return (
        <div >
            <h2>Tast Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map((t) => {
                        return (
                            <tr key={t._id}>
                                <td>{t._id.slice(0, 10)}</td>
                                <td>{t.title}</td>
                                <td>{t.description}</td>
                                <td>
                                    {t.status}
                                </td>
                                <td className="actions-td"><HiDotsVertical style={{ cursor: "pointer" }} onClick={() => setActions(t._id)} />
                                    {actions === t._id &&
                                        <div className="actions" onMouseLeave={() => setActions(false)}>
                                            <Link to={`/editpage/${t._id}`}>
                                                <li>Edit</li>
                                            </Link>
                                            <li onClick={() => handleDelete(t._id)}>Delete</li>
                                        </div>
                                    }
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default TaskTable