import {HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../services/authentication.service';

export function createTokenHeader(authenticationService: AuthenticationService): HttpHeaders {
  return new HttpHeaders({
    'Authorization': `Bearer ${authenticationService.token}`
  })
}
