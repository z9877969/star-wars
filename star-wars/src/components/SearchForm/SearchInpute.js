import React from "react";

export default class InputeForm extends React.Component {
  state = {
    inputValue: ""
  };
  render() {
    return (
      <div>
        <form>
          <input type="input"></input>
        </form>
      </div>
    );
  }
}
