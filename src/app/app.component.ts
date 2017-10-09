import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

import { AngularFireDatabase, FirebaseListObservable } from  'angularfire2/database-deprecated/'; //'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  user = null;
  cuisines;//: any[] ; //FirebaseListObservable<any[]>;
  restaurant;//:any[];

 private subscription;
  constructor( private db: AngularFireDatabase) {
   /* this.auth.getAuthState().subscribe(
 //     (user) => this.user = user);
   //     this.cuisines = this.db.list('/cuisines');

    )*/
    // console.log(db);
   }
    loginWithGoogle() {
   // this.auth.loginWithGoogle();
  }
ngOnInit() {
  this.cuisines = this.db.list('/cuisines');
  this.restaurant = this.db.list('/restaurant');
 // this.subscription= this.db.list('/restaurant').subscribe(x=>{ this.restaurant = x;})
}
  /*  ngOnDestroy() {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.subscription.unsubdescribe();

    }*/
}
