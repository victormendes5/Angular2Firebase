import { Component, OnInit } from '@angular/core';
import { Router }			 					from '@angular/router';

import { FirebaseService }   					from './../controller/firebase.service';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
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
	    this.router.navigate(['list']);
    }

}
