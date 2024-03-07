import React from 'react'
import Navber from '../../components/navber/Navber'
import SideBar from '../../components/sidebar/SideBar'
import AddDnsForm from '../../components/addDnsForm/AddDnsForm'


const AddDns = () => {
    return (
        <div className="home-page">
            <div className="home-left">
                <SideBar />
            </div>
            <div className="home-right">
                <Navber />
                <AddDnsForm />
            </div>
        </div>
    )
}

export default AddDns