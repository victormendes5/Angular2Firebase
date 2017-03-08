import { Component }                    from '@angular/core';
import { Router }                               from '@angular/router';
import { FirebaseService }   					from './firebase.service';

import { AngularFire, FirebaseListObservable }  from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'my-list',
    templateUrl: './../view/list.component.html',
    styleUrls: [ './../view/css/dashboard.component.css' ]
})

export class ListComponent {
    myList: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {
        this.myList = af.database.list('heroes/')
    }

    // listings: any;

    // constructor(private firebaseService: FirebaseService) {}

    // ngOnInit(){
    // 	this.firebaseService.getListings().subscribe(listings => {
    // 		console.log();
    // 		this.listings = listings;
    // 	});
    // }
}