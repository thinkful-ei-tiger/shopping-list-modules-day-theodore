
import item from './item.js';


const items = [];
const hideCheckedItems = false;

const findById = function(id){
  let found = id.find(function(theItem) {
    return theItem === item.id
  })
  return found
}


const addItem = function(name){
    try{
        item.validateName
        item.create
        this.items.push(name)
    }catch(e){
        console.log('Cannot create item')
    }
}

const findAndToggleChecked = function(id){
    this.findById(id);
}

const findAndUpdateName = function(id){
    try{
        item.validateName
        this.findById(id)
        item.create
    } catch(e){
        console.log(`Cannot update name: ${error.message}`)
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

