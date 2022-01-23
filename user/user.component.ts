import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({ selector: 'app-user', templateUrl: 'user.component.html' })
export class UserComponent {
    constructor(private router: Router,
        private _activatedRoute:ActivatedRoute) { }
    users = [
        { firstName: 'Vicky', lastName: 'John', email: 'vicky.john@test.com', role: 'User' },
        { firstName: 'Vic', lastName: 'Roy', email: 'vic.roy@test.com', role: 'Admin' },
        { firstName: 'Gina', lastName: 'Jay', email: 'gina.jay@test.com', role: 'Admin' },
        { firstName: 'Jessi', lastName: '', email: 'jessi.glaser@test.com', role: 'User' }
    ];
    
gotoUser() {
    this.router.navigate(['/addUser']);
  }
}