alert( 'Interface'[0].toLowerCase() ); // 'i'

/* alert( Math.random() );
let a = Math.random();
alert(a.toFixed(2)); */

/* let user = {
  name: "John",
  money: 1,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `яяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяя
  }
};

// демонстрация результатов преобразований:
alert(user + user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500 */


/* let user = {
  name: "John",
  money: 1000,

  // для хинта равного "string"
  toString(hint) {
    alert(`hint: ${hint}`);
    return `{name: "${this.name}"}`;
  },

  // для хинта равного "number" или "default"
  valueOf() {
    return this.money;
  }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500 */


/* let user = {
    name: "Джон",
    go: function() { alert(this.name) }
  };
  
  user.go(); // Джон */



// let user = {
//     name: "Джон",
//     age: 30, 
  
//     sayHi() {
//     //   console.log( this.name ); // приведёт к ошибке
//     }
//   };
 
// user.sayHi();

// let admin = user;
// user = null;
// for (key in admin) {
//     console.log(admin[key]);
// }
// admin.sayHi();


// let user = {
//     name: "Джон",
//     age: 30
//   };
//   user.sayHi = function() {
//     alert("Привет!");
//   };
//   for (let key in user) {
//     console.log(user[key]);

//   }
//   user.sayHi(); // Привет!
//   console.log(user)



// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0;
// for  (let key in salaries) {
//     sum = sum + key;
  
//     console.log(salaries[key]);

// }
// console.log(sum);



// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
// console.log(menu);
// function multiplyNumeric(menu) {
//     for(let key in menu) {
//         if (typeof menu[key] == 'number') {
//             menu[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);

// now user = { name: "John", canView: true, canEdit: true }
// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     car: "BMW",
//     // ...другие свойства
//   };
// }

// let user = makeUser("John", 30);
// alert(user.name); // John
// alert(user.car)


// // чтобы увидеть результат, сначала откройте консоль
// let x = "den erem";
// let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30,        // под ключом "age" хранится значение 30
//   isAdmin: true,
//   [x]: "den",
// };
// console.log( user );
// delete user.age;
// console.log( user );



// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );



// let age = prompt("Сколько Вам лет?", 18);
// let welcome;
// // в зависимости от условия объявляем функцию
// if (age < 18) {
//   welcome = function() {
//     alert("Привет!");
//   };
// } else {
//   welcome = function() {
//     alert("Здравствуйте!");
//   };
// }
// welcome();


// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result = result * x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert( pow(x, n) );
// }



// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < 20; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     console.log( i ); // простое
//   }
// }


// showPrimes();
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
// for (let i = 0; i <= 10; i++) {

//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 == 0) ;

//     alert(i); // 1, затем 3, 5, 7, 9
//   }
// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );
// let access;
// let age = prompt("How old are you?");
// if (age >= 18) {
//     access = true;
// } else {
//     access = false;
// }

// alert(Number(access));
// alert(typeof access);

// let login = prompt("Введите логин:", "Сотрудник");
// let message = (login == "Сотрудник") ? "Privet!" :
// (login == "Директор") ? "Здравствуйте!" :
// (login == '') ? "Нет логина" : "";
// alert(message);

// if (1 && 1) { // вычисляется как true && false
//     alert( "не сработает, так как результат ложный" );
//   }
// alert( alert(1) && alert(2) );

// $(function() {

//     /* Fixed Header */
//     let header = $("#header");
//     let intro = $("#intro");
//     let introH = intro.innerHeight();
//     let scrollPos = $(window).scrollTop();
//     let nav = $("#nav");
//     let navToggle = $("#navToggle");

//     checkScroll(scrollPos, introH);

//     $(window).on("scroll resize", function() {
//         introH = intro.innerHeight();
//         scrollPos = $(this).scrollTop();

//         checkScroll(scrollPos, introH);
//     });

//     function checkScroll(scrollPos, introH) {
//         if( scrollPos > introH ) {
//             header.addClass("fixed");
//         } else {
//             header.removeClass("fixed");
//         }
//     }

//     /* Smooth scroll */
//     $("[data-scroll]").on("click", function(event) {
//         event.preventDefault();

//         let elementId = $(this).data('scroll');
//         let elementOffset = $(elementId).offset().top;

//         nav.removeClass("show");

//         $("html, body").animate({
//             scrollTop: elementOffset - 65
//         }, 700);
//     });

//     /* Nav Toggle */

// 	navToggle.on("click", function(event) {
//         event.preventDefault();

//         nav.toggleClass("show");
//     });

// 		/* Slider*/

// 	let Slider = $("#reviewsSlider");
// 	Slider.slick({
// 		infinite: true,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		arrows: false,
// 		dots: true
// });

// });
