import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

const providers = [
  StatusBar,
  SplashScreen,
  CameraPreview
];
@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(), AppRoutingModule
  ],
  providers: [
    providers,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
