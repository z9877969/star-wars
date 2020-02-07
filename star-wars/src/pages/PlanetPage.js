import React from "react";
import { fetchEntity } from "../services/fetchAPI";
import Entity from "../components/Entity/Entity";

export default class PlanetPage extends React.Component {
  state = {
    entity: null
  };

  componentDidMount() {
    const { location, match } = this.props;

    if (location.match) {
      const url = location.match.url;
      fetchEntity(url).then(res => {
        this.setState({ entity: res.data });
        localStorage.setItem(match.path, JSON.stringify(res.data));
      });
    } else {
      this.setState({ entity: JSON.parse(localStorage.getItem(match.path)) });
    }
  }

  render() {
    const { entity } = this.state;
    const { match } = this.props;

    return <div>{entity && <Entity entity={entity} match={match} />}</div>;
  }
}
