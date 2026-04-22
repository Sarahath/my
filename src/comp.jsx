import { Component } from "react";

export default class Comp extends Component {
  render() {
    let { name,age } = this.props;
    
    return (
      <>
        <p>{name}{age}</p>
      </>
    );
  }
}
