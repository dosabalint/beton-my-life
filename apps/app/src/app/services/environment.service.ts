import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  backendUrl(path: string = ''): string {
    if (path) {
      return environment.backendUrl + path;
    }

    return environment.backendUrl;
  }
}
