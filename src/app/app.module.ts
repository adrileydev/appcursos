import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated/';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/auth.service';
import { LibsService } from "./teste/libs.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firBConfig, 'dev02'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService,LibsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
