import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {


  customObsSubscription: Subscription;
  user1Activated  = false;
  user2Activated = false;

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.customObsSubscription = this.userService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        }
        if (id === 2) {
          this.user2Activated = true;
        }
      }
    );
  }

  ngOnDestroy() {
      this.customObsSubscription.unsubscribe();
  }
}
