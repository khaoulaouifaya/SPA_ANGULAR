import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    HomeComponent,
    NotFoundComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    

    RouterModule.forRoot([

      {path:'',component: HomeComponent},
      {path:'task',component: TaskComponent},
      {path:'allTasks',component: TasksComponent},
      {path:'**',component: NotFoundComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
