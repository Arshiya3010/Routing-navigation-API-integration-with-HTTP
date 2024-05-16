import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  id!:string
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      this.id=params['id']
    })
  }
}
