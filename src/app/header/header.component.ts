import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';
import { UserService } from '../Users/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {
  visible: boolean = true;
  constructor(
    private notificationService: NotificationService,
    private userService: UserService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes:', changes);
    this.visible = this.userService.login.value;
  }

  public show(): void {
    this.notificationService.show({
      content: 'Logged-Out',
      hideAfter: 600,
      position: { horizontal: 'center', vertical: 'bottom' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'info', icon: true },
    });
    this.visible = true;
  }
}
