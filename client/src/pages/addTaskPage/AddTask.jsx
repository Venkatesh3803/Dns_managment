import React from 'react'
import Navber from '../../components/navber/Navber'
import SideBar from '../../components/sidebar/SideBar'
import AddTaskForm from '../../components/addTaskForm/AddTaskForm'

const AddTask = () => {
    return (
        <div className="home-page">
            <div className="home-left">
                <SideBar />
            </div>
            <div className="home-right">
                <Navber />
                <AddTaskForm />
            </div>
        </div>
    )
}

export default AddTask