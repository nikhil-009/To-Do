import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {
    path: 'whats-new',
    component: WhatsNewComponent,
  },
  {
    path: '',
    component: WhatsNewComponent,
  },
  { path: 'about', component: AboutComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./Users/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
