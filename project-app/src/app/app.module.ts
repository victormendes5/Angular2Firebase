import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { FirebaseService }      from './../environments/firebase.service';
import { firebaseConfig }       from './../environments/firebase.config';
import { AngularFireModule }    from 'angularfire2/index';

import { AppRoutingModule }     from './app.routes';
import { AppComponent }         from './app.component';
import { ListComponent }        from './list/list.component';
import { AddComponent }         from './add/add.component';
import { DetailComponent }      from './detail/detail.component';
import { LocalStorageService }  from './localstorage.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [ 
        AppComponent,
        ListComponent,
        AddComponent,
        DetailComponent,
    ],
    providers: [ 
        LocalStorageService,
        FirebaseService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
