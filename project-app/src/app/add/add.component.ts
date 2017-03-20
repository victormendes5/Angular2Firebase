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

    currentItem: string;
    todos: any;

    id: number;
    title: string;
    message: string;

    constructor(private router: Router,
                private storageService: LocalStorageService,
                private item: Item) {
        this.currentItem = (localStorage.getItem('currentItem') !== null) ? JSON.parse(localStorage.getItem('currentItem')) : [  ];
        this.todos = this.currentItem;
    }

    addTodo() {
        this.todos.push({
            id: this.id,
            title: this.title,
            message: this.message,
            done: false
        });

        this.title = '';
        this.message = '';
        localStorage.setItem('currentItem', JSON.stringify(this.todos));

        this.router.navigate(['./list']);
    }

    // addTodo() {
    //     this.storageService.save();
    //     this.router.navigate(['./list']);
    // }

   ngOnInit() {}

}
