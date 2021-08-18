import React, { Component } from "react";
import Photo from "./photo.jpg";
import "./Cards.css";
class Cards extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <div class="card row">
         <div class="col-lg"> 
          <div class="image-position">
            <img className="image" src={this.props.data.avatar}></img>
          </div>

          <div class="card-body">
            <div class="position">
              <h4>
                {this.props.data.first_name} {this.props.data.last_name}
              </h4>{" "}
            </div>
            <h6 class="mt-1">Id : {this.props.data.id}</h6>
            <h6 class="mt-1">Email : {this.props.data.email}</h6>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Cards;
