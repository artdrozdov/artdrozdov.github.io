import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storageService';
import { Item } from './entities/item';

@Component({
    selector: 'todo-list',
    templateUrl: './todo.items.list.html'
})
export class ToDoList implements OnInit {
    public items: Item[];

    public constructor(private storage: StorageService){
    }

    ngOnInit(){
        this.items = this.storage.get();
        console.log(this.items);
    }
}