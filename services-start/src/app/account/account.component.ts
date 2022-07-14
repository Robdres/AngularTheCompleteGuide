import { Component,  Input} from '@angular/core';
import {AccountService} from '../account.server';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private logginStatus: LoggingService,private accountService:AccountService){}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
  }
}
