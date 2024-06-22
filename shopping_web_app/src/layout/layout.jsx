import { Outlet, Link } from "react-router-dom"
import "./layout.css";
import { SiteHeader } from "./siteHeader";

export function Layout() {
    // return (
    //     <>
    //         <header className="site_header">
    //         <nav>
    //             <ul>
    //             <li>
    //                 <Link to="/">Home</Link>
    //             </li>
    //             <li>
    //                 <Link to="/about">About</Link>
    //             </li>
    //             <li>
    //                 <Link to="/createList">Create</Link>
    //             </li>
    //             <li>
    //                 <Link to="/getList">Get List</Link>
    //             </li>
    //             </ul>
    //         </nav>
    //         </header>
    //     <Outlet> </Outlet>
    //     </>
    // )
    return (<>
    <SiteHeader></SiteHeader>
    <Outlet></Outlet>
    </>
    )
}