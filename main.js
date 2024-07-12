/* problem - 1 ---> (Array Filtering And Mapping) ---> Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result. */

const people = [
    {
        name: 'Babul',
        age: 30,
        gender: 'male'
    },
    {
        name: 'Shetu',
        age: 20,
        gender: 'female'
    },
    {
        name: 'Rahim',
        age : 25,
        gender: 'male'
    },
    {
        name: 'Karim',
        age: 35,
        gender: 'male'
    },
    {
        name: 'Lima',
        age: 24,
        gender: 'female'
    },
    {
       name: 'Rina',
         age: 16,
         gender: 'female'
    }
]

const malePeopleNames = (people) => {
    return people.filter(person => person.gender !== 'female').map(person => person.name);
}

const malePeopleNamesArray = malePeopleNames(people);

console.log('Output of problem 1 -> ', malePeopleNamesArray);


/* problem - 2 ---> (Object Manipulation) ---> Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result. */

const books = [
    {
        title: 'The Alchemist',
        author: 'Paulo Co',
        year: 2010
    },
    {
        title: 'The Secret',
        author: 'Rhonda Byrne',
        year: 2006
    },
    {
        title: 'The Monk Who Sold His Ferrari',
        author: 'Robin Sharma',
        year: 2003
    },
    {
        title: 'The Power Of Subconscious Mind',
        author: 'Joseph Murphy',
        year: 2008
    },
    {
        title: 'The 7 Habits Of Highly Effective People',
        author: 'Stephen R. Covey',
        year: 2004
    }
]

const bookTitles = (books) => {
    return books.map(book => book.title);
}

const bookTitlesArray = bookTitles(books);

console.log('Output of problem 2 -> ', bookTitlesArray);



/* problem - 3 ---> (Function Composition) ---> Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5. */

function square(num) {
    return num * num;
  }
  
function double(num) {
    return num * 2;
  }
  
 
function addFive(num) {
    return num + 5;
  }
  
  function composeFunctions(num) {
    return addFive(double(square(num)));
  }

const result = composeFunctions(5); 
// console.log(result);


/* problem - 4 ---> (Sorting Objects) ---> Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array. */

const cars = [
    {
        make: 'Toyota',
        model: 'Corolla',
        year: 2018
    },
    {
        make: 'Honda',
        model: 'Civic',
        year: 2019
    },
    {
        make: 'Suzuki',
        model: 'Swift',
        year: 2017
    },
    {
        make: 'BMW',
        model: 'X1',
        year: 2020
    },
    {
        make: 'Audi',
        model: 'A4',
        year: 2016
    }
]

const sortByYear = (cars) => {
    return cars.sort((a, b) => a.year - b.year);
}
const sortCarsByYear = sortByYear(cars);

console.log('Output of problem 4 -> ', sortCarsByYear);


/* problem - 5 ---> (Find And Modify) ---> Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array. */

const searchAndUpdate = (arrOfObjects, name, ageToBeUpdated) => {
    const person = arrOfObjects.find(person => person.name === name);
    if(person) {
        person.age = ageToBeUpdated;
    }
    return arrOfObjects;
}

const updatedPeople = searchAndUpdate(people, 'Rahim', 26);

console.log('Output of problem 5 -> ', updatedPeople);


/* problem - 6 ---> (Array Reduction) ---> Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array. */

const numbers = [1, 2, 3, 4, 5, 6, 15, 7, 8, 9, 10];

const sumOfEvenNumbers = (numbers) => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const sumOfAllEvenNumbers = evenNumbers.reduce((acc, num) => acc + num, 0);
    return sumOfAllEvenNumbers;
}

// const sum = sumOfEvenNumbers(numbers);
// console.log('Output of problem 6 -> ', sum);



/* problem - 7 ---> ( Leap Year Checker) ---> Write A Function That Determines Whether A Given Year Is A Leap Year. */

const isLeapyear = (year) => {
    if(typeof year !== 'number') {
        return 'Please enter a valid year';
    }
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 'The given year is a leap year';
    } else {
        return 'The given year is not a leap year';
    }
}

// const leapYear = isLeapyear(2021);
// console.log('Output of problem 7 -> ', leapYear);


/* problem - 8 ---> ( Unique Values ) ---> Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result. */

const numbersWithDuplicates = [1, 2, 6, 3, 4, 5, 8, 8, 6, 7, 8, 9, 7, 2, 10];

const uniqueNumbers = (numbers) => {
    return [...new Set(numbers)]
}
const uniqueNumbersArray = uniqueNumbers(numbersWithDuplicates);

console.log('Output of problem 8 -> ', uniqueNumbersArray);


/* problem - 9 ---> ( Find Maximum Value ) ---> Write A Function That Takes An Array Of Numbers And Returns The Maximum Value. */

const findMaxValue = (numbers) => {
    return Math.max(...numbers);
}
// const maxValue = findMaxValue(numbers);
// console.log('Output of problem 9 -> ', maxValue);


/* problem - 10 ---> ( Advanced Sorting ) ---> Create An Array Of Objects Representing Students With 'Name' And 'Grades' Properties. Write A Function To Sort The Students By Average Grade In Descending Order. */

const students = [
    {
        name: 'Babul',
        grades: [90, 85, 95]
    },
    {
        name: 'Shetu',
        grades: [80, 75, 85]
    },
    {
        name: 'Rahim',
        grades: [70, 65, 75]
    },
    {
        name: 'Karim',
        grades: [85, 80, 90]
    },
    {
        name: 'Lima',
        grades: [75, 70, 80]
    }
]

function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
  }
  
  function sortStudentsInDescendingOrderByAverageGrade(students) {
    return students.sort((a, b) => calculateAverage(b.grades) - calculateAverage(a.grades));
  }
  
  const sortedStudents = sortStudentsInDescendingOrderByAverageGrade(students);
  
//   console.log(sortedStudents);


/* problem - 11 ---> ( Functional Programming - Reduce ) ---> Write A Function That Uses The Reduce Function To Calculate The Total Value Of An Array Of Objects With A 'Quantity' And 'Price' Property. */

const items = [
    {
        quantity: 6,
        price: 10
    },
    {
        quantity: 3,
        price: 20
    },
    {
        quantity: 8,
        price: 30
    },
    {
        quantity: 2,
        price: 40
    },
    {
        quantity: 5,
        price: 50
    }
]

const totalValue = (items) => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
}
// const total = totalValue(items);

// console.log('Output of problem 11 -> ', total);