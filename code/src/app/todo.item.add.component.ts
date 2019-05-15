import {Component} from '@angular/core';
import { StorageService } from './services/storageService';
import { Item } from './entities/item';
import { store } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
    selector: 'todo-add-form',
    templateUrl: './todo.item.add.component.html'
})
export class ToDoItemAddComponent {

    private newItem: Item; 
    constructor(private storage: StorageService, private router: Router){
        this.newItem = new Item();
        this.newItem.id = this.storage.getLastId()+1;
    }

    public OnSubmit()
    {
        console.log('form submitted');
        console.log(this.newItem);
        this.storage.add(this.newItem);
        this.router.navigate(['/to-do']);
    }
}