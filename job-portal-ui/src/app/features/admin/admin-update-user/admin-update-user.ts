// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-update-user',
//   imports: [],
//   templateUrl: './admin-update-user.html',
//   styleUrl: './admin-update-user.css',
// })
// export class AdminUpdateUser {

// }


import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-admin-update-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-update-user.html',
  styleUrl: './admin-update-user.css'
})
export class AdminUpdateUserComponent {

  @Input() user: any;
  @Output() closed = new EventEmitter<boolean>();

  constructor(private adminService: AdminService) {}

  updateUser() {

    const updatePayload = {
      fullName: this.user.fullName,
      email: this.user.email,
      role: this.user.role,
      active: this.user.active
    };

    this.adminService.updateUser(this.user.id, updatePayload)
    .subscribe({

      next: () => {
        alert("User updated successfully");
        this.closed.emit(true);
      },

      error: (err) => {
        console.error(err);
        alert("Update failed");
      }

    });

  }

  close(refresh = false) {
    this.closed.emit(refresh);
  }

}