import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLogin } from 'src/app/login/State/user.selector';
import { Tasks } from 'src/app/Model/Tasks';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss'],
})
export class CompletedTasksComponent implements OnInit {
  user!: number;
  tasks: Tasks[] = [];

  constructor(private dataService: DataService, private store: Store) {
    this.store.select(getLogin).subscribe((res) => {
      this.user = res;
      this.tasks = this.dataService.getDataByStatus('completed', this.user);
    });
  }

  ngOnInit(): void {}
  onChange(data: string) {
    this.tasks = this.dataService.getDataByStatus('completed', this.user);
  }
}
