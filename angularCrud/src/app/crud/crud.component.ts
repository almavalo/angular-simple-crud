
import { Component } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  title = 'angularCrud';

  employeeArray: Employee[] = [
    { id: 1, name: 'Alfredo', country: 'Venezuela' },
    { id: 2, name: 'Wilson', country: 'Chile' },
    { id: 3, name: 'Saul', country: 'USA' }
  ];

  selectedEmployee: Employee = new Employee();

  addOrEdit() {
    if (this.selectedEmployee.id == 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
      this.selectedEmployee = new Employee();
    } else {
      this.selectedEmployee = new Employee();
    }
  }

  openEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  clear() {
    this.selectedEmployee = new Employee();
  }

  delete() {
    if (confirm('Esta seguro de eliminar el usuario')) {
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }




}
