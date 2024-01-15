import { useState } from "react";

const Section = ({
    title,
    discription,
    isVisible,
    setIsVisible
  }) => {
    // const [isVisible, setIsVisible] = useState(false);
  return(
    < div className = "border m-2 p-2" >
      <div className="font-bold text-lg">{title}</div>
      {
        isVisible ? < button onClick = {() => setIsVisible(false)} > Hide </button>: 
        <button onClick={() => setIsVisible(true)}>Show</button >
        }
      
      
      {
        isVisible && < div > {
          discription
        } </div>}
    </div>
  )
}
const Instamart = () => {

  const [visibleSection, setVisibleSection] = useState("contacts");

  return (
    <div>
      <div className="text-lg font-bold">InstaMart</div>
      <Section title={"About Instamart"} 
        discription={"This is About section of instamart"}
        isVisible={visibleSection === "about"}
        setIsVisible={() =>setVisibleSection("about")}
      />
      <Section title={"Contact Instamart"} 
        discription = {
          "This is contact section of instamart"
        }
        isVisible={visibleSection === "contacts"}
          setIsVisible = {() =>
            setVisibleSection("contacts")
          }
      />
      {/* <AboutInstaMart />
      <DetailsOfInstaMart />
      <TeamOfInstaMart />
      <Product />
      <Careers /> */}
    </div>
  )
}

export default Instamart;