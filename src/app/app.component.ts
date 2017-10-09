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
  cuisines :FirebaseListObservable<any[]>;
  restaurants :FirebaseListObservable<any[]>;

 private subscription;
  constructor( private db: AngularFireDatabase) {
   /* this.auth.getAuthState().subscribe(
 //     (user) => this.user = user);
   //     this.cuisines = this.db.list('/cuisines');

    )*/
    // console.log(db);
   }

   Add(){
     alert("Teste de Sistemas Adicionar ");

   }
    Update(){
     alert("Teste de Sistemas Update ");

   }
    Remove(){
     alert("Teste de Sistemas Deletar ");

   }
    loginWithGoogle() {
   // this.auth.loginWithGoogle();
  }
ngOnInit() {
  this.cuisines = this.db.list('/cuisines');
  this.restaurants = this.db.list('/restaurants');
 // this.subscription= this.db.list('/restaurant').subscribe(x=>{ this.restaurant = x;})
}
  /*  ngOnDestroy() {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.subscription.unsubdescribe();

    }*/
}
