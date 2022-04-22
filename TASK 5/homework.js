// TASK 5

let login = prompt('Напиши логин.', ''); 
   
   if (login == 'Админ') {
      let password = prompt('Напиши пароль.', '');

      if (password === 'Я главный')
      alert('Здравствуйте!');

      else if (password === null)
      alert('Отменено');

      else {
         alert('Неверный пароль')
      }
   }
      else if (login == null || login == '') {
         alert('Отменено','')
      }
      else {
         alert('Я вас не знаю','')
      }
      
