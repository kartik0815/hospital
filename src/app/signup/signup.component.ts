import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospService } from '../hosp.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  url="http://localhost:3000/patient";
  public signupForm:any =FormGroup
  private collect:any;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private hosp:HospService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:['',Validators.required],
      contactNo:['',Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[6-9]{1}[0-9]{9}')],
      email:['',Validators.required],
      password:['',Validators.required],
      address:['',Validators.required],
      age:['',Validators.required]
    });
    this.hosp.getuser().subscribe(res=>{
      console.log(res);
      this.collect=res;
  });
  }
  signUp(){
    console.log(this.signupForm.value)
    this.hosp.goSignUp(this.url,this.signupForm.value).subscribe(res=>{
      alert("Sign up succesful");
      this.signupForm.reset();
      this.router.navigate(['login'])
      console.log(res);
      
    })
  }
  get name(){
    return this.signupForm.get('name')
  }
  get password(){
    return this.signupForm.get('password')
  }
  get email(){
    return this.signupForm.get('email')
  }

  get contactNo(){
      return this.signupForm.get('contactNo')
  }

}
// name:['',Validators.required,Validators.maxLength(20),Validators.minLength(1)],
// contactno:['',Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[6-9]{1}[0-9]{9}')],
// email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-p_.-]+@[a-zA-Z0-9]+(.com|.in)$')]],
// password:['',[Validators.required,Validators.pattern('/^(?=.*[a-z])(?=.*[(?=.*[a-z])A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,20}$/')]],
// address:['',Validators.required,Validators.maxLength(100)],
// age:['',Validators.required,Validators.min(1),Validators.max(100)]