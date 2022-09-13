import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLogin } from 'src/app/login/State/user.selector';
import { Tasks } from 'src/app/Model/Tasks';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-progress-tasks',
  templateUrl: './progress-tasks.component.html',
  styleUrls: ['./progress-tasks.component.scss'],
})
export class ProgressTasksComponent implements OnInit {
  user!: number;
  tasks: Tasks[] = [];

  constructor(private dataService: DataService, private store: Store) {
    this.store.select(getLogin).subscribe((res) => {
      this.user = res;
      this.tasks = this.dataService.getDataByStatus('ongoing', this.user);
    });
  }

  ngOnInit(): void {}
  onChange(data: string) {
    this.tasks = this.dataService.getDataByStatus('ongoing', this.user);
  }
}
