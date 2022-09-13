import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLogin } from 'src/app/login/State/user.selector';
import { UserData } from 'src/app/Model/Tasks';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss'],
})
export class AllTasksComponent implements OnInit {
  tasks: UserData = {
    id: 0,
    tasks: [
      {
        name: '',
        description: '',
        duration: 0,
        dueDate: 0,
        status: '',
      },
    ],
  };
  user!: number;

  constructor(private dataService: DataService, private store: Store) {
    this.store.select(getLogin).subscribe((res) => {
      this.user = res;
      this.tasks = this.dataService.getData(this.user);
      console.log('AllTasks', this.tasks);
    });
  }

  ngOnInit(): void {}
  onChange(data: string) {
    this.tasks = this.dataService.getData(this.user);
  }
}
