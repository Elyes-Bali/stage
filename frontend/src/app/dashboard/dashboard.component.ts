import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  isLoggedIn = false;
  currentUser: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.checkLoginStatus();
  }
  status= false;
  addToggle()
  {
    this.status = !this.status;       
  }

  checkLoginStatus() {
    this.isLoggedIn = !!localStorage.getItem('JWT');
  }

  logout() {
    localStorage.removeItem('JWT');
    this.checkLoginStatus();
    window.location.href = '/login'; // Navigate to login page
  }
}
