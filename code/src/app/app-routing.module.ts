import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ToDoList} from './todo.items.list';
import { ToDoItemAddComponent } from './todo.item.add.component';

const routes: Routes = [
  { path:'to-do', component: ToDoList },
  { path: 'add', component: ToDoItemAddComponent},
  { path:'', pathMatch:'full', redirectTo:'to-do' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
