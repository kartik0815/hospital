import { Component, OnInit } from '@angular/core';
import { HospService } from '../hosp.service';
import { FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  alert:any=false;
  editUser = new FormGroup({
    contactNo : new FormControl(''),
    address : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl(''),
    name : new FormControl('',),
    password : new FormControl('')
  })
  constructor(private router:ActivatedRoute,private hosp:HospService,private route:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.hosp.getcurrentuserid(this.router.snapshot.params['id']).subscribe((result:any)=>{
      console.log("result",result);
      this.editUser = new FormGroup({
        name: new FormControl(result['name']),
        password: new FormControl(result['password']),
        contactNo: new FormControl(result['contactNo']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email']),
        age: new FormControl(result['age'])
      })
    })
  }
  updateUser(){
      this.hosp.updateUser(this.router.snapshot.params['id'],this.editUser.value).subscribe((result)=>{
        console.log(result,"data updated successfully");
        console.log(result);
        this.alert=true;
        this.route.navigate(["user/"+this.router.snapshot.params['id']])
        
      }) 
  }
  closebut(){
    this.alert=false;
  }

}