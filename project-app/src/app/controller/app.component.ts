import { Component } from '@angular/core';

import { initializeApp, database } from 'firebase';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: './../view/app.component.html',
	styleUrls: ['./../view/css/app.component.css']
})

export class AppComponent {
	title = 'Lista de Tarefas';

	constructor() {
	// Initialize Firebase
		var config = {
			apiKey: "AIzaSyD_rvvzppz6XHMWdQINQuCyLFaRCre3L34",
			authDomain: "todoangular2-a19f8.firebaseapp.com",
			databaseURL: "https://todoangular2-a19f8.firebaseio.com",
			storageBucket: "todoangular2-a19f8.appspot.com",
			messagingSenderId: "985380063858"
		};
		initializeApp(config);

		var root = database().ref();

		root.on('value', function(snap) {
			console.log(snap.val());
		})
	}
}