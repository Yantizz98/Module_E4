function noPrototypeObj(){
    const newObj= Object.create(null);
    return newObj
  };
  
  console.log(noPrototypeObj())