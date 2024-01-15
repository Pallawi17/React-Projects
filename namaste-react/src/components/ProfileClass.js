import React from "react";

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }
  
  componentDidMount(){
    console.log("componentDidMount");
  }

  render(){
    return (
      <div>
        < h1 > Profile class based component </h1>
        <p>name: {this.props.name}</p>
        <p>count: {this.state.count}</p>
        {
          // we cannot mutate state directly
          //never do this ==> this.state = something
        }
        <button onClick={() => this.setState({
          count: 1
        })}>setCount</button>
      </div>
    )
  }
}

export default Profile;