import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './controller/dashboard.component';
import { HeroesComponent }      from './controller/heroes.component';
import { HeroDetailComponent }  from './controller/hero-detail.component';
import { ListComponent }  		from './controller/list.component';
import { AddComponent }  		from './controller/add.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard',  component: DashboardComponent },
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