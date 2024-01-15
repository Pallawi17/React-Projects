import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunction from "./Profile";

const About = () => {
  return (
    <>
    {/* <Outlet /> */}
    <div>About us page</div>
    <ProfileClass name={"Pallawi"}/>
    <ProfileFunction name={"Chiku"}/>
    </>
  )
}

export default About;