// Tutorial data for interactive learning modules

const tutorials = [
    {
        title: 'Variables in JavaScript',
        language: 'JavaScript',
        difficulty: 'Beginner',
        steps: [
            'Variables store data that can be used and changed throughout your program.',
            'Use <code>let</code> for variables that can be reassigned.',
            'Use <code>const</code> for constants that cannot be changed after assignment.',
            'Example: <code>let name = "Alice"; const PI = 3.14;</code>',
            'Practice: Declare a variable, assign a value, and log it to the console.'
        ],
        codeExample: `let message = "Hello, World!";
const PI = 3.14159;

console.log(message);
console.log("PI value:", PI);`,
        quiz: [
            {
                question: "Which keyword is used for variables that cannot be reassigned?",
                options: ["let", "var", "const", "variable"],
                correct: 2
            },
            {
                question: "What will be logged: let x = 5; x = 10; console.log(x);",
                options: ["5", "10", "undefined", "error"],
                correct: 1
            }
        ]
    },
    {
        title: 'Functions in JavaScript',
        language: 'JavaScript',
        difficulty: 'Beginner',
        steps: [
            'Functions are reusable blocks of code that perform specific tasks.',
            'Syntax: <code>function functionName(parameters) { code }</code>',
            'Call a function by using its name followed by parentheses.',
            'Example: <code>function greet(name) { return "Hello, " + name; }</code>',
            'Practice: Write a function that adds two numbers and returns the result.'
        ],
        codeExample: `function addNumbers(a, b) {
    return a + b;
}

function greetUser(name) {
    return "Hello, " + name + "!";
}

console.log(addNumbers(5, 3)); // Output: 8
console.log(greetUser("Alice")); // Output: Hello, Alice!`,
        quiz: [
            {
                question: "What keyword is used to define a function in JavaScript?",
                options: ["func", "def", "function", "method"],
                correct: 2
            },
            {
                question: "How do you call a function named 'myFunction'?",
                options: ["call myFunction", "myFunction()", "run myFunction", "execute myFunction"],
                correct: 1
            }
        ]
    },
    {
        title: 'Conditional Statements',
        language: 'JavaScript',
        difficulty: 'Beginner',
        steps: [
            'Use if-else statements to make decisions in your code.',
            'Syntax: <code>if (condition) { code } else { code }</code>',
            'Conditions evaluate to true or false.',
            'Example: <code>if (age >= 18) { console.log("Adult"); } else { console.log("Minor"); }</code>',
            'Practice: Write a condition that checks if a number is even or odd.'
        ],
        codeExample: `function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkAge(20)); // Adult
console.log(isEven(7)); // Odd`,
        quiz: [
            {
                question: "What is the correct syntax for an if statement?",
                options: ["if condition { code }", "if (condition) { code }", "if condition: code", "if [condition] code"],
                correct: 1
            },
            {
                question: "What will this return: if (5 > 3) { return true; } else { return false; }",
                options: ["true", "false", "undefined", "error"],
                correct: 0
            }
        ]
    },
    {
        title: 'Loops in JavaScript',
        language: 'JavaScript',
        difficulty: 'Beginner',
        steps: [
            'Loops repeat code execution multiple times.',
            'For loop: <code>for (let i = 0; i < 5; i++) { code }</code>',
            'While loop: <code>while (condition) { code }</code>',
            'Use break to exit a loop early.',
            'Practice: Write a loop that prints numbers from 1 to 10.'
        ],
        codeExample: `// For loop
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// While loop
let count = 1;
while (count <= 3) {
    console.log("While count:", count);
    count++;
}

// Loop with break
for (let i = 1; i <= 10; i++) {
    if (i === 7) break;
    console.log(i);
}`,
        quiz: [
            {
                question: "Which loop is best when you know exactly how many times to iterate?",
                options: ["while", "for", "do-while", "foreach"],
                correct: 1
            },
            {
                question: "What keyword is used to exit a loop early?",
                options: ["stop", "exit", "break", "end"],
                correct: 2
            }
        ]
    },
    {
        title: 'Arrays and Objects',
        language: 'JavaScript',
        difficulty: 'Intermediate',
        steps: [
            'Arrays store multiple values in a single variable.',
            'Access elements with index: <code>array[0]</code>',
            'Objects store key-value pairs.',
            'Access properties with dot notation: <code>object.property</code>',
            'Practice: Create an array of numbers and calculate their sum.'
        ],
        codeExample: `// Arrays
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1
console.log(numbers.length); // 5

// Objects
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
console.log(person.name); // Alice
console.log(person["age"]); // 25

// Array methods
numbers.push(6); // Add to end
console.log(numbers); // [1, 2, 3, 4, 5, 6]`,
        quiz: [
            {
                question: "How do you access the first element of an array?",
                options: ["array.first", "array[1]", "array[0]", "array.get(0)"],
                correct: 2
            },
            {
                question: "What does array.length return?",
                options: ["Last element", "Number of elements", "First element", "Array type"],
                correct: 1
            }
        ]
    },
    {
        title: 'Data Structures: Stacks and Queues',
        language: 'JavaScript',
        difficulty: 'Intermediate',
        steps: [
            'Stacks follow LIFO (Last In, First Out) principle.',
            'Queues follow FIFO (First In, First Out) principle.',
            'Use arrays with push/pop for stacks, push/shift for queues.',
            'Practice: Implement a simple stack with push and pop operations.'
        ],
        codeExample: `// Stack implementation
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

// Queue implementation
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) return "Underflow";
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2 (LIFO)`,
        quiz: [
            {
                question: "What does LIFO stand for?",
                options: ["Last In, First Out", "Last In, First On", "First In, Last Out", "First In, First Out"],
                correct: 0
            },
            {
                question: "Which method removes an element from the end of an array?",
                options: ["shift", "unshift", "push", "pop"],
                correct: 3
            }
        ]
    },
    {
        title: 'Basic Algorithms: Sorting',
        language: 'JavaScript',
        difficulty: 'Intermediate',
        steps: [
            'Bubble sort compares adjacent elements and swaps them if needed.',
            'Selection sort finds the minimum element and places it at the beginning.',
            'Insertion sort builds the sorted array one element at a time.',
            'Time complexity: O(n²) for these basic sorts.'
        ],
        codeExample: `function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort([...numbers]));
console.log(selectionSort([...numbers]));`,
        quiz: [
            {
                question: "What is the time complexity of bubble sort?",
                options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
                correct: 2
            },
            {
                question: "In bubble sort, what happens in each pass?",
                options: ["Elements are randomly rearranged", "Largest element moves to end", "Smallest element moves to start", "Array is reversed"],
                correct: 1
            }
        ]
    },
    {
        title: 'Object-Oriented Programming',
        language: 'JavaScript',
        difficulty: 'Advanced',
        steps: [
            'Classes are blueprints for creating objects.',
            'Objects have properties (data) and methods (functions).',
            'Use constructor to initialize object properties.',
            'Inheritance allows classes to inherit properties from parent classes.'
        ],
        codeExample: `class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(\`\${this.name} makes a sound.\`);
    }

    getInfo() {
        return \`\${this.name} is \${this.age} years old.\`;
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    speak() {
        console.log(\`\${this.name} barks!\`);
    }

    getBreed() {
        return this.breed;
    }
}

let dog = new Dog("Buddy", 3, "Golden Retriever");
dog.speak(); // Buddy barks!
console.log(dog.getInfo()); // Buddy is 3 years old.
console.log(dog.getBreed()); // Golden Retriever`,
        quiz: [
            {
                question: "What keyword is used to create a class in JavaScript?",
                options: ["function", "object", "class", "struct"],
                correct: 2
            },
            {
                question: "What does the 'super' keyword do in a child class?",
                options: ["Creates a new instance", "Calls parent constructor", "Defines a method", "Accesses static properties"],
                correct: 1
            }
        ]
    }
];

function getTutorial(index) {
    if (index >= 0 && index < tutorials.length) {
        return tutorials[index];
    }
    return null;
}

function getAllTutorialTitles() {
    return tutorials.map(t => t.title);
}

function getTutorialsByDifficulty(difficulty) {
    return tutorials.filter(tutorial => tutorial.difficulty === difficulty);
}

function getTutorialsByLanguage(language) {
    return tutorials.filter(tutorial => tutorial.language === language);
}

function getTutorialQuiz(index) {
    const tutorial = getTutorial(index);
    return tutorial ? tutorial.quiz : null;
}

function checkQuizAnswer(tutorialIndex, questionIndex, selectedAnswer) {
    const tutorial = getTutorial(tutorialIndex);
    if (!tutorial || !tutorial.quiz[questionIndex]) return false;

    return tutorial.quiz[questionIndex].correct === selectedAnswer;
}
