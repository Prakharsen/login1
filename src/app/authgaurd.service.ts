import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';

@Injectable()
export class AuthgaurdService implements CanActivate {

  canActivate() {
    console.log('I am good');
    return true;
  }

}
