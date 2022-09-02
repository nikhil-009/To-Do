import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit,OnChanges {
  public selected:number=0
  public onTabSelect(e:SelectEvent): void {
    console.log(e);

  }
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes",changes);
    
  }

  ngOnInit(): void {
  }
  onChange(data:string){
   this.selected=0
    
    

  }

}
