let users = {}
    
   for(let i = 1;i <= 10;i++) {
    let name = prompt ('Введите свое имя');
    let age = +prompt ('Введите свой возраст');
    users[i] ={
        name : name,
        age : age
    }
   }
   for(const key in users) {
    console .log(`Пользаватель: ${key}`);
    for(const newKey in users[key]) {
    console.log(newKey == 'name' ? 'Вас зовут: ' + users[key][newKey] : 'Вам:' + users[key][newKey]);
    }
   }
   console.log(users);
      
       

     

    
       

   


