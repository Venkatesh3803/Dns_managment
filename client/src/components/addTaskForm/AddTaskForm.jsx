import { useContext, useState } from "react"
import "./AddTaskForm.css"
import axios from "axios"
import { AuthContext } from "../../contextApi/AuthContext"
import { toast } from "react-toastify"

const AddTaskForm = () => {
    const { currentUser } = useContext(AuthContext)
    const [inputs, setInputs] = useState({})
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            userId: currentUser._id,
            ...inputs
        }

        try {
            const res = await axios.post("http://localhost:5000/api/task/create", data)
            if (res.status === 201) {
                toast.success("Task Created")
            }
        } catch (error) {
            throw error
        }
    }
    return (
        <div className="add-tast">
            <form action="" onSubmit={handleSubmit}>
                <h2 style={{ fontWeight: "600", textAlign: "center" }}>Fill Task Details</h2>
                <div className="form-inputs">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Title" name="title" required onChange={handleChange} />
                </div>
                <div className="form-inputs">
                    <label htmlFor="">description</label>
                    <textarea type="text" placeholder="description" required name="description" onChange={handleChange} />
                </div>
                <div className="form-inputs">
                    <label htmlFor="">status</label>
                    <select name="status" id="" onChange={handleChange}>
                        <option value="">select</option>
                        <option value="started">Started</option>
                        <option value="pending">pending</option>
                        <option value="progress">Progress</option>
                        <option value="completed">Completed</option>

                    </select>
                </div>
                <div className="form-inputs">
                    <label htmlFor="">End_Date</label>
                    <input type="text" placeholder="12 feb 2024" name="end_date" onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddTaskForm