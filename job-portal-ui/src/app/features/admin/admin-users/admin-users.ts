// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-users',
//   imports: [],
//   templateUrl: './admin-users.html',
//   styleUrl: './admin-users.css',
// })
// export class AdminUsers {

// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../core/services/admin.service';
import { AdminUpdateUserComponent } from '../admin-update-user/admin-update-user';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, AdminUpdateUserComponent, FormsModule],
  templateUrl: './admin-users.html',
  styleUrl: './admin-users.css'
})
export class AdminUsersComponent implements OnInit {

  users: any[] = [];
  showUpdateDialog = false;
  selectedUser: any = null;
  loggedInEmail: any;
  searchQuery = '';
  constructor(private adminService: AdminService, private authService: AuthService) {}
  
  ngOnInit() {
    this.loadUsers();
    this.loggedInEmail = this.authService.getEmail();
  }

  loadUsers() {
    this.adminService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  openUpdateDialog(user: any) {
    
   
  this.selectedUser = {...user};

  this.showUpdateDialog = true;

}

closeUpdateDialog(refresh?: boolean) {
  this.showUpdateDialog = false;

  if(refresh){
    this.loadUsers();
  }

}

deleteUser(id: number) {

  if(!confirm("Delete this user?")) return;

  this.adminService.deleteUser(id)
  .subscribe(() => {

    alert("User deleted");

    this.loadUsers();

  });

}

    searchUsers() {

  this.adminService.searchUsers(this.searchQuery)
  .subscribe(data => {

    this.users = data;

  });
}

  resetSearch(){
    this.searchQuery = '';
    this.loadUsers();
  }

}