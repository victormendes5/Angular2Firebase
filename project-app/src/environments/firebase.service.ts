import { Injectable }							                          from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable }  from 'angularfire2';

import * as firebase                                                      from 'firebase';

@Injectable()
export class FirebaseService {

	listings: FirebaseListObservable<any[]>;
	listing: FirebaseObjectObservable<any[]>;

    constructor(private af: AngularFire) { }

    getListings() {
    	this.listings = this.af.database.list('/heroes') as FirebaseListObservable<Listing[]>
    	return this.listings;
    }

    getListingDetails(id){
    	this.listing = this.af.database.object('heroes/'+id) as FirebaseObjectObservable<Listing[]>
    	return this.listing;
    }

    addListing(listing) {
    	// let storageRef = firebase.storage().ref();
    	// for (let selectedFile of [(<HTMLInputElement>document.getElementById('tit'))]) {
     //        let iRef = storageRef

    	// 	iRef.put(selectedFile).then((snapshot) => {
    	// 		return this.listings.push(listing);
    	// 	});
    	// }

        const items = this.af.database.list('heroes');
        items.push(listing);
    }

}

interface Listing {
	$key: 	string;
	title?: string;
}