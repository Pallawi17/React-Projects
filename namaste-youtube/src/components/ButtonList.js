import Button from "./Button"

// const buttonList = ["All", "javaScript"] // todo: crete buttons using array
const ButtonList = () => {
  return (
    <div className="flex">
     <Button name="All"/>
     <Button name="javaScript"/>
     <Button name="Music"/>
     <Button name="java"/>
     <Button name="Live"/>
     <Button name="News"/>
    </div>
  )
}

export default ButtonList
