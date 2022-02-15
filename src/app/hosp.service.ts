import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HospService {
  url="http://localhost:3000/patient/";
  url1="http://localhost:3000/doctor/";
  url2="http://localhost:3000/appcheck/";
  
  constructor(private http:HttpClient) { }

  //signup
  goSignUp(url:any,data:any){
    return this.http.post(this.url,data)
  }
  
  //login
  getuser() {
    console.log("service gained successfully!!");
    return this.http.get(this.url).pipe(map((res:any)=>{
      console.log(res);
      return res
      
    }))
  }

  //update
  getcurrentuserid(id:any):Observable<any>{
    console.log(id);
    return this.http.get(this.url+id)  
  }

  //update
  updateUser(id:any,data:any){
    
    return this.http.put(this.url+id,data)
  }

  //home
  getcurrentuser(id:any):Observable<any>{
    console.log(id);
    return this.http.get(this.url+id)  
  }

  //booking
  getcurrentbookid(id:any):Observable<any>{
    console.log(id);
    return this.http.get(this.url+id)  
  }

  //booking
  getcurrentdocid():Observable<any>{
    return this.http.get(this.url1)  
  }

  //special and send detail
  goDetails(url2:any,data:any){
    return this.http.post(this.url2,data)
  }
}
