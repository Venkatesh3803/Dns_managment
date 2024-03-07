import { useContext, useState } from "react"
import "./AddDnsForm.css"
import { AuthContext } from "../../contextApi/AuthContext"
import { toast } from "react-toastify"
import { createDns } from "../../requestMethods"

const AddDnsForm = () => {
    const { currentUser } = useContext(AuthContext)
    const [inputs, setInputs] = useState({})
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        const data = {
            username: currentUser.username,
            ...inputs
        }

        try {
            createDns("/dns/create", "post", data, currentUser.token).then((res) => {
                if (res) {
                    toast.success("Created Sucessfully")
                }
            })
        } catch (error) {
            throw error
        }
    }
    return (
        <div className="dns-form">
            <h1>Add New DNS Record</h1>
            <p>Use the following form to add any record to your DNS Table</p>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="www.example.com"  name="name" required onChange={handleChange} />
                </div>
                <div className="rows">
                    <div className="form-inputs">
                        <label htmlFor="">ip_version</label>
                        <select name="ip_version" id="" required onChange={handleChange}>
                            <option value="">select</option>
                            <option value="Ipv4">Ipv4</option>
                            <option value="Ipv6">Ipv6</option>
                        </select>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="">priority</label>
                        <select name="priority" id="" requiredonChange={handleChange}>
                            <option value="">select</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>
                <div className="form-inputs">
                    <label htmlFor="">Record_Type</label>
                    <select name="record_type" id="" required onChange={handleChange}>
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
                    <input type="text" placeholder="0.00.212.22" name="port" required onChange={handleChange} />
                </div>
                <div className="form-inputs">
                    <label htmlFor="">Time to Live</label>
                    <input type="date" placeholder="12 feb 2024" required name="time_to_live" onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddDnsForm