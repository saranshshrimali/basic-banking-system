import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-transferhistory',
  templateUrl: './transferhistory.component.html',
  styleUrls: ['./transferhistory.component.css']
})
export class TransferhistoryComponent implements OnInit {

  transfers=[]
  constructor(private db : AngularFirestore) {
    this.gettransferhistory().subscribe(res=>{
      this.transfers=res;
    });
   }

  ngOnInit(): void {
  }

  gettransferhistory(){
    return this.db.collection("transfer").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

}
