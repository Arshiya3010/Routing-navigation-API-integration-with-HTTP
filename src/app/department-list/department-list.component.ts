import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
  public getJsonValue:any;
  public postJsonValue:any;
  

constructor(private http:HttpClient){
  
}
ngOnInit():void{
  this.getMethod();
  this.postMethod();

}
public getMethod(){
  this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(
    (data)=>{
      console.log(data);
      this.getJsonValue=data;
    }
  );
}
public postMethod(){
  const header = new HttpHeaders({
    contentType:'application/json'
  })
  let body={
    title:'foo',
    body:'bar',
    userId:1,
  };
  this.http.post('https://jsonplaceholder.typicode.com/posts',body,{headers:header}).subscribe(
    (data)=>{
      console.log(data);
      this.postJsonValue=data;
    }
  );
}
}


