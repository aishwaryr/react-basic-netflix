// @flow

import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends Component {
  // This will prevent the comp from updating on render as it doesn't need to, this improves performance
  // Will need to remove this if state is added to this comp, eg- some field is coming from API. Although condition can be added to update only when that field needs to update.
  shouldComponentUpdate() {
    return false;
  }
  props: Show;
  render() {
    return (
      <Wrapper to={`/details/${this.props.imdbID}`}>
        <Image
          src={`/public/img/posters/${this.props.poster}`}
          alt={`${this.props.title} Show Poster`}
        />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}

export default ShowCard;
