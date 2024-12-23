import { QuestionAnswer } from "../types/types";

export const Questions: QuestionAnswer[] = [
  {
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
    level: 1,
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
    level: 2,
    title: "מחשבון ממוצע ציונים",
    question: `כתוב תוכנית הקולטת ציונים מהמשתמש עד שהמשתמש מכניס -1. על התוכנית לחשב את ממוצע הציונים, להדפיס אותו, ולציין האם הממוצע עובר (מעל 55) או נכשל.`,
    example: `הכנס ציון (-1 לסיום): 85
הכנס ציון (-1 לסיום): 92
הכנס ציון (-1 לסיום): 78
הכנס ציון (-1 לסיום): -1
הממוצע הוא: 85
מצב: עובר`,
    answer: `התוכנית משתמשת בלולאת while לקליטת ציונים, מחשבת את הסכום ומונה את מספר הציונים. לאחר מכן מחשבת ממוצע ובודקת באמצעות if-else האם עובר או נכשל.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int grade = 0;
    int sum = 0;
    int count = 0;
    float average;
    
    while (true) {
        cout << "הכנס ציון (-1 לסיום): ";
        cin >> grade;
        
        if (grade == -1) {
            break;
        }
        
        sum += grade;
        count++;
    }
    
    if (count > 0) {
        average = (float)sum / count;
        cout << "הממוצע הוא: " << average << endl;
        
        if (average >= 55) {
            cout << "מצב: עובר" << endl;
        } else {
            cout << "מצב: נכשל" << endl;
        }
    }
    
    return 0;
}`,
  },
  {
    level: 2,
    title: "בודק סיסמה",
    question: `כתוב תוכנית המבקשת מהמשתמש להזין סיסמה. הסיסמה חייבת להיות באורך 6 תווים בדיוק ולהכיל לפחות ספרה אחת. על התוכנית לתת למשתמש 3 ניסיונות להזין סיסמה תקינה.`,
    example: `נסיון 1 - הכנס סיסמה (6 תווים בדיוק): abc12
הסיסמה קצרה מדי
נסיון 2 - הכנס סיסמה (6 תווים בדיוק): abcdef
חסרה ספרה בסיסמה
נסיון 3 - הכנס סיסמה (6 תווים בדיוק): abc123
הסיסמה תקינה!`,
    answer: `התוכנית משתמשת בלולאת while למתן 3 ניסיונות, בודקת את אורך הסיסמה ומחפשת ספרה באמצעות לולאה נוספת. משתמשת ב-if-else לבדיקת תקינות הסיסמה.`,
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string password;
    int attempts = 3;
    bool isValid = false;
    
    while (attempts > 0 && !isValid) {
        cout << "נסיון " << 4-attempts << " - הכנס סיסמה (6 תווים בדיוק): ";
        cin >> password;
        
        if (password.length() != 6) {
            cout << "הסיסמה חייבת להיות באורך 6 תווים" << endl;
        } else {
            bool hasDigit = false;
            for (char c : password) {
                if (c >= '0' && c <= '9') {
                    hasDigit = true;
                    break;
                }
            }
            
            if (!hasDigit) {
                cout << "חסרה ספרה בסיסמה" << endl;
            } else {
                cout << "הסיסמה תקינה!" << endl;
                isValid = true;
            }
        }
        
        attempts--;
        if (!isValid && attempts == 0) {
            cout << "נגמרו הניסיונות" << endl;
        }
    }
    
    return 0;
}`,
  },
  {
    level: 3,
    title: `הופכי מערך`,
    question: `כתוב תוכנית הקולטת 10 מספרים שלמים למערך ומדפיסה אותם בסדר הפוך.`,
    example: `הכנס 10 מספרים:
1 2 3 4 5 6 7 8 9 10
המערך בסדר הפוך:
10 9 8 7 6 5 4 3 2 1`,
    answer: `התוכנית קולטת את המספרים למערך בגודל קבוע של 10 תאים ומדפיסה אותם בלולאה שרצה מהסוף להתחלה.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[10];
    
    cout << "הכנס 10 מספרים:" << endl;
    for(int i = 0; i < 10; i++) {
        cin >> arr[i];
    }
    
    cout << "המערך בסדר הפוך:" << endl;
    for(int i = 9; i >= 0; i--) {
        cout << arr[i] << " ";
    }
    
    return 0;
}`,
  },
  {
    level: 3,
    title: `מחפש מספר במערך`,
    question: `כתוב תוכנית הקולטת 5 מספרים למערך ומספר לחיפוש. על התוכנית להדפיס האם המספר נמצא במערך ובאיזה מיקום.`,
    example: `הכנס 5 מספרים:
3 8 12 7 5
הכנס מספר לחיפוש: 7
המספר 7 נמצא במיקום 4`,
    answer: `התוכנית משתמשת בלולאה לחיפוש המספר במערך ומשתמשת במשתנה בוליאני לסימון האם המספר נמצא.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[5];
    int searchNum;
    bool found = false;
    
    cout << "הכנס 5 מספרים:" << endl;
    for(int i = 0; i < 5; i++) {
        cin >> arr[i];
    }
    
    cout << "הכנס מספר לחיפוש: ";
    cin >> searchNum;
    
    for(int i = 0; i < 5; i++) {
        if(arr[i] == searchNum) {
            cout << "המספר " << searchNum << " נמצא במיקום " << i+1 << endl;
            found = true;
            break;
        }
    }
    
    if(!found) {
        cout << "המספר לא נמצא במערך" << endl;
    }
    
    return 0;
}`,
  },
  {
    level: 3,
    title: `מונה זוגי ואי-זוגי`,
    question: `כתוב תוכנית הקולטת 8 מספרים למערך וסופרת כמה מהם זוגיים וכמה אי-זוגיים.`,
    example: `הכנס 8 מספרים:
1 4 7 2 9 6 3 8
מספרים זוגיים: 4
מספרים אי-זוגיים: 4`,
    answer: `התוכנית משתמשת בלולאה לבדיקת כל איבר במערך ומשתמשת באופרטור % לבדיקת זוגיות.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[8];
    int evenCount = 0, oddCount = 0;
    
    cout << "הכנס 8 מספרים:" << endl;
    for(int i = 0; i < 8; i++) {
        cin >> arr[i];
        if(arr[i] % 2 == 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    
    cout << "מספרים זוגיים: " << evenCount << endl;
    cout << "מספרים אי-זוגיים: " << oddCount << endl;
    
    return 0;
}`,
  },
  {
    level: 3,
    title: `מערך עולה`,
    question: `כתוב תוכנית הקולטת 6 מספרים למערך ובודקת האם המערך מסודר בסדר עולה.`,
    example: `הכנס 6 מספרים:
1 3 5 8 9 12
המערך בסדר עולה

הכנס 6 מספרים:
1 3 2 4 5 6
המערך אינו בסדר עולה`,
    answer: `התוכנית משווה כל איבר עם האיבר הבא אחריו ומשתמשת במשתנה בוליאני לסימון האם המערך בסדר עולה.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[6];
    bool isAscending = true;
    
    cout << "הכנס 6 מספרים:" << endl;
    for(int i = 0; i < 6; i++) {
        cin >> arr[i];
    }
    
    for(int i = 0; i < 5; i++) {
        if(arr[i] >= arr[i+1]) {
            isAscending = false;
            break;
        }
    }
    
    if(isAscending) {
        cout << "המערך בסדר עולה" << endl;
    } else {
        cout << "המערך אינו בסדר עולה" << endl;
    }
    
    return 0;
}`,
  },
  {
    level: 3,
    title: `ממוצע ומקסימום`,
    question: `כתוב תוכנית הקולטת 7 מספרים למערך, מוצאת את המספר הגדול ביותר ומחשבת את הממוצע של כל המספרים שקטנים ממנו.`,
    example: `הכנס 7 מספרים:
12 5 8 15 3 9 6
המספר המקסימלי: 15
ממוצע המספרים הקטנים מ-15: 7.17`,
    answer: `התוכנית מוצאת את המקסימום בלולאה ראשונה, ואז בלולאה שנייה מחשבת את סכום המספרים הקטנים ממנו לצורך חישוב הממוצע.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[7];
    int max = 0;
    int sum = 0;
    int count = 0;
    
    cout << "הכנס 7 מספרים:" << endl;
    for(int i = 0; i < 7; i++) {
        cin >> arr[i];
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    
    for(int i = 0; i < 7; i++) {
        if(arr[i] < max) {
            sum += arr[i];
            count++;
        }
    }
    
    cout << "המספר המקסימלי: " << max << endl;
    if(count > 0) {
        float average = (float)sum / count;
        cout << "ממוצע המספרים הקטנים מ-" << max << ": " << average << endl;
    }
    
    return 0;
}`,
  },
  {
    level: 4,
    title: `מטריצה דו-מימדית ואלכסונים`,
    question: `כתוב תוכנית הקולטת 16 מספרים למטריצה 4x4 ומחשבת את סכום האלכסון הראשי, סכום האלכסון המשני, ומדפיסה איזה מהם גדול יותר.`,
    example: `הכנס 16 מספרים למטריצה 4x4:
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16

סכום האלכסון הראשי: 34
סכום האלכסון המשני: 34
האלכסונים שווים`,
    answer: `התוכנית משתמשת במערך דו-מימדי. האלכסון הראשי הוא כאשר i=j, והאלכסון המשני הוא כאשר i+j=3.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int matrix[4][4];
    int mainDiagonal = 0;
    int secondaryDiagonal = 0;
    
    cout << "הכנס 16 מספרים למטריצה 4x4:" << endl;
    for(int i = 0; i < 4; i++) {
        for(int j = 0; j < 4; j++) {
            cin >> matrix[i][j];
        }
    }
    
    // חישוב סכום האלכסון הראשי
    for(int i = 0; i < 4; i++) {
        mainDiagonal += matrix[i][i];
    }
    
    // חישוב סכום האלכסון המשני
    for(int i = 0; i < 4; i++) {
        secondaryDiagonal += matrix[i][3-i];
    }
    
    cout << "סכום האלכסון הראשי: " << mainDiagonal << endl;
    cout << "סכום האלכסון המשני: " << secondaryDiagonal << endl;
    
    if(mainDiagonal > secondaryDiagonal) {
        cout << "האלכסון הראשי גדול יותר" << endl;
    } else if(mainDiagonal < secondaryDiagonal) {
        cout << "האלכסון המשני גדול יותר" << endl;
    } else {
        cout << "האלכסונים שווים" << endl;
    }
    
    return 0;
}`,
  },
  {
    level: 5,
    title: `סדרה מתכנסת`,
    question: `כתוב תוכנית הקולטת 10 מספרים למערך ובודקת האם הם מהווים סדרה מתכנסת. סדרה מתכנסת היא סדרה שבה ההפרש בין כל שני איברים עוקבים קטן מההפרש בין שני האיברים העוקבים שלפניהם.`,
    example: `הכנס 10 מספרים:
100 85 75 68 64 62 61 60 59 58
האם הסדרה מתכנסת? כן

הכנס 10 מספרים:
1 5 10 20 35 60 100 150 220 300
האם הסדרה מתכנסת? לא`,
    answer: `התוכנית מחשבת את ההפרשים בין כל זוג מספרים עוקבים ובודקת האם כל הפרש קטן מההפרש הקודם.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[10];
    bool isConverging = true;
    
    cout << "הכנס 10 מספרים:" << endl;
    for(int i = 0; i < 10; i++) {
        cin >> arr[i];
    }
    
    // חישוב הפרשים ובדיקת התכנסות
    int prevDiff = abs(arr[1] - arr[0]);
    for(int i = 1; i < 9; i++) {
        int currentDiff = abs(arr[i+1] - arr[i]);
        if(currentDiff >= prevDiff) {
            isConverging = false;
            break;
        }
        prevDiff = currentDiff;
    }
    
    cout << "האם הסדרה מתכנסת? ";
    if(isConverging) {
        cout << "כן" << endl;
    } else {
        cout << "לא" << endl;
    }
    
    return 0;
}`,
  },
  {
    level: 2,
    title: `בודק מספרים זוגיים`,
    question: `כתוב תוכנית הקולטת מספר שלם מהמשתמש ובאמצעות פונקציה בודקת אם המספר זוגי או אי זוגי. יש לקלוט מספרים עד שהמשתמש מכניס 0.`,
    example: `הכנס מספר (0 לסיום): 4
המספר 4 הוא זוגי
הכנס מספר (0 לסיום): 7
המספר 7 הוא אי זוגי
הכנס מספר (0 לסיום): 0
סיום התוכנית`,
    answer: `נכתוב פונקציה שמקבלת מספר ומחזירה true אם הוא זוגי ו-false אם הוא אי זוגי. בתוכנית הראשית נשתמש בלולאת while לקליטת מספרים.`,
    code: `#include <iostream>
using namespace std;

bool isEven(int num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

int main() {
    int number;
    
    while (true) {
        cout << "הכנס מספר (0 לסיום): ";
        cin >> number;
        
        if (number == 0) {
            cout << "סיום התוכנית" << endl;
            break;
        }
        
        if (isEven(number)) {
            cout << "המספר " << number << " הוא זוגי" << endl;
        } else {
            cout << "המספר " << number << " הוא אי זוגי" << endl;
        }
    }
    
    return 0;
}`,
  },
  {
    level: 2,
    title: `בודק גיל חוקי`,
    question: `כתוב תוכנית הכוללת פונקציה שבודקת האם גיל חוקי (בין 0 ל-120). התוכנית תקלוט גילים עד שיוכנס גיל חוקי.`,
    example: `הכנס את גילך: -5
גיל לא חוקי, נסה שוב
הכנס את גילך: 150
גיל לא חוקי, נסה שוב
הכנס את גילך: 25
גיל חוקי! ברוך הבא!`,
    answer: `נכתוב פונקציה שמקבלת גיל ובודקת אם הוא בטווח החוקי. נשתמש בלולאה שתמשיך לבקש קלט עד שיוכנס גיל חוקי.`,
    code: `#include <iostream>
using namespace std;

bool isValidAge(int age) {
    return (age >= 0 && age <= 120);
}

int main() {
    int age;
    bool isValid = false;
    
    while (!isValid) {
        cout << "הכנס את גילך: ";
        cin >> age;
        
        if (isValidAge(age)) {
            cout << "גיל חוקי! ברוך הבא!" << endl;
            isValid = true;
        } else {
            cout << "גיל לא חוקי, נסה שוב" << endl;
        }
    }
    
    return 0;
}`,
  },
  {
    level: 2,
    title: `מחשבון פשוט`,
    question: `כתוב תוכנית הכוללת פונקציה המקבלת שני מספרים ואופרטור (+, -, * או /) ומחזירה את תוצאת החישוב. התוכנית תקלוט שני מספרים ואופרטור ותציג את התוצאה.`,
    example: `הכנס מספר ראשון: 10
הכנס אופרטור (+,-,*,/): +
הכנס מספר שני: 5
התוצאה: 15`,
    answer: `נכתוב פונקציה שמקבלת שני מספרים ואופרטור ומבצעת את החישוב המתאים בעזרת משפטי if-else.`,
    code: `#include <iostream>
using namespace std;

int calculate(int num1, int num2, char op) {
    if (op == '+') {
        return num1 + num2;
    } else if (op == '-') {
        return num1 - num2;
    } else if (op == '*') {
        return num1 * num2;
    } else if (op == '/') {
        if (num2 != 0) {
            return num1 / num2;
        } else {
            cout << "שגיאה: חלוקה באפס" << endl;
            return 0;
        }
    }
    return 0;
}

int main() {
    int num1, num2;
    char op;
    
    cout << "הכנס מספר ראשון: ";
    cin >> num1;
    
    cout << "הכנס אופרטור (+,-,*,/): ";
    cin >> op;
    
    cout << "הכנס מספר שני: ";
    cin >> num2;
    
    int result = calculate(num1, num2, op);
    cout << "התוצאה: " << result << endl;
    
    return 0;
}`,
  },
  {
    level: 4,
    title: `סכום מספרים גדולים`,
    question: `כתוב תוכנית הקולטת 5 מספרים למערך. הפונקציה צריכה לקבל את המערך ולהחזיר את סכום כל המספרים שגדולים מ-100.
`,
    example: `הכנס 5 מספרים:
50 150 75 200 90
הסכום של המספרים הגדולים מ-100 הוא: 350`,
    answer: `נכתוב פונקציה שעוברת על המערך, בודקת כל מספר אם הוא גדול מ-100, ואם כן - מוסיפה אותו לסכום.
`,
    code: `#include <iostream>
using namespace std;

int sumBigNumbers(int arr[5]) {
    int sum = 0;
    for(int i = 0; i < 5; i++) {
        if(arr[i] > 100) {
            sum = sum + arr[i];
        }
    }
    return sum;
}

int main() {
    int numbers[5];
    
    cout << "הכנס 5 מספרים:" << endl;
    for(int i = 0; i < 5; i++) {
        cin >> numbers[i];
    }
    
    int result = sumBigNumbers(numbers);
    cout << "הסכום של המספרים הגדולים מ-100 הוא: " << result << endl;
    
    return 0;
}`,
  },
  {
    level: 3,
    title: `ספירת מספרים חיוביים`,
    question: `כתוב תוכנית הקולטת 8 מספרים למערך. הפונקציה צריכה לקבל את המערך ולספור כמה מספרים חיוביים יש בו.
`,
    example: `הכנס 8 מספרים:
-1 5 -3 8 0 -7 2 4
מספר המספרים החיוביים במערך הוא: 4`,
    answer: `נכתוב פונקציה שעוברת על המערך בלולאה, סופרת רק את המספרים החיוביים ומחזירה את התוצאה.
`,
    code: `#include <iostream>
using namespace std;

int countPositive(int arr[8]) {
    int count = 0;
    for(int i = 0; i < 8; i++) {
        if(arr[i] > 0) {
            count = count + 1;
        }
    }
    return count;
}

int main() {
    int numbers[8];
    
    cout << "הכנס 8 מספרים:" << endl;
    for(int i = 0; i < 8; i++) {
        cin >> numbers[i];
    }
    
    int positiveCount = countPositive(numbers);
    cout << "מספר המספרים החיוביים במערך הוא: " << positiveCount << endl;
    
    return 0;
}`,
  },
  {
    level: 4,
    title: `הכפלת מספרים זוגיים`,
    question: `כתוב תוכנית הקולטת 6 מספרים למערך. הפונקציה צריכה לקבל את המערך ולהכפיל ב-2 כל מספר זוגי במערך.
`,
    example: `הכנס 6 מספרים:
1 2 3 4 5 6
המערך לאחר הכפלת המספרים הזוגיים:
1 4 3 8 5 12`,
    answer: `נכתוב פונקציה שעוברת על המערך, בודקת אם כל מספר זוגי, ואם כן - מכפילה אותו ב-2.
`,
    code: `#include <iostream>
using namespace std;

void multiplyEven(int arr[6]) {
    for(int i = 0; i < 6; i++) {
        if(arr[i] % 2 == 0) {
            arr[i] = arr[i] * 2;
        }
    }
}

int main() {
    int numbers[6];
    
    cout << "הכנס 6 מספרים:" << endl;
    for(int i = 0; i < 6; i++) {
        cin >> numbers[i];
    }
    
    multiplyEven(numbers);
    
    cout << "המערך לאחר הכפלת המספרים הזוגיים:" << endl;
    for(int i = 0; i < 6; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
  },
  {
    level: 6,
    title: `מיון בועות ומציאת חציון`,
    question: `כתוב תוכנית הקולטת 9 מספרים שלמים למערך, ממיינת אותם בסדר עולה בשיטת מיון בועות ומדפיסה את החציון (המספר האמצעי במערך הממוין).`,
    example: `הכנס 9 מספרים:
64 34 25 12 22 11 90 87 9
המערך הממוין:
9 11 12 22 25 34 64 87 90
החציון הוא: 25`,
    answer: `התוכנית מיישמת מיון בועות עם שתי לולאות מקוננות, כאשר בכל סיבוב מעלים את המספר הגדול למעלה. לאחר המיון, החציון נמצא במיקום האמצעי (אינדקס 4).`,
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[9];
    int temp;
    
    cout << "הכנס 9 מספרים:" << endl;
    for(int i = 0; i < 9; i++) {
        cin >> arr[i];
    }
    
    // מיון בועות
    for(int i = 0; i < 8; i++) {
        for(int j = 0; j < 8-i; j++) {
            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    
    cout << "המערך הממוין:" << endl;
    for(int i = 0; i < 9; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    cout << "החציון הוא: " << arr[4] << endl;
    
    return 0;
}`,
  },
  {
    level: 4,
    title: ``,
    question: ``,
    example: ``,
    answer: ``,
    code: ``,
  },
];
