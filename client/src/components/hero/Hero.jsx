import { Link } from "react-router-dom";
import "./Hero.css"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextApi/AuthContext";
import DataTable from "../DataTable/DataTable";
import { getAllDns } from "../../requestMethods";
import BarChat from "../Charts/BarChart";
import PieCharts from "../Charts/PieChart";
import { IoSearch } from "react-icons/io5";
import { useDebounce } from 'use-debounce';


const Hero = () => {
  const { currentUser } = useContext(AuthContext)
  const [dns, setDns] = useState([]);
  const [alldns, setAllDns] = useState([]);
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("");
  const [ip, setIp] = useState("");

  const [value] = useDebounce(search, 500);

  useEffect(() => {
    try {
      getAllDns(`/dns/all`, "get").then((res) => {
        setAllDns(res)
      })
    } catch (error) {
      throw error
    }
  }, [])

  useEffect(() => {
    try {
      getAllDns(`/dns/all?ip=${ip}&name=${search}&priority=${priority}`, "get").then((res) => {
        setDns(res)
      })
    } catch (error) {
      throw error
    }
  }, [ip, priority, value])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='hero'>
      <div className="hero-heading">
        <h2>Wellcome {currentUser.username}</h2>
        <Link to={"/adddns"}>
          <button>Add Record</button>
        </Link>
      </div>
      <div className="hero-container">
        <div className="hero-top">
          <BarChat dns={alldns} />
          <PieCharts dns={alldns} />
        </div>
        <div className="hero-bottom">
          <div className="filters">
            <div className="search-box">
              <input type="text" placeholder="Search..." onChange={handleChange} />
              <IoSearch />
            </div>
            <div className="filter-right">
              <select name="" id="" onChange={(e) => setPriority(e.target.value)}>
                <option value="">Select priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <select name="" id="" onChange={(e) => setIp(e.target.value)}>
                <option value="">Select version</option>
                <option value="Ipv4">Ipv4</option>
                <option value="Ipv6">Ipv6</option>
              </select>
            </div>
          </div>
          <DataTable dns={dns} setDns={setDns} />
        </div>
      </div>
    </div>
  )
}

export default Hero