
import item from './item.js';


const items = [];
const hideCheckedItems = false;

const findById = function(id){
  let found = id.find(function(theItem) {
    return theItem.id === store.items
  })

  return item.id
}


const addItem = function(name){
    try{
        item.validateName(name)
        item.create(name)
        this.items.push(item.create(name))
        
    }catch(e){
        console.log('Cannot create item')
    }
}

const findAndToggleChecked = function(id){
    this.findById(id);
}

const findAndUpdateName = function(id){
    try{
        item.validateName(id)
        this.findById(id)
        item.create(id)
        throw new Error (`Cannot update name: ${id}`)
    } catch(e){
        console.log(`Cannot update name: ${id}`)
    }
}


const findAndDelete = function(id){
    let found = this.items.findIndex(item => item.id === id);
    this.items.splice(found, 1);
}


export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
};

