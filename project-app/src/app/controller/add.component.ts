import { Component, OnInit } 					from '@angular/core';
import { Router }			 					from '@angular/router';

import { FirebaseService }   					from './firebase.service';

// import { AngularFire, FirebaseListObservable }  from 'angularfire2';

@Component({
	moduleId: module.id,
	selector: 'my-add',
	templateUrl: './../view/add.component.html',
})

export class AddComponent implements OnInit {
	title: any;

    constructor(
    	private firebaseService: FirebaseService,
    	private router: Router
    ) { }

    ngOnInit() {
    }

    onAddSubmit(){
    	let listing = {
    		title: this.title
    	}

	    this.firebaseService.addListing(listing);
	    // this.router.navigate(['listings']);
    }
}