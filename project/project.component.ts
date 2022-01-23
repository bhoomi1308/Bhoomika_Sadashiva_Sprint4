import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';

@Component({ selector: 'app-project', templateUrl: 'project.component.html' })
export class ProjectComponent implements OnInit {
    constructor(private router: Router,
        private _activatedRoute:ActivatedRoute) { }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    users = [
        { firstName: 'Bhoomika', lastName: 'Sadashiva', email: 'bhoomika.sadashiva@test.com', description: 'Project 2' },
        { firstName: 'Vic', lastName: 'Roy', email: 'vic.roy@test.com', description: 'NewProject' },
        { firstName: 'Gina', lastName: 'Jay', email: 'gina.jay@test.com', description: 'Project with environment background' },
        { firstName: 'Jessi', lastName: '', email: 'jessi.glaser@test.com', description: 'Project on banking software' }
    ];

    gotoProject() {
          this.router.navigate(['/addProject']);
        }
}