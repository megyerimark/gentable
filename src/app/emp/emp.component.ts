import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  employees =[
    {name :'Ámor Nyila', city : 'Szeged' , salary: 851},
    {name :'Igen', city : 'Afrika' , salary: 897},
    {name :'Szlatty', city : 'Szelevény' , salary: 699},
    {name :'Füstölt Kolbász', city : 'Kemence' , salary: 897},
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
