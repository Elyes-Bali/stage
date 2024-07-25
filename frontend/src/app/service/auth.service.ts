import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL=["http://localhost:8085/"]

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signup(signupRequest:any):Observable<any>{
    return this.http.post(BASE_URL+"sign/register",signupRequest)
  }
  login(loginRequest:any):Observable<any>{
    return this.http.post(BASE_URL+"auth/authentication",loginRequest)
  }

  hello():Observable<any>{
    return this.http.get(BASE_URL+"api/hello",{
      headers:this.createAuthorizationHeader()
    });
  }

  private createAuthorizationHeader(){
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      return new HttpHeaders().set(
        'Authorization', 'Bearer '+jwtToken
      )
    }else{
      console.log("JWT token not found in the LS")
    }
    return null;
  }
  logout(): void {
    localStorage.removeItem('JWT');
  }

    
  
}
