// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-create-user',
//   imports: [],
//   templateUrl: './admin-create-user.html',
//   styleUrl: './admin-create-user.css',
// })
// export class AdminCreateUser {

// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { AdminService } from '../../../core/services/admin.service';

// @Component({
//   selector: 'app-admin-create-user',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './admin-create-user.html',
//   styleUrl: './admin-create-user.css',
// })
// export class AdminCreateUserComponent {

//   newUser = {
//     fullName:'',
//     email:'',
//     password:'',
//     role:'HR'
//   };

//   constructor(private adminService: AdminService){}

//   createUser(){

//     this.adminService.createUser(this.newUser).subscribe({

//       next:(res)=>{
//         console.log("User created",res);
//         alert("User created successfully");
//       },

//       error:(err)=>{
//         console.error(err);
//         alert("Failed to create user");
//       }

//     });

//   }

// }


import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-admin-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-create-user.html',
  styleUrl: './admin-create-user.css',
})
export class AdminCreateUserComponent {

  @Output() closed = new EventEmitter<boolean>();

  newUser = {
    name: '',
    email: '',
    password: '',
    role: 'HR'
  };

  constructor(private adminService: AdminService) {}

  createUser() {
    console.log("details", this.newUser);
    this.adminService.createUser(this.newUser).subscribe({

      next: () => {
        alert("User created successfully");
        this.closed.emit(true);   // close dialog
      },

      error: (err) => {
        console.error(err);
        alert("Failed to create user");
      }

    });

  }

  close(refresh = false) {
    this.closed.emit(refresh);
  }

}