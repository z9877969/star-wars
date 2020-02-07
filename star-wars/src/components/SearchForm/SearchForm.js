import React from "react";
import { withRouter } from "react-router-dom";

const options = {
  categories: ["films"]
};

export default withRouter(
  class InputeForm extends React.Component {
    state = {
      inputQuery: "",
      queryResponseArr: []
    };

    handlerSubmit = e => {
      e.preventDefault();
      const { history } = this.props;

      const inputQuery = e.target.children[0].value;

      if (inputQuery)
        return history.push({
          pathname: "/search",
          search: `categories=${options.categories}&&q=${inputQuery}`
        });
    };

    render() {
      return (
        <div>
          <form onSubmit={this.handlerSubmit}>
            <input type="input" placeholder="Input film..." />
            <button type="submit">Search</button>
          </form>
        </div>
      );
    }
  }
);
