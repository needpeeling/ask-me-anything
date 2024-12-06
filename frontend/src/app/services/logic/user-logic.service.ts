import { Injectable } from '@angular/core';
import { UserApiService } from '../api/user-api.service';
import { User } from 'src/app/types/user';
import { Observable, of } from 'rxjs';
import { testUser } from 'src/app/data/test/user';

@Injectable({
  providedIn: 'root',
})
export class UserLogicService {
  user: User = testUser;
  constructor(private userApiService: UserApiService) {}

  getUser(): Observable<User> {
    return of(this.user);
  }
  // Check if a user is admin
  // isUserAdmin(user: any): boolean {
  //   return user.roles.includes('admin');
  // }

  // // Fetch user and process logic
  // fetchUserDetails(id: number) {
  //   return this.userApiService.getUser(id).pipe(
  //     map((user) => ({
  //       ...user,
  //       isAdmin: this.isUserAdmin(user),
  //     }))
  //   );
  // }
}
