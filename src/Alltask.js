import "./alltask.scss"
import Sidebar2 from "./components/Sidebar2"
import Navbar from "./components/Navbar"
import Tasktable from "./components/Tasktable"

const List = () => {
  return (
    <div className="list">
      <Sidebar2/>
      <div className="listContainer">
        <Navbar/>
        <Tasktable/>
      </div>
    </div>
  )
}

export default List