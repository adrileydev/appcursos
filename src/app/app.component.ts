import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated/'; //'angularfire2/database';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  user = null;
  cuisines: FirebaseListObservable<any[]>;
  restaurants: Observable<any[]>;

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
  this.restaurants = this.db.list('/restaurants').map(restaurants => {
   console.log('before map:', restaurants);
   restaurants.map(restaurant=>{
     //restaurant.cuisineType = this.db.object('/cusines' + restaurant.cuisines)
     restaurant.featureTypes =[];
     for(var f in restaurant.features)
      restaurant.featureTypes.push(this.db.object('/features'+ f));
// console.log(restaurants);
   });
  ///  console.log("After map",restaurants);
   return restaurants;

  });
 // this.subscription= this.db.list('/restaurant').subscribe(x=>{ this.restaurant = x;})

}
  /*  ngOnDestroy() {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.subscription.unsubdescribe();

    }*/
}
