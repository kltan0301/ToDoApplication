import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TaskItem } from './taskItem.component';
import { Task } from './task';
import { StatusPipe } from './status.pipe';
import { PendingList } from './pendingList.component';
import { CompletedList } from './completedList.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,
                  TaskItem,
                  StatusPipe,
                  PendingList,
                  CompletedList
                ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
