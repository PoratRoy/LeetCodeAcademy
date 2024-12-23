import { QuestionAnswer } from "../types/types";

export const Questions: QuestionAnswer[] = [
  {
    id: 1,
    level: 1,
    title: "בדיקת גיל נהיגה",
    question: `כתוב תוכנית הקולטת את גילו של אדם ובודקת האם הוא רשאי להוציא רישיון נהיגה (מעל גיל 16.5). התוכנית תדפיס הודעה מתאימה.`,
    example: `Enter your age: 15
Sorry, you are too young to get a driving license.`,
    answer: `התוכנית משתמשת במשתנה מטיפוס int לקליטת הגיל, ובאמצעות תנאי if-else בודקת האם הגיל מתאים לקריטריון.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter your age: ";
    cin >> age;
    
    if (age >= 16.5) {
        cout << "You are eligible for a driving license!";
    } else {
        cout << "Sorry, you are too young to get a driving license.";
    }
    return 0;
}`,
  },
  {
    id: 2,
    level: 1,
    title: "בדיקת תו",
    question: `כתוב תוכנית הקולטת תו בודד ומדפיסה האם התו הוא אות גדולה, אות קטנה או ספרה.`,
    example: `Enter a character: A
The character is an uppercase letter`,
    answer: `התוכנית משתמשת במשתנה מטיפוס char ובתנאי if-else מרובה לבדיקת סוג התו.`,
    code: `#include <iostream>
using namespace std;

int main() {
    char ch;
    cout << "Enter a character: ";
    cin >> ch;
    
    if (ch >= 'A' && ch <= 'Z') {
        cout << "The character is an uppercase letter";
    } else if (ch >= 'a' && ch <= 'z') {
        cout << "The character is a lowercase letter";
    } else if (ch >= '0' && ch <= '9') {
        cout << "The character is a digit";
    } else {
        cout << "The character is a special character";
    }
    return 0;
}`,
  },
  {
    id: 3,
    level: 1,
    title: "בדיקת מספר זוגי",
    question: `כתוב תוכנית הקולטת מספר שלם ומדפיסה האם הוא זוגי או אי-זוגי, ובנוסף האם הוא חיובי או שלילי.`,
    example: `Enter a number: -6
The number is even and negative`,
    answer: `התוכנית משתמשת במשתנה מטיפוס int ובשני תנאי if-else לבדיקת זוגיות וסימן המספר.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    
    if (num % 2 == 0) {
        cout << "The number is even";
    } else {
        cout << "The number is odd";
    }
    
    if (num > 0) {
        cout << " and positive";
    } else if (num < 0) {
        cout << " and negative";
    } else {
        cout << " and it's zero";
    }
    return 0;
}`,
  },
  {
    id: 4,
    level: 1,
    title: "המרת טמפרטורה",
    question: `כתוב תוכנית הקולטת טמפרטורה במעלות צלזיוס ומדפיסה אותה במעלות פרנהייט. בנוסף, התוכנית תציין האם חם, קר או נעים בחוץ (מתחת ל-15 מעלות קר, מעל 25 מעלות חם).`,
    example: `Enter temperature in Celsius: 30
Temperature in Fahrenheit: 86
It's hot outside!`,
    answer: `התוכנית משתמשת במשתנה מטיפוס int לטמפרטורה ובתנאי if-else לקביעת תחושת הטמפרטורה.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int celsius;
    cout << "Enter temperature in Celsius: ";
    cin >> celsius;
    
    int fahrenheit = (celsius * 9/5) + 32;
    cout << "Temperature in Fahrenheit: " << fahrenheit << endl;
    
    if (celsius < 15) {
        cout << "It's cold outside!";
    } else if (celsius > 25) {
        cout << "It's hot outside!";
    } else {
        cout << "The temperature is pleasant!";
    }
    return 0;
}`,
  },
  {
    id: 5,
    level: 1,
    title: "בדיקת סיסמה",
    question: `כתוב תוכנית הקולטת סיסמה (תו בודד) ומספר ניסיונות. התוכנית תבדוק האם הסיסמה היא האות 'X'. אם המשתמש צדק, יש להדפיס "Success", אחרת להדפיס כמה ניסיונות נשארו.`,
    example: `Enter password character: A
Enter number of tries: 3
Wrong password! 2 tries left`,
    answer: `התוכנית משתמשת במשתנה מטיפוס char לסיסמה ו-int למספר הניסיונות, ומשתמשת ב-if-else לבדיקת הסיסמה.`,
    code: `#include <iostream>
using namespace std;

int main() {
    char password;
    int tries;
    
    cout << "Enter password character: ";
    cin >> password;
    cout << "Enter number of tries: ";
    cin >> tries;
    
    if (password == 'X') {
        cout << "Success!";
    } else {
        tries--;
        cout << "Wrong password! " << tries << " tries left";
    }
    return 0;
}`,
  },
  {
    id: 6,
    level: 2,
    title: "ספירת ספרות זוגיות",
    question: `כתוב תוכנית הקולטת מספר שלם חיובי מהמשתמש. על התוכנית לספור ולהדפיס כמה ספרות זוגיות יש במספר.`,
    example: `קלט: 2345
פלט: 2 (הספרות 2,4 הן זוגיות)`,
    answer: `נשתמש בלולאת for כדי לעבור על כל ספרה במספר. בכל איטרציה נחלק את המספר ב-10 כדי לקבל את הספרה האחרונה, ונבדוק אם היא זוגית באמצעות if. נספור את הספרות הזוגיות במשתנה מונה.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int num, count = 0;
    cout << "Enter a number: ";
    cin >> num;
    
    for(; num > 0; num /= 10) {
        int digit = num % 10;
        if(digit % 2 == 0) {
            count++;
        }
    }
    
    cout << "Number of even digits: " << count << endl;
    return 0;
}`,
  },
  {
    id: 7,
    level: 2,
    title: "בדיקת תו",
    question: `כתוב תוכנית הקולטת תו מהמשתמש ומדפיסה האם התו הוא אות גדולה, אות קטנה או ספרה.`,
    example: `קלט: 'A'
פלט: "Upper case letter"`,
    answer: `נשתמש במשתנה מסוג char ובתנאי if-else כדי לבדוק את טווח הערכים של התו בהתאם לטבלת ASCII.`,
    code: `#include <iostream>
using namespace std;

int main() {
    char ch;
    cout << "Enter a character: ";
    cin >> ch;
    
    if(ch >= 'A' && ch <= 'Z') {
        cout << "Upper case letter" << endl;
    }
    else if(ch >= 'a' && ch <= 'z') {
        cout << "Lower case letter" << endl;
    }
    else if(ch >= '0' && ch <= '9') {
        cout << "Digit" << endl;
    }
    else {
        cout << "Other character" << endl;
    }
    
    return 0;
}`,
  },
  {
    id: 8,
    level: 2,
    title: "לוח הכפל",
    question: `כתוב תוכנית המקבלת מספר n מהמשתמש ומדפיסה את לוח הכפל בגודל n x n.`,
    example: `קלט: 3
פלט:
1 2 3
2 4 6
3 6 9`,
    answer: `נשתמש בשתי לולאות for מקוננות - אחת עבור השורות ואחת עבור העמודות. בכל תא נכפיל את מספר השורה במספר העמודה.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter size of multiplication table: ";
    cin >> n;
    
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= n; j++) {
            cout << i * j << " ";
        }
        cout << endl;
    }
    
    return 0;
}`,
  },
  {
    id: 9,
    level: 2,
    title: "ספירת ספרות זוגיות",
    question: `כתוב תוכנית הקולטת מהמשתמש מספר שלם חיובי. על התוכנית למצוא ולהדפיס כמה ספרות זוגיות יש במספר.`,
    example: `קלט: 2345
פלט: במספר יש 2 ספרות זוגיות`,
    answer: `נשתמש בלולאת for כדי לעבור על כל ספרה במספר. נחלק את המספר ב-10 בכל פעם כדי לקבל את הספרה האחרונה, ונבדוק אם היא זוגית באמצעות תנאי if.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int num, count = 0;
    cout << "הכנס מספר: ";
    cin >> num;
    
    for(; num > 0; num /= 10) {
        int digit = num % 10;
        if(digit % 2 == 0) {
            count++;
        }
    }
    
    cout << "במספר יש " << count << " ספרות זוגיות" << endl;
    return 0;
}`,
  },
  {
    id: 10,
    level: 1,
    title: "בדיקת תו גדול/קטן",
    question: `כתוב תוכנית הקולטת תו בודד. על התוכנית לבדוק ולהדפיס האם התו הוא אות גדולה, אות קטנה או תו אחר.`,
    example: `קלט: B
פלט: התו הוא אות גדולה`,
    answer: `נשתמש בתנאי if-else כדי לבדוק את התו באמצעות טווח ערכי ASCII. אותיות גדולות הן בטווח 'A' עד 'Z' ואותיות קטנות בטווח 'a' עד 'z'.`,
    code: `#include <iostream>
using namespace std;

int main() {
    char ch;
    cout << "הכנס תו: ";
    cin >> ch;
    
    if(ch >= 'A' && ch <= 'Z') {
        cout << "התו הוא אות גדולה" << endl;
    }
    else if(ch >= 'a' && ch <= 'z') {
        cout << "התו הוא אות קטנה" << endl;
    }
    else {
        cout << "התו אינו אות" << endl;
    }
    return 0;
}`,
  },
  {
    id: 11,
    level: 2,
    title: "מספרים חיוביים בטווח",
    question: `כתוב תוכנית הקולטת מהמשתמש 10 מספרים שלמים. על התוכנית להדפיס כמה מהמספרים נמצאים בטווח שבין 1 ל-100 (כולל).`,
    example: `קלט: 150 25 -3 75 200 50 42 -10 90 102
פלט: 5 מספרים נמצאים בטווח שבין 1 ל-100`,
    answer: `נשתמש בלולאת for שרצה 10 פעמים לקליטת המספרים. בכל פעם נבדוק באמצעות if האם המספר נמצא בטווח המבוקש ונעדכן מונה בהתאם.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int num, count = 0;
    
    for(int i = 0; i < 10; i++) {
        cout << "הכנס מספר " << (i+1) << ": ";
        cin >> num;
        
        if(num >= 1 && num <= 100) {
            count++;
        }
    }
    
    cout << count << " מספרים נמצאים בטווח שבין 1 ל-100" << endl;
    return 0;
}`,
  },
  {
    id: 12,
    level: 2,
    title: "בדיקת מספרים ראשוניים",
    question: `כתוב תוכנית הקולטת מספר שלם חיובי n. התוכנית תדפיס את כל המספרים הראשוניים מ-1 עד n.
מספר ראשוני הוא מספר שמתחלק רק ב-1 ובעצמו.`,
    example: `קלט: 20
פלט: 2 3 5 7 11 13 17 19`,
    answer: `התוכנית משתמשת בשתי לולאות: הראשונה עוברת על כל המספרים מ-2 עד n, והשנייה בודקת עבור כל מספר האם הוא ראשוני על ידי ניסיון לחלק אותו במספרים קטנים ממנו.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    
    for (int i = 2; i <= n; i++) {
        bool isPrime = true;
        for (int j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            cout << i << " ";
        }
    }
    return 0;
}`,
  },
  {
    id: 13,
    level: 2,
    title: "בדיקת טמפרטורות",
    question: `כתוב תוכנית הקולטת 10 טמפרטורות (מספרים שלמים). התוכנית תדפיס כמה טמפרטורות היו מתחת ל-0, כמה היו בין 0 ל-20 (כולל), וכמה היו מעל 20.`,
    example: `קלט: -5 0 15 25 -10 18 22 -3 19 21
פלט:
מתחת ל-0: 3 טמפרטורות
בין 0 ל-20: 4 טמפרטורות
מעל 20: 3 טמפרטורות`,
    answer: `התוכנית משתמשת בלולאה אחת שקולטת 10 טמפרטורות, ובעזרת תנאי if-else מסווגת כל טמפרטורה לקטגוריה המתאימה ומעדכנת את המונים בהתאם.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int belowZero = 0, between = 0, above20 = 0;
    int temp;
    
    cout << "Enter 10 temperatures:" << endl;
    
    for (int i = 0; i < 10; i++) {
        cin >> temp;
        if (temp < 0) {
            belowZero++;
        } else if (temp <= 20) {
            between++;
        } else {
            above20++;
        }
    }
    
    cout << "מתחת ל-0: " << belowZero << " טמפרטורות" << endl;
    cout << "בין 0 ל-20: " << between << " טמפרטורות" << endl;
    cout << "מעל 20: " << above20 << " ��מפרטורות" << endl;
    
    return 0;
}`,
  },
  {
    id: 14,
    level: 2,
    title: "ספירת תווים",
    question: `כתוב תוכנית הקולטת תו אחד ומספר שלם n. התוכנית תדפיס את התו n פעמים בסדר עולה של מספרים.`,
    example: `קלט: * 5
פלט:
1:*
2:**
3:***
4:****
5:*****`,
    answer: `התוכנית משתמשת בלולאה חיצונית שרצה n פעמים, ובכל פעם מדפיסה את מספר השורה ואחריו לולאה פנימית שמדפיסה את התו מספר פעמים השווה למספר השורה.`,
    code: `#include <iostream>
using namespace std;

int main() {
    char symbol;
    int n;
    
    cout << "Enter a symbol and number: ";
    cin >> symbol >> n;
    
    for (int i = 1; i <= n; i++) {
        cout << i << ":";
        for (int j = 1; j <= i; j++) {
            cout << symbol;
        }
        cout << endl;
    }
    return 0;
}`,
  },
  {
    id: 5,
    level: 1,
    title: "",
    question: ``,
    example: ``,
    answer: ``,
    code: ``,
  },
];
