import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HospService } from '../hosp.service';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  collect: any;
  userid:any;
  constructor(private formBuilder: FormBuilder, private hosp: HospService, private router: Router) { }
  ngOnInit(): void {
    // this.hosp.getuser().subscribe(res => {
    //   console.log(res);
    //   this.collect = res;
    // });

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    // console.log(this.route.snapshot.params['id'])
    // this.hosp.getcurrentuserid(this.route.snapshot.params['id']).subscribe((result: any) => {
    //   console.log("result", result);

    // });
  }

  login() {
    this.hosp.getuser().subscribe(res => {
      console.log(res);
      this.collect = res;
      // this.route.params.subscribe(param=> this.userid=param['id']);
      // console.log(this.userid)

      let user = res.find((a: any) => {
        console.log(a.id);
        this.userid=a.id;
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      
      })
      console.log(this.userid);
      
      if (user) {
        alert("login successful!");
        this.loginForm.reset();
        this.router.navigate(["user/"+this.userid])
      } else {
        alert("user not found");
      }
    })
  }
}