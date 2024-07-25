import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit{
  currentUser: any;
  user: User | null = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
