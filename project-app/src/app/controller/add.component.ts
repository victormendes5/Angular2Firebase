import { Component } 				from '@angular/core';

import { AngularFire }  			from 'angularfire2';

@Component({
	moduleId: module.id,
	selector: 'my-add',
	templateUrl: './../view/add.component.html',
})

export class AddComponent {

    constructor(private af: AngularFire) {
    	const items = af.database.list('heroes');
        items.push('a');
    }

}