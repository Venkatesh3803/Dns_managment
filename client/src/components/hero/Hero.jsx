import { Link } from "react-router-dom";
import PieCharts from "../Charts/PieChart";
import TaskTable from "../taskTable/TaskTable"
import "./Hero.css"
import { GiOnTarget,GiProgression } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contextApi/AuthContext";
import { MdPendingActions } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";


const Hero = () => {
  const { currentUser } = useContext(AuthContext)
  const [tasks, setTasks] = useState([]);
  const [all, setAll] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    try {
      const fetchingTasks = async () => {
        const res = await axios.get(`http://localhost:5000/api/task/all?userid=${currentUser?._id}&status=${status}`);
        setTasks(res.data)
        const fulldata = await axios.get(`http://localhost:5000/api/task/all?userid=${currentUser._id}`);
        setAll(fulldata.data)
      }
      fetchingTasks();
    } catch (error) {
      throw error
    }
  }, [status])


  return (
    <div className='hero'>
      <div className="hero-heading">
        <h2>Wellcome {currentUser.username}</h2>
        <Link to={"/addtask"}>
          <button>Add Task</button>
        </Link>
      </div>
      <div className="hero-container">
        <div className="hero-top">
          <div className="hero-top-left">
            <div className="boxes" style={{ backgroundColor: "#fc852a" }} onClick={() => setStatus("")}>
              <GiOnTarget className="box-icons" />
              <h2>All Tasks</h2>
              <p>{all.length} tasks</p>
            </div>
            <div className="boxes" style={{ backgroundColor: "#e3fc2a" }} onClick={() => setStatus("progress")}>
              <GiProgression className="box-icons" />
              <h2>InProgess</h2>
              <p>{all.filter((item) => item.status === "progress").length} tasks</p>
            </div>
            <div className="boxes" style={{ backgroundColor: "#2afc2e" }} onClick={() => setStatus("completed")}>
              <AiOutlineFileDone className="box-icons" />
              <h2>Completed</h2>
              <p>{all.filter((item) => item.status === "completed").length} tasks</p>
            </div>
            <div className="boxes" style={{ backgroundColor: "#582afc" }} onClick={() => setStatus("pending")}>
              <MdPendingActions className="box-icons" />
              <h2>Pending</h2>
              <p>{all.filter((item) => item.status === "pending").length} tasks</p>
            </div>
            
          </div>
          <div className="hero-top-right">
            <PieCharts all={all}/>
          </div>
        </div>
        <div className="hero-bottom">
          <TaskTable tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  )
}

export default Hero