import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { SelectEvent } from '@progress/kendo-angular-layout';
import { getLogin } from 'src/app/login/State/user.selector';
import { appState } from 'src/app/Store/app.state';
import { DataService } from '../Services/data.service';
import { userDat } from '../State/data.action';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit, OnChanges {
  total: number = 0;
  public selected: number = 0;
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  constructor(
    private store: Store<appState>,
    private dataService: DataService
  ) {
    this.store.select(getLogin).subscribe((res) => {
      this.total = this.dataService.getTotal(res);
      this.store.dispatch(userDat({ data: this.total }));
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngOnInit(): void {}
  onChange(data: string) {
    this.selected = 0;
  }
}
