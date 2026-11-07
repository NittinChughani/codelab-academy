/* Original educational content. Add new lessons and questions here. */
const LESSONS = [
{id:'c-hello',lang:'c',title:'Your First C Program',level:'Beginner',description:'Compile and run your first C program.',intro:'C is a compiled programming language. Every C program starts execution from the main function.',code:'#include <stdio.h>\n\nint main(void) {\n    printf("Hello, world!\\n");\n    return 0;\n}',points:['#include <stdio.h> makes printf available.','main is the program entry point.','\\n prints a newline; return 0 signals success.'],challenge:'Change the greeting to your name and compile the program.'},
{id:'c-variables',lang:'c',title:'Variables & Data Types',level:'Beginner',description:'Store numbers and characters in C.',intro:'Variables give names to values. Their declared types determine how values are represented and used.',code:'#include <stdio.h>\n\nint main(void) {\n    int age = 18;\n    double score = 92.5;\n    char grade = \'A\';\n    printf("%d %.1f %c\\n", age, score, grade);\n    return 0;\n}',points:['int stores whole numbers.','double stores floating-point values.','char stores one character; format specifiers must match argument types.'],challenge:'Add an integer year variable and print it.'},
{id:'c-conditionals',lang:'c',title:'If, Else & Decisions',level:'Beginner',description:'Control which statements run.',intro:'Conditional statements let a program choose a path based on a true or false expression.',code:'#include <stdio.h>\n\nint main(void) {\n    int score = 76;\n    if (score >= 50) {\n        printf("Pass\\n");\n    } else {\n        printf("Try again\\n");\n    }\n    return 0;\n}',points:['Comparison operators include ==, !=, <, >, <= and >=.','Use == to compare values, not =.','An else block runs when the if condition is false.'],challenge:'Print Excellent when the score is at least 90.'},
{id:'c-loops',lang:'c',title:'Loops in C',level:'Beginner',description:'Repeat work using for and while.',intro:'Loops execute statements repeatedly while a condition remains true.',code:'#include <stdio.h>\n\nint main(void) {\n    for (int i = 1; i <= 5; i++) {\n        printf("%d\\n", i);\n    }\n    return 0;\n}',points:['Initialization runs once before the first iteration.','The condition is checked before each iteration.','The update runs after each iteration.'],challenge:'Modify the loop to print even numbers from 2 through 20.'},
{id:'c-functions',lang:'c',title:'Functions in C',level:'Intermediate',description:'Reuse logic with functions and parameters.',intro:'Functions group reusable logic into named units. Parameters provide input; return values provide output.',code:'#include <stdio.h>\n\nint square(int n) {\n    return n * n;\n}\n\nint main(void) {\n    printf("%d\\n", square(6));\n    return 0;\n}',points:['A function declaration specifies return type and parameters.','Calling square(6) evaluates to 36.','Functions make code easier to test and reuse.'],challenge:'Write a function that returns the larger of two integers.'},
{id:'c-arrays',lang:'c',title:'Arrays & Indexing',level:'Intermediate',description:'Work with ordered collections of values.',intro:'An array stores multiple values of the same type in contiguous memory.',code:'#include <stdio.h>\n\nint main(void) {\n    int values[] = {4, 8, 12};\n    for (int i = 0; i < 3; i++) {\n        printf("%d\\n", values[i]);\n    }\n    return 0;\n}',points:['Array indices begin at 0.','values[2] is the third element.','Accessing beyond array bounds causes undefined behavior.'],challenge:'Calculate and print the sum of all array elements.'},
{id:'cpp-hello',lang:'cpp',title:'Your First C++ Program',level:'Beginner',description:'Print text with iostream and main.',intro:'C++ builds on many C concepts and supports multiple programming styles, including object-oriented programming.',code:'#include <iostream>\n\nint main() {\n    std::cout << "Hello, C++!\\n";\n    return 0;\n}',points:['iostream provides input and output streams.','std::cout writes to standard output.','The << operator sends values to an output stream.'],challenge:'Print two lines using separate std::cout statements.'},
{id:'cpp-input',lang:'cpp',title:'Input & Variables',level:'Beginner',description:'Read user input safely with cin.',intro:'C++ uses streams to read typed input and print output.',code:'#include <iostream>\n\nint main() {\n    int number{};\n    std::cout << "Enter a number: ";\n    if (std::cin >> number) {\n        std::cout << "Double: " << number * 2 << "\\n";\n    } else {\n        std::cout << "Invalid input\\n";\n    }\n}',points:['std::cin reads from standard input.','Initialize variables before use.','Check input operations to handle invalid values.'],challenge:'Read two numbers and print their sum.'},
{id:'cpp-loops',lang:'cpp',title:'Loops in C++',level:'Beginner',description:'Practice for loops and range-based loops.',intro:'C++ offers classic loops and a range-based for loop for iterating over collections.',code:'#include <iostream>\n\nint main() {\n    for (int i = 1; i <= 5; ++i) {\n        std::cout << i << " ";\n    }\n    std::cout << "\\n";\n}',points:['Use for when iteration steps are known.','Use while for condition-controlled repetition.','Avoid loops whose conditions never become false.'],challenge:'Print the multiplication table of 7.'},
{id:'cpp-vectors',lang:'cpp',title:'Vectors & Collections',level:'Intermediate',description:'Use dynamically sized arrays with vector.',intro:'std::vector manages a resizable sequence of elements, making it a practical default collection.',code:'#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> nums{2, 4, 6};\n    nums.push_back(8);\n    for (int n : nums) {\n        std::cout << n << " ";\n    }\n    std::cout << "\\n";\n}',points:['push_back appends an element.','size() returns the number of elements.','Range-based loops visit each element.'],challenge:'Create a vector of five integers and print their sum.'},
{id:'cpp-functions',lang:'cpp',title:'Functions & References',level:'Intermediate',description:'Write reusable functions with const references.',intro:'Functions can accept values or references. A const reference can avoid copying large objects while preventing modification.',code:'#include <iostream>\n#include <string>\n\nvoid greet(const std::string& name) {\n    std::cout << "Hello, " << name << "!\\n";\n}\n\nint main() {\n    greet("Ada");\n}',points:['const std::string& is a read-only reference parameter.','void means the function does not return a value.','Small simple types are often passed by value.'],challenge:'Write a function that returns the square of an integer.'},
{id:'cpp-classes',lang:'cpp',title:'Classes & Objects',level:'Intermediate',description:'Learn encapsulation with a simple class.',intro:'Classes group data and related behavior. Public methods provide a controlled interface to private state.',code:'#include <iostream>\n\nclass Counter {\nprivate:\n    int value = 0;\npublic:\n    void increment() { ++value; }\n    int get() const { return value; }\n};\n\nint main() {\n    Counter counter;\n    counter.increment();\n    std::cout << counter.get() << "\\n";\n}',points:['private members are inaccessible directly outside the class.','public methods define the interface.','const after get() means it does not modify the object.'],challenge:'Add a reset() method that sets the counter back to zero.'}
];
const QUESTIONS = [
{id:'q1',lang:'c',question:'Which header declares printf in C?',options:['<iostream>','<stdio.h>','<vector>','<string>'],answer:1,explanation:'The standard C header <stdio.h> declares printf.'},
{id:'q2',lang:'c',question:'What is the first valid index of a C array?',options:['1','-1','0','It depends on its size'],answer:2,explanation:'C arrays use zero-based indexing.'},
{id:'q3',lang:'c',question:'Which operator compares two values for equality?',options:['=','==','!=','>='],answer:1,explanation:'== tests equality, while = assigns a value.'},
{id:'q4',lang:'c',question:'What does a function declared void return?',options:['An integer','A character','No value','A pointer'],answer:2,explanation:'void means the function returns no value.'},
{id:'q5',lang:'c',question:'How many times does for (int i=0; i<3; i++) execute?',options:['2','3','4','Forever'],answer:1,explanation:'The body executes for i equal to 0, 1, and 2.'},
{id:'q6',lang:'c',question:'What is the result of 7 / 2 when both operands are int in C?',options:['3.5','4','3','Compilation error'],answer:2,explanation:'Integer division truncates the fractional part toward zero.'},
{id:'q7',lang:'cpp',question:'Which stream prints output in standard C++?',options:['std::cin','std::cout','std::vector','std::getline'],answer:1,explanation:'std::cout is the standard output stream.'},
{id:'q8',lang:'cpp',question:'Which header provides std::vector?',options:['<vector>','<array>','<stdio.h>','<cmath>'],answer:0,explanation:'Include <vector> to use std::vector.'},
{id:'q9',lang:'cpp',question:'What does push_back do on a std::vector?',options:['Removes the first element','Sorts the vector','Adds an element to the end','Clears the vector'],answer:2,explanation:'push_back appends an element to the vector.'},
{id:'q10',lang:'cpp',question:'Which access label hides class members from outside code?',options:['public','global','private','export'],answer:2,explanation:'private restricts direct member access to the class and its friends.'},
{id:'q11',lang:'cpp',question:'What does const mean in const std::string& name?',options:['The parameter cannot be modified through that reference','The string is always empty','The reference is null','The parameter is copied'],answer:0,explanation:'A const reference prevents modification through that reference and avoids copying.'},
{id:'q12',lang:'cpp',question:'Which operator reads input using std::cin?',options:['<<','>>','==','&&'],answer:1,explanation:'The extraction operator >> reads formatted input from a stream.'}
];

// Additional original course material.
LESSONS.push(...[
  {
    "id": "c-operators",
    "lang": "c",
    "title": "Operators and Expressions",
    "level": "Beginner",
    "description": "Use arithmetic, comparisons and logical operators.",
    "intro": "Operators combine values into expressions; precedence determines the order of evaluation.",
    "code": "#include <stdio.h>\nint main(void) {\n    int a = 9, b = 4;\n    printf(\"%d %d %d\\n\", a + b, a / b, a % b);\n    return 0;\n}",
    "points": [
      "Integer division drops the fractional part.",
      "The % operator returns the integer remainder.",
      "Use parentheses when precedence is unclear."
    ],
    "challenge": "Print the square and cube of an integer.",
    "walkthrough": "9 / 4 is 2, not 2.25, because both operands are int.",
    "pitfalls": "Division by zero is undefined behavior.",
    "output": "13 2 1"
  },
  {
    "id": "c-input",
    "lang": "c",
    "title": "Reading User Input",
    "level": "Beginner",
    "description": "Read integers with scanf and validate input.",
    "intro": "scanf can read formatted data; always check whether input conversion succeeded.",
    "code": "#include <stdio.h>\nint main(void) {\n    int a, b;\n    if (scanf(\"%d %d\", &a, &b) == 2) {\n        printf(\"Sum: %d\\n\", a + b);\n    } else {\n        puts(\"Invalid input\");\n    }\n    return 0;\n}",
    "points": [
      "& passes the address of an integer variable.",
      "scanf returns the number of successfully assigned items.",
      "Validate user input before calculations."
    ],
    "challenge": "Read three integers and print their largest value.",
    "walkthrough": "Read both integers, check for two conversions, then compute the sum.",
    "pitfalls": "Never call scanf with %d and an int argument missing its address.",
    "output": "Sum: 7"
  },
  {
    "id": "c-switch",
    "lang": "c",
    "title": "Switch Statements",
    "level": "Beginner",
    "description": "Choose a branch based on one integral value.",
    "intro": "switch is useful for discrete constant choices such as menu options.",
    "code": "#include <stdio.h>\nint main(void) {\n    int option = 2;\n    switch (option) {\n        case 1: puts(\"Add\"); break;\n        case 2: puts(\"Edit\"); break;\n        default: puts(\"Unknown\");\n    }\n    return 0;\n}",
    "points": [
      "case labels must be compile-time constant values.",
      "break avoids falling into the next case.",
      "default handles unexpected choices."
    ],
    "challenge": "Add a third case that prints Delete.",
    "walkthrough": "The value 2 selects the second case and stops at break.",
    "pitfalls": "Forgetting break may unintentionally execute the next case.",
    "output": "Edit"
  },
  {
    "id": "c-nested-loops",
    "lang": "c",
    "title": "Nested Loops",
    "level": "Beginner",
    "description": "Use a loop inside another loop.",
    "intro": "Nested loops are handy for grids, tables and row-by-column processing.",
    "code": "#include <stdio.h>\nint main(void) {\n    for (int row = 1; row <= 3; row++) {\n        for (int col = 1; col <= row; col++) printf(\"*\");\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "points": [
      "The inner loop completes before the outer loop advances.",
      "Each row prints as many stars as its row number.",
      "Time complexity can multiply across nested loops."
    ],
    "challenge": "Change the program to print four rows.",
    "walkthrough": "Row 1 runs the inner loop once; row 2 twice; row 3 three times.",
    "pitfalls": "Use separate loop variables for each level.",
    "output": "*\n**\n***"
  },
  {
    "id": "c-strings",
    "lang": "c",
    "title": "Strings and Character Arrays",
    "level": "Intermediate",
    "description": "Store and traverse null-terminated text.",
    "intro": "In C, a string is a char array ending with the null terminator \\0.",
    "code": "#include <stdio.h>\n#include <string.h>\nint main(void) {\n    char word[] = \"Code\";\n    printf(\"Length: %zu\\n\", strlen(word));\n    for (size_t i = 0; word[i] != '\\0'; i++) putchar(word[i]);\n    putchar('\\n');\n    return 0;\n}",
    "points": [
      "strlen counts characters before the null terminator.",
      "Character arrays need space for \\0.",
      "Use bounded input to avoid overflowing a buffer."
    ],
    "challenge": "Count vowels in a word.",
    "walkthrough": "strlen(\"Code\") is 4; the array actually occupies 5 bytes including \\0.",
    "pitfalls": "Never use gets or an unbounded %s for input.",
    "output": "Length: 4\nCode"
  },
  {
    "id": "c-pointers",
    "lang": "c",
    "title": "Pointers and Addresses",
    "level": "Intermediate",
    "description": "Understand pointers and dereferencing.",
    "intro": "A pointer stores the address of an object; * accesses the value at that address.",
    "code": "#include <stdio.h>\nint main(void) {\n    int score = 42;\n    int *ptr = &score;\n    *ptr += 8;\n    printf(\"%d\\n\", score);\n    return 0;\n}",
    "points": [
      "&score obtains the address of score.",
      "int *ptr declares a pointer to int.",
      "*ptr can modify score through its address."
    ],
    "challenge": "Write a function that swaps two integers using pointers.",
    "walkthrough": "ptr refers to score; updating *ptr updates the same integer.",
    "pitfalls": "Never dereference a null or uninitialized pointer.",
    "output": "50"
  },
  {
    "id": "c-structures",
    "lang": "c",
    "title": "Structures",
    "level": "Intermediate",
    "description": "Group related data using struct.",
    "intro": "Structures hold fields of different types in one value.",
    "code": "#include <stdio.h>\nstruct Student { int id; double gpa; };\nint main(void) {\n    struct Student s = {7, 3.5};\n    printf(\"ID %d, GPA %.1f\\n\", s.id, s.gpa);\n    return 0;\n}",
    "points": [
      "A struct declaration describes a compound type.",
      "Use dot notation for fields of a struct value.",
      "Use -> to access fields through a pointer to struct."
    ],
    "challenge": "Add a name field to Student and print it.",
    "walkthrough": "s.id reads the integer field, and s.gpa reads the double field.",
    "pitfalls": "Initialize all fields before reading them.",
    "output": "ID 7, GPA 3.5"
  },
  {
    "id": "c-recursion",
    "lang": "c",
    "title": "Recursion",
    "level": "Intermediate",
    "description": "Solve smaller subproblems with function calls.",
    "intro": "A recursive function calls itself and needs a base case to stop.",
    "code": "#include <stdio.h>\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nint main(void) { printf(\"%d\\n\", factorial(5)); }",
    "points": [
      "The base case prevents endless recursion.",
      "Each recursive call gets its own local variables.",
      "Deep recursion can exhaust the call stack."
    ],
    "challenge": "Implement recursive digit sum for a nonnegative integer.",
    "walkthrough": "factorial(5) expands to 5*4*3*2*1.",
    "pitfalls": "Limit n to values for which int factorial does not overflow.",
    "output": "120"
  },
  {
    "id": "c-dynamic-memory",
    "lang": "c",
    "title": "Dynamic Memory",
    "level": "Intermediate",
    "description": "Allocate and release memory using malloc and free.",
    "intro": "Dynamic allocation requests memory whose size can be determined at runtime.",
    "code": "#include <stdio.h>\n#include <stdlib.h>\nint main(void) {\n    int *items = malloc(3 * sizeof *items);\n    if (!items) return 1;\n    for (int i = 0; i < 3; i++) items[i] = (i + 1) * 10;\n    printf(\"%d\\n\", items[2]);\n    free(items);\n    return 0;\n}",
    "points": [
      "malloc returns a pointer or NULL on failure.",
      "Use sizeof *pointer to size an allocation.",
      "Every owned allocation needs a corresponding free."
    ],
    "challenge": "Allocate n integers, then compute their sum.",
    "walkthrough": "Three int slots are allocated; the loop writes 10, 20 and 30.",
    "pitfalls": "Accessing freed memory or going out of bounds is undefined behavior.",
    "output": "30"
  },
  {
    "id": "c-files",
    "lang": "c",
    "title": "File Input and Output",
    "level": "Intermediate",
    "description": "Write text files and handle errors.",
    "intro": "Standard C provides FILE streams for storing data on disk.",
    "code": "#include <stdio.h>\nint main(void) {\n    FILE *file = fopen(\"notes.txt\", \"w\");\n    if (file == NULL) { perror(\"fopen\"); return 1; }\n    fputs(\"Learning C!\\n\", file);\n    if (fclose(file) != 0) return 1;\n    puts(\"Saved\");\n    return 0;\n}",
    "points": [
      "fopen opens a file and can fail.",
      "fputs writes a string to an open stream.",
      "Close streams so buffered output is flushed."
    ],
    "challenge": "Read the file back using fgets.",
    "walkthrough": "The program writes a file in its working directory and prints Saved.",
    "pitfalls": "A browser-hosted compiler may not preserve files between runs.",
    "output": "Saved"
  },
  {
    "id": "c-enums",
    "lang": "c",
    "title": "Enums and typedef",
    "level": "Intermediate",
    "description": "Name integral constants and simplify types.",
    "intro": "enum gives related integer constants meaningful names.",
    "code": "#include <stdio.h>\ntypedef enum { RED, GREEN, BLUE } Color;\nint main(void) {\n    Color selected = GREEN;\n    printf(\"%d\\n\", selected);\n    return 0;\n}",
    "points": [
      "Enumerator values begin at zero unless specified.",
      "typedef gives a type an alias.",
      "Enums improve readability over unexplained integer constants."
    ],
    "challenge": "Define an enum for three menu choices.",
    "walkthrough": "GREEN has the value 1 in this example.",
    "pitfalls": "An enum does not automatically validate arbitrary integer inputs.",
    "output": "1"
  },
  {
    "id": "c-bitwise",
    "lang": "c",
    "title": "Bitwise Operations",
    "level": "Intermediate",
    "description": "Manipulate individual binary bits.",
    "intro": "Bitwise operators work on the binary representation of integer values.",
    "code": "#include <stdio.h>\nint main(void) {\n    unsigned int flags = 5u; /* 0101 */\n    printf(\"%u %u\\n\", flags & 1u, flags << 1);\n    return 0;\n}",
    "points": [
      "& masks bits; ",
      " sets selected bits.",
      "^ toggles differing bits; ~ inverts bits.",
      "Shift unsigned integers to avoid tricky signed behavior."
    ],
    "challenge": "Set bit 3 of an unsigned integer.",
    "walkthrough": "5 & 1 is 1, and 5 << 1 is 10.",
    "pitfalls": "Shifting by too many positions is undefined behavior.",
    "output": "1 10"
  },
  {
    "id": "c-binary-search",
    "lang": "c",
    "title": "Binary Search",
    "level": "Advanced",
    "description": "Find a value efficiently in sorted data.",
    "intro": "Binary search repeatedly discards half of a sorted search interval.",
    "code": "#include <stdio.h>\nint main(void) {\n    int a[] = {2, 4, 7, 10, 15};\n    int lo = 0, hi = 4, target = 10, index = -1;\n    while (lo <= hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (a[mid] == target) { index = mid; break; }\n        if (a[mid] < target) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    printf(\"%d\\n\", index);\n}",
    "points": [
      "Binary search requires sorted input.",
      "Each comparison halves the remaining interval.",
      "Its time complexity is O(log n)."
    ],
    "challenge": "Return -1 when a target does not exist.",
    "walkthrough": "The target 10 is at zero-based index 3.",
    "pitfalls": "Never binary-search an unsorted array.",
    "output": "3"
  },
  {
    "id": "c-sorting",
    "lang": "c",
    "title": "Bubble Sort",
    "level": "Advanced",
    "description": "Understand comparison-based sorting.",
    "intro": "Bubble sort swaps adjacent out-of-order items until the list is ordered.",
    "code": "#include <stdio.h>\nint main(void) {\n    int a[] = {4, 1, 3};\n    for (int i = 0; i < 3; i++)\n        for (int j = 0; j < 2 - i; j++)\n            if (a[j] > a[j + 1]) {\n                int temp = a[j]; a[j] = a[j + 1]; a[j + 1] = temp;\n            }\n    for (int i = 0; i < 3; i++) printf(\"%d \", a[i]);\n    putchar('\\n');\n}",
    "points": [
      "A comparison can exchange two adjacent elements.",
      "The largest remaining item moves to the end each pass.",
      "Bubble sort has O(n²) worst-case time."
    ],
    "challenge": "Add an early-stop flag when a pass makes no swaps.",
    "walkthrough": "After sorting, the array holds 1 3 4.",
    "pitfalls": "Do not use bubble sort for large production datasets.",
    "output": "1 3 4"
  },
  {
    "id": "c-preprocessor",
    "lang": "c",
    "title": "Macros and Headers",
    "level": "Intermediate",
    "description": "Learn include guards and preprocessor basics.",
    "intro": "The preprocessor handles directives before compilation.",
    "code": "#include <stdio.h>\n#define SQUARE(x) ((x) * (x))\nint main(void) {\n    int n = 5;\n    printf(\"%d\\n\", SQUARE(n + 1));\n    return 0;\n}",
    "points": [
      "#include incorporates declarations from a header.",
      "Use parentheses around macro parameters and expansions.",
      "Use functions for complex logic and type safety."
    ],
    "challenge": "Turn a repeated constant into a named macro.",
    "walkthrough": "SQUARE(n + 1) becomes ((n + 1) * (n + 1)).",
    "pitfalls": "Avoid side effects inside macro arguments such as SQUARE(i++).",
    "output": "36"
  },
  {
    "id": "c-linked-lists",
    "lang": "c",
    "title": "Linked Lists",
    "level": "Advanced",
    "description": "Connect nodes with pointers.",
    "intro": "A singly linked list stores values in nodes linked by pointers.",
    "code": "#include <stdio.h>\nstruct Node { int value; struct Node *next; };\nint main(void) {\n    struct Node third = {30, NULL};\n    struct Node second = {20, &third};\n    struct Node first = {10, &second};\n    for (struct Node *p = &first; p != NULL; p = p->next)\n        printf(\"%d \", p->value);\n    putchar('\\n');\n}",
    "points": [
      "Each node points to the next node or NULL.",
      "Traversal follows next pointers.",
      "Heap-allocated list nodes must be freed."
    ],
    "challenge": "Add a fourth linked node.",
    "walkthrough": "Traversal visits 10, then 20, then 30.",
    "pitfalls": "Incorrect pointer updates can lose a list or create cycles.",
    "output": "10 20 30"
  },
  {
    "id": "c-error-handling",
    "lang": "c",
    "title": "Error Checking",
    "level": "Intermediate",
    "description": "Use return values to handle failures.",
    "intro": "C APIs often signal failure with a status value such as NULL or EOF.",
    "code": "#include <stdio.h>\n#include <stdlib.h>\nint main(void) {\n    char *end = NULL;\n    long value = strtol(\"123\", &end, 10);\n    if (end == NULL || *end != '\\0') {\n        puts(\"Invalid number\"); return 1;\n    }\n    printf(\"%ld\\n\", value);\n}",
    "points": [
      "Check return codes before using results.",
      "strtol reports where parsing stopped.",
      "For robust input validate range using errno as well."
    ],
    "challenge": "Parse a user-supplied integer and reject trailing letters.",
    "walkthrough": "strtol parses 123 and end points to the string terminator.",
    "pitfalls": "atoi cannot report invalid input reliably.",
    "output": "123"
  },
  {
    "id": "c-multidimensional",
    "lang": "c",
    "title": "2D Arrays",
    "level": "Intermediate",
    "description": "Represent matrices with rows and columns.",
    "intro": "A two-dimensional array stores values in a rectangular grid.",
    "code": "#include <stdio.h>\nint main(void) {\n    int matrix[2][2] = {{1, 2}, {3, 4}};\n    int sum = 0;\n    for (int r = 0; r < 2; r++)\n        for (int c = 0; c < 2; c++) sum += matrix[r][c];\n    printf(\"%d\\n\", sum);\n}",
    "points": [
      "matrix[row][column] accesses one element.",
      "Nested loops traverse every element.",
      "Dimensions determine the valid indices."
    ],
    "challenge": "Calculate the sum of each row separately.",
    "walkthrough": "The four entries add to 10.",
    "pitfalls": "Avoid indexing rows or columns beyond their declared sizes.",
    "output": "10"
  },
  {
    "id": "c-scope",
    "lang": "c",
    "title": "Scope and Storage",
    "level": "Intermediate",
    "description": "Understand local, global and static variables.",
    "intro": "A variable’s scope controls where its name can be used; storage duration controls how long it exists.",
    "code": "#include <stdio.h>\nvoid counter(void) {\n    static int calls = 0;\n    calls++;\n    printf(\"%d \", calls);\n}\nint main(void) { counter(); counter(); putchar('\\n'); }",
    "points": [
      "Local automatic variables usually exist per function call.",
      "static local variables retain their values across calls.",
      "File-scope identifiers are visible within their declarations scope."
    ],
    "challenge": "Write a function that counts how many times it has been called.",
    "walkthrough": "calls is initialized once, so the outputs are 1 and 2.",
    "pitfalls": "Avoid unnecessary globals; they complicate testing.",
    "output": "1 2"
  },
  {
    "id": "cpp-conditionals",
    "lang": "cpp",
    "title": "Decisions in C++",
    "level": "Beginner",
    "description": "Use if, else and Boolean expressions.",
    "intro": "C++ conditions are Boolean expressions that guide execution.",
    "code": "#include <iostream>\nint main() {\n    int temperature = 24;\n    if (temperature > 30) std::cout << \"Hot\\n\";\n    else if (temperature >= 18) std::cout << \"Mild\\n\";\n    else std::cout << \"Cold\\n\";\n}",
    "points": [
      "Conditions are tested in order.",
      "else if allows multiple mutually exclusive branches.",
      "Logical && and ",
      "",
      " combine conditions."
    ],
    "challenge": "Classify a number as positive, negative or zero.",
    "walkthrough": "24 is at least 18 but not above 30, so Mild prints.",
    "pitfalls": "Use == for comparisons, never =.",
    "output": "Mild"
  },
  {
    "id": "cpp-strings",
    "lang": "cpp",
    "title": "std::string",
    "level": "Beginner",
    "description": "Manipulate text safely using the standard library.",
    "intro": "std::string manages dynamic text without manual null-termination.",
    "code": "#include <iostream>\n#include <string>\nint main() {\n    std::string name = \"GearEx\";\n    name += \" Platform\";\n    std::cout << name.size() << \" \" << name << \"\\n\";\n}",
    "points": [
      "std::string grows as needed.",
      "Use .size() to find character count.",
      "std::getline reads lines including spaces."
    ],
    "challenge": "Read a full name with getline and print its length.",
    "walkthrough": "The text is 15 characters: 6 + 1 + 8.",
    "pitfalls": "std::cin >> reads only to the first whitespace.",
    "output": "15 GearEx Platform"
  },
  {
    "id": "cpp-arrays",
    "lang": "cpp",
    "title": "std::array",
    "level": "Intermediate",
    "description": "Use fixed-size type-safe arrays.",
    "intro": "std::array wraps a fixed-size C++ array with modern container operations.",
    "code": "#include <array>\n#include <iostream>\nint main() {\n    std::array<int, 3> values{3, 5, 7};\n    for (int n : values) std::cout << n * 2 << \" \";\n    std::cout << \"\\n\";\n}",
    "points": [
      "std::array size is known at compile time.",
      "at(index) checks bounds and throws when invalid.",
      "Range loops avoid manual indices."
    ],
    "challenge": "Find the largest value in a std::array.",
    "walkthrough": "Each element is multiplied by two before printing.",
    "pitfalls": "Use std::vector if the number of elements may change.",
    "output": "6 10 14"
  },
  {
    "id": "cpp-references",
    "lang": "cpp",
    "title": "References and Pointers",
    "level": "Intermediate",
    "description": "Pass values by reference and understand addresses.",
    "intro": "References provide another name for an object; pointers store addresses.",
    "code": "#include <iostream>\nvoid addFive(int& value) { value += 5; }\nint main() {\n    int score = 10;\n    addFive(score);\n    std::cout << score << \"\\n\";\n}",
    "points": [
      "A non-const reference can modify the argument.",
      "A reference must be initialized.",
      "Prefer const references for large read-only arguments."
    ],
    "challenge": "Implement swap(int&, int&) without std::swap.",
    "walkthrough": "addFive uses a reference to score, so score becomes 15.",
    "pitfalls": "Avoid returning references to local variables.",
    "output": "15"
  },
  {
    "id": "cpp-constructors",
    "lang": "cpp",
    "title": "Constructors",
    "level": "Intermediate",
    "description": "Initialize objects to valid states.",
    "intro": "Constructors run when an object is created and can initialize class members.",
    "code": "#include <iostream>\nclass Point {\n    int x, y;\npublic:\n    Point(int a, int b) : x(a), y(b) {}\n    int sum() const { return x + y; }\n};\nint main() { Point p(4, 7); std::cout << p.sum() << \"\\n\"; }",
    "points": [
      "The initializer list initializes members directly.",
      "Constructors have the same name as their class.",
      "const methods promise not to mutate the object."
    ],
    "challenge": "Add a second constructor for (0, 0).",
    "walkthrough": "Point p(4, 7) initializes x and y, so sum() returns 11.",
    "pitfalls": "Initialize members instead of leaving them uninitialized.",
    "output": "11"
  },
  {
    "id": "cpp-inheritance",
    "lang": "cpp",
    "title": "Inheritance",
    "level": "Intermediate",
    "description": "Reuse interfaces through base and derived classes.",
    "intro": "Inheritance models an is-a relationship and can extend behavior.",
    "code": "#include <iostream>\nclass Shape { public: int sides() const { return 0; } };\nclass Triangle : public Shape { public: int corners() const { return 3; } };\nint main() {\n    Triangle t;\n    std::cout << t.sides() << \" \" << t.corners() << \"\\n\";\n}",
    "points": [
      "A derived class inherits accessible members.",
      "Use public inheritance for is-a relationships.",
      "Prefer composition when is-a is not appropriate."
    ],
    "challenge": "Make a Rectangle derived from Shape with four corners.",
    "walkthrough": "Triangle has inherited sides() and its own corners().",
    "pitfalls": "Non-virtual base methods do not dispatch polymorphically.",
    "output": "0 3"
  },
  {
    "id": "cpp-polymorphism",
    "lang": "cpp",
    "title": "Runtime Polymorphism",
    "level": "Advanced",
    "description": "Call overridden methods through a base reference.",
    "intro": "virtual functions allow behavior to depend on the dynamic object type.",
    "code": "#include <iostream>\nstruct Animal {\n    virtual ~Animal() = default;\n    virtual const char* sound() const { return \"?\"; }\n};\nstruct Cat : Animal {\n    const char* sound() const override { return \"Meow\"; }\n};\nint main() { Cat cat; Animal& a = cat; std::cout << a.sound() << \"\\n\"; }",
    "points": [
      "virtual enables dynamic dispatch.",
      "override asks the compiler to verify an override.",
      "A polymorphic base should usually have a virtual destructor."
    ],
    "challenge": "Add a Dog class that overrides sound().",
    "walkthrough": "An Animal reference refers to Cat; the override returns Meow.",
    "pitfalls": "Deleting through a base pointer needs a virtual base destructor.",
    "output": "Meow"
  },
  {
    "id": "cpp-templates",
    "lang": "cpp",
    "title": "Function Templates",
    "level": "Advanced",
    "description": "Write generic reusable algorithms.",
    "intro": "Templates let the compiler generate type-specific code from a pattern.",
    "code": "#include <iostream>\ntemplate <typename T>\nT larger(T a, T b) { return a > b ? a : b; }\nint main() {\n    std::cout << larger(4, 9) << \" \" << larger(2.5, 1.7) << \"\\n\";\n}",
    "points": [
      "Templates are instantiated with specific types.",
      "Compiler type deduction works for many calls.",
      "Operations used by a template must be supported by its types."
    ],
    "challenge": "Write a template that returns the smaller of two values.",
    "walkthrough": "The first call returns 9; the double call returns 2.5.",
    "pitfalls": "Mixing argument types may require an explicit template argument.",
    "output": "9 2.5"
  },
  {
    "id": "cpp-algorithms",
    "lang": "cpp",
    "title": "STL Algorithms",
    "level": "Intermediate",
    "description": "Sort and search using the standard library.",
    "intro": "The <algorithm> header provides battle-tested operations on ranges.",
    "code": "#include <algorithm>\n#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> data{8, 1, 5, 3};\n    std::sort(data.begin(), data.end());\n    std::cout << data.front() << \" \" << data.back() << \"\\n\";\n}",
    "points": [
      "sort rearranges a range in ascending order by default.",
      "begin() and end() describe half-open ranges.",
      "Standard algorithms avoid reinventing common operations."
    ],
    "challenge": "Sort a vector in descending order.",
    "walkthrough": "The sorted vector is 1, 3, 5, 8.",
    "pitfalls": "Never dereference end(); it points after the last element.",
    "output": "1 8"
  },
  {
    "id": "cpp-maps",
    "lang": "cpp",
    "title": "Maps and Dictionaries",
    "level": "Intermediate",
    "description": "Store key-value pairs in std::map.",
    "intro": "std::map stores ordered key-value pairs and supports fast lookup.",
    "code": "#include <iostream>\n#include <map>\n#include <string>\nint main() {\n    std::map<std::string, int> scores{{\"Ada\", 9}, {\"Lin\", 7}};\n    scores[\"Ada\"]++;\n    std::cout << scores.at(\"Ada\") << \"\\n\";\n}",
    "points": [
      "Keys in std::map are ordered.",
      "operator[] inserts a default value if a key is absent.",
      "at() throws if a key does not exist."
    ],
    "challenge": "Count repeated words using a map.",
    "walkthrough": "Ada starts at 9 and increments to 10.",
    "pitfalls": "Use find() or contains() when you do not want accidental insertion.",
    "output": "10"
  },
  {
    "id": "cpp-sets",
    "lang": "cpp",
    "title": "Sets and Unique Values",
    "level": "Intermediate",
    "description": "Keep only unique values using std::set.",
    "intro": "A set stores each key once in sorted order.",
    "code": "#include <iostream>\n#include <set>\nint main() {\n    std::set<int> unique{3, 1, 3, 2};\n    for (int n : unique) std::cout << n << \" \";\n    std::cout << \"\\n\";\n}",
    "points": [
      "Duplicate inserts have no effect.",
      "Ordered sets iterate in sorted order.",
      "find() can test membership without modifying the set."
    ],
    "challenge": "Count the number of distinct integers in a list.",
    "walkthrough": "Although 3 occurs twice in the initializer, the set contains 1, 2, 3.",
    "pitfalls": "If order does not matter, std::unordered_set may be useful.",
    "output": "1 2 3"
  },
  {
    "id": "cpp-lambdas",
    "lang": "cpp",
    "title": "Lambda Expressions",
    "level": "Intermediate",
    "description": "Write small functions at the point of use.",
    "intro": "Lambdas create function objects that can capture variables.",
    "code": "#include <algorithm>\n#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> values{2, 5, 8, 11};\n    int even = std::count_if(values.begin(), values.end(),\n        [](int n) { return n % 2 == 0; });\n    std::cout << even << \"\\n\";\n}",
    "points": [
      "[] is the capture list.",
      "A lambda can accept parameters and return a result.",
      "Lambdas pair well with standard algorithms."
    ],
    "challenge": "Use a lambda to count numbers greater than 10.",
    "walkthrough": "2 and 8 are even, so count_if returns 2.",
    "pitfalls": "Do not capture references that may outlive the original variables.",
    "output": "2"
  },
  {
    "id": "cpp-exceptions",
    "lang": "cpp",
    "title": "Exceptions and Error Handling",
    "level": "Intermediate",
    "description": "Report errors with throw, try, and catch.",
    "intro": "Exceptions provide a way to separate error handling from the normal control path.",
    "code": "#include <iostream>\n#include <stdexcept>\nint divide(int a, int b) {\n    if (b == 0) throw std::invalid_argument(\"zero divisor\");\n    return a / b;\n}\nint main() {\n    try { std::cout << divide(8, 2) << \"\\n\"; }\n    catch (const std::exception& e) { std::cout << e.what() << \"\\n\"; }\n}",
    "points": [
      "throw signals an exceptional condition.",
      "try encloses code that may throw.",
      "Catch exceptions by const reference."
    ],
    "challenge": "Try dividing by zero and catch the error.",
    "walkthrough": "The divisor is 2, so the program prints 4.",
    "pitfalls": "Never use exceptions as substitutes for ordinary loops or branches.",
    "output": "4"
  },
  {
    "id": "cpp-files",
    "lang": "cpp",
    "title": "File Streams",
    "level": "Intermediate",
    "description": "Read and write files using fstream.",
    "intro": "File streams provide C++ interfaces to filesystem data.",
    "code": "#include <fstream>\n#include <iostream>\nint main() {\n    std::ofstream out(\"scores.txt\");\n    if (!out) { std::cerr << \"Cannot open file\\n\"; return 1; }\n    out << \"42\\n\";\n    out.close();\n    std::cout << \"Saved\\n\";\n}",
    "points": [
      "ofstream writes to a file.",
      "ifstream reads from a file.",
      "Always check that a file opened successfully."
    ],
    "challenge": "Read scores.txt and print its integer.",
    "walkthrough": "The output file receives 42 and the program prints Saved.",
    "pitfalls": "Online compilers might discard generated files after each run.",
    "output": "Saved"
  },
  {
    "id": "cpp-smart-pointers",
    "lang": "cpp",
    "title": "Smart Pointers and RAII",
    "level": "Advanced",
    "description": "Manage heap memory through ownership.",
    "intro": "RAII ties resource lifetime to object lifetime, reducing memory leaks.",
    "code": "#include <iostream>\n#include <memory>\nint main() {\n    auto number = std::make_unique<int>(42);\n    std::cout << *number << \"\\n\";\n}",
    "points": [
      "unique_ptr has exclusive ownership.",
      "Memory is released automatically when it goes out of scope.",
      "Prefer make_unique over raw new in most application code."
    ],
    "challenge": "Create a unique_ptr to a simple class.",
    "walkthrough": "*number dereferences the owned integer.",
    "pitfalls": "Do not copy a unique_ptr; use std::move to transfer ownership.",
    "output": "42"
  },
  {
    "id": "cpp-iterators",
    "lang": "cpp",
    "title": "Iterators",
    "level": "Intermediate",
    "description": "Navigate standard containers uniformly.",
    "intro": "Iterators act like generalized pointers into containers.",
    "code": "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> values{10, 20, 30};\n    auto it = values.begin();\n    ++it;\n    std::cout << *it << \"\\n\";\n}",
    "points": [
      "begin() refers to the first element.",
      "end() represents one past the last element.",
      "Some container changes invalidate iterators."
    ],
    "challenge": "Traverse a vector from beginning to end using iterators.",
    "walkthrough": "Advancing begin() once points at 20.",
    "pitfalls": "Never dereference an iterator equal to end().",
    "output": "20"
  },
  {
    "id": "cpp-namespaces",
    "lang": "cpp",
    "title": "Namespaces",
    "level": "Intermediate",
    "description": "Avoid name collisions in larger programs.",
    "intro": "Namespaces group names and prevent collisions between libraries.",
    "code": "#include <iostream>\nnamespace math_tools { int square(int n) { return n * n; } }\nint main() { std::cout << math_tools::square(6) << \"\\n\"; }",
    "points": [
      "The :: operator qualifies a name.",
      "Namespaces help organize library APIs.",
      "Avoid using namespace std in public headers."
    ],
    "challenge": "Create a namespace with a cube function.",
    "walkthrough": "math_tools::square(6) evaluates to 36.",
    "pitfalls": "Qualified names help avoid ambiguous references.",
    "output": "36"
  },
  {
    "id": "cpp-const",
    "lang": "cpp",
    "title": "Const Correctness",
    "level": "Intermediate",
    "description": "Prevent accidental changes to data.",
    "intro": "const expresses intent and allows the compiler to detect modifications.",
    "code": "#include <iostream>\nint doubleIt(const int number) { return number * 2; }\nint main() {\n    const int base = 12;\n    std::cout << doubleIt(base) << \"\\n\";\n}",
    "points": [
      "const variables cannot be reassigned after initialization.",
      "const references provide read-only access.",
      "Const methods cannot modify regular member state."
    ],
    "challenge": "Change a class getter into a const member function.",
    "walkthrough": "base stays 12; doubleIt produces 24.",
    "pitfalls": "Do not use const_cast to bypass valid const constraints.",
    "output": "24"
  },
  {
    "id": "cpp-move-semantics",
    "lang": "cpp",
    "title": "Move Semantics",
    "level": "Advanced",
    "description": "Transfer ownership and understand std::move.",
    "intro": "Move operations may transfer resources instead of copying them.",
    "code": "#include <iostream>\n#include <string>\n#include <utility>\nint main() {\n    std::string first = \"hello\";\n    std::string second = std::move(first);\n    std::cout << second << \"\\n\";\n}",
    "points": [
      "std::move casts an expression to an rvalue reference.",
      "A moved-from object remains valid but its value is unspecified.",
      "Moves can avoid expensive resource copies."
    ],
    "challenge": "Move a vector into another vector and inspect the destination.",
    "walkthrough": "second takes the string content from first.",
    "pitfalls": "Do not assume the value of a moved-from string.",
    "output": "hello"
  },
  {
    "id": "cpp-file-project",
    "lang": "cpp",
    "title": "Mini Project: Student Grades",
    "level": "Advanced",
    "description": "Combine vectors, loops and functions.",
    "intro": "Small projects connect independent concepts into one complete solution.",
    "code": "#include <iostream>\n#include <vector>\ndouble average(const std::vector<int>& grades) {\n    if (grades.empty()) return 0;\n    int sum = 0;\n    for (int grade : grades) sum += grade;\n    return static_cast<double>(sum) / grades.size();\n}\nint main() {\n    std::cout << average({80, 90, 100}) << \"\\n\";\n}",
    "points": [
      "Keep calculations in named functions.",
      "Use double for a fractional average.",
      "Validate empty collections before dividing."
    ],
    "challenge": "Read a dynamic number of grades and print an average with two decimals.",
    "walkthrough": "80 + 90 + 100 = 270; 270 / 3 = 90.",
    "pitfalls": "Integer division would lose a fractional average.",
    "output": "90"
  }
]);

// Expanded explanation-rich quizzes.
QUESTIONS.push(...[
  {
    "id": "q13",
    "lang": "c",
    "topic": "basics",
    "question": "What does a successful main usually return in C?",
    "options": [
      "0",
      "-1",
      "1",
      "void"
    ],
    "answer": 0,
    "explanation": "Returning 0 conventionally indicates successful termination."
  },
  {
    "id": "q14",
    "lang": "c",
    "topic": "basics",
    "question": "What does #include do?",
    "options": [
      "Runs the program",
      "Allocates memory",
      "Creates a loop",
      "Includes header declarations"
    ],
    "answer": 3,
    "explanation": "The preprocessor includes the contents of the specified header."
  },
  {
    "id": "q15",
    "lang": "c",
    "topic": "basics",
    "question": "Which format specifier prints an int with printf?",
    "options": [
      "%s",
      "%c",
      "%d",
      "%lf"
    ],
    "answer": 2,
    "explanation": "%d formats an integer in decimal notation."
  },
  {
    "id": "q16",
    "lang": "c",
    "topic": "basics",
    "question": "Which type stores one character in C?",
    "options": [
      "bool[]",
      "char",
      "string",
      "double"
    ],
    "answer": 1,
    "explanation": "char represents a character value as an integer type."
  },
  {
    "id": "q17",
    "lang": "c",
    "topic": "basics",
    "question": "Which operator computes an integer remainder?",
    "options": [
      "%",
      "/",
      "**",
      "//"
    ],
    "answer": 0,
    "explanation": "The % operator yields the remainder of integer division."
  },
  {
    "id": "q18",
    "lang": "c",
    "topic": "basics",
    "question": "What does 11 % 4 evaluate to?",
    "options": [
      "2",
      "2.75",
      "4",
      "3"
    ],
    "answer": 3,
    "explanation": "11 divided by 4 leaves a remainder of 3."
  },
  {
    "id": "q19",
    "lang": "c",
    "topic": "control flow",
    "question": "Which statement ends a switch case early?",
    "options": [
      "return 2",
      "goto next",
      "break",
      "continue"
    ],
    "answer": 2,
    "explanation": "break exits the enclosing switch statement."
  },
  {
    "id": "q20",
    "lang": "c",
    "topic": "control flow",
    "question": "When is a while condition evaluated?",
    "options": [
      "Never",
      "Before each iteration",
      "Only after the first iteration",
      "Only once after the loop"
    ],
    "answer": 1,
    "explanation": "while is a pre-test loop; do-while is a post-test loop."
  },
  {
    "id": "q21",
    "lang": "c",
    "topic": "control flow",
    "question": "How many iterations for i = 1; i <= 4; i++?",
    "options": [
      "4",
      "3",
      "5",
      "1"
    ],
    "answer": 0,
    "explanation": "i takes the values 1, 2, 3 and 4."
  },
  {
    "id": "q22",
    "lang": "c",
    "topic": "control flow",
    "question": "What is the value of (5 > 3) && (2 > 8)?",
    "options": [
      "1",
      "2",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "The second comparison is false, so the AND expression is false."
  },
  {
    "id": "q23",
    "lang": "c",
    "topic": "functions",
    "question": "What does a function parameter represent?",
    "options": [
      "A header file",
      "A compiler switch",
      "Input accepted by a function",
      "A global macro"
    ],
    "answer": 2,
    "explanation": "Parameters receive values or references from a function call."
  },
  {
    "id": "q24",
    "lang": "c",
    "topic": "functions",
    "question": "Why is a recursive base case necessary?",
    "options": [
      "To sort a list",
      "To stop recursive calls",
      "To allocate an array",
      "To include a header"
    ],
    "answer": 1,
    "explanation": "Without an appropriate base case, recursion can continue until resources run out."
  },
  {
    "id": "q25",
    "lang": "c",
    "topic": "functions",
    "question": "What does static do for a local variable?",
    "options": [
      "Keeps its value across calls",
      "Makes it global to every file",
      "Makes it constant",
      "Erases it after the line"
    ],
    "answer": 0,
    "explanation": "A static local retains its stored value for the entire program run."
  },
  {
    "id": "q26",
    "lang": "c",
    "topic": "arrays",
    "question": "What is the last index of int a[5]?",
    "options": [
      "5",
      "1",
      "6",
      "4"
    ],
    "answer": 3,
    "explanation": "C arrays use indices 0 through size minus one."
  },
  {
    "id": "q27",
    "lang": "c",
    "topic": "arrays",
    "question": "What happens if you index beyond an array boundary?",
    "options": [
      "Always zero",
      "Compiler fixes it",
      "Undefined behavior",
      "Automatic growth"
    ],
    "answer": 2,
    "explanation": "Out-of-bounds C array access has undefined behavior."
  },
  {
    "id": "q28",
    "lang": "c",
    "topic": "arrays",
    "question": "Which expression accesses row 1 column 2 of matrix?",
    "options": [
      "matrix{1}{2}",
      "matrix[1][2]",
      "matrix(1,2)",
      "matrix[2,1]"
    ],
    "answer": 1,
    "explanation": "Two-dimensional arrays use two bracket index expressions."
  },
  {
    "id": "q29",
    "lang": "c",
    "topic": "strings",
    "question": "What marks the end of a C string?",
    "options": [
      "Null character",
      "Space",
      "Newline",
      "EOF"
    ],
    "answer": 0,
    "explanation": "C strings terminate with the null character (\\0)."
  },
  {
    "id": "q30",
    "lang": "c",
    "topic": "strings",
    "question": "How much space does char s[] = \"cat\" use?",
    "options": [
      "3 bytes",
      "5 bytes",
      "2 bytes",
      "4 bytes"
    ],
    "answer": 3,
    "explanation": "The array holds c, a, t and the ending null character."
  },
  {
    "id": "q31",
    "lang": "c",
    "topic": "strings",
    "question": "What does strlen(\"hello\") return?",
    "options": [
      "4",
      "0",
      "5",
      "6"
    ],
    "answer": 2,
    "explanation": "strlen counts characters excluding the terminating null character."
  },
  {
    "id": "q32",
    "lang": "c",
    "topic": "strings",
    "question": "Which scanf width limits a char buffer with room for 10?",
    "options": [
      "%1d",
      "%9s",
      "%10s",
      "%s"
    ],
    "answer": 1,
    "explanation": "%9s reads at most nine characters plus the terminating null."
  },
  {
    "id": "q33",
    "lang": "c",
    "topic": "pointers",
    "question": "What does &x produce when x is an int variable?",
    "options": [
      "The address of x",
      "The value of x + 1",
      "The bitwise complement",
      "The size of x"
    ],
    "answer": 0,
    "explanation": "The address-of operator returns a pointer to x."
  },
  {
    "id": "q34",
    "lang": "c",
    "topic": "pointers",
    "question": "What does *p mean when p is a valid int pointer?",
    "options": [
      "Create a new pointer",
      "Get the size of p",
      "Find the address of p",
      "Access the pointed-to int"
    ],
    "answer": 3,
    "explanation": "Dereferencing accesses the pointed-to object."
  },
  {
    "id": "q35",
    "lang": "c",
    "topic": "pointers",
    "question": "What does malloc return when allocation fails?",
    "options": [
      "An exception",
      "A negative pointer",
      "NULL",
      "0 bytes always"
    ],
    "answer": 2,
    "explanation": "malloc returns a null pointer on allocation failure."
  },
  {
    "id": "q36",
    "lang": "c",
    "topic": "pointers",
    "question": "What should you do with memory obtained from malloc?",
    "options": [
      "Use fclose",
      "Free it once when finished",
      "Delete it with delete",
      "Never release it"
    ],
    "answer": 1,
    "explanation": "Use free on allocations obtained through malloc/calloc/realloc."
  },
  {
    "id": "q37",
    "lang": "c",
    "topic": "pointers",
    "question": "What operator accesses a struct field through a pointer?",
    "options": [
      "->",
      ".",
      "::",
      "&&"
    ],
    "answer": 0,
    "explanation": "The -> operator selects a member through a pointer to a struct."
  },
  {
    "id": "q38",
    "lang": "c",
    "topic": "algorithms",
    "question": "What is binary search’s required input property?",
    "options": [
      "Random order",
      "No duplicates ever",
      "Power-of-two length",
      "Sorted order"
    ],
    "answer": 3,
    "explanation": "Binary search relies on ordering to discard half of the search range."
  },
  {
    "id": "q39",
    "lang": "c",
    "topic": "algorithms",
    "question": "What is the worst-case time of bubble sort?",
    "options": [
      "O(log n)",
      "O(n log n) always",
      "O(n²)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "Nested passes produce quadratic comparisons in the worst case."
  },
  {
    "id": "q40",
    "lang": "c",
    "topic": "algorithms",
    "question": "What does bitwise AND of 6 and 3 produce?",
    "options": [
      "1",
      "2",
      "7",
      "5"
    ],
    "answer": 1,
    "explanation": "Binary 110 AND 011 equals 010, which is 2."
  },
  {
    "id": "q41",
    "lang": "c",
    "topic": "algorithms",
    "question": "Which header declares malloc and free?",
    "options": [
      "<stdlib.h>",
      "<math.h>",
      "<stdio.h>",
      "<limits.h>"
    ],
    "answer": 0,
    "explanation": "stdlib.h provides the dynamic allocation functions."
  },
  {
    "id": "q42",
    "lang": "c",
    "topic": "algorithms",
    "question": "Which function opens a file in standard C?",
    "options": [
      "openfile",
      "ifstream",
      "std::open",
      "fopen"
    ],
    "answer": 3,
    "explanation": "fopen creates a FILE stream to access a file."
  },
  {
    "id": "q43",
    "lang": "cpp",
    "topic": "basics",
    "question": "Which header declares std::cout?",
    "options": [
      "<cstdio>",
      "<array>",
      "<iostream>",
      "<vector>"
    ],
    "answer": 2,
    "explanation": "std::cout is declared in iostream."
  },
  {
    "id": "q44",
    "lang": "cpp",
    "topic": "basics",
    "question": "What does std::endl do?",
    "options": [
      "Inserts a tab",
      "Writes a newline and flushes the stream",
      "Reads one line",
      "Terminates main"
    ],
    "answer": 1,
    "explanation": "std::endl adds a newline and flushes the output buffer."
  },
  {
    "id": "q45",
    "lang": "cpp",
    "topic": "basics",
    "question": "What does std::getline read?",
    "options": [
      "A line including spaces",
      "One word only",
      "One integer only",
      "Exactly one character"
    ],
    "answer": 0,
    "explanation": "getline reads characters through the line delimiter."
  },
  {
    "id": "q46",
    "lang": "cpp",
    "topic": "basics",
    "question": "How is a namespace member qualified?",
    "options": [
      ".",
      "->",
      "&&",
      "::"
    ],
    "answer": 3,
    "explanation": "The scope resolution operator :: qualifies namespace and class names."
  },
  {
    "id": "q47",
    "lang": "cpp",
    "topic": "basics",
    "question": "What does 9 / 4 produce when both are int?",
    "options": [
      "3",
      "Compilation error",
      "2",
      "2.25"
    ],
    "answer": 2,
    "explanation": "Integer division truncates fractional digits."
  },
  {
    "id": "q48",
    "lang": "cpp",
    "topic": "functions",
    "question": "What does pass-by-value generally do?",
    "options": [
      "Requires a pointer",
      "Copies the argument into a parameter",
      "Always modifies the original",
      "Creates an alias"
    ],
    "answer": 1,
    "explanation": "A value parameter is a separate object initialized from the argument."
  },
  {
    "id": "q49",
    "lang": "cpp",
    "topic": "functions",
    "question": "What does int& reference declare?",
    "options": [
      "An alias for an int",
      "A pointer that can be null",
      "A dynamic array",
      "A function pointer"
    ],
    "answer": 0,
    "explanation": "A reference binds to an existing object."
  },
  {
    "id": "q50",
    "lang": "cpp",
    "topic": "functions",
    "question": "Why use const std::string& as a parameter?",
    "options": [
      "Make a fresh writable copy",
      "Delete the string",
      "Force uppercase",
      "Avoid copying and prevent modification"
    ],
    "answer": 3,
    "explanation": "A const reference provides read-only access without copying the string."
  },
  {
    "id": "q51",
    "lang": "cpp",
    "topic": "functions",
    "question": "What is function overloading?",
    "options": [
      "Two main functions",
      "Same class as a namespace",
      "Same name with different parameter lists",
      "Same function copied twice"
    ],
    "answer": 2,
    "explanation": "Overloads share a name but differ in parameter types or counts."
  },
  {
    "id": "q52",
    "lang": "cpp",
    "topic": "oop",
    "question": "Which access specifier hides data by default in class?",
    "options": [
      "global",
      "private",
      "public",
      "protected"
    ],
    "answer": 1,
    "explanation": "Class members are private by default; struct members are public."
  },
  {
    "id": "q53",
    "lang": "cpp",
    "topic": "oop",
    "question": "What runs automatically when an object is created?",
    "options": [
      "Constructor",
      "Destructor",
      "Header",
      "Macro"
    ],
    "answer": 0,
    "explanation": "A constructor initializes an object at creation."
  },
  {
    "id": "q54",
    "lang": "cpp",
    "topic": "oop",
    "question": "What keyword ensures a method overrides a virtual base method?",
    "options": [
      "static",
      "friend",
      "mutable",
      "override"
    ],
    "answer": 3,
    "explanation": "override checks that a matching virtual base method exists."
  },
  {
    "id": "q55",
    "lang": "cpp",
    "topic": "oop",
    "question": "What lets a base reference call the derived override?",
    "options": [
      "static function",
      "preprocessor macro",
      "virtual function",
      "inline function"
    ],
    "answer": 2,
    "explanation": "Virtual dispatch selects the dynamic object’s override."
  },
  {
    "id": "q56",
    "lang": "cpp",
    "topic": "oop",
    "question": "Why should a polymorphic base class usually have a virtual destructor?",
    "options": [
      "To prevent allocation",
      "For safe destruction through a base pointer",
      "To create extra data members",
      "To disable inheritance"
    ],
    "answer": 1,
    "explanation": "A virtual destructor ensures correct derived destruction."
  },
  {
    "id": "q57",
    "lang": "cpp",
    "topic": "oop",
    "question": "What is encapsulation?",
    "options": [
      "Exposing behavior while controlling internal state",
      "Copying every field globally",
      "Forcing all methods static",
      "Avoiding all functions"
    ],
    "answer": 0,
    "explanation": "Public interfaces can protect private data."
  },
  {
    "id": "q58",
    "lang": "cpp",
    "topic": "containers",
    "question": "How many elements does vector<int>{1,2,3} hold?",
    "options": [
      "2",
      "4",
      "1",
      "3"
    ],
    "answer": 3,
    "explanation": "There are three comma-separated initializers."
  },
  {
    "id": "q59",
    "lang": "cpp",
    "topic": "containers",
    "question": "What does vector::size() return?",
    "options": [
      "Last element",
      "First index",
      "Number of elements",
      "Bytes in capacity"
    ],
    "answer": 2,
    "explanation": "size() is the count of elements currently stored."
  },
  {
    "id": "q60",
    "lang": "cpp",
    "topic": "containers",
    "question": "What does vector::push_back do?",
    "options": [
      "Finds an element",
      "Appends an element",
      "Removes the first item",
      "Sorts elements"
    ],
    "answer": 1,
    "explanation": "push_back adds one element at the end."
  },
  {
    "id": "q61",
    "lang": "cpp",
    "topic": "containers",
    "question": "Which container stores unique keys in sorted order?",
    "options": [
      "std::set",
      "std::vector",
      "std::stack",
      "std::queue"
    ],
    "answer": 0,
    "explanation": "An ordered set contains each key only once."
  },
  {
    "id": "q62",
    "lang": "cpp",
    "topic": "containers",
    "question": "What does std::map associate?",
    "options": [
      "Only sequential integers",
      "Only character arrays",
      "Functions with macros",
      "Keys with values"
    ],
    "answer": 3,
    "explanation": "std::map stores sorted key-value pairs."
  },
  {
    "id": "q63",
    "lang": "cpp",
    "topic": "containers",
    "question": "Which header defines std::sort?",
    "options": [
      "<memory>",
      "<map>",
      "<algorithm>",
      "<iostream>"
    ],
    "answer": 2,
    "explanation": "std::sort is an algorithm from the algorithm header."
  },
  {
    "id": "q64",
    "lang": "cpp",
    "topic": "containers",
    "question": "What does .at(index) do on std::vector?",
    "options": [
      "Clear all items",
      "Bounds-checked element access",
      "Sort the vector",
      "Append an element"
    ],
    "answer": 1,
    "explanation": "at() throws std::out_of_range for an invalid index."
  },
  {
    "id": "q65",
    "lang": "cpp",
    "topic": "containers",
    "question": "What does end() refer to?",
    "options": [
      "One past the last element",
      "The final element itself",
      "The first element",
      "An invalid container"
    ],
    "answer": 0,
    "explanation": "The half-open range is [begin(), end()); end() must not be dereferenced."
  },
  {
    "id": "q66",
    "lang": "cpp",
    "topic": "advanced",
    "question": "What does std::unique_ptr express?",
    "options": [
      "Shared automatic copying",
      "A raw unowned pointer",
      "A globally allocated array",
      "Exclusive ownership"
    ],
    "answer": 3,
    "explanation": "unique_ptr owns a resource and releases it automatically."
  },
  {
    "id": "q67",
    "lang": "cpp",
    "topic": "advanced",
    "question": "What does RAII tie resource release to?",
    "options": [
      "A macro name",
      "The size of main",
      "Object lifetime",
      "A random timeout"
    ],
    "answer": 2,
    "explanation": "RAII manages resources through constructors and destructors."
  },
  {
    "id": "q68",
    "lang": "cpp",
    "topic": "advanced",
    "question": "What does std::move do?",
    "options": [
      "Allocates a thread",
      "Casts to an rvalue reference",
      "Always copies immediately",
      "Deletes the object"
    ],
    "answer": 1,
    "explanation": "std::move enables move semantics but is itself a cast."
  },
  {
    "id": "q69",
    "lang": "cpp",
    "topic": "advanced",
    "question": "What does a function template allow?",
    "options": [
      "Algorithms generalized over types",
      "Only functions returning void",
      "Runtime code generation",
      "Dynamic class registration"
    ],
    "answer": 0,
    "explanation": "Templates let the compiler instantiate type-specific implementations."
  },
  {
    "id": "q70",
    "lang": "cpp",
    "topic": "advanced",
    "question": "What does a lambda capture list specify?",
    "options": [
      "Array capacity",
      "Compiler flags",
      "Exception types",
      "Which outer variables it can access"
    ],
    "answer": 3,
    "explanation": "Capture lists control access to local surrounding state."
  },
  {
    "id": "q71",
    "lang": "cpp",
    "topic": "advanced",
    "question": "How should you usually catch std::exception?",
    "options": [
      "A raw void*",
      "int always",
      "const std::exception&",
      "std::exception* only"
    ],
    "answer": 2,
    "explanation": "Catch by const reference to avoid slicing and copying."
  },
  {
    "id": "q72",
    "lang": "cpp",
    "topic": "advanced",
    "question": "What does std::ofstream do?",
    "options": [
      "Sorts files",
      "Writes to files",
      "Reads standard input",
      "Manages network sockets"
    ],
    "answer": 1,
    "explanation": "ofstream is an output file stream."
  },
  {
    "id": "q73",
    "lang": "cpp",
    "topic": "advanced",
    "question": "What does a moved-from std::string guarantee?",
    "options": [
      "Valid but unspecified contents",
      "Always empty",
      "Always unchanged",
      "Freed memory and invalid"
    ],
    "answer": 0,
    "explanation": "It remains a valid object, but its exact value is unspecified."
  }
]);

// Optional sample input for input-dependent examples.
const INPUT_EXAMPLES = { "c-input": "3 4" };
