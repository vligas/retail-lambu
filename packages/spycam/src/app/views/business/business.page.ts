
/**
 * Chatter - Chat themes Ionic 4 (https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */


import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, IonContent, Events } from '@ionic/angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { CompetitorPriceService } from '@frontend/app/shared/services/competitor-price.service';
import { RequestCreateCompetitorPriceDto } from '@frontend/app/shared/dto/competitorPrice.dto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Store, Select } from '@ngxs/store';
import { ProductState } from '@frontend/app/shared/state/product/product.state';
import { Observable } from 'rxjs';
import { SimpleProductDto } from '@frontend/app/shared/models/products.models';
import { FetchProducts } from '@frontend/app/shared/state/product/product.actions';
import { CompetitorState } from '@frontend/app/shared/state/competitor/competitor.state';
import { RequestCompetitorBrandDto } from '@frontend/app/shared/dto/competitor.dto';
import { AddCompetitor, FetchBrandCompetitor } from '@frontend/app/shared/state/competitor/competitor.actions';

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
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  pictures = new Array<string>();
  @ViewChild('content') content: IonContent;
  @ViewChild('chat_input') messageInput: ElementRef;
  User: string = "Me";
  toUser: string = "driver";
  inp_text: any;
  editorMsg = '';
  showEmojiPicker = false;
  msgList: Array<{
    userId: any,
    userName: any,
    userAvatar: any,
    time: any,
    message: any,
    upertext: any,
    media?: any
  }>
  public count = 0;
  public arr = [
    {
      "messageId": "1",
      "userId": "140000198202211138",
      "userName": "Luff",
      "userImgUrl": "./assets/user.jpg",
      "toUserId": "210000198410281948",
      "toUserName": "Hancock",
      "userAvatar": "./assets/to-user.jpg",
      "time": 1488349800000,
      "message": "Hey, that\'s an awesome chat UI",
      "status": "success"

    },
    {
      "messageId": "2",
      "userId": "210000198410281948",
      "userName": "Hancock",
      "userImgUrl": "./assets/to-user.jpg",
      "toUserId": "140000198202211138",
      "toUserName": "Luff",
      "userAvatar": "./assets/user.jpg",
      "time": 1491034800000,
      "message": "Right, it totally blew my mind. They have other great apps and designs too !",
      "status": "success"
    },
    {
      "messageId": "3",
      "userId": "140000198202211138",
      "userName": "Luff",
      "userImgUrl": "./assets/user.jpg",
      "toUserId": "210000198410281948",
      "toUserName": "Hancock",
      "userAvatar": "./assets/to-user.jpg",
      "time": 1491034920000,
      "message": "And it is free ?",
      "status": "success"
    },
    {
      "messageId": "4",
      "userId": "210000198410281948",
      "userName": "Hancock",
      "userImgUrl": "./assets/to-user.jpg",
      "toUserId": "140000198202211138",
      "toUserName": "Luff",
      "userAvatar": "./assets/user.jpg",
      "time": 1491036720000,
      "message": "Yes, totally free. Beat that ! ",
      "status": "success"
    },
    {
      "messageId": "5",
      "userId": "210000198410281948",
      "userName": "Hancock",
      "userImgUrl": "./assets/to-user.jpg",
      "toUserId": "140000198202211138",
      "toUserName": "Luff",
      "userAvatar": "./assets/user.jpg",
      "time": 1491108720000,
      "message": "Wow, that\'s so cool. Hats off to the developers. This is gooood stuff",
      "status": "success"
    },
    {
      "messageId": "6",
      "userId": "140000198202211138",
      "userName": "Luff",
      "userImgUrl": "./assets/user.jpg",
      "toUserId": "210000198410281948",
      "toUserName": "Hancock",
      "userAvatar": "./assets/to-user.jpg",
      "time": 1491231120000,
      "message": "Check out their other designs.",
      "status": "success"
    }
  ]
  tittleModal: string;
  competitorPriceForm: FormGroup;

  @Select(ProductState.getProducts)
  products$: Observable<SimpleProductDto[]>;
  products: SimpleProductDto[];

  @Select(CompetitorState.getActualBrand)
  actualBrandCompetitor$: Observable<RequestCompetitorBrandDto>;
  actualBrand: RequestCompetitorBrandDto;

  constructor(private events: Events,
    private cameraPreview: CameraPreview,
    private serviceCompetitorPrice: CompetitorPriceService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private store: Store
  ) {
    this.msgList = [
      {
        userId: this.User,
        userName: this.User,
        userAvatar: "assets/driver.jpeg",
        time: "12:01 pm",
        message: 'Hey, that\'s an awesome chat UI',
        upertext: 'Hello'
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: "assets/user.jpeg",
        time: "12:01 pm",
        message: "Right, it totally blew my mind. They have other great apps and designs too!",
        upertext: "Hii"
      },
      {
        userId: this.User,
        userName: this.User,
        userAvatar: "assets/driver.jpeg",
        time: "12:01 pm",
        message: 'And it is free ?',
        upertext: 'How r u '
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: "assets/user.jpeg",
        time: "12:01 pm",
        message: 'Yes, totally free. Beat that !',
        upertext: 'good'
      },
      {
        userId: this.User,
        userName: this.User,
        userAvatar: "assets/driver.jpeg",
        time: "12:01 pm",
        message: 'Wow, that\'s so cool. Hats off to the developers. This is gooood stuff',
        upertext: 'How r u '
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: "assets/user.jpeg",
        time: "12:01 pm",
        message: 'Check out their other designs.',
        upertext: 'good'
      },
      {
        userId: this.User,
        userName: this.User,
        userAvatar: "assets/driver.jpeg",
        time: "12:01 pm",
        message: 'Have you seen their other apps ? They have a collection of ready-made apps for developers. This makes my life so easy. I love it! ',
        upertext: 'How r u '
      },
      {
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: "assets/user.jpeg",
        time: "12:01 pm",
        message: 'Well, good things come in small package after all',
        upertext: 'good'
      },
    ];

  }

  ngOnInit() {
    this.store.dispatch(new FetchProducts({ page: 1, pageSize: 100 })).subscribe();

    this.products$.subscribe(products => {
      this.products = products;
    });

    this.actualBrandCompetitor$.subscribe(actualBrand => {
      this.actualBrand = actualBrand;
      console.log(actualBrand)
    });

    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res);

      },
      (err) => {
        console.log(err);
      });

    this.competitorPriceForm = this.fb.group({
      price: ['', Validators.required],
      productId: ['', Validators.required]
    });
  }

  scrollToBottom() {
    this.content.scrollToBottom(100);
  }

  ionViewWillLeave() {
    this.events.unsubscribe('chat:received');
  }

  ionViewDidEnter() {
    console.log('scrollBottom');
    setTimeout(() => {
      this.scrollToBottom()
    }, 500)
    console.log('scrollBottom2');
  }

  logScrollStart() {
    console.log('logScrollStart');
    document.getElementById('chat-parent');

  }

  logScrolling(event) {
    console.log('event', event)
  }



  sendMsg(picture: string) {

    let otherUser;
    if (this.count === 0) {
      otherUser = this.arr[0].message
      this.count++
    }
    else if (this.count == this.arr.length) {
      this.count = 0;
      otherUser = this.arr[this.count].message
    }
    else {
      otherUser = this.arr[this.count].message;
      this.count++
    }

    this.msgList.push({
      userId: this.User,
      userName: this.User,
      userAvatar: "assets/user.jpeg",
      time: "12:01 pm",
      message: this.inp_text,
      upertext: this.inp_text,
      media: picture
    })
    this.msgList.push({
      userId: this.toUser,
      userName: this.toUser,
      userAvatar: "assets/user.jpeg",
      time: "12:01 pm",
      message: otherUser,
      upertext: otherUser
    });
    this.inp_text = "";
    console.log('scrollBottom');
    setTimeout(() => {
      this.scrollToBottom()
    }, 10)
  }

  startCamera() {
    // start camera

  }

  takePicture(competitorPrice: RequestCreateCompetitorPriceDto) {
    // take a picture
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      this.pictures.push('data:image/jpeg;base64,' + imageData);

      const file = this.base64ToFile(imageData);
      console.log(file);

      const fd = new FormData();

      fd.append(`photo`, file, 'image');
      fd.append('branchId', competitorPrice.branchId);
      fd.append('productId', competitorPrice.productId);
      fd.append('price', competitorPrice.price);



      this.serviceCompetitorPrice.postCompetitorPrice(fd).subscribe(
        (resp) => {
          console.log(resp);
        },
        (err) => {
          console.log(err);
        }
      );


      this.sendMsg('data:image/jpeg;base64,' + imageData);
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


  base64ToFile(base64: string) {
    // Base64 url of image trimmed one without data:image/png;base64
    // Naming the image
    const date = new Date().valueOf();
    let text = '';
    const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
    }
    // Replace extension according to your media type
    const imageName = date + '.' + text + '.jpeg';
    // call method that creates a blob from dataUri
    const imageBlob = this.dataURItoBlob(base64);
    const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' });

    return imageFile;
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }

  /**
* Show teh popup form to add category
* @param content 
*/
  open(content) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result: RequestCreateCompetitorPriceDto) => {
        // tslint:disable-next-line:switch-default
        console.log(this.actualBrand);
        const product: SimpleProductDto = this.competitorPriceForm.get('productId').value;

        const competitorPrice: RequestCreateCompetitorPriceDto = {
          branchId: String(this.actualBrand.id),
          price: this.competitorPriceForm.get('price').value,
          productId: product.c_Codigo
        }

        console.log(competitorPrice);

        this.takePicture(competitorPrice);

      }, (reason) => {
        console.log('Err!', reason);
      });

  }

  search = (text$: Observable<any>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.products.filter(v => v.c_Codigo.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  format(object) {
    return object.c_Descri;
  }

  formatInput(object) {
    return object.c_Descri;
  }

}
