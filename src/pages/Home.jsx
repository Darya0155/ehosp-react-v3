import { Link, Outlet } from "react-router-dom";

const Home=()=>{

    return(<>
        <Link to="A">A</Link>
        <Link to="B">B</Link>
        <Outlet/>
    </>)
}
export default Home;