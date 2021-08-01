import React, { Component } from "react";
import Display from "../design/Display";
import Settings from "../design/Setting";
import { storage } from "../../config/firebaseConfig";

class Dashboard extends Component {
  state = {
    tshirtColor: "black",
    upperText: "This is upper Text",
    lowerText: "This is lower Text",
    memeImg: "",
    url: "http://via.placeholder.com/400x300",
    textSize: 44,
    textColor: "white",
  };

  handleTshirtColor = (e) => {
    this.setState({
      tshirtColor: e.target.id,
    });
    console.log(e.target.id);
  };

  handleUpperText = (e) => {
    this.setState({ upperText: e.target.value });
  };

  handleLowerText = (e) => {
    this.setState({ lowerText: e.target.value });
  };

  handleTextSize = (e) => {
    this.setState({ textSize: e.target.value });
  };

  handleTextColor = (e) => {
    this.setState({ textColor: e.target.value });
  };

  handleImageUpload = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              this.setState({ url });
            });
        }
      );
    }
  };

  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <Display display={this.state} />
          </div>
          <div className="col-lg-4">
            <Settings
              color={this.handleTshirtColor}
              upperText={this.handleUpperText}
              lowerText={this.handleLowerText}
              uploadImage={this.handleImageUpload}
              textSize={this.handleTextSize}
              textColor={this.handleTextColor}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
