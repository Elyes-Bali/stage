import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm :FormGroup;
  constructor(private service : AuthService, private fb : FormBuilder,private router:Router){
    
  }
  ngOnInit(): void {
    this.loginForm= this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',Validators.required],
    })
  }

  login(){
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe((response)=>{
      
      console.log(response);
      if (response.jwt) {
        alert(response.jwt);
        const jwtToken = response.jwt;
        localStorage.setItem("JWT",jwtToken);
        this.router.navigateByUrl('/card1')
      }
    })
  }
}
