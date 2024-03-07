import React, { useContext, useEffect, useState } from 'react'
import "./ProfilePage.css"
import Navber from '../../components/navber/Navber'
import SideBar from '../../components/sidebar/SideBar'
import DataTable from '../../components/DataTable/DataTable'
import { useParams } from 'react-router-dom'
import { getAllDns, getSingleUser, updateUser } from '../../requestMethods'
import { AuthContext } from '../../contextApi/AuthContext'
import { toast } from 'react-toastify'


const ProfilePage = () => {
    const { currentUser } = useContext(AuthContext)
    const [inputs, setInputs] = useState({})
    const [dns, setDns] = useState([])
    const { id } = useParams()


    useEffect(() => {
        try {
            getSingleUser(`/user/${id}`, "get").then((res) => {
                setInputs(res)
            })
            getAllDns('/dns/all').then((res) => {
                setDns(res.filter((d) => d.username === currentUser.username))
            })
        } catch (error) {
            throw error
        }
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault()
        try {
            updateUser(`/user/${id}`, "patch", inputs, currentUser.token).then((res) => {
                toast.success(res)
            })
        } catch (error) {
            throw error
        }
    }


    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <div className="home-page">
            <div className="home-left">
                <SideBar />
            </div>
            <div className="home-right">
                <Navber />
                <div className="profile-container">
                    <div className="profile-top">
                        <h2>Profile Info</h2>
                        <form action="" onSubmit={handleUpdate}>
                            <div className="rows">
                                <div className="form-inputs">
                                    <input type="text" placeholder="first name" value={inputs?.firstname} name="firstname" onChange={handleChange} />
                                </div>
                                <div className="form-inputs">
                                    <input type="text" placeholder="last name" value={inputs?.lastname} name="lastname" onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-inputs">
                                <input type="email" placeholder="example@gmail.com" value={inputs?.email} name="email" onChange={handleChange} />
                            </div>
                            <div className="form-inputs">
                                <input type="text" readOnly value={inputs?.username} />
                            </div>
                            <div className="rows">
                                <div className="form-inputs">
                                    <input type="text" placeholder="City" value={inputs?.city} name="city" onChange={handleChange} />
                                </div>
                                <div className="form-inputs">
                                    <input type="text" placeholder="501235" maxLength={6} value={inputs?.postal} name="postal" onChange={handleChange} />
                                </div>
                                <div className="form-inputs">
                                    <input type="text" placeholder="Country" value={inputs?.country} name="country" onChange={handleChange} />
                                </div>

                            </div>
                            <button type="submit">Update</button>
                        </form>
                    </div>
                    <div className="profile-buttom">
                        <DataTable dns={dns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage