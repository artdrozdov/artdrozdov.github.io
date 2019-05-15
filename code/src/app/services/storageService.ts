import { Item } from '../entities/item';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    private store: Item[];
    
    constructor(){
        this.store = [{id : this.getLastId()+1, title: 'Add more goals!', description: 'You need to have more goals you know.'}];
    }

    get(): Item[] {
        return this.store;
    }    
    delete(id: number) {
        for(let i=0; i < this.store.length; i++){
            if(this.store[i].id = id)
                this.store.splice(i, 1);
        }
        
    }
    add(item: Item) {
        this.store.push(item);
    }

    getLastId(): number {
        if(this.store != undefined && this.store.length > 0){
            return this.store[this.store.length-1].id;
        }
        return 0;
    }
}

