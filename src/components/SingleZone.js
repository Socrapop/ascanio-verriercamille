import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class SingleZone extends Component {
  onEditClick = () => {
    this.props.onEdit(this.props.zone, this.props.index);
  };
  onDeleteClick = () => {
    confirmAlert({
      title: "Êtes-vous sur de vouloir supprimer cette zone ?",
      message: "",
      buttons: [
        {
          label: "Oui, supprimer",
          onClick: () => this.props.onDelete(this.props.index),
        },
        {
          label: "Annuler",
          onClick: () => console.log("Annulé"),
        },
      ],
    });
  };
  render() {
    let selectedCities;
    let images;

    selectedCities = this.props.zone.selectedCities.map((city, index) => {
      return (
        <span className="zone-single-city" key={index}>
          {city}
        </span>
      );
    });
    images = this.props.zone.images.map((image, index) => {
      return <img src={image.url} alt="" key={index} />;
    });

    return (
      <div className="zone">
        <h2>{this.props.zone.zoneName}</h2>
        <p>Villes concernées : {selectedCities}</p>
        <p>À découvrir : </p>
        <div className="zone-images-container">{images}</div>
        <button
          className="btn btn-inline btn-edit"
          type="button"
          onClick={this.onEditClick}
        >
          Editer la zone
        </button>
        <button
          className="btn btn-inline btn-danger"
          type="button"
          onClick={this.onDeleteClick}
        >
          Supprimer la zone
        </button>
      </div>
    );
  }
}

export default SingleZone;
