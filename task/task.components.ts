import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({ selector: 'app-task', templateUrl: 'task.components.html' })
export class TaskComponent implements OnInit {
    constructor(private router: Router,
        private _activatedRoute:ActivatedRoute) { }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    tasks = [
        { ProjectName: 'Project1', status: 'Approved', description: 'Project 2' },
        { ProjectName: 'Project2', status: 'PendingAproval', description: 'NewProject' },
        { ProjectName: 'Project3', status: 'Approved', description: 'Project with environment background' }
    ];

    
  gotoTasks() {
    this.router.navigate(['/addTask']);
  }
}