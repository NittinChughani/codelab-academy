/* Original C and C++ challenges; source solutions are included for learning. */
const CHALLENGES = [
  {
    "id": "c-challenge-01",
    "lang": "c",
    "title": "Add Two Numbers",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read two integers and print their sum.",
    "hint": "Use the + operator.",
    "samples": [
      {
        "input": "3 4",
        "output": "7"
      },
      {
        "input": "-5 2",
        "output": "-3"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int a=readInt(),b=readInt(); printInt(a+b);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "add-two"
  },
  {
    "id": "cpp-challenge-01",
    "lang": "cpp",
    "title": "Add Two Numbers",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read two integers and print their sum.",
    "hint": "Use the + operator.",
    "samples": [
      {
        "input": "3 4",
        "output": "7"
      },
      {
        "input": "-5 2",
        "output": "-3"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int a=readInt(),b=readInt(); printInt(a+b);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "add-two"
  },
  {
    "id": "c-challenge-02",
    "lang": "c",
    "title": "Difference of Two Numbers",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read a and b; print a minus b.",
    "hint": "Subtraction order matters.",
    "samples": [
      {
        "input": "10 3",
        "output": "7"
      },
      {
        "input": "3 10",
        "output": "-7"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int a=readInt(),b=readInt(); printInt(a-b);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "subtract-two"
  },
  {
    "id": "cpp-challenge-02",
    "lang": "cpp",
    "title": "Difference of Two Numbers",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read a and b; print a minus b.",
    "hint": "Subtraction order matters.",
    "samples": [
      {
        "input": "10 3",
        "output": "7"
      },
      {
        "input": "3 10",
        "output": "-7"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int a=readInt(),b=readInt(); printInt(a-b);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "subtract-two"
  },
  {
    "id": "c-challenge-03",
    "lang": "c",
    "title": "Multiply Two Numbers",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read two integers; output their product.",
    "hint": "Use * to multiply.",
    "samples": [
      {
        "input": "6 7",
        "output": "42"
      },
      {
        "input": "-3 4",
        "output": "-12"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int a=readInt(),b=readInt(); printInt((long long)a*b);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "multiply-two"
  },
  {
    "id": "cpp-challenge-03",
    "lang": "cpp",
    "title": "Multiply Two Numbers",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read two integers; output their product.",
    "hint": "Use * to multiply.",
    "samples": [
      {
        "input": "6 7",
        "output": "42"
      },
      {
        "input": "-3 4",
        "output": "-12"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int a=readInt(),b=readInt(); printInt((long long)a*b);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "multiply-two"
  },
  {
    "id": "c-challenge-04",
    "lang": "c",
    "title": "Maximum of Two",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read a and b and output the larger value.",
    "hint": "Use if or the ternary operator.",
    "samples": [
      {
        "input": "7 2",
        "output": "7"
      },
      {
        "input": "-1 5",
        "output": "5"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int a=readInt(),b=readInt(); printInt(a>b?a:b);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "maximum-two"
  },
  {
    "id": "cpp-challenge-04",
    "lang": "cpp",
    "title": "Maximum of Two",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read a and b and output the larger value.",
    "hint": "Use if or the ternary operator.",
    "samples": [
      {
        "input": "7 2",
        "output": "7"
      },
      {
        "input": "-1 5",
        "output": "5"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int a=readInt(),b=readInt(); printInt(a>b?a:b);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "maximum-two"
  },
  {
    "id": "c-challenge-05",
    "lang": "c",
    "title": "Minimum of Two",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read two integers and print the smaller.",
    "hint": "Compare both values.",
    "samples": [
      {
        "input": "7 2",
        "output": "2"
      },
      {
        "input": "-1 5",
        "output": "-1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int a=readInt(),b=readInt(); printInt(a<b?a:b);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "minimum-two"
  },
  {
    "id": "cpp-challenge-05",
    "lang": "cpp",
    "title": "Minimum of Two",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read two integers and print the smaller.",
    "hint": "Compare both values.",
    "samples": [
      {
        "input": "7 2",
        "output": "2"
      },
      {
        "input": "-1 5",
        "output": "-1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int a=readInt(),b=readInt(); printInt(a<b?a:b);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "minimum-two"
  },
  {
    "id": "c-challenge-06",
    "lang": "c",
    "title": "Largest of Three",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read three integers; output the largest.",
    "hint": "Track a current maximum.",
    "samples": [
      {
        "input": "2 9 4",
        "output": "9"
      },
      {
        "input": "-4 -1 -3",
        "output": "-1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int a=readInt(),b=readInt(),c=readInt(); int m=a; if(b>m)m=b; if(c>m)m=c; printInt(m);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "maximum-three"
  },
  {
    "id": "cpp-challenge-06",
    "lang": "cpp",
    "title": "Largest of Three",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read three integers; output the largest.",
    "hint": "Track a current maximum.",
    "samples": [
      {
        "input": "2 9 4",
        "output": "9"
      },
      {
        "input": "-4 -1 -3",
        "output": "-1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int a=readInt(),b=readInt(),c=readInt(); int m=a; if(b>m)m=b; if(c>m)m=c; printInt(m);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "maximum-three"
  },
  {
    "id": "c-challenge-07",
    "lang": "c",
    "title": "Even or Odd",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read an integer and output EVEN or ODD.",
    "hint": "Use the remainder when divided by 2.",
    "samples": [
      {
        "input": "8",
        "output": "EVEN"
      },
      {
        "input": "7",
        "output": "ODD"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(); printText(n%2==0?\"EVEN\":\"ODD\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "even-odd"
  },
  {
    "id": "cpp-challenge-07",
    "lang": "cpp",
    "title": "Even or Odd",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read an integer and output EVEN or ODD.",
    "hint": "Use the remainder when divided by 2.",
    "samples": [
      {
        "input": "8",
        "output": "EVEN"
      },
      {
        "input": "7",
        "output": "ODD"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(); printText(n%2==0?\"EVEN\":\"ODD\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "even-odd"
  },
  {
    "id": "c-challenge-08",
    "lang": "c",
    "title": "Number Sign",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read an integer and output POSITIVE, NEGATIVE or ZERO.",
    "hint": "Use an if / else if / else chain.",
    "samples": [
      {
        "input": "10",
        "output": "POSITIVE"
      },
      {
        "input": "-9",
        "output": "NEGATIVE"
      },
      {
        "input": "0",
        "output": "ZERO"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(); printText(n>0?\"POSITIVE\":n<0?\"NEGATIVE\":\"ZERO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sign"
  },
  {
    "id": "cpp-challenge-08",
    "lang": "cpp",
    "title": "Number Sign",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read an integer and output POSITIVE, NEGATIVE or ZERO.",
    "hint": "Use an if / else if / else chain.",
    "samples": [
      {
        "input": "10",
        "output": "POSITIVE"
      },
      {
        "input": "-9",
        "output": "NEGATIVE"
      },
      {
        "input": "0",
        "output": "ZERO"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(); printText(n>0?\"POSITIVE\":n<0?\"NEGATIVE\":\"ZERO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sign"
  },
  {
    "id": "c-challenge-09",
    "lang": "c",
    "title": "Absolute Value",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read an integer between -1000000 and 1000000; print its absolute value.",
    "hint": "Negative values become positive after negation.",
    "samples": [
      {
        "input": "-12",
        "output": "12"
      },
      {
        "input": "5",
        "output": "5"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(); printInt(n<0?-n:n);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "absolute-value"
  },
  {
    "id": "cpp-challenge-09",
    "lang": "cpp",
    "title": "Absolute Value",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read an integer between -1000000 and 1000000; print its absolute value.",
    "hint": "Negative values become positive after negation.",
    "samples": [
      {
        "input": "-12",
        "output": "12"
      },
      {
        "input": "5",
        "output": "5"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(); printInt(n<0?-n:n);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "absolute-value"
  },
  {
    "id": "c-challenge-10",
    "lang": "c",
    "title": "Square a Number",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read an integer with absolute value at most 30000; print its square.",
    "hint": "Multiply the number by itself.",
    "samples": [
      {
        "input": "9",
        "output": "81"
      },
      {
        "input": "-4",
        "output": "16"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    long long n=readInt(); printInt(n*n);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "square"
  },
  {
    "id": "cpp-challenge-10",
    "lang": "cpp",
    "title": "Square a Number",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read an integer with absolute value at most 30000; print its square.",
    "hint": "Multiply the number by itself.",
    "samples": [
      {
        "input": "9",
        "output": "81"
      },
      {
        "input": "-4",
        "output": "16"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    long long n=readInt(); printInt(n*n);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "square"
  },
  {
    "id": "c-challenge-11",
    "lang": "c",
    "title": "Cube a Number",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read an integer with absolute value at most 1000; print its cube.",
    "hint": "Multiply the number three times.",
    "samples": [
      {
        "input": "4",
        "output": "64"
      },
      {
        "input": "-3",
        "output": "-27"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    long long n=readInt(); printInt(n*n*n);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "cube"
  },
  {
    "id": "cpp-challenge-11",
    "lang": "cpp",
    "title": "Cube a Number",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read an integer with absolute value at most 1000; print its cube.",
    "hint": "Multiply the number three times.",
    "samples": [
      {
        "input": "4",
        "output": "64"
      },
      {
        "input": "-3",
        "output": "-27"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    long long n=readInt(); printInt(n*n*n);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "cube"
  },
  {
    "id": "c-challenge-12",
    "lang": "c",
    "title": "Leap Year Checker",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read a positive year; output YES if it is a Gregorian leap year, otherwise NO.",
    "hint": "Divisible by 400, or divisible by 4 but not 100.",
    "samples": [
      {
        "input": "2000",
        "output": "YES"
      },
      {
        "input": "1900",
        "output": "NO"
      },
      {
        "input": "2024",
        "output": "YES"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int y=readInt(); printText((y%400==0||(y%4==0&&y%100!=0))?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "leap-year"
  },
  {
    "id": "cpp-challenge-12",
    "lang": "cpp",
    "title": "Leap Year Checker",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read a positive year; output YES if it is a Gregorian leap year, otherwise NO.",
    "hint": "Divisible by 400, or divisible by 4 but not 100.",
    "samples": [
      {
        "input": "2000",
        "output": "YES"
      },
      {
        "input": "1900",
        "output": "NO"
      },
      {
        "input": "2024",
        "output": "YES"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int y=readInt(); printText((y%400==0||(y%4==0&&y%100!=0))?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "leap-year"
  },
  {
    "id": "c-challenge-13",
    "lang": "c",
    "title": "Divisible by 3 and 5",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read an integer; print YES only if both 3 and 5 divide it.",
    "hint": "Use && with two remainder checks.",
    "samples": [
      {
        "input": "30",
        "output": "YES"
      },
      {
        "input": "21",
        "output": "NO"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(); printText(n%3==0&&n%5==0?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "divisible"
  },
  {
    "id": "cpp-challenge-13",
    "lang": "cpp",
    "title": "Divisible by 3 and 5",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read an integer; print YES only if both 3 and 5 divide it.",
    "hint": "Use && with two remainder checks.",
    "samples": [
      {
        "input": "30",
        "output": "YES"
      },
      {
        "input": "21",
        "output": "NO"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(); printText(n%3==0&&n%5==0?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "divisible"
  },
  {
    "id": "c-challenge-14",
    "lang": "c",
    "title": "Clamp to 0–100",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read an integer; values below 0 become 0, values above 100 become 100.",
    "hint": "Compare against both boundaries.",
    "samples": [
      {
        "input": "150",
        "output": "100"
      },
      {
        "input": "-4",
        "output": "0"
      },
      {
        "input": "57",
        "output": "57"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(); if(n<0)n=0; if(n>100)n=100; printInt(n);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "range-clamp"
  },
  {
    "id": "cpp-challenge-14",
    "lang": "cpp",
    "title": "Clamp to 0–100",
    "level": "Easy",
    "topic": "Conditionals",
    "description": "Read an integer; values below 0 become 0, values above 100 become 100.",
    "hint": "Compare against both boundaries.",
    "samples": [
      {
        "input": "150",
        "output": "100"
      },
      {
        "input": "-4",
        "output": "0"
      },
      {
        "input": "57",
        "output": "57"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(); if(n<0)n=0; if(n>100)n=100; printInt(n);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "range-clamp"
  },
  {
    "id": "c-challenge-15",
    "lang": "c",
    "title": "Simple Interest",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read integer principal P, annual rate R and years T; output (P×R×T)/100 using integer division.",
    "hint": "Multiply before dividing to preserve precision.",
    "samples": [
      {
        "input": "1000 5 2",
        "output": "100"
      },
      {
        "input": "2000 3 1",
        "output": "60"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    long long p=readInt(),r=readInt(),t=readInt(); printInt(p*r*t/100);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "simple-interest"
  },
  {
    "id": "cpp-challenge-15",
    "lang": "cpp",
    "title": "Simple Interest",
    "level": "Easy",
    "topic": "Basics",
    "description": "Read integer principal P, annual rate R and years T; output (P×R×T)/100 using integer division.",
    "hint": "Multiply before dividing to preserve precision.",
    "samples": [
      {
        "input": "1000 5 2",
        "output": "100"
      },
      {
        "input": "2000 3 1",
        "output": "60"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    long long p=readInt(),r=readInt(),t=readInt(); printInt(p*r*t/100);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "simple-interest"
  },
  {
    "id": "c-challenge-16",
    "lang": "c",
    "title": "Sum from 1 to n",
    "level": "Easy",
    "topic": "Loops",
    "description": "Read an integer n (0–100000); print 1 + 2 + … + n.",
    "hint": "Use the n(n+1)/2 formula.",
    "samples": [
      {
        "input": "5",
        "output": "15"
      },
      {
        "input": "1",
        "output": "1"
      },
      {
        "input": "0",
        "output": "0"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    long long n=readInt(); printInt(n*(n+1)/2);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "triangle-sum"
  },
  {
    "id": "cpp-challenge-16",
    "lang": "cpp",
    "title": "Sum from 1 to n",
    "level": "Easy",
    "topic": "Loops",
    "description": "Read an integer n (0–100000); print 1 + 2 + … + n.",
    "hint": "Use the n(n+1)/2 formula.",
    "samples": [
      {
        "input": "5",
        "output": "15"
      },
      {
        "input": "1",
        "output": "1"
      },
      {
        "input": "0",
        "output": "0"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    long long n=readInt(); printInt(n*(n+1)/2);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "triangle-sum"
  },
  {
    "id": "c-challenge-17",
    "lang": "c",
    "title": "Sum of Squares",
    "level": "Easy",
    "topic": "Loops",
    "description": "Read n (0–1000); print 1² + 2² + … + n².",
    "hint": "Loop from 1 through n.",
    "samples": [
      {
        "input": "3",
        "output": "14"
      },
      {
        "input": "4",
        "output": "30"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(); long long total=0; for(int i=1;i<=n;i++)total+=(long long)i*i; printInt(total);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sum-squares"
  },
  {
    "id": "cpp-challenge-17",
    "lang": "cpp",
    "title": "Sum of Squares",
    "level": "Easy",
    "topic": "Loops",
    "description": "Read n (0–1000); print 1² + 2² + … + n².",
    "hint": "Loop from 1 through n.",
    "samples": [
      {
        "input": "3",
        "output": "14"
      },
      {
        "input": "4",
        "output": "30"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(); long long total=0; for(int i=1;i<=n;i++)total+=(long long)i*i; printInt(total);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sum-squares"
  },
  {
    "id": "c-challenge-18",
    "lang": "c",
    "title": "Factorial",
    "level": "Easy",
    "topic": "Loops",
    "description": "Read n between 0 and 20; print n!.",
    "hint": "Start at 1 and multiply values up to n.",
    "samples": [
      {
        "input": "5",
        "output": "120"
      },
      {
        "input": "0",
        "output": "1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(); long long ans=1; for(int i=2;i<=n;i++)ans*=i; printInt(ans);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "factorial"
  },
  {
    "id": "cpp-challenge-18",
    "lang": "cpp",
    "title": "Factorial",
    "level": "Easy",
    "topic": "Loops",
    "description": "Read n between 0 and 20; print n!.",
    "hint": "Start at 1 and multiply values up to n.",
    "samples": [
      {
        "input": "5",
        "output": "120"
      },
      {
        "input": "0",
        "output": "1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(); long long ans=1; for(int i=2;i<=n;i++)ans*=i; printInt(ans);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "factorial"
  },
  {
    "id": "c-challenge-19",
    "lang": "c",
    "title": "Integer Power",
    "level": "Easy",
    "topic": "Loops",
    "description": "Read base a and exponent b (0–12). Print a raised to b, within 64-bit range.",
    "hint": "Multiply repeatedly; exponent zero gives one.",
    "samples": [
      {
        "input": "2 5",
        "output": "32"
      },
      {
        "input": "3 0",
        "output": "1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    long long a=readInt(),b=readInt(),ans=1; for(int i=0;i<b;i++)ans*=a; printInt(ans);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "power"
  },
  {
    "id": "cpp-challenge-19",
    "lang": "cpp",
    "title": "Integer Power",
    "level": "Easy",
    "topic": "Loops",
    "description": "Read base a and exponent b (0–12). Print a raised to b, within 64-bit range.",
    "hint": "Multiply repeatedly; exponent zero gives one.",
    "samples": [
      {
        "input": "2 5",
        "output": "32"
      },
      {
        "input": "3 0",
        "output": "1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    long long a=readInt(),b=readInt(),ans=1; for(int i=0;i<b;i++)ans*=a; printInt(ans);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "power"
  },
  {
    "id": "c-challenge-20",
    "lang": "c",
    "title": "Nth Fibonacci",
    "level": "Medium",
    "topic": "Loops",
    "description": "Read n (0–40); F0=0, F1=1. Print Fn.",
    "hint": "Track two consecutive numbers.",
    "samples": [
      {
        "input": "7",
        "output": "13"
      },
      {
        "input": "0",
        "output": "0"
      },
      {
        "input": "10",
        "output": "55"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(); long long a=0,b=1; for(int i=0;i<n;i++){long long t=a+b; a=b;b=t;} printInt(a);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "fibonacci-n"
  },
  {
    "id": "cpp-challenge-20",
    "lang": "cpp",
    "title": "Nth Fibonacci",
    "level": "Medium",
    "topic": "Loops",
    "description": "Read n (0–40); F0=0, F1=1. Print Fn.",
    "hint": "Track two consecutive numbers.",
    "samples": [
      {
        "input": "7",
        "output": "13"
      },
      {
        "input": "0",
        "output": "0"
      },
      {
        "input": "10",
        "output": "55"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(); long long a=0,b=1; for(int i=0;i<n;i++){long long t=a+b; a=b;b=t;} printInt(a);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "fibonacci-n"
  },
  {
    "id": "c-challenge-21",
    "lang": "c",
    "title": "Fibonacci Sequence",
    "level": "Medium",
    "topic": "Loops",
    "description": "Read n (1–15); print the first n Fibonacci numbers separated by spaces.",
    "hint": "Update the last two terms after printing each one.",
    "samples": [
      {
        "input": "5",
        "output": "0 1 1 2 3"
      },
      {
        "input": "2",
        "output": "0 1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(); long long a=0,b=1; for(int i=0;i<n;i++){printItem(a);long long t=a+b;a=b;b=t;} finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "fibonacci-series"
  },
  {
    "id": "cpp-challenge-21",
    "lang": "cpp",
    "title": "Fibonacci Sequence",
    "level": "Medium",
    "topic": "Loops",
    "description": "Read n (1–15); print the first n Fibonacci numbers separated by spaces.",
    "hint": "Update the last two terms after printing each one.",
    "samples": [
      {
        "input": "5",
        "output": "0 1 1 2 3"
      },
      {
        "input": "2",
        "output": "0 1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(); long long a=0,b=1; for(int i=0;i<n;i++){printItem(a);long long t=a+b;a=b;b=t;} finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "fibonacci-series"
  },
  {
    "id": "c-challenge-22",
    "lang": "c",
    "title": "Multiplication Table",
    "level": "Easy",
    "topic": "Loops",
    "description": "Read n; print n×1 through n×5 separated by spaces.",
    "hint": "A loop can multiply n by each number 1–5.",
    "samples": [
      {
        "input": "3",
        "output": "3 6 9 12 15"
      },
      {
        "input": "0",
        "output": "0 0 0 0 0"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt();for(int i=1;i<=5;i++)printItem(n*i);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "multiplication-table"
  },
  {
    "id": "cpp-challenge-22",
    "lang": "cpp",
    "title": "Multiplication Table",
    "level": "Easy",
    "topic": "Loops",
    "description": "Read n; print n×1 through n×5 separated by spaces.",
    "hint": "A loop can multiply n by each number 1–5.",
    "samples": [
      {
        "input": "3",
        "output": "3 6 9 12 15"
      },
      {
        "input": "0",
        "output": "0 0 0 0 0"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt();for(int i=1;i<=5;i++)printItem(n*i);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "multiplication-table"
  },
  {
    "id": "c-challenge-23",
    "lang": "c",
    "title": "Number of Digits",
    "level": "Easy",
    "topic": "Numbers",
    "description": "Read a nonnegative integer (0–1,000,000,000). Print its decimal digit count.",
    "hint": "Zero has one digit; divide by ten repeatedly.",
    "samples": [
      {
        "input": "5002",
        "output": "4"
      },
      {
        "input": "0",
        "output": "1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),count=1; while(n>=10){n/=10;count++;}printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-digits"
  },
  {
    "id": "cpp-challenge-23",
    "lang": "cpp",
    "title": "Number of Digits",
    "level": "Easy",
    "topic": "Numbers",
    "description": "Read a nonnegative integer (0–1,000,000,000). Print its decimal digit count.",
    "hint": "Zero has one digit; divide by ten repeatedly.",
    "samples": [
      {
        "input": "5002",
        "output": "4"
      },
      {
        "input": "0",
        "output": "1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),count=1; while(n>=10){n/=10;count++;}printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-digits"
  },
  {
    "id": "c-challenge-24",
    "lang": "c",
    "title": "Sum of Digits",
    "level": "Easy",
    "topic": "Numbers",
    "description": "Read a nonnegative integer; print the sum of its decimal digits.",
    "hint": "Repeatedly take n % 10, then divide n by 10.",
    "samples": [
      {
        "input": "503",
        "output": "8"
      },
      {
        "input": "0",
        "output": "0"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),sum=0; do{sum+=n%10;n/=10;}while(n>0);printInt(sum);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sum-digits"
  },
  {
    "id": "cpp-challenge-24",
    "lang": "cpp",
    "title": "Sum of Digits",
    "level": "Easy",
    "topic": "Numbers",
    "description": "Read a nonnegative integer; print the sum of its decimal digits.",
    "hint": "Repeatedly take n % 10, then divide n by 10.",
    "samples": [
      {
        "input": "503",
        "output": "8"
      },
      {
        "input": "0",
        "output": "0"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),sum=0; do{sum+=n%10;n/=10;}while(n>0);printInt(sum);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sum-digits"
  },
  {
    "id": "c-challenge-25",
    "lang": "c",
    "title": "Reverse Digits",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read a nonnegative integer; print its reversed digits as an integer.",
    "hint": "Build result = result*10 + lastDigit.",
    "samples": [
      {
        "input": "1203",
        "output": "3021"
      },
      {
        "input": "7",
        "output": "7"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt();long long rev=0;do{rev=rev*10+n%10;n/=10;}while(n>0);printInt(rev);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "reverse-number"
  },
  {
    "id": "cpp-challenge-25",
    "lang": "cpp",
    "title": "Reverse Digits",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read a nonnegative integer; print its reversed digits as an integer.",
    "hint": "Build result = result*10 + lastDigit.",
    "samples": [
      {
        "input": "1203",
        "output": "3021"
      },
      {
        "input": "7",
        "output": "7"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt();long long rev=0;do{rev=rev*10+n%10;n/=10;}while(n>0);printInt(rev);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "reverse-number"
  },
  {
    "id": "c-challenge-26",
    "lang": "c",
    "title": "Palindrome Number",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read a nonnegative integer; output YES if its digits read the same backward.",
    "hint": "Reverse the number and compare to the original.",
    "samples": [
      {
        "input": "121",
        "output": "YES"
      },
      {
        "input": "120",
        "output": "NO"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),x=n;long long rev=0;do{rev=rev*10+x%10;x/=10;}while(x>0);printText(rev==n?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "palindrome-number"
  },
  {
    "id": "cpp-challenge-26",
    "lang": "cpp",
    "title": "Palindrome Number",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read a nonnegative integer; output YES if its digits read the same backward.",
    "hint": "Reverse the number and compare to the original.",
    "samples": [
      {
        "input": "121",
        "output": "YES"
      },
      {
        "input": "120",
        "output": "NO"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),x=n;long long rev=0;do{rev=rev*10+x%10;x/=10;}while(x>0);printText(rev==n?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "palindrome-number"
  },
  {
    "id": "c-challenge-27",
    "lang": "c",
    "title": "Prime Checker",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read n (0–100000); output YES if n is prime.",
    "hint": "Only test possible divisors up to sqrt(n).",
    "samples": [
      {
        "input": "29",
        "output": "YES"
      },
      {
        "input": "1",
        "output": "NO"
      },
      {
        "input": "100",
        "output": "NO"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),prime=n>=2;for(int d=2;d<=n/d;d++)if(n%d==0){prime=0;break;}printText(prime?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "prime"
  },
  {
    "id": "cpp-challenge-27",
    "lang": "cpp",
    "title": "Prime Checker",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read n (0–100000); output YES if n is prime.",
    "hint": "Only test possible divisors up to sqrt(n).",
    "samples": [
      {
        "input": "29",
        "output": "YES"
      },
      {
        "input": "1",
        "output": "NO"
      },
      {
        "input": "100",
        "output": "NO"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),prime=n>=2;for(int d=2;d<=n/d;d++)if(n%d==0){prime=0;break;}printText(prime?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "prime"
  },
  {
    "id": "c-challenge-28",
    "lang": "c",
    "title": "Greatest Common Divisor",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read two nonnegative integers, not both zero; print their GCD.",
    "hint": "Use the Euclidean algorithm.",
    "samples": [
      {
        "input": "18 24",
        "output": "6"
      },
      {
        "input": "7 3",
        "output": "1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int a=readInt(),b=readInt();while(b){int r=a%b;a=b;b=r;}printInt(a);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "gcd"
  },
  {
    "id": "cpp-challenge-28",
    "lang": "cpp",
    "title": "Greatest Common Divisor",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read two nonnegative integers, not both zero; print their GCD.",
    "hint": "Use the Euclidean algorithm.",
    "samples": [
      {
        "input": "18 24",
        "output": "6"
      },
      {
        "input": "7 3",
        "output": "1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int a=readInt(),b=readInt();while(b){int r=a%b;a=b;b=r;}printInt(a);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "gcd"
  },
  {
    "id": "c-challenge-29",
    "lang": "c",
    "title": "Least Common Multiple",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read positive integers a and b (≤100000); print their least common multiple.",
    "hint": "LCM = a / gcd(a,b) * b.",
    "samples": [
      {
        "input": "6 8",
        "output": "24"
      },
      {
        "input": "4 10",
        "output": "20"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    long long a=readInt(),b=readInt(),x=a,y=b;while(y){long long r=x%y;x=y;y=r;}printInt(a/x*b);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "lcm"
  },
  {
    "id": "cpp-challenge-29",
    "lang": "cpp",
    "title": "Least Common Multiple",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read positive integers a and b (≤100000); print their least common multiple.",
    "hint": "LCM = a / gcd(a,b) * b.",
    "samples": [
      {
        "input": "6 8",
        "output": "24"
      },
      {
        "input": "4 10",
        "output": "20"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    long long a=readInt(),b=readInt(),x=a,y=b;while(y){long long r=x%y;x=y;y=r;}printInt(a/x*b);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "lcm"
  },
  {
    "id": "c-challenge-30",
    "lang": "c",
    "title": "Count Divisors",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read n (1–10000); print the number of positive divisors.",
    "hint": "Test divisibility for each candidate from 1 to n.",
    "samples": [
      {
        "input": "6",
        "output": "4"
      },
      {
        "input": "7",
        "output": "2"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),count=0;for(int i=1;i<=n;i++)if(n%i==0)count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "divisor-count"
  },
  {
    "id": "cpp-challenge-30",
    "lang": "cpp",
    "title": "Count Divisors",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read n (1–10000); print the number of positive divisors.",
    "hint": "Test divisibility for each candidate from 1 to n.",
    "samples": [
      {
        "input": "6",
        "output": "4"
      },
      {
        "input": "7",
        "output": "2"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),count=0;for(int i=1;i<=n;i++)if(n%i==0)count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "divisor-count"
  },
  {
    "id": "c-challenge-31",
    "lang": "c",
    "title": "Perfect Number",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read n (1–10000); print YES if n equals the sum of its proper positive divisors.",
    "hint": "Only add divisors smaller than n.",
    "samples": [
      {
        "input": "28",
        "output": "YES"
      },
      {
        "input": "12",
        "output": "NO"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),s=0;for(int i=1;i<n;i++)if(n%i==0)s+=i;printText(s==n?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "perfect"
  },
  {
    "id": "cpp-challenge-31",
    "lang": "cpp",
    "title": "Perfect Number",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read n (1–10000); print YES if n equals the sum of its proper positive divisors.",
    "hint": "Only add divisors smaller than n.",
    "samples": [
      {
        "input": "28",
        "output": "YES"
      },
      {
        "input": "12",
        "output": "NO"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),s=0;for(int i=1;i<n;i++)if(n%i==0)s+=i;printText(s==n?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "perfect"
  },
  {
    "id": "c-challenge-32",
    "lang": "c",
    "title": "3-Digit Armstrong",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read an integer from 100 to 999; output YES if it equals the sum of cubes of its digits.",
    "hint": "Extract hundreds, tens and ones.",
    "samples": [
      {
        "input": "153",
        "output": "YES"
      },
      {
        "input": "123",
        "output": "NO"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),x=n,s=0;while(x){int d=x%10;s+=d*d*d;x/=10;}printText(s==n?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "armstrong"
  },
  {
    "id": "cpp-challenge-32",
    "lang": "cpp",
    "title": "3-Digit Armstrong",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read an integer from 100 to 999; output YES if it equals the sum of cubes of its digits.",
    "hint": "Extract hundreds, tens and ones.",
    "samples": [
      {
        "input": "153",
        "output": "YES"
      },
      {
        "input": "123",
        "output": "NO"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),x=n,s=0;while(x){int d=x%10;s+=d*d*d;x/=10;}printText(s==n?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "armstrong"
  },
  {
    "id": "c-challenge-33",
    "lang": "c",
    "title": "Largest Digit",
    "level": "Easy",
    "topic": "Numbers",
    "description": "Read a nonnegative integer; print its largest decimal digit.",
    "hint": "Find each digit using modulo 10.",
    "samples": [
      {
        "input": "4279",
        "output": "9"
      },
      {
        "input": "0",
        "output": "0"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),m=0;do{int d=n%10;if(d>m)m=d;n/=10;}while(n);printInt(m);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "largest-digit"
  },
  {
    "id": "cpp-challenge-33",
    "lang": "cpp",
    "title": "Largest Digit",
    "level": "Easy",
    "topic": "Numbers",
    "description": "Read a nonnegative integer; print its largest decimal digit.",
    "hint": "Find each digit using modulo 10.",
    "samples": [
      {
        "input": "4279",
        "output": "9"
      },
      {
        "input": "0",
        "output": "0"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),m=0;do{int d=n%10;if(d>m)m=d;n/=10;}while(n);printInt(m);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "largest-digit"
  },
  {
    "id": "c-challenge-34",
    "lang": "c",
    "title": "Binary Digits",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read a nonnegative integer (0–1023); print its binary representation without leading zeros.",
    "hint": "Build digits from remainders when dividing by 2.",
    "samples": [
      {
        "input": "10",
        "output": "1010"
      },
      {
        "input": "0",
        "output": "0"
      },
      {
        "input": "7",
        "output": "111"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt();if(!n){printInt(0);}else{char s[33];int k=0;while(n){s[k++]=(char)('0'+n%2);n/=2;}for(int i=k-1;i>=0;i--)printChar(s[i]);finishLine();}\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "binary"
  },
  {
    "id": "cpp-challenge-34",
    "lang": "cpp",
    "title": "Binary Digits",
    "level": "Medium",
    "topic": "Numbers",
    "description": "Read a nonnegative integer (0–1023); print its binary representation without leading zeros.",
    "hint": "Build digits from remainders when dividing by 2.",
    "samples": [
      {
        "input": "10",
        "output": "1010"
      },
      {
        "input": "0",
        "output": "0"
      },
      {
        "input": "7",
        "output": "111"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt();if(!n){printInt(0);}else{char s[33];int k=0;while(n){s[k++]=(char)('0'+n%2);n/=2;}for(int i=k-1;i>=0;i--)printChar(s[i]);finishLine();}\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "binary"
  },
  {
    "id": "c-challenge-35",
    "lang": "c",
    "title": "Count Set Bits",
    "level": "Medium",
    "topic": "Bitwise",
    "description": "Read an integer n (0–1,000,000); print how many bits are 1.",
    "hint": "Check n & 1 as you shift right.",
    "samples": [
      {
        "input": "13",
        "output": "3"
      },
      {
        "input": "8",
        "output": "1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    unsigned int n=(unsigned int)readInt();int count=0;while(n){count+=(int)(n&1u);n>>=1;}printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "set-bits"
  },
  {
    "id": "cpp-challenge-35",
    "lang": "cpp",
    "title": "Count Set Bits",
    "level": "Medium",
    "topic": "Bitwise",
    "description": "Read an integer n (0–1,000,000); print how many bits are 1.",
    "hint": "Check n & 1 as you shift right.",
    "samples": [
      {
        "input": "13",
        "output": "3"
      },
      {
        "input": "8",
        "output": "1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    unsigned int n=(unsigned int)readInt();int count=0;while(n){count+=(int)(n&1u);n>>=1;}printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "set-bits"
  },
  {
    "id": "c-challenge-36",
    "lang": "c",
    "title": "Bit Parity",
    "level": "Easy",
    "topic": "Bitwise",
    "description": "Read n (0–1,000,000); print EVEN if the count of 1 bits is even, otherwise ODD.",
    "hint": "Count the bits, then check count % 2.",
    "samples": [
      {
        "input": "7",
        "output": "ODD"
      },
      {
        "input": "3",
        "output": "EVEN"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    unsigned int n=(unsigned int)readInt();int c=0;while(n){c+=(int)(n&1u);n>>=1;}printText(c%2==0?\"EVEN\":\"ODD\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "parity"
  },
  {
    "id": "cpp-challenge-36",
    "lang": "cpp",
    "title": "Bit Parity",
    "level": "Easy",
    "topic": "Bitwise",
    "description": "Read n (0–1,000,000); print EVEN if the count of 1 bits is even, otherwise ODD.",
    "hint": "Count the bits, then check count % 2.",
    "samples": [
      {
        "input": "7",
        "output": "ODD"
      },
      {
        "input": "3",
        "output": "EVEN"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    unsigned int n=(unsigned int)readInt();int c=0;while(n){c+=(int)(n&1u);n>>=1;}printText(c%2==0?\"EVEN\":\"ODD\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "parity"
  },
  {
    "id": "c-challenge-37",
    "lang": "c",
    "title": "Array Sum",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100), then n integers; print their sum.",
    "hint": "Add each element to a running total.",
    "samples": [
      {
        "input": "4\n1 2 3 4",
        "output": "10"
      },
      {
        "input": "3\n-1 4 -2",
        "output": "1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt();long long sum=0;for(int i=0;i<n;i++)sum+=readInt();printInt(sum);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sum-array"
  },
  {
    "id": "cpp-challenge-37",
    "lang": "cpp",
    "title": "Array Sum",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100), then n integers; print their sum.",
    "hint": "Add each element to a running total.",
    "samples": [
      {
        "input": "4\n1 2 3 4",
        "output": "10"
      },
      {
        "input": "3\n-1 4 -2",
        "output": "1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt();long long sum=0;for(int i=0;i<n;i++)sum+=readInt();printInt(sum);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sum-array"
  },
  {
    "id": "c-challenge-38",
    "lang": "c",
    "title": "Integer Average",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100), then n integers; print the integer-truncated arithmetic mean.",
    "hint": "Accumulate into a long long; divide by n.",
    "samples": [
      {
        "input": "3\n1 2 6",
        "output": "3"
      },
      {
        "input": "2\n-2 -3",
        "output": "-2"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt();long long sum=0;for(int i=0;i<n;i++)sum+=readInt();printInt(sum/n);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "average-array"
  },
  {
    "id": "cpp-challenge-38",
    "lang": "cpp",
    "title": "Integer Average",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100), then n integers; print the integer-truncated arithmetic mean.",
    "hint": "Accumulate into a long long; divide by n.",
    "samples": [
      {
        "input": "3\n1 2 6",
        "output": "3"
      },
      {
        "input": "2\n-2 -3",
        "output": "-2"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt();long long sum=0;for(int i=0;i<n;i++)sum+=readInt();printInt(sum/n);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "average-array"
  },
  {
    "id": "c-challenge-39",
    "lang": "c",
    "title": "Array Maximum",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; print the largest.",
    "hint": "Initialize maximum with the first element.",
    "samples": [
      {
        "input": "5\n2 9 3 4 1",
        "output": "9"
      },
      {
        "input": "3\n-5 -2 -8",
        "output": "-2"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt();int best=readInt();for(int i=1;i<n;i++){int x=readInt();if(x>best)best=x;}printInt(best);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "max-array"
  },
  {
    "id": "cpp-challenge-39",
    "lang": "cpp",
    "title": "Array Maximum",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; print the largest.",
    "hint": "Initialize maximum with the first element.",
    "samples": [
      {
        "input": "5\n2 9 3 4 1",
        "output": "9"
      },
      {
        "input": "3\n-5 -2 -8",
        "output": "-2"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt();int best=readInt();for(int i=1;i<n;i++){int x=readInt();if(x>best)best=x;}printInt(best);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "max-array"
  },
  {
    "id": "c-challenge-40",
    "lang": "c",
    "title": "Array Minimum",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; print the smallest.",
    "hint": "Track the smallest seen number.",
    "samples": [
      {
        "input": "4\n2 5 -7 3",
        "output": "-7"
      },
      {
        "input": "2\n8 9",
        "output": "8"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt();int best=readInt();for(int i=1;i<n;i++){int x=readInt();if(x<best)best=x;}printInt(best);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "min-array"
  },
  {
    "id": "cpp-challenge-40",
    "lang": "cpp",
    "title": "Array Minimum",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; print the smallest.",
    "hint": "Track the smallest seen number.",
    "samples": [
      {
        "input": "4\n2 5 -7 3",
        "output": "-7"
      },
      {
        "input": "2\n8 9",
        "output": "8"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt();int best=readInt();for(int i=1;i<n;i++){int x=readInt();if(x<best)best=x;}printInt(best);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "min-array"
  },
  {
    "id": "c-challenge-41",
    "lang": "c",
    "title": "Count Even Elements",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; count the even elements.",
    "hint": "Check each number modulo 2.",
    "samples": [
      {
        "input": "5\n1 2 3 4 6",
        "output": "3"
      },
      {
        "input": "3\n1 3 5",
        "output": "0"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),count=0;for(int i=0;i<n;i++)if(readInt()%2==0)count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-even"
  },
  {
    "id": "cpp-challenge-41",
    "lang": "cpp",
    "title": "Count Even Elements",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; count the even elements.",
    "hint": "Check each number modulo 2.",
    "samples": [
      {
        "input": "5\n1 2 3 4 6",
        "output": "3"
      },
      {
        "input": "3\n1 3 5",
        "output": "0"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),count=0;for(int i=0;i<n;i++)if(readInt()%2==0)count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-even"
  },
  {
    "id": "c-challenge-42",
    "lang": "c",
    "title": "Count Positive Elements",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; count values strictly greater than zero.",
    "hint": "Zero is not positive.",
    "samples": [
      {
        "input": "5\n0 -1 2 3 -4",
        "output": "2"
      },
      {
        "input": "3\n-1 0 -2",
        "output": "0"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),count=0;for(int i=0;i<n;i++)if(readInt()>0)count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-positive"
  },
  {
    "id": "cpp-challenge-42",
    "lang": "cpp",
    "title": "Count Positive Elements",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; count values strictly greater than zero.",
    "hint": "Zero is not positive.",
    "samples": [
      {
        "input": "5\n0 -1 2 3 -4",
        "output": "2"
      },
      {
        "input": "3\n-1 0 -2",
        "output": "0"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),count=0;for(int i=0;i<n;i++)if(readInt()>0)count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-positive"
  },
  {
    "id": "c-challenge-43",
    "lang": "c",
    "title": "Linear Search",
    "level": "Medium",
    "topic": "Arrays",
    "description": "Read n (1–100), n integers, then target; print its first zero-based index or -1.",
    "hint": "Scan from left to right and stop on the first match.",
    "samples": [
      {
        "input": "5\n3 8 3 2 1\n3",
        "output": "0"
      },
      {
        "input": "3\n4 5 6\n7",
        "output": "-1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();int target=readInt(),index=-1;for(int i=0;i<n;i++)if(a[i]==target){index=i;break;}printInt(index);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "linear-search"
  },
  {
    "id": "cpp-challenge-43",
    "lang": "cpp",
    "title": "Linear Search",
    "level": "Medium",
    "topic": "Arrays",
    "description": "Read n (1–100), n integers, then target; print its first zero-based index or -1.",
    "hint": "Scan from left to right and stop on the first match.",
    "samples": [
      {
        "input": "5\n3 8 3 2 1\n3",
        "output": "0"
      },
      {
        "input": "3\n4 5 6\n7",
        "output": "-1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();int target=readInt(),index=-1;for(int i=0;i<n;i++)if(a[i]==target){index=i;break;}printInt(index);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "linear-search"
  },
  {
    "id": "c-challenge-44",
    "lang": "c",
    "title": "Reverse Array",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; print them in reverse order.",
    "hint": "Read into an array and traverse from n-1 to 0.",
    "samples": [
      {
        "input": "4\n1 2 3 4",
        "output": "4 3 2 1"
      },
      {
        "input": "1\n7",
        "output": "7"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();for(int i=n-1;i>=0;i--)printItem(a[i]);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "reverse-array"
  },
  {
    "id": "cpp-challenge-44",
    "lang": "cpp",
    "title": "Reverse Array",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; print them in reverse order.",
    "hint": "Read into an array and traverse from n-1 to 0.",
    "samples": [
      {
        "input": "4\n1 2 3 4",
        "output": "4 3 2 1"
      },
      {
        "input": "1\n7",
        "output": "7"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();for(int i=n-1;i>=0;i--)printItem(a[i]);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "reverse-array"
  },
  {
    "id": "c-challenge-45",
    "lang": "c",
    "title": "Check Sorted Array",
    "level": "Medium",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; print YES if nondecreasing, otherwise NO.",
    "hint": "Every item from index 1 must be >= its predecessor.",
    "samples": [
      {
        "input": "4\n1 2 2 5",
        "output": "YES"
      },
      {
        "input": "3\n1 5 3",
        "output": "NO"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),prev=readInt(),ok=1;for(int i=1;i<n;i++){int x=readInt();if(x<prev)ok=0;prev=x;}printText(ok?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "nondecreasing"
  },
  {
    "id": "cpp-challenge-45",
    "lang": "cpp",
    "title": "Check Sorted Array",
    "level": "Medium",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; print YES if nondecreasing, otherwise NO.",
    "hint": "Every item from index 1 must be >= its predecessor.",
    "samples": [
      {
        "input": "4\n1 2 2 5",
        "output": "YES"
      },
      {
        "input": "3\n1 5 3",
        "output": "NO"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),prev=readInt(),ok=1;for(int i=1;i<n;i++){int x=readInt();if(x<prev)ok=0;prev=x;}printText(ok?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "nondecreasing"
  },
  {
    "id": "c-challenge-46",
    "lang": "c",
    "title": "Bubble Sort Output",
    "level": "Medium",
    "topic": "Arrays",
    "description": "Read n (1–30) and n integers; print them in ascending order.",
    "hint": "Bubble sort swaps adjacent values that are out of order.",
    "samples": [
      {
        "input": "5\n4 1 5 3 2",
        "output": "1 2 3 4 5"
      },
      {
        "input": "3\n9 9 1",
        "output": "1 9 9"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();for(int i=0;i<n;i++)for(int j=0;j+1<n-i;j++)if(a[j]>a[j+1]){int t=a[j];a[j]=a[j+1];a[j+1]=t;}for(int i=0;i<n;i++)printItem(a[i]);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sort-array"
  },
  {
    "id": "cpp-challenge-46",
    "lang": "cpp",
    "title": "Bubble Sort Output",
    "level": "Medium",
    "topic": "Arrays",
    "description": "Read n (1–30) and n integers; print them in ascending order.",
    "hint": "Bubble sort swaps adjacent values that are out of order.",
    "samples": [
      {
        "input": "5\n4 1 5 3 2",
        "output": "1 2 3 4 5"
      },
      {
        "input": "3\n9 9 1",
        "output": "1 9 9"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();for(int i=0;i<n;i++)for(int j=0;j+1<n-i;j++)if(a[j]>a[j+1]){int t=a[j];a[j]=a[j+1];a[j+1]=t;}for(int i=0;i<n;i++)printItem(a[i]);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sort-array"
  },
  {
    "id": "c-challenge-47",
    "lang": "c",
    "title": "Count Occurrences",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100), n integers, and target; print target frequency.",
    "hint": "Increment a counter for each matching element.",
    "samples": [
      {
        "input": "5\n1 2 1 1 3\n1",
        "output": "3"
      },
      {
        "input": "4\n2 2 3 4\n9",
        "output": "0"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();int target=readInt(),count=0;for(int i=0;i<n;i++)if(a[i]==target)count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-target"
  },
  {
    "id": "cpp-challenge-47",
    "lang": "cpp",
    "title": "Count Occurrences",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100), n integers, and target; print target frequency.",
    "hint": "Increment a counter for each matching element.",
    "samples": [
      {
        "input": "5\n1 2 1 1 3\n1",
        "output": "3"
      },
      {
        "input": "4\n2 2 3 4\n9",
        "output": "0"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();int target=readInt(),count=0;for(int i=0;i<n;i++)if(a[i]==target)count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-target"
  },
  {
    "id": "c-challenge-48",
    "lang": "c",
    "title": "Prefix Sums",
    "level": "Medium",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; print cumulative sums after each value.",
    "hint": "Keep a running sum and print after adding each new element.",
    "samples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 3 6 10"
      },
      {
        "input": "3\n4 -1 1",
        "output": "4 3 4"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt();long long sum=0;for(int i=0;i<n;i++){sum+=readInt();printItem(sum);}finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "prefix-sum"
  },
  {
    "id": "cpp-challenge-48",
    "lang": "cpp",
    "title": "Prefix Sums",
    "level": "Medium",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; print cumulative sums after each value.",
    "hint": "Keep a running sum and print after adding each new element.",
    "samples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 3 6 10"
      },
      {
        "input": "3\n4 -1 1",
        "output": "4 3 4"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt();long long sum=0;for(int i=0;i<n;i++){sum+=readInt();printItem(sum);}finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "prefix-sum"
  },
  {
    "id": "c-challenge-49",
    "lang": "c",
    "title": "Rotate Left",
    "level": "Medium",
    "topic": "Arrays",
    "description": "Read n (1–100), n integers; rotate left by one position and print.",
    "hint": "The first element moves to the end.",
    "samples": [
      {
        "input": "4\n1 2 3 4",
        "output": "2 3 4 1"
      },
      {
        "input": "1\n99",
        "output": "99"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();for(int i=1;i<n;i++)printItem(a[i]);printItem(a[0]);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "rotate-left"
  },
  {
    "id": "cpp-challenge-49",
    "lang": "cpp",
    "title": "Rotate Left",
    "level": "Medium",
    "topic": "Arrays",
    "description": "Read n (1–100), n integers; rotate left by one position and print.",
    "hint": "The first element moves to the end.",
    "samples": [
      {
        "input": "4\n1 2 3 4",
        "output": "2 3 4 1"
      },
      {
        "input": "1\n99",
        "output": "99"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();for(int i=1;i<n;i++)printItem(a[i]);printItem(a[0]);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "rotate-left"
  },
  {
    "id": "c-challenge-50",
    "lang": "c",
    "title": "Sum Odd Elements",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; print the sum of odd values.",
    "hint": "A value is odd if x % 2 != 0, even for negatives.",
    "samples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "9"
      },
      {
        "input": "3\n-3 2 -5",
        "output": "-8"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt();long long sum=0;for(int i=0;i<n;i++){int x=readInt();if(x%2!=0)sum+=x;}printInt(sum);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sum-odd"
  },
  {
    "id": "cpp-challenge-50",
    "lang": "cpp",
    "title": "Sum Odd Elements",
    "level": "Easy",
    "topic": "Arrays",
    "description": "Read n (1–100) and n integers; print the sum of odd values.",
    "hint": "A value is odd if x % 2 != 0, even for negatives.",
    "samples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "9"
      },
      {
        "input": "3\n-3 2 -5",
        "output": "-8"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt();long long sum=0;for(int i=0;i<n;i++){int x=readInt();if(x%2!=0)sum+=x;}printInt(sum);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sum-odd"
  },
  {
    "id": "c-challenge-51",
    "lang": "c",
    "title": "Second Largest Distinct",
    "level": "Medium",
    "topic": "Arrays",
    "description": "Read n (2–100) integers; print the second largest *distinct* integer or NONE.",
    "hint": "Track the two best distinct values.",
    "samples": [
      {
        "input": "5\n5 2 9 9 7",
        "output": "7"
      },
      {
        "input": "3\n4 4 4",
        "output": "NONE"
      },
      {
        "input": "3\n-5 -2 -3",
        "output": "-3"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();int found=0,best=0,second=0;for(int i=0;i<n;i++){int x=a[i];if(!found||x>best){if(found&&x!=best){second=best;found=2;}else if(!found)found=1;best=x;}else if(x<best&&(found<2||x>second)){second=x;found=2;}}if(found>=2)printInt(second);else printText(\"NONE\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "second-largest"
  },
  {
    "id": "cpp-challenge-51",
    "lang": "cpp",
    "title": "Second Largest Distinct",
    "level": "Medium",
    "topic": "Arrays",
    "description": "Read n (2–100) integers; print the second largest *distinct* integer or NONE.",
    "hint": "Track the two best distinct values.",
    "samples": [
      {
        "input": "5\n5 2 9 9 7",
        "output": "7"
      },
      {
        "input": "3\n4 4 4",
        "output": "NONE"
      },
      {
        "input": "3\n-5 -2 -3",
        "output": "-3"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();int found=0,best=0,second=0;for(int i=0;i<n;i++){int x=a[i];if(!found||x>best){if(found&&x!=best){second=best;found=2;}else if(!found)found=1;best=x;}else if(x<best&&(found<2||x>second)){second=x;found=2;}}if(found>=2)printInt(second);else printText(\"NONE\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "second-largest"
  },
  {
    "id": "c-challenge-52",
    "lang": "c",
    "title": "String Length",
    "level": "Easy",
    "topic": "Strings",
    "description": "Read one word up to 100 ASCII characters; print its length.",
    "hint": "Count until the terminating null character.",
    "samples": [
      {
        "input": "hello",
        "output": "5"
      },
      {
        "input": "a",
        "output": "1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    char word[101];readWord(word);int count=0;while(word[count]!='\\0')count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "string-length"
  },
  {
    "id": "cpp-challenge-52",
    "lang": "cpp",
    "title": "String Length",
    "level": "Easy",
    "topic": "Strings",
    "description": "Read one word up to 100 ASCII characters; print its length.",
    "hint": "Count until the terminating null character.",
    "samples": [
      {
        "input": "hello",
        "output": "5"
      },
      {
        "input": "a",
        "output": "1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    char word[101];readWord(word);int count=0;while(word[count]!='\\0')count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "string-length"
  },
  {
    "id": "c-challenge-53",
    "lang": "c",
    "title": "Count Vowels",
    "level": "Medium",
    "topic": "Strings",
    "description": "Read one ASCII word and count vowels (a, e, i, o, u), ignoring case.",
    "hint": "Convert characters to lowercase when comparing.",
    "samples": [
      {
        "input": "education",
        "output": "5"
      },
      {
        "input": "rhythm",
        "output": "0"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    char w[101];readWord(w);int count=0;for(int i=0;w[i];i++){char c=(char)tolower((unsigned char)w[i]);if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u')count++;}printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-vowels"
  },
  {
    "id": "cpp-challenge-53",
    "lang": "cpp",
    "title": "Count Vowels",
    "level": "Medium",
    "topic": "Strings",
    "description": "Read one ASCII word and count vowels (a, e, i, o, u), ignoring case.",
    "hint": "Convert characters to lowercase when comparing.",
    "samples": [
      {
        "input": "education",
        "output": "5"
      },
      {
        "input": "rhythm",
        "output": "0"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    char w[101];readWord(w);int count=0;for(int i=0;w[i];i++){char c=(char)tolower((unsigned char)w[i]);if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u')count++;}printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-vowels"
  },
  {
    "id": "c-challenge-54",
    "lang": "c",
    "title": "Reverse a Word",
    "level": "Easy",
    "topic": "Strings",
    "description": "Read one ASCII word (max 100 chars); print its characters in reverse order.",
    "hint": "Determine the length, then print from the end.",
    "samples": [
      {
        "input": "Code",
        "output": "edoC"
      },
      {
        "input": "abc",
        "output": "cba"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    char w[101];readWord(w);int n=(int)strlen(w);for(int i=n-1;i>=0;i--)printChar(w[i]);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "reverse-word"
  },
  {
    "id": "cpp-challenge-54",
    "lang": "cpp",
    "title": "Reverse a Word",
    "level": "Easy",
    "topic": "Strings",
    "description": "Read one ASCII word (max 100 chars); print its characters in reverse order.",
    "hint": "Determine the length, then print from the end.",
    "samples": [
      {
        "input": "Code",
        "output": "edoC"
      },
      {
        "input": "abc",
        "output": "cba"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    char w[101];readWord(w);int n=(int)strlen(w);for(int i=n-1;i>=0;i--)printChar(w[i]);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "reverse-word"
  },
  {
    "id": "c-challenge-55",
    "lang": "c",
    "title": "Palindrome Word",
    "level": "Medium",
    "topic": "Strings",
    "description": "Read one ASCII word; output YES if it is a case-sensitive palindrome.",
    "hint": "Compare matching characters from both ends.",
    "samples": [
      {
        "input": "level",
        "output": "YES"
      },
      {
        "input": "Code",
        "output": "NO"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    char w[101];readWord(w);int n=(int)strlen(w),ok=1;for(int i=0;i<n/2;i++)if(w[i]!=w[n-1-i])ok=0;printText(ok?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "palindrome-word"
  },
  {
    "id": "cpp-challenge-55",
    "lang": "cpp",
    "title": "Palindrome Word",
    "level": "Medium",
    "topic": "Strings",
    "description": "Read one ASCII word; output YES if it is a case-sensitive palindrome.",
    "hint": "Compare matching characters from both ends.",
    "samples": [
      {
        "input": "level",
        "output": "YES"
      },
      {
        "input": "Code",
        "output": "NO"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    char w[101];readWord(w);int n=(int)strlen(w),ok=1;for(int i=0;i<n/2;i++)if(w[i]!=w[n-1-i])ok=0;printText(ok?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "palindrome-word"
  },
  {
    "id": "c-challenge-56",
    "lang": "c",
    "title": "Uppercase Word",
    "level": "Easy",
    "topic": "Strings",
    "description": "Read one ASCII word; print it in uppercase.",
    "hint": "Use toupper after casting to unsigned char.",
    "samples": [
      {
        "input": "hello",
        "output": "HELLO"
      },
      {
        "input": "Code123",
        "output": "CODE123"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    char w[101];readWord(w);for(int i=0;w[i];i++)printChar((char)toupper((unsigned char)w[i]));finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "uppercase"
  },
  {
    "id": "cpp-challenge-56",
    "lang": "cpp",
    "title": "Uppercase Word",
    "level": "Easy",
    "topic": "Strings",
    "description": "Read one ASCII word; print it in uppercase.",
    "hint": "Use toupper after casting to unsigned char.",
    "samples": [
      {
        "input": "hello",
        "output": "HELLO"
      },
      {
        "input": "Code123",
        "output": "CODE123"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    char w[101];readWord(w);for(int i=0;w[i];i++)printChar((char)toupper((unsigned char)w[i]));finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "uppercase"
  },
  {
    "id": "c-challenge-57",
    "lang": "c",
    "title": "Digits in a Word",
    "level": "Medium",
    "topic": "Strings",
    "description": "Read one ASCII word; print the number of digit characters (0–9).",
    "hint": "Use the isdigit character classifier.",
    "samples": [
      {
        "input": "a1b23",
        "output": "3"
      },
      {
        "input": "Code",
        "output": "0"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    char w[101];readWord(w);int count=0;for(int i=0;w[i];i++)if(isdigit((unsigned char)w[i]))count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-digits-word"
  },
  {
    "id": "cpp-challenge-57",
    "lang": "cpp",
    "title": "Digits in a Word",
    "level": "Medium",
    "topic": "Strings",
    "description": "Read one ASCII word; print the number of digit characters (0–9).",
    "hint": "Use the isdigit character classifier.",
    "samples": [
      {
        "input": "a1b23",
        "output": "3"
      },
      {
        "input": "Code",
        "output": "0"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    char w[101];readWord(w);int count=0;for(int i=0;w[i];i++)if(isdigit((unsigned char)w[i]))count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-digits-word"
  },
  {
    "id": "c-challenge-58",
    "lang": "c",
    "title": "First Character",
    "level": "Easy",
    "topic": "Strings",
    "description": "Read one nonempty word; print its first character.",
    "hint": "Index zero is the first character.",
    "samples": [
      {
        "input": "GearEx",
        "output": "G"
      },
      {
        "input": "abc",
        "output": "a"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    char w[101];readWord(w);printChar(w[0]);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "first-letter"
  },
  {
    "id": "cpp-challenge-58",
    "lang": "cpp",
    "title": "First Character",
    "level": "Easy",
    "topic": "Strings",
    "description": "Read one nonempty word; print its first character.",
    "hint": "Index zero is the first character.",
    "samples": [
      {
        "input": "GearEx",
        "output": "G"
      },
      {
        "input": "abc",
        "output": "a"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    char w[101];readWord(w);printChar(w[0]);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "first-letter"
  },
  {
    "id": "c-challenge-59",
    "lang": "c",
    "title": "Count Letter A",
    "level": "Easy",
    "topic": "Strings",
    "description": "Read an ASCII word; count lowercase a and uppercase A.",
    "hint": "Compare each character with both cases.",
    "samples": [
      {
        "input": "Banana",
        "output": "3"
      },
      {
        "input": "xyz",
        "output": "0"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    char w[101];readWord(w);int count=0;for(int i=0;w[i];i++)if(w[i]=='a'||w[i]=='A')count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-a"
  },
  {
    "id": "cpp-challenge-59",
    "lang": "cpp",
    "title": "Count Letter A",
    "level": "Easy",
    "topic": "Strings",
    "description": "Read an ASCII word; count lowercase a and uppercase A.",
    "hint": "Compare each character with both cases.",
    "samples": [
      {
        "input": "Banana",
        "output": "3"
      },
      {
        "input": "xyz",
        "output": "0"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    char w[101];readWord(w);int count=0;for(int i=0;w[i];i++)if(w[i]=='a'||w[i]=='A')count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-a"
  },
  {
    "id": "c-challenge-60",
    "lang": "c",
    "title": "Binary Search: First Position",
    "level": "Hard",
    "topic": "Algorithms",
    "description": "Read n (1–100) sorted integers and a target. Print the first zero-based occurrence, or -1.",
    "hint": "Keep searching left after finding a match.",
    "samples": [
      {
        "input": "6\n1 2 2 2 4 5\n2",
        "output": "1"
      },
      {
        "input": "4\n1 3 5 7\n2",
        "output": "-1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();int target=readInt(),lo=0,hi=n-1,answer=-1;while(lo<=hi){int mid=lo+(hi-lo)/2;if(a[mid]>=target){if(a[mid]==target)answer=mid;hi=mid-1;}else lo=mid+1;}printInt(answer);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "binary-search-first"
  },
  {
    "id": "cpp-challenge-60",
    "lang": "cpp",
    "title": "Binary Search: First Position",
    "level": "Hard",
    "topic": "Algorithms",
    "description": "Read n (1–100) sorted integers and a target. Print the first zero-based occurrence, or -1.",
    "hint": "Keep searching left after finding a match.",
    "samples": [
      {
        "input": "6\n1 2 2 2 4 5\n2",
        "output": "1"
      },
      {
        "input": "4\n1 3 5 7\n2",
        "output": "-1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();int target=readInt(),lo=0,hi=n-1,answer=-1;while(lo<=hi){int mid=lo+(hi-lo)/2;if(a[mid]>=target){if(a[mid]==target)answer=mid;hi=mid-1;}else lo=mid+1;}printInt(answer);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "binary-search-first"
  },
  {
    "id": "c-challenge-61",
    "lang": "c",
    "title": "Count Distinct Values",
    "level": "Hard",
    "topic": "Algorithms",
    "description": "Read n (1–100) integers. Print the number of distinct values.",
    "hint": "For each element, check whether it appeared earlier.",
    "samples": [
      {
        "input": "6\n2 2 4 1 4 5",
        "output": "4"
      },
      {
        "input": "3\n7 7 7",
        "output": "1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),a[101],count=0;for(int i=0;i<n;i++)a[i]=readInt();for(int i=0;i<n;i++){int seen=0;for(int j=0;j<i;j++)if(a[j]==a[i])seen=1;if(!seen)count++;}printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-distinct"
  },
  {
    "id": "cpp-challenge-61",
    "lang": "cpp",
    "title": "Count Distinct Values",
    "level": "Hard",
    "topic": "Algorithms",
    "description": "Read n (1–100) integers. Print the number of distinct values.",
    "hint": "For each element, check whether it appeared earlier.",
    "samples": [
      {
        "input": "6\n2 2 4 1 4 5",
        "output": "4"
      },
      {
        "input": "3\n7 7 7",
        "output": "1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),a[101],count=0;for(int i=0;i<n;i++)a[i]=readInt();for(int i=0;i<n;i++){int seen=0;for(int j=0;j<i;j++)if(a[j]==a[i])seen=1;if(!seen)count++;}printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "count-distinct"
  },
  {
    "id": "c-challenge-62",
    "lang": "c",
    "title": "Two Sum Exists",
    "level": "Hard",
    "topic": "Algorithms",
    "description": "Read n (2–100) integers and a target; print YES if two elements at different indices sum to target.",
    "hint": "Try pairs i < j.",
    "samples": [
      {
        "input": "4\n3 8 2 5\n10",
        "output": "YES"
      },
      {
        "input": "3\n1 2 3\n10",
        "output": "NO"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();int target=readInt(),ok=0;for(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(a[i]+a[j]==target)ok=1;printText(ok?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "two-sum"
  },
  {
    "id": "cpp-challenge-62",
    "lang": "cpp",
    "title": "Two Sum Exists",
    "level": "Hard",
    "topic": "Algorithms",
    "description": "Read n (2–100) integers and a target; print YES if two elements at different indices sum to target.",
    "hint": "Try pairs i < j.",
    "samples": [
      {
        "input": "4\n3 8 2 5\n10",
        "output": "YES"
      },
      {
        "input": "3\n1 2 3\n10",
        "output": "NO"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();int target=readInt(),ok=0;for(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(a[i]+a[j]==target)ok=1;printText(ok?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "two-sum"
  },
  {
    "id": "c-challenge-63",
    "lang": "c",
    "title": "Rotate Right by k",
    "level": "Hard",
    "topic": "Arrays",
    "description": "Read n (1–100), n integers, and nonnegative k. Rotate the array right by k positions.",
    "hint": "Element at new index i came from old (i-k+n)%n.",
    "samples": [
      {
        "input": "5\n1 2 3 4 5\n2",
        "output": "4 5 1 2 3"
      },
      {
        "input": "3\n8 9 7\n3",
        "output": "8 9 7"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();int k=readInt()%n;for(int i=0;i<n;i++)printItem(a[(i-k+n)%n]);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "rotate-k"
  },
  {
    "id": "cpp-challenge-63",
    "lang": "cpp",
    "title": "Rotate Right by k",
    "level": "Hard",
    "topic": "Arrays",
    "description": "Read n (1–100), n integers, and nonnegative k. Rotate the array right by k positions.",
    "hint": "Element at new index i came from old (i-k+n)%n.",
    "samples": [
      {
        "input": "5\n1 2 3 4 5\n2",
        "output": "4 5 1 2 3"
      },
      {
        "input": "3\n8 9 7\n3",
        "output": "8 9 7"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),a[101];for(int i=0;i<n;i++)a[i]=readInt();int k=readInt()%n;for(int i=0;i<n;i++)printItem(a[(i-k+n)%n]);finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "rotate-k"
  },
  {
    "id": "c-challenge-64",
    "lang": "c",
    "title": "Transpose a Matrix",
    "level": "Hard",
    "topic": "Arrays",
    "description": "Read rows r and columns c (1–5 each) followed by r×c integers. Print the transposed matrix rows.",
    "hint": "Swap row and column indices when reading values.",
    "samples": [
      {
        "input": "2 3\n1 2 3\n4 5 6",
        "output": "1 4\n2 5\n3 6"
      },
      {
        "input": "2 2\n1 2\n3 4",
        "output": "1 3\n2 4"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int r=readInt(),c=readInt(),a[6][6];for(int i=0;i<r;i++)for(int j=0;j<c;j++)a[i][j]=readInt();for(int j=0;j<c;j++){for(int i=0;i<r;i++)printItem(a[i][j]);finishLine();}\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "matrix-transpose"
  },
  {
    "id": "cpp-challenge-64",
    "lang": "cpp",
    "title": "Transpose a Matrix",
    "level": "Hard",
    "topic": "Arrays",
    "description": "Read rows r and columns c (1–5 each) followed by r×c integers. Print the transposed matrix rows.",
    "hint": "Swap row and column indices when reading values.",
    "samples": [
      {
        "input": "2 3\n1 2 3\n4 5 6",
        "output": "1 4\n2 5\n3 6"
      },
      {
        "input": "2 2\n1 2\n3 4",
        "output": "1 3\n2 4"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int r=readInt(),c=readInt(),a[6][6];for(int i=0;i<r;i++)for(int j=0;j<c;j++)a[i][j]=readInt();for(int j=0;j<c;j++){for(int i=0;i<r;i++)printItem(a[i][j]);finishLine();}\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "matrix-transpose"
  },
  {
    "id": "c-challenge-65",
    "lang": "c",
    "title": "Balanced Parentheses",
    "level": "Hard",
    "topic": "Strings",
    "description": "Read a word of at most 100 characters consisting only of ( and ). Output YES if parentheses are balanced.",
    "hint": "A counter increases on ( and decreases on ); it must never become negative.",
    "samples": [
      {
        "input": "(())()",
        "output": "YES"
      },
      {
        "input": "())(",
        "output": "NO"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    char w[101];readWord(w);int depth=0,ok=1;for(int i=0;w[i];i++){if(w[i]=='(')depth++;else depth--;if(depth<0)ok=0;}printText(ok&&depth==0?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "balanced-parentheses"
  },
  {
    "id": "cpp-challenge-65",
    "lang": "cpp",
    "title": "Balanced Parentheses",
    "level": "Hard",
    "topic": "Strings",
    "description": "Read a word of at most 100 characters consisting only of ( and ). Output YES if parentheses are balanced.",
    "hint": "A counter increases on ( and decreases on ); it must never become negative.",
    "samples": [
      {
        "input": "(())()",
        "output": "YES"
      },
      {
        "input": "())(",
        "output": "NO"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    char w[101];readWord(w);int depth=0,ok=1;for(int i=0;w[i];i++){if(w[i]=='(')depth++;else depth--;if(depth<0)ok=0;}printText(ok&&depth==0?\"YES\":\"NO\");\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "balanced-parentheses"
  },
  {
    "id": "c-challenge-66",
    "lang": "c",
    "title": "Longest Increasing Run",
    "level": "Hard",
    "topic": "Arrays",
    "description": "Read n (1–100) integers. Print the length of the longest strictly increasing contiguous run.",
    "hint": "Reset the current length if the next value is not larger.",
    "samples": [
      {
        "input": "7\n1 2 3 1 2 3 4",
        "output": "4"
      },
      {
        "input": "4\n5 5 5 5",
        "output": "1"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),prev=readInt(),run=1,best=1;for(int i=1;i<n;i++){int x=readInt();run=x>prev?run+1:1;if(run>best)best=run;prev=x;}printInt(best);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "longest-increasing-run"
  },
  {
    "id": "cpp-challenge-66",
    "lang": "cpp",
    "title": "Longest Increasing Run",
    "level": "Hard",
    "topic": "Arrays",
    "description": "Read n (1–100) integers. Print the length of the longest strictly increasing contiguous run.",
    "hint": "Reset the current length if the next value is not larger.",
    "samples": [
      {
        "input": "7\n1 2 3 1 2 3 4",
        "output": "4"
      },
      {
        "input": "4\n5 5 5 5",
        "output": "1"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),prev=readInt(),run=1,best=1;for(int i=1;i<n;i++){int x=readInt();run=x>prev?run+1:1;if(run>best)best=run;prev=x;}printInt(best);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "longest-increasing-run"
  },
  {
    "id": "c-challenge-67",
    "lang": "c",
    "title": "Merge Two Sorted Arrays",
    "level": "Hard",
    "topic": "Algorithms",
    "description": "Read n and m (1–50), n sorted integers, and m sorted integers. Print one merged sorted sequence.",
    "hint": "Compare the first unconsumed value from each array.",
    "samples": [
      {
        "input": "3 4\n1 3 7\n2 2 8 9",
        "output": "1 2 2 3 7 8 9"
      },
      {
        "input": "1 2\n4\n1 2",
        "output": "1 2 4"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),m=readInt(),a[51],b[51];for(int i=0;i<n;i++)a[i]=readInt();for(int i=0;i<m;i++)b[i]=readInt();int i=0,j=0;while(i<n||j<m){if(j==m||(i<n&&a[i]<=b[j]))printItem(a[i++]);else printItem(b[j++]);}finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "merge-sorted"
  },
  {
    "id": "cpp-challenge-67",
    "lang": "cpp",
    "title": "Merge Two Sorted Arrays",
    "level": "Hard",
    "topic": "Algorithms",
    "description": "Read n and m (1–50), n sorted integers, and m sorted integers. Print one merged sorted sequence.",
    "hint": "Compare the first unconsumed value from each array.",
    "samples": [
      {
        "input": "3 4\n1 3 7\n2 2 8 9",
        "output": "1 2 2 3 7 8 9"
      },
      {
        "input": "1 2\n4\n1 2",
        "output": "1 2 4"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),m=readInt(),a[51],b[51];for(int i=0;i<n;i++)a[i]=readInt();for(int i=0;i<m;i++)b[i]=readInt();int i=0,j=0;while(i<n||j<m){if(j==m||(i<n&&a[i]<=b[j]))printItem(a[i++]);else printItem(b[j++]);}finishLine();\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "merge-sorted"
  },
  {
    "id": "c-challenge-68",
    "lang": "c",
    "title": "Count Primes by Sieve",
    "level": "Hard",
    "topic": "Algorithms",
    "description": "Read n from 0 to 1000. Print how many prime numbers are at most n.",
    "hint": "Mark multiples of each prime as composite, starting from p².",
    "samples": [
      {
        "input": "10",
        "output": "4"
      },
      {
        "input": "2",
        "output": "1"
      },
      {
        "input": "1",
        "output": "0"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt(),composite[1001]={0},count=0;for(int p=2;p*p<=n;p++)if(!composite[p])for(int j=p*p;j<=n;j+=p)composite[j]=1;for(int p=2;p<=n;p++)if(!composite[p])count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sieve-prime-count"
  },
  {
    "id": "cpp-challenge-68",
    "lang": "cpp",
    "title": "Count Primes by Sieve",
    "level": "Hard",
    "topic": "Algorithms",
    "description": "Read n from 0 to 1000. Print how many prime numbers are at most n.",
    "hint": "Mark multiples of each prime as composite, starting from p².",
    "samples": [
      {
        "input": "10",
        "output": "4"
      },
      {
        "input": "2",
        "output": "1"
      },
      {
        "input": "1",
        "output": "0"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt(),composite[1001]={0},count=0;for(int p=2;p*p<=n;p++)if(!composite[p])for(int j=p*p;j<=n;j+=p)composite[j]=1;for(int p=2;p<=n;p++)if(!composite[p])count++;printInt(count);\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "sieve-prime-count"
  },
  {
    "id": "c-challenge-69",
    "lang": "c",
    "title": "Range Sum Queries",
    "level": "Hard",
    "topic": "Algorithms",
    "description": "Read n (1–100) integers, q (1–10), then q zero-based index pairs l r with 0<=l<=r<n. Print each inclusive range sum on its own line.",
    "hint": "A prefix sum array answers each query in constant time.",
    "samples": [
      {
        "input": "5\n1 2 3 4 5\n2\n0 2\n1 4",
        "output": "6\n14"
      },
      {
        "input": "3\n3 -2 7\n1\n1 2",
        "output": "5"
      }
    ],
    "solution": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint readInt(void) { int n=0; if(scanf(\"%d\", &n)!=1) return 0; return n; }\nvoid readWord(char *s) { if(scanf(\"%100s\", s)!=1) s[0]='\\0'; }\nvoid printInt(long long n) { printf(\"%lld\\n\", n); }\nvoid printText(const char *s) { printf(\"%s\\n\", s); }\nvoid printItem(long long n) { printf(\"%lld \", n); }\nvoid printChar(char c) { putchar(c); }\nvoid finishLine(void) { putchar('\\n'); }\nint main(void) {\n    int n=readInt();long long pref[101]={0};for(int i=0;i<n;i++)pref[i+1]=pref[i]+readInt();int q=readInt();while(q--){int l=readInt(),r=readInt();printInt(pref[r+1]-pref[l]);}\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "range-sum-queries"
  },
  {
    "id": "cpp-challenge-69",
    "lang": "cpp",
    "title": "Range Sum Queries",
    "level": "Hard",
    "topic": "Algorithms",
    "description": "Read n (1–100) integers, q (1–10), then q zero-based index pairs l r with 0<=l<=r<n. Print each inclusive range sum on its own line.",
    "hint": "A prefix sum array answers each query in constant time.",
    "samples": [
      {
        "input": "5\n1 2 3 4 5\n2\n0 2\n1 4",
        "output": "6\n14"
      },
      {
        "input": "3\n3 -2 7\n1\n1 2",
        "output": "5"
      }
    ],
    "solution": "#include <iostream>\n#include <cstring>\n#include <cctype>\nusing namespace std;\nint readInt() { int n=0; cin >> n; return n; }\nvoid readWord(char *s) { cin.width(101); if(!(cin >> s)) s[0]='\\0'; }\nvoid printInt(long long n) { cout << n << '\\n'; }\nvoid printText(const char *s) { cout << s << '\\n'; }\nvoid printItem(long long n) { cout << n << ' '; }\nvoid printChar(char c) { cout << c; }\nvoid finishLine() { cout << '\\n'; }\nint main() {\n    int n=readInt();long long pref[101]={0};for(int i=0;i<n;i++)pref[i+1]=pref[i]+readInt();int q=readInt();while(q--){int l=readInt(),r=readInt();printInt(pref[r+1]-pref[l]);}\n    return 0;\n}\n",
    "inputGuide": "Read the inputs described in the task. Print the requested result.",
    "slug": "range-sum-queries"
  }
];
