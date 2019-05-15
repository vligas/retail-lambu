import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';


const cameraPreviewOpts: CameraPreviewOptions = {
  x: 50,
  y: 50,
  width: window.screen.width,
  height: window.screen.height,
  camera: 'rear',
  tapPhoto: true,
  previewDrag: true,
  toBack: true,
  alpha: 1
}

// picture options
const pictureOpts: CameraPreviewPictureOptions = {
  width: 800,
  height: 1280,
  quality: 100
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  pictures = new Array<string>();
  constructor(private cameraPreview: CameraPreview) {

  }

  startCamera() {
    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)

      },
      (err) => {
        console.log(err)
      });



  }

  takePicture() {
    // take a picture
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      this.pictures.push('data:image/jpeg;base64,' + imageData);
      console.log(this.pictures)
    }, (err) => {
      console.log(err);
      this.pictures[0] = 'assets/img/test.jpg';
    });

  }

  switchCamera() {
    // Switch camera
    this.cameraPreview.switchCamera();
  }

  setColorNegative() {
    // set color effect to negative
    this.cameraPreview.setColorEffect('negative');
  }

  stopCamera() {
    // Stop the camera preview
    this.cameraPreview.stopCamera();

  }

  show() {
    this.cameraPreview.show().then((data) => {
      console.log(data);
    });
  }

}
