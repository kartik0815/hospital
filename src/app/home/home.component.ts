import { Component, OnInit } from '@angular/core';
import { HospService } from '../hosp.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collection: any;
  useid: any;
  constructor(private hosp: HospService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.hosp.getuser().subscribe(res => {
    //   console.log(res);
    //   this.collection = res;
    //   this.route.params.subscribe(param => this.useid = param['id']);
    //   console.log(this.useid);
      this.hosp.getcurrentuser(this.route.snapshot.params['id']).subscribe((result:any)=>{
        console.log("result",result);
        this.collection= result
      

      // let user = res.find((a: any) => {
      //   console.log(a.id);
      //   if(a.id==this.collection.id){
      //     return 
      //   }
        
      
      // })
    // })
  }
 
    )}

}
