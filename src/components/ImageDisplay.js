import React, { Component } from 'react';
export default class ImageDisplay extends Component {
  render() {
    let images = this.props.images;
    let display = `Get your pictures here!`;
    if (this.props.images === undefined) {
      display = `Sorry, no pictures yet. Try again with new search queries`;
    } else {
      display = images.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.img_src} alt={image.camera.name}/>
          </div>
        )
      })
    }
    return (
      <div>{display}</div>
    )
  }
}
