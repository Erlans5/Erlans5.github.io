import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface products { 
  brand: string;
  description: string;
  model: string;
  type: string;
  image: string;
  price: number; 
}

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private productsCollection: AngularFirestoreCollection<products>;
  products: Observable<products[]>; 
 


  constructor(private afs: AngularFirestore) { 
   
  }

  listProducts() {
    this.productsCollection = this.afs.collection<products>('products'); 
   return this.products = this.productsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as products;
        const id = a.payload.doc.id;
        return { id, ...data };
      })))
  }
}
