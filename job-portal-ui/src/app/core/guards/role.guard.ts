// import { CanActivateFn, Router } from '@angular/router';
// import { inject } from '@angular/core';
// import { AuthService } from '../services/auth.service';

// export const roleGuard = (expectedRole: string): CanActivateFn => {
//   return () => {
//     const authService = inject(AuthService);
//     const router = inject(Router);

//     const userRole = authService.getRole();

//     if (userRole === expectedRole) {
//       return true;
//     }

//     router.navigate(['/login']);
//     return false;
//   };
// };


import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const roleGuard = (expectedRole: string): CanActivateFn => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isLoggedIn()) {
      router.navigate(['/login']);
      return false;
    }

    const userRole = authService.getRole();

    if (userRole === expectedRole) {
      return true;
    }

    // logged in but wrong role
    router.navigate(['/jobs']);
    return false;
  };
};
