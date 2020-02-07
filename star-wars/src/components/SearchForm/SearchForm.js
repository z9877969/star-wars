import React from "react";
import { withRouter } from "react-router-dom";
import css from "./Search.module.css";

const options = {
  categories: ["films", "starships", "planets"]
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

    handlerGoBackHome = () => {
      const { history } = this.props;
      history.push("/films");
    };

    render() {
      return (
        <div>
          <button
            type="button"
            onClick={this.handlerGoBackHome}
            className={css.button}
          >
            Home
          </button>
          <form onSubmit={this.handlerSubmit}>
            <input type="input" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
        </div>
      );
    }
  }
);
