import { CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Inject } from '@angular/core';

export const authGuard: CanMatchFn = (route, segments) => {
  const authService = Inject(AuthService);

  if (authService.auth.id) {
    return true;
  }
  console.log('bloqueado por guard');
  
  return false;
};
