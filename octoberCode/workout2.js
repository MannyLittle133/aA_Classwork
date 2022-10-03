// const address = {
//     street: '1600 Pennsylvania Avenue NW',
//     city: 'Washington',
//     state: 'DC',
//     zipCode: '20500'
// };

// console.log(street)

// class Book {
//     constructor(title, series, author) {
//       this.title = title;
//       this.series = series;
//       this.author = author;
//     }
//   }

//   class Book {
//     constructor(title, series, author) {
//       this.title = title;
//       this.series = series;
//       this.author = author;
//     }
//   }
  
  // Notice the use of the 'new' keyword to create an instance of the Book class
//   const fellowshipOfTheRing = new Book(
//    'The Fellowship of the Ring',
//    'The Lord of the Rings',
//    'J.R.R. Tolkien');
  
//   console.log(fellowshipOfTheRing);

//   const gobletOfFire = new Book (
//     'Harry Potter and the Goblet of Fire',
//     'Harry Potter',
//     'J.K. Rowling'
//   )

//   console.log(gobletOfFire)

  class Car {
    constructor(make, model, year, hp) {
        this.make = make
        this.model = model
        this.year = year
        this.hp = hp
          /* Incrementing the static variable every time a new Book is created
          Notice it is called using the same convention as you would with
          a class method, even still while within the class itself. */
          Car.numCars += 1;
    }

        // Example of an instance method
        getInformation() {
            return `${this.model} by ${this.make}`;
          }

          static getModels(...cars) {
            return cars.map((car) => car.model);
          }
         
     /* Static variable is declared like a normal variable except with the
      static keyword */
      static numCars = 0;    
  }

  const teslaModelX = new Car (

    'Tesla',
    'Model X',
    '2023', 
    '999+'
    )

    const dodgeDurango = new Car (
        "Dodge",
        "Durango Hell Cat",
        "2023",
        "707"
    )

    const mercedesGwagon = new Car (
        "Mercedes Benz",
        "G 63",
        "2023",
        "600"
    )
    console.log(Car.numCars)  
    console.log(teslaModelX)
    console.log(dodgeDurango)
    console.log(mercedesGwagon)
    console.log(teslaModelX.getInformation());
    console.log(dodgeDurango.getInformation());
    console.log(mercedesGwagon.getInformation());
    console.log(teslaModelX instanceof Car)
    console.log(mercedesGwagon instanceof Car)
    const carModels = Car.getModels(teslaModelX, dodgeDurango, mercedesGwagon);
    console.log(carModels.join(', '));

//   class Book {
//     constructor(title, series, author) {
//       this.title = title;
//       this.series = series;
//       this.author = author;
//    }
  
//     // Example of an instance method
//     getInformation() {
//       return `${this.title} by ${this.author}`;
//     }
//   }
  
//   const fellowshipOfTheRing = new Book(
//    'The Fellowship of the Ring',
//    'The Lord of the Rings',
//    'J.R.R. Tolkien');
  
//   console.log(fellowshipOfTheRing.getInformation());

// class Book {
//     constructor(title, series, author) {
//       this.title = title;
//       this.series = series;
//       this.author = author;
//     }
//   }
  
//   const fellowshipOfTheRing = new Book(
//    'The Fellowship of the Ring',
//    'The Lord of the Rings',
//    'J.R.R. Tolkien');
  
  // Use the `instanceof` operator to check if the
  // `fellowshipOfTheRing` object is an instance of the `Book` class.
//   console.log(fellowshipOfTheRing instanceof Book);

  class Book {
    constructor(title, series, author) {
      this.title = title;
      this.series = series;
      this.author = author;
    }
   
     // Example of an instance method
    getInformation() {
      return `${this.title} by ${this.author}`;
    }
   
    // Static method that accepts a variable number
    // of Book instances and returns an array of their titles.
    // Notice the use of a rest parameter (...books)
    // to capture the passed parameters as an array of values.
    static getTitles(...books) {
      return books.map((book) => book.title);
    }
   }
   
   const fellowshipOfTheRing = new Book(
    'The Fellowship of the Ring',
    'The Lord of the Rings',
    'J.R.R. Tolkien');
   
   const theTwoTowers = new Book(
    'The Two Towers',
    'The Lord of the Rings',
    'J.R.R. Tolkien');
   
   // Call the static `Book.getTitles()` method
   // to get an array of the book titles.
   const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers);
   
   console.log(bookTitles.join(', '));

   const list = new Array(1,5,3,9,11,-3);
console.log(list.sort());                // [ -3, 1, 11, 3, 5, 9 ]
console.log(list.sort((a, b) => a - b)); // [ -3, 1, 3, 5, 9, 11 ]