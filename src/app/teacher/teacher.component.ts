import { Component, OnInit } from '@angular/core';
import { RestCallingService } from '../rest-calling.service';

@Component({
  selector: 'app-root',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  userList: any;
  constructor(public restCallingService: RestCallingService ) { }

  ngOnInit() {
    this.restCallingService.getAllUser().subscribe(
      data =>{
        this.userList = data.json().data;
      },err =>{
        alert('Some error occured');
      }
    );
  }
  deleteUser(event, id){
    event.preventDefault();
    if(id !==null){
      
    }
  }
}
