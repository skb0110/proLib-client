import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    config = environment;

    getAll() {
        return this.http.get<User[]>(`${this.config.apiUrl}/users`);
    }

    register(user: User) {
        return this.http.post(`${this.config.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.config.apiUrl}/users/${id}`);
    }
}