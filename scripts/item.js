

const validateName = function (name){
  if (name==="") {
    throw new TypeError ("Name must not be blank")
  }
}

const create = function (name){

    let item = {
        id: cuid(),
        name: `${name}`,
        checked: false
      }
      console.log(item)
    return item
}

export default {
    validateName,
    create
};

