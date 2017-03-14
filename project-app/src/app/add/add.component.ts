import { Component, OnInit } from '@angular/core';
import { Router }			 from '@angular/router';

import { FirebaseService }   from './../controller/firebase.service';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: [ './add.component.css', './../../assets/css/bootstrap.min.css' ]
})

export class AddComponent implements OnInit {

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

    currentItem: string;
    newTodo: string;
    newMessage: string;
    todos: any;

    constructor(private router: Router) {
        this.currentItem = (localStorage.getItem('currentItem')!==null) ? JSON.parse(localStorage.getItem('currentItem')) : [  ];
        this.todos = this.currentItem;
    }

    addTodo() {
        this.todos.push({
            newTodo: this.newTodo,
            newMessage: this.newMessage,
            done: false
        });
        this.newTodo = '';
        this.newMessage = '';
        localStorage.setItem('currentItem', JSON.stringify(this.todos));

        this.router.navigate(['./heroes']);
    }

   ngOnInit() { }

}
