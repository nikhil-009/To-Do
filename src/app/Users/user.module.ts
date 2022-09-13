import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ActivitiesComponent } from './activities/activities.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { CreateTaskComponent } from './create-task/create-task.component';
import {
  FloatingLabelModule,
  LabelModule,
} from '@progress/kendo-angular-label';
import { FormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { DataCardComponent } from './data-card/data-card.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ProgressTasksComponent } from './progress-tasks/progress-tasks.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { IconsModule } from '@progress/kendo-angular-icons';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
  declarations: [
    ActivitiesComponent,
    CreateTaskComponent,
    AllTasksComponent,
    DataCardComponent,
    ProgressTasksComponent,
    CompletedTasksComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    UserRoutingModule,
    NotificationModule,
    LayoutModule,
    InputsModule,
    LabelModule,
    FloatingLabelModule,
    DateInputsModule,
    FormsModule,
    DialogsModule,
    ListViewModule,
    DropDownsModule,
  ],
})
export class UserModule {}
