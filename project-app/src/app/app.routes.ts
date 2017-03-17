import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent }  		from './list/list.component';
import { AddComponent }  		from './add/add.component';
import { DetailComponent }      from './detail/detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/list', pathMatch: 'full' },
	{ path: 'list',       component: ListComponent },
	{ path: 'add',     	  component: AddComponent },
	{ path: 'detail/:id', component: DetailComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}