import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-orange-600 text-black text-sm flex items-center px-4 py-2 space-x-2 app-container">
            <span className="font-bold">
              Hacker News
            </span>
            <Link to="/news">New</Link>
            <span>|</span>
            <Link to="/past">Past</Link>
            <span>|</span>
            <Link to="/comment">Comment</Link>
            <span>|</span>
            <Link to="/ask">Ask</Link>
            <span>|</span>
            <Link to="/show">Show</Link>
            <span>|</span>
            <Link to="/jobs">Jobs</Link>
            <span>|</span>
            <Link to="/submit">Submit</Link>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </>
  )
};

export default Header;