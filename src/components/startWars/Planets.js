import React, { Component } from "react";

export default class Planet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.planetId;
    const savedPlanet = localStorage.getItem(`planet-${id}`);

    if (savedPlanet) {
      this.setState({
        planet: JSON.parse(savedPlanet)
      });
      return;
    }
    fetch(`https://swapi.co/api/planets/${id}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          planet: json
        });
        localStorage.setItem(`planet-${id}`, JSON.stringify(json));
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const prevPropsString = JSON.stringify(prevProps.match.params.planetId);
    const updatePropsString = JSON.stringify(this.props.match.params.planetId);

    if (prevPropsString !== updatePropsString) {
      //Fetch Planet specific data from API
      const id = this.props.match.params.planetId;
      const savedPlanet = localStorage.getItem(`planet-${id}`);

      if (savedPlanet) {
        this.setState({
          planet: JSON.parse(savedPlanet)
        });
        return;
      }
      fetch(`https://swapi.co/api/planets/${id}/`)
        .then(response => response.json())
        .then(json => {
          this.setState({
            planet: json
          });
          localStorage.setItem(`planet-${id}`, JSON.stringify(json));
        });
    }
  }
  render() {
    const { planet } = this.state;
    return (
      <>
        <div>
          <h3>Name: {planet.name}</h3>
          <p>Diametre: {planet.diameter}</p>
          <p>Rotation: {planet.rotation_period}</p>
          <p>Orbital_Period: {planet.orbital_period}</p>
          <p>Climat: {planet.climate}</p>
        </div>
      </>
    );
  }
}
