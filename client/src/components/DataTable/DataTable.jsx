import { useContext, useState } from "react";
import "./DataTable.css"
import { HiDotsVertical } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify"
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthContext";
import { deleteDnsRecord } from "../../requestMethods";

const DataTable = ({ dns, setDns }) => {
    const { currentUser } = useContext(AuthContext)
    const [actions, setActions] = useState(false);


    const handleDelete = async (id) => {
        try {
            deleteDnsRecord(`/dns/${id}`, "delete", currentUser.token).then((res) => {
                if (res) {
                    toast.success(res);
                    setDns(dns.filter((items) => items._id !== id));
                }
            })

        } catch (error) {
            throw error
        }
    }

    return (
        <div >
            <h2>DNS Records</h2>
            <table style={{overflowX :"auto"}}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>Name</th>
                        <th>Record Type</th>
                        <th>Priority</th>
                        <th>Port</th>
                        <th>TTL</th>
                        <th>Version</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {dns?.map((t) => {
                        return (
                            <tr key={t._id}>
                                <td>{t._id.slice(0, 10)}</td>
                                <td>{t.username}</td>
                                <td>{t.name}</td>
                                <td>{t.record_type}</td>
                                <td>{t.priority}</td>
                                <td>{t.port}</td>
                                <td>{t.time_to_live}</td>
                                <td>{t.ip_version}</td>
                                {t.username === currentUser.username &&
                                    <td className="actions-td"><HiDotsVertical style={{ cursor: "pointer" }} onClick={() => setActions(t._id)} />
                                        {actions === t._id &&
                                            <div div className="actions" onMouseLeave={() => setActions(false)}>
                                                <Link to={`/editpage/${t._id}`}>
                                                    <li>Edit</li>
                                                </Link>
                                                <li onClick={() => handleDelete(t._id)}>Delete</li>
                                            </div>
                                        }
                                    </td>
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default DataTable