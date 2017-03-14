import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './controller/heroes.component';
import { HeroDetailComponent }  from './controller/hero-detail.component';
import { ListComponent }  		from './list/list.component';
import { AddComponent }  		from './add/add.component';

const routes: Routes = [
	{ path: '', redirectTo: '/heroes', pathMatch: 'full' },
	{ path: 'list',       component: ListComponent },
	{ path: 'detail/:id', component: HeroDetailComponent },
	{ path: 'heroes',     component: HeroesComponent },
	{ path: 'add',     	  component: AddComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}