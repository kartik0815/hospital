import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospService } from '../hosp.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  collect: any;
  doc: any;
  bookdata:any;
  status:boolean=false;
  public docForm:any = FormGroup;
  specialization = [
    { name: "Physician" },
    { name: "Dermatologist" },
    { name: "orthologist" }
  ];
  constructor(private formBuilder:FormBuilder,private router: ActivatedRoute, private hosp: HospService) { }

  ngOnInit(): void {

    console.log(this.router.snapshot.params['id'])
    this.hosp.getcurrentbookid(this.router.snapshot.params['id']).subscribe((result: any) => {
      console.log("result", result);
      this.collect=result; 
    });

    // this.hosp.getcurrentdocid().subscribe((result: any) => {
    //   console.log("result", result);
    //   this.doc=result
    // });

    this.docForm = this.formBuilder.group({
      specialize:['']
    });
  }
    doctor(){
      this.status = true;
      console.log(this.docForm.value)
      this.hosp.goDetails("http://localhost:3000/appcheck",this.docForm.value).subscribe(res=>{
        console.log(res);
      });
    
  }}
