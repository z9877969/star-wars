import React from "react";
import { fetchEntities } from "../services/fetchAPI";
import EntitiesList from "../components/EntitiesList/EntitiesList";

export default class FilmsPage extends React.Component {
  state = {
    response: [],
    entitiesValue: "films"
  };

  componentDidMount() {
    fetchEntities(this.state.entitiesValue).then(res =>
      this.setState({ response: res })
    );
  }

  render() {
    const { response } = this.state;

    const entities = response ? response : null;

    return (
      <div>
        <EntitiesList entitiesArr={entities} name="title" />
      </div>
    );
  }
}
