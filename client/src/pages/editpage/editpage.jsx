import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SideBar from '../../components/sidebar/SideBar';
import Navber from '../../components/navber/Navber';
import { toast } from 'react-toastify';
const Editpage = () => {

    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    useEffect(() => {
        try {
            const fetchingTask = async () => {
                const res = await axios.get(`http://localhost:5000/api/task/${id}`);
                setInputs(res.data)
            }
            fetchingTask()
        } catch (error) {
            throw error
        }
    }, [id])

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.patch(`http://localhost:5000/api/task/${id}`, inputs);
            if (res.status === 200) {
                toast.success(res.data);
            }
        } catch (error) {
            throw error
        }
    }
    return (
        <div className="home-page">
            <div className="home-left">
                <SideBar />
            </div>
            <div className="home-right">
                <Navber />
                <div className="add-tast">
                    <form action="" onSubmit={handleUpdate}>
                        <h2 style={{ fontWeight: "600", textAlign: "center" }}>Fill Task Details</h2>
                        <div className="form-inputs">
                            <label htmlFor="">Title</label>
                            <input type="text" placeholder="Title" name="title" value={inputs.title} onChange={handleChange} />
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="">description</label>
                            <textarea type="text" placeholder="description" name="description" value={inputs.description} onChange={handleChange} />
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="">status</label>
                            <select name="status" id="" onChange={handleChange} value={inputs.status}>
                                <option value="">select</option>
                                <option value="started">Started</option>
                                <option value="pending">pending</option>
                                <option value="progress">Progress</option>
                                <option value="completed">Completed</option>

                            </select>
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="">End_Date</label>
                            <input type="text" placeholder="12 feb 2024" name="end_date" value={inputs.end_date} onChange={handleChange} />
                        </div>
                        <button type="submit">update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Editpage