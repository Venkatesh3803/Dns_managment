import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SideBar from '../../components/sidebar/SideBar';
import Navber from '../../components/navber/Navber';
import { toast } from 'react-toastify';
import { getSingleDns, updateDns } from '../../requestMethods';
import { AuthContext } from '../../contextApi/AuthContext';
import Footer from '../../components/footer/Footer';
const Editpage = () => {
    const { currentUser } = useContext(AuthContext)
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    useEffect(() => {
        try {
            getSingleDns(`/dns/${id}`, "get").then((res) => {
                setInputs(res)
            })
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
            updateDns(`/dns/${id}`, "patch", inputs, currentUser.token).then((res) => {
                toast.success(res);
            })

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
                <div className="dns-form">
                    <h1>Edit Record</h1>
                    <form action="" onSubmit={handleUpdate}>
                        <div className="form-inputs">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="www.example.com" value={inputs.name} name="name" required onChange={handleChange} />
                        </div>
                        <div className="rows">
                            <div className="form-inputs">
                                <label htmlFor="">ip_version</label>
                                <select name="ip_version" id="" value={inputs.ip_version} onChange={handleChange}>
                                    <option value="">select</option>
                                    <option value="Ipv4">Ipv4</option>
                                    <option value="Ipv6">Ipv6</option>
                                </select>
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="">priority</label>
                                <select name="priority" id="" value={inputs.priority} onChange={handleChange}>
                                    <option value="">select</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="">Record_Type</label>
                            <select name="record_type" id="" value={inputs.record_type} onChange={handleChange}>
                                <option value="">select</option>
                                <option value="A">A</option>
                                <option value="AAAA">AAAA</option>
                                <option value="AFSDB">AFSBB</option>
                                <option value="APL">APL</option>
                                <option value="CAA">CAA</option>
                                <option value="CDNSKEY">CDNSKEY</option>
                                <option value="CDS">CDS</option>
                                <option value="CSYNC">CSYNC</option>
                                <option value="SVCB">SVCB</option>
                            </select>
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="">Port</label>
                            <input type="text" placeholder="0.00.212.22" value={inputs.port} name="port" onChange={handleChange} />
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="">Time to Live</label>
                            <input type="date" placeholder="12 feb 2024" value={inputs.time_to_live} name="time_to_live" onChange={handleChange} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Editpage