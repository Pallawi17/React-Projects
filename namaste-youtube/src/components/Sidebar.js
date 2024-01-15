import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-64">
      <Link to="/"><div className="text-lg">Home</div></Link>
      <div className="text-lg">shorts</div>
      <div className="text-lg">Subscription</div>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
