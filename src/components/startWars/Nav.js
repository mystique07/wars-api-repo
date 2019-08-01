import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: []
    };
  }

  componentDidMount() {
    //Fecth list of véhicules from SWAPI.co
    fetch(" https://swapi.co/api/planets/")
      .then(response => response.json())
      .then(json =>
        this.setState({
          planets: json.results
        })
      );
  }

  render() {
    return (
      <ul>
        {this.state.planets.map((planet, index) => {
          // planet.url : https://swapi.co/api/planets/1/
          const id = planet.url.split("/")[5];
          return (
            <li key={index}>
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                to={`/planets/${id}`}
              >
                {planet.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Nav;
