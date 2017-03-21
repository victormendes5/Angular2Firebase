import { Component, OnInit }     from '@angular/core';
import { Router }                from '@angular/router';

import { FirebaseService }       from './../../environments/firebase.service';

import { Item }                  from './../item.model';
import { LocalStorageService }   from './../localstorage.service';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: [ './add.component.css', './../../assets/css/bootstrap.min.css' ]
})

export class AddComponent implements OnInit {
/*    INICIO FIREBASE    */
	// title: any;

 //    constructor(
 //    	private firebaseService: FirebaseService,
 //    	private router: Router
 //    ) { }

 //    ngOnInit() {
 //    }

 //    onAddSubmit(){
 //    	let listing = {
 //    		title: this.title
 //    	}

	//     this.firebaseService.addListing(listing);
	//     this.router.navigate(['list']);
 //    }
 /*    FIM FIREBASE    */

    todos: any;

    constructor(private router: Router,
                private storageService: LocalStorageService) {
    }

    addTodo(value, event) {
        event.preventDefault();

        value.done = false;

        this.storageService.saveLocalStorage(value)
        this.todos = this.storageService.getLocalStorage();
        
        this.router.navigate(['./list']);
    }

   ngOnInit() {}

}
