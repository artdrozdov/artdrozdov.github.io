import { Component, Input } from '@angular/core';
import { StorageService } from './services/storageService';
import { Router } from '@angular/router';

@Component({
    selector:'todo-item',
    templateUrl:'./todo.item.html'
})
export class ToDoItem {
    @Input() id: number;
    @Input() title: string;
    @Input() description: string;

    constructor(private storage: StorageService, private router: Router){}

    onDelete(){
        this.storage.delete(this.id);
        this.router.navigate(['/to-do']);
    }
}