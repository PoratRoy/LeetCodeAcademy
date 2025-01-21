import { QuestionAnswer } from "../types/types";

export const Questions: QuestionAnswer[] = [
  {
    level: -1,
    title: "משתנים וסוגי המשתנים",
    example:
      "משתנה הוא מקום בזיכרון המחשב שבו ניתן לאחסן מידע. לכל משתנה יש טיפוס שמגדיר איזה סוג מידע הוא יכול להכיל.\n\nהטיפוסים הבסיסיים ב-C++ הם:\nint - למספרים שלמים (2/4 בתים)\nshort - למספרים שלמים קטנים (2 בתים)\nlong - למספרים שלמים גדולים (4/8 בתים)\nfloat - למספרים עשרוניים (4 בתים)\ndouble - למספרים עשרוניים בדיוק כפול (8 בתים)\nchar - לתווים בודדים (1 בית)\nbool - לערכים בוליאניים (true/false)\n\nניתן להוסיף את המילה unsigned לפני int, short, long כדי לייצג רק מספרים חיוביים.\n\nחשוב להשתמש בטיפוס המתאים כדי לחסוך בזיכרון ולמנוע שגיאות.",
  },
  {
    level: 1,
    title: "חישוב גיל בשנה הבאה",
    stack: "types (int), std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת את הגיל של המשתמש ומדפיסה מה יהיה גילו בשנה הבאה.",
    example: "קלט: 15\nפלט: בשנה הבאה תהיה בן/בת 16",
    hint: "זוהי תוכנית פשוטה שדורשת רק משתנה אחד לשמירת הגיל וחישוב פשוט של הוספת 1 לגיל הנוכחי. אין צורך בתנאים או לולאות.",
    answer:
      "נקלוט את הגיל למשתנה מטיפוס int, נוסיף לו 1, ונדפיס את התוצאה עם טקסט מתאים. אין צורך בבדיקות תקינות בשלב זה.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int age;
      
      // Get current age from user
      cout << "Enter your current age: ";
      cin >> age;
      
      // Calculate and print next year's age
      cout << "Next year you will be " << (age + 1) << " years old" << endl;
      
      return 0;
  }`,
  },
  {
    level: 1,
    title: "בדיקת מספר זוגי",
    stack: "types (int), if else, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת מספר שלם מהמשתמש ומדפיסה האם הוא זוגי או אי-זוגי.",
    example: "קלט: 6\nפלט: המספר זוגי\nקלט: 7\nפלט: המספר אי-זוגי",
    hint: "השתמש בפעולת החילוק בשארית (%) כדי לבדוק אם המספר מתחלק ב-2. אם השארית היא 0, המספר זוגי.",
    answer:
      "נקלוט את המספר למשתנה ונשתמש בתנאי if-else עם פעולת modulo (%) כדי לבדוק אם יש שארית בחלוקה ל-2. לפי התוצאה נדפיס את ההודעה המתאימה.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int number;
      
      // Get number from user
      cout << "Enter a number: ";
      cin >> number;
      
      // Check if even or odd
      if(number % 2 == 0) {
          cout << "The number is even" << endl;
      } else {
          cout << "The number is odd" << endl;
      }
      
      return 0;
  }`,
  },
  {
    level: 1,
    title: "מונה עד 5",
    stack: "types (int), loops, std:cout",
    question: "כתוב תוכנית המדפיסה את המספרים מ-1 עד 5, כל מספר בשורה חדשה.",
    example: "פלט:\n1\n2\n3\n4\n5",
    hint: "השתמש בלולאת for פשוטה שרצה מ-1 עד 5. בכל איטרציה הדפס את המספר הנוכחי עם ירידת שורה.",
    answer:
      "נשתמש בלולאת for שתתחיל מ-1 ותרוץ עד 5 כולל. בכל איטרציה נדפיס את ערך המונה ואחריו ירידת שורה (endl).",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      // Loop from 1 to 5
      for(int i = 1; i <= 5; i++) {
          cout << i << endl;
      }
      
      return 0;
  }`,
  },
  {
    level: 1,
    title: "הכפלה פשוטה",
    stack: "types (int), std:cin, std:cout",
    question: "כתוב תוכנית הקולטת שני מספרים שלמים ומדפיסה את המכפלה שלהם.",
    example: "קלט: 4 5\nפלט: המכפלה היא: 20",
    hint: "קלוט את שני המספרים למשתנים נפרדים, הכפל אותם זה בזה, ושמור את התוצאה במשתנה שלישי לפני ההדפסה.",
    answer:
      "נגדיר שלושה משתנים - שניים לקליטת המספרים ואחד לתוצאה. נקלוט את שני המספרים, נכפיל אותם ונשמור במשתנה התוצאה, ולבסוף נדפיס את התוצאה.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int num1, num2, result;
      
      // Get two numbers from user
      cout << "Enter first number: ";
      cin >> num1;
      cout << "Enter second number: ";
      cin >> num2;
      
      // Calculate multiplication
      result = num1 * num2;
      
      // Print result
      cout << "The multiplication result is: " << result << endl;
      
      return 0;
  }`,
  },
  {
    level: 1,
    title: "שלום משתמש",
    stack: "types (char), if else, std:cin, std:cout",
    question:
      "כתוב תוכנית המבקשת מהמשתמש להכניס את האות הראשונה של שמו ומדפיסה 'שלום' ואת האות שהוכנסה.",
    example: "קלט: D\nפלט: שלום D",
    hint: "השתמש במשתנה מטיפוס char לקליטת האות. אין צורך בבדיקות תקינות בשלב זה, פשוט קלוט את האות והדפס אותה.",
    answer:
      "נגדיר משתנה מטיפוס char לשמירת האות, נקלוט אות אחת מהמשתמש, ונדפיס הודעת שלום יחד עם האות שנקלטה.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      char firstLetter;
      
      // Get first letter of name
      cout << "Enter the first letter of your name: ";
      cin >> firstLetter;
      
      // Print greeting
      cout << "Hello " << firstLetter << endl;
      
      return 0;
  }`,
  },
  {
    level: -1,
    title: "תנאי if-else",
    example:
      "בשפת C++, תנאי if-else מאפשר לתוכנית לקבל החלטות:\nif (condition) {\n    // קוד שיתבצע אם התנאי מתקיים\n} else {\n    // קוד שיתבצע אם התנאי לא מתקיים\n}",
  },
  {
    level: -1,
    title: "לולאות for",
    example:
      "בשפת C++, לולאת for היא מבנה בקרה המאפשר לבצע קוד מספר פעמים מוגדר מראש.\nהמבנה הבסיסי:\nfor (אתחול; תנאי; עדכון) {\n    // גוף הלולאה\n}\nלדוגמה:\nfor (int i = 0; i < n; i++) {\n    // קוד שיתבצע n פעמים\n}\nהסבר המרכיבים:\n- אתחול: מתבצע פעם אחת בתחילת הלולאה (למשל int i = 0)\n- תנאי: נבדק לפני כל איטרציה, הלולאה ממשיכה כל עוד התנאי אמת (למשל i < n)\n- עדכון: מתבצע בסוף כל איטרציה (למשל i++)\nשימושים נפוצים:\n- מעבר על מערכים\n- ביצוע פעולה מספר ידוע של פעמים\n- יצירת דפוסים ומבנים חוזרים",
  },
  {
    level: -1,
    title: "לולאות while",
    example:
      "בשפת C++, לולאת while היא מבנה בקרה המאפשר לבצע קוד מספר פעמים מוגדר מראש.\nהמבנה הבסיסי:\nwhile (condition) {\n    // גוף הלולאה\n}\nלדוגמה:\nwhile (i < n) {\n    // קוד שיתבצע n פעמים\n}\nהסבר המרכיבים:\n- תנאי: נבדק לפני כל איטרציה, הלולאה ממשיכה כל עוד התנאי אמת (למשל i < n)\n- עדכון: מתבצע בסוף כל איטרציה (למשל i++)\nשימושים נפוצים:\n- מעבר על מערכים\n- ביצוע פעולה מספר ידוע של פעמים\n- יצירת דפוסים ומבנים חוזרים",
  },
  {
    level: 2,
    title: "סכום מכפלות",
    stack: "types (int), loops, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת 5 מספרים מהמשתמש. התוכנית תחשב ותדפיס את הסכום של כל מספר כפול המיקום שלו (המיקום הראשון הוא 1).",
    example:
      "קלט: 2 3 1 4 2\nפלט: התוצאה היא: 31 (כי 2*1 + 3*2 + 1*3 + 4*4 + 2*5 = 31)",
    hint: "השתמש בלולאת for שרצה 5 פעמים. בכל איטרציה, כפול את המספר שנקלט במיקום הנוכחי (i+1) והוסף לסכום הכללי.",
    answer:
      "נגדיר משתנה לסכום הכללי ומשתנה לקליטת המספרים. נריץ לולאה 5 פעמים, בכל פעם נקלוט מספר, נכפיל אותו במיקום הנוכחי ונוסיף לסכום.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int sum = 0;
      int number;
      
      // Loop 5 times
      for(int i = 1; i <= 5; i++) {
          // Get number from user
          cout << "Enter number " << i << ": ";
          cin >> number;
          
          // Add to sum (number times its position)
          sum += number * i;
      }
      
      // Print result
      cout << "The sum of numbers times their positions is: " << sum << endl;
      
      return 0;
  }`,
  },
  {
    level: 2,
    title: "טווח מספרים",
    stack: "types (int), if else, loops, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת מספרים מהמשתמש עד שמוכנס 0. התוכנית תדפיס כמה מהמספרים היו בטווח שבין 10 ל-20 (כולל).",
    example: "קלט: 5 12 15 25 18 7 0\nפלט: 3 מספרים היו בטווח שבין 10 ל-20",
    hint: "השתמש בלולאת while שממשיכה כל עוד לא הוכנס 0. בכל איטרציה, בדוק אם המספר בטווח המבוקש והשתמש במונה.",
    answer:
      "נגדיר משתנה למספר הנקלט ומונה למספרים בטווח. נריץ לולאת while עד שמוכנס 0, ובכל פעם נבדוק אם המספר בין 10 ל-20 ונעדכן את המונה בהתאם.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int num;
      int count = 0;
      
      // Get numbers until 0
      cout << "Enter numbers (0 to stop):" << endl;
      
      do {
          cin >> num;
          
          // Check if number is in range 10-20
          if(num >= 10 && num <= 20) {
              count++;
          }
      } while(num != 0);
      
      // Print result
      cout << count << " numbers were between 10 and 20" << endl;
      
      return 0;
  }`,
  },
  {
    level: 2,
    title: "חיבור אחרון",
    stack: "types (int), if else, std:cin, std:cout",
    question:
      "כתוב תוכנית שקולטת שלושה מספרים. אם המספר האחרון הוא 0, הדפס את סכום שני המספרים הראשונים. אם המספר האחרון הוא 1, הדפס את המכפלה שלהם.",
    example:
      "קלט: 5 3 0\nפלט: סכום המספרים: 8\nקלט: 5 3 1\nפלט: מכפלת המספרים: 15",
    hint: "קלוט את שלושת המספרים למשתנים נפרדים. השתמש בתנאי if-else לבדיקת המספר השלישי וחשב את התוצאה המתאימה.",
    answer:
      "נקלוט את שלושת המספרים. נבדוק את המספר השלישי - אם הוא 0 נחבר את שני המספרים הראשונים, אם הוא 1 נכפיל אותם.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int num1, num2, operation;
      
      // Get three numbers
      cout << "Enter first number: ";
      cin >> num1;
      cout << "Enter second number: ";
      cin >> num2;
      cout << "Enter operation (0 for sum, 1 for multiply): ";
      cin >> operation;
      
      // Perform operation based on last number
      if(operation == 0) {
          cout << "The sum is: " << (num1 + num2) << endl;
      } else if(operation == 1) {
          cout << "The multiplication is: " << (num1 * num2) << endl;
      } else {
          cout << "Invalid operation" << endl;
      }
      
      return 0;
  }`,
  },
  {
    level: 2,
    title: "מספר מושלם",
    stack: "types (int), if else, loops, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת מספר חיובי ובודקת האם הוא מספר מושלם (מספר שווה לסכום כל מחלקיו מלבד עצמו). למשל, 6 הוא מספר מושלם כי 1+2+3=6.",
    example: "קלט: 6\nפלט: המספר מושלם\nקלט: 8\nפלט: המספר אינו מושלם",
    hint: "השתמש בלולאה שרצה מ-1 עד חצי מהמספר (אין צורך לבדוק מספרים גדולים יותר). בדוק בכל איטרציה אם המספר הנוכחי הוא מחלק והוסף אותו לסכום.",
    answer:
      "נקלוט את המספר, נאתחל משתנה לסכום המחלקים. נרוץ בלולאה מ-1 עד חצי מהמספר, נבדוק אם כל מספר הוא מחלק ונוסיף אותו לסכום. בסוף נשווה את הסכום למספר המקורי.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int num;
      int sum = 0;
      
      // Get number from user
      cout << "Enter a positive number: ";
      cin >> num;
      
      // Find all divisors and sum them
      for(int i = 1; i <= num/2; i++) {
          if(num % i == 0) {
              sum += i;
          }
      }
      
      // Check if perfect
      if(sum == num) {
          cout << num << " is a perfect number" << endl;
      } else {
          cout << num << " is not a perfect number" << endl;
      }
      
      return 0;
  }`,
  },
  {
    level: 2,
    title: "כפולות של 3",
    stack: "types (int), if else, loops, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת 8 מספרים ומדפיסה כמה מהם הם כפולות של 3 וכמה מהם מסתיימים בספרה 3.",
    example:
      "קלט: 13 6 23 9 33 15 4 7\nפלט: מספר הכפולות של 3: 3\nמספר המספרים שמסתיימים ב-3: 3",
    hint: "השתמש בשני מונים נפרדים. עבור כל מספר, בדוק אם הוא מתחלק ב-3 (באמצעות %) ובדוק אם הספרה האחרונה שלו היא 3 (גם באמצעות %).",
    answer:
      "נגדיר שני מונים - אחד לכפולות של 3 ואחד למספרים שמסתיימים ב-3. נרוץ בלולאה 8 פעמים, נקלוט מספר, נבדוק אם הוא מתחלק ב-3 ואם הוא מסתיים ב-3, ונעדכן את המונים בהתאם.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int num;
      int multiples_of_3 = 0;
      int ends_with_3 = 0;
      
      // Get 8 numbers
      for(int i = 1; i <= 8; i++) {
          cout << "Enter number " << i << ": ";
          cin >> num;
          
          // Check if multiple of 3
          if(num % 3 == 0) {
              multiples_of_3++;
          }
          
          // Check if ends with 3
          if(num % 10 == 3) {
              ends_with_3++;
          }
      }
      
      // Print results
      cout << "Numbers that are multiples of 3: " << multiples_of_3 << endl;
      cout << "Numbers that end with 3: " << ends_with_3 << endl;
      
      return 0;
  }`,
  },
  {
    level: 2,
    title: `מונה ספרות זוגיות`,
    stack: `types (int), if else, loops, std:cin, std:cout`,
    question: `כתוב תוכנית הקולטת מספר שלם חיובי מהמשתמש. התוכנית תדפיס כמה ספרות זוגיות יש במספר.`,
    example: `קלט: 2345\nפלט: יש 2 ספרות זוגיות במספר`,
    hint: `כדי לפתור את התרגיל, חשוב על איך אפשר לבודק כל ספרה במספר בנפרד. ניתן להשתמש בפעולת החילוק בשארית (%) כדי לקבל את הספרה האחרונה. אחרי שבדקנו ספרה, אפשר לחלק את המספר ב-10 כדי להמשיך לספרה הבאה.`,
    answer: `נשתמש בלולאה שרצה כל עוד המספר גדול מ-0. בכל איטרציה נבדוק את הספרה האחרונה במספר (באמצעות modulo 10). אם הספרה זוגית (מתחלקת ב-2 ללא שארית) נגדיל מונה. בסוף נחלק את המספר ב-10 כדי לעבור לספרה הבאה.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int num, count = 0;
    
    // Get input from user
    cout << "Enter a positive number: ";
    cin >> num;
    
    // Count even digits
    while (num > 0) {
        int digit = num % 10;  // Get last digit
        if (digit % 2 == 0) {  // Check if digit is even
            count++;
        }
        num = num / 10;  // Remove last digit
    }
    
    cout << "There are " << count << " even digits in the number" << endl;
    return 0;
}`,
  },
  {
    level: 2,
    title: "הדפסת כוכביות",
    stack: "types (int), loops, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת מספר n מהמשתמש ומדפיסה n שורות של כוכביות, כך שבשורה הראשונה יש כוכבית אחת, בשנייה שתיים וכן הלאה.",
    example: "קלט: 4\nפלט:\n*\n**\n***\n****",
    hint: "השתמש בשתי לולאות מקוננות - הלולאה החיצונית תרוץ n פעמים עבור כל שורה, והפנימית תדפיס את מספר הכוכביות המתאים לכל שורה.",
    answer:
      "נקלוט את המספר n, נריץ לולאה חיצונית מ-1 עד n. בכל איטרציה i, נריץ לולאה פנימית שתדפיס i כוכביות, ואז נרד שורה.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int n;
      
      // Get number of rows from user
      cout << "Enter number of rows: ";
      cin >> n;
      
      // Print stars pattern
      for(int i = 1; i <= n; i++) {
          // Print i stars
          for(int j = 1; j <= i; j++) {
              cout << "*";
          }
          // Move to next line
          cout << endl;
      }
      
      return 0;
  }`,
  },
  {
    level: 2,
    title: "חיפוש ספרה",
    stack: "types (int), if else, loops, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת מספר שלם חיובי וספרה (0-9). התוכנית תספור ותדפיס כמה פעמים מופיעה הספרה במספר.",
    example: "קלט: מספר: 11231 ספרה: 1\nפלט: הספרה 1 מופיעה 3 פעמים במספר",
    hint: "השתמש בלולאה שמחלצת כל פעם את הספרה האחרונה של המספר (באמצעות %) ומשווה אותה לספרה המבוקשת. לאחר מכן חלק את המספר ב-10 להמשך הבדיקה.",
    answer:
      "נקלוט את המספר והספרה המבוקשת. נגדיר מונה. נשתמש בלולאת while שרצה כל עוד המספר גדול מ-0, נבדוק את הספרה האחרונה, נעדכן את המונה אם צריך, ונחלק את המספר ב-10.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int number, digit;
      int count = 0;
      
      // Get input from user
      cout << "Enter a positive number: ";
      cin >> number;
      cout << "Enter a digit (0-9): ";
      cin >> digit;
      
      // Count digit occurrences
      int temp = number;  // Keep original number
      while(temp > 0) {
          // Check last digit
          if(temp % 10 == digit) {
              count++;
          }
          // Remove last digit
          temp = temp / 10;
      }
      
      // Print result
      cout << "The digit " << digit << " appears " << count;
      cout << " times in " << number << endl;
      
      return 0;
  }`,
  },
  {
    level: 2,
    title: "ספירת אותיות גדולות",
    stack: "types (char), if else, loops, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת תווים מהמשתמש עד שנקלט הסימן '@'. התוכנית תספור ותדפיס כמה מהתווים היו אותיות גדולות באנגלית.",
    example: "קלט: AbCdefG@\nפלט: מספר האותיות הגדולות הוא: 3",
    hint: "השתמש בלולאת while או do-while עד קליטת '@'. בכל איטרציה, בדוק אם התו הוא אות גדולה על ידי בדיקה אם הוא בטווח 'A' עד 'Z'.",
    answer:
      "נגדיר משתנה לקליטת התו ומונה לאותיות גדולות. נקלוט תווים בלולאה עד '@'. בכל פעם שנקלט תו, נבדוק אם הוא בטווח האותיות הגדולות ונעדכן את המונה בהתאם.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      char ch;
      int upperCount = 0;
      
      cout << "Enter characters (@ to stop):" << endl;
      
      // Read characters until @
      do {
          cin >> ch;
          
          // Check if uppercase letter
          if(ch >= 'A' && ch <= 'Z') {
              upperCount++;
          }
      } while(ch != '@');
      
      // Print result
      cout << "Number of uppercase letters: " << upperCount << endl;
      
      return 0;
  }`,
  },
  {
    level: 2,
    title: "מספרים עוקבים",
    stack: "types (int), if else, loops, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת 6 מספרים ובודקת האם יש בהם זוג מספרים עוקבים (ההפרש ביניהם הוא 1 או -1).",
    example:
      "קלט: 5 2 8 9 4 1\nפלט: נמצאו מספרים עוקבים: 8 ו-9\nקלט: 1 3 5 7 9 11\nפלט: לא נמצאו מספרים עוקבים",
    hint: "בכל פעם שקולטים מספר חדש, שמור את המספר הקודם והשווה את ההפרש ביניהם. אם ההפרש הוא 1 או -1, מצאת זוג עוקבים.",
    answer:
      "נקלוט את המספר הראשון ונשמור אותו. בלולאה נקלוט את שאר המספרים, ובכל פעם נבדוק אם ההפרש בין המספר הנוכחי לקודם הוא 1 או -1. אם כן, נדפיס הודעה מתאימה.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int current, previous;
      bool found = false;
      
      // Get first number
      cout << "Enter number 1: ";
      cin >> previous;
      
      // Get and check next 5 numbers
      for(int i = 2; i <= 6; i++) {
          cout << "Enter number " << i << ": ";
          cin >> current;
          
          // Check if consecutive
          if(current == previous + 1 || current == previous - 1) {
              cout << "Found consecutive numbers: " << previous;
              cout << " and " << current << endl;
              found = true;
          }
          
          previous = current;  // Save for next iteration
      }
      
      // If no consecutive numbers found
      if(!found) {
          cout << "No consecutive numbers found" << endl;
      }
      
      return 0;
  }`,
  },
  {
    level: 2,
    title: "דפוס מספרים",
    stack: "types (int), loops, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת מספר n ומדפיסה דפוס של מספרים בצורת מלבן בגודל n על n, כך שכל שורה מתחילה במספר השורה.",
    example: "קלט: 3\nפלט:\n1 1 1\n2 2 2\n3 3 3",
    hint: "השתמש בשתי לולאות מקוננות - החיצונית עבור השורות והפנימית עבור העמודות. בכל שורה i, הדפס את המספר i n פעמים.",
    answer:
      "נקלוט את המספר n. נריץ לולאה חיצונית מ-1 עד n עבור השורות. בכל שורה i, נריץ לולאה פנימית שתדפיס את המספר i n פעמים, עם רווח בין המספרים.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int n;
      
      // Get size from user
      cout << "Enter size of pattern: ";
      cin >> n;
      
      // Print pattern
      for(int i = 1; i <= n; i++) {
          // Print number n times
          for(int j = 1; j <= n; j++) {
              cout << i;
              // Add space except for last number in row
              if(j < n) {
                  cout << " ";
              }
          }
          // Move to next line
          cout << endl;
      }
      
      return 0;
  }`,
  },
  {
    level: -1,
    title: "מערכים",
    example:
      "מערך הוא מבנה נתונים בסיסי המאחסן אוסף של ערכים מאותו טיפוס ברצף בזיכרון.\n\nמערך מאפשר גישה ישירה לכל איבר על ידי האינדקס שלו, מה שהופך אותו ליעיל מאוד לפעולות כמו קריאה ועדכון של ערכים.\n\nניתן לחשוב על מערך כעל רשימה ממוספרת של תאים, כאשר כל תא יכול להכיל ערך אחד. המספור (אינדקס) מתחיל מ-0.\n\nמערכים שימושיים במיוחד כאשר צריך לעבוד עם אוסף של נתונים קשורים, כמו ציונים של תלמידים, טמפרטורות יומיות, או רשימת מספרים לעיבוד.\n\nיתרונות המערך הם הגישה המהירה לאיברים והיכולת לעבור על כל האיברים בקלות באמצעות לולאה. החיסרון העיקרי הוא שהגודל קבוע ולא ניתן לשינוי לאחר ההגדרה.\n\nב-C++, מערך מוגדר כך:\nint numbers[5]; // מערך של 5 מספרים שלמים\nchar letters[10]; // מערך של 10 תווים\n\nניתן לאתחל מערך בהגדרה:\nint numbers[] = {1, 2, 3, 4, 5};\n\nגישה לאיברי המערך נעשית באמצעות סוגריים מרובעים:\nnumbers[0] = 10; // שינוי הערך במיקום הראשון\nint x = numbers[3]; // קריאת הערך במיקום הרביעי\n\nחשוב לזכור שב-C++ אין בדיקת גבולות אוטומטית, ולכן יש להיזהר מגישה לאינדקס מחוץ לגבולות המערך.",
  },
  {
    level: 3,
    title: "ספירת מילים",
    stack: "types (char), if else, loops, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת תווים עד לנקודה (.). התוכנית תספור כמה מילים הוכנסו (מילים מופרדות על ידי רווח אחד או יותר).",
    example: "קלט: hello world this is cpp.\nפלט: מספר המילים הוא: 5",
    hint: "הגדר משתנה בוליאני שמציין אם אנחנו בתוך מילה או לא. כל פעם שנתקלים ברווח אחרי תו שאינו רווח, סיימנו מילה. כאשר נתקלים בתו שאינו רווח אחרי רווח, התחלנו מילה חדשה.",
    answer:
      "נגדיר משתנה בוליאני inWord שמציין אם אנחנו בתוך מילה, ומונה למספר המילים. נקלוט תווים עד נקודה. בכל פעם שנכנסים למילה (תו שאינו רווח כשלא היינו במילה) נגדיל את המונה.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      char ch;
      bool inWord = false;
      int wordCount = 0;
      
      cout << "Enter text (end with a dot):" << endl;
      
      // Read characters until dot
      do {
          cin.get(ch);
          
          // Check word boundaries
          if(ch == ' ' || ch == '.') {
              inWord = false;
          } else if(!inWord) {
              // Start of new word
              inWord = true;
              wordCount++;
          }
      } while(ch != '.');
      
      // Print result
      cout << "Number of words: " << wordCount << endl;
      
      return 0;
  }`,
  },
  {
    level: 3,
    title: "מיון מערך חלקי",
    stack: "types (int), if else, loops, std:cin, std:cout, array",
    question:
      "כתוב תוכנית הקולטת 8 מספרים למערך. התוכנית תמיין בסדר עולה רק את המספרים הזוגיים במערך (המספרים האי-זוגיים יישארו במקומם המקורי).",
    example: "קלט: 7 2 5 8 3 4 1 6\nפלט: 7 2 5 4 3 6 1 8",
    hint: "תחילה מצא והעתק את כל המספרים הזוגיים למערך נפרד. מיין את המערך של המספרים הזוגיים. עבור על המערך המקורי והחלף כל מספר זוגי עם המספר הבא מהמערך הממוין.",
    answer:
      "נעבור על המערך המקורי ונספור כמה מספרים זוגיים יש. ניצור מערך חדש בגודל זה ונעתיק אליו את המספרים הזוגיים. נמיין את מערך המספרים הזוגיים. נעבור שוב על המערך המקורי ונחליף כל מספר זוגי עם המספר הבא מהמערך הממוין.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int arr[8];
      
      // Get input array
      for(int i = 0; i < 8; i++) {
          cout << "Enter number " << (i+1) << ": ";
          cin >> arr[i];
      }
      
      // Count even numbers and copy them to temp array
      int evenCount = 0;
      int evenTemp[8];  // Maximum possible size
      for(int i = 0; i < 8; i++) {
          if(arr[i] % 2 == 0) {
              evenTemp[evenCount] = arr[i];
              evenCount++;
          }
      }
      
      // Sort even numbers array (bubble sort)
      for(int i = 0; i < evenCount-1; i++) {
          for(int j = 0; j < evenCount-i-1; j++) {
              if(evenTemp[j] > evenTemp[j+1]) {
                  int temp = evenTemp[j];
                  evenTemp[j] = evenTemp[j+1];
                  evenTemp[j+1] = temp;
              }
          }
      }
      
      // Replace even numbers in original array
      int evenIndex = 0;
      for(int i = 0; i < 8; i++) {
          if(arr[i] % 2 == 0) {
              arr[i] = evenTemp[evenIndex];
              evenIndex++;
          }
      }
      
      // Print result
      cout << "Array after sorting even numbers: ";
      for(int i = 0; i < 8; i++) {
          cout << arr[i] << " ";
      }
      cout << endl;
      
      return 0;
  }`,
  },
  {
    level: 3,
    title: "סדרה מתכנסת",
    stack: "types (int), if else, loops, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת מספרים עד שמתקבלים שלושה מספרים עוקבים שההפרש ביניהם קטן מ-0.5 (כלומר, |a-b| < 0.5 וגם |b-c| < 0.5). הדפס כמה מספרים נקלטו עד שהתנאי התקיים.",
    example: "קלט: 5.2 3.1 4.7 4.3 4.5 4.4\nפלט: נקלטו 6 מספרים עד להתכנסות",
    hint: "שמור תמיד את שלושת המספרים האחרונים שנקלטו. בכל קליטה של מספר חדש, בדוק אם שלושת המספרים האחרונים מקיימים את התנאי. השתמש בפונקציית abs לחישוב ערך מוחלט.",
    answer:
      "נשמור שלושה משתנים למספרים האחרונים ומונה למספר הקליטות. בכל קליטה נזיז את המספרים הקודמים ונשים את החדש במקום האחרון. נבדוק אם ההפרשים בין שלושת המספרים האחרונים קטנים מ-0.5.",
    code: `#include <iostream>
  #include <cmath>
  using namespace std;
  
  int main() {
      double num1 = 0, num2 = 0, num3 = 0;
      int count = 0;
      bool converged = false;
      
      cout << "Enter numbers:" << endl;
      
      // Keep reading numbers until convergence
      while(!converged) {
          // Shift numbers
          num1 = num2;
          num2 = num3;
          
          // Get new number
          cin >> num3;
          count++;
          
          // Check convergence after we have 3 numbers
          if(count >= 3) {
              if(abs(num1 - num2) < 0.5 && 
                 abs(num2 - num3) < 0.5) {
                  converged = true;
              }
          }
      }
      
      // Print result
      cout << "Number of inputs until convergence: " << count << endl;
      
      return 0;
  }`,
  },
  {
    level: 3,
    title: "משחק ניחוש מספר",
    stack: "types (int), if else, loops, std:cin, std:cout",
    question:
      "כתוב תוכנית שמגרילה מספר רנדומלי בין 1 ל-100 ונותנת למשתמש לנחש אותו. בכל ניחוש, התוכנית תדפיס האם המספר שנוחש גדול מדי, קטן מדי, או נכון. המשחק ממשיך עד שהמשתמש מנחש נכון.",
    example:
      "קלט: 50\nפלט: המספר גדול מדי\nקלט: 25\nפלט: המספר קטן מדי\nקלט: 37\nפלט: כל הכבוד! ניחשת נכון",
    hint: "השתמש במספר קבוע כמספר הסודי (במקום הגרלה אמיתית). השתמש בלולאת while שממשיכה כל עוד הניחוש לא נכון. בכל ניחוש, השווה את הניחוש למספר הסודי.",
    answer:
      "נגדיר משתנה למספר הסודי ומשתנה לניחוש. נשתמש בלולאת while שתמשיך כל עוד הניחוש שונה מהמספר הסודי. בכל איטרציה נשווה את הניחוש למספר הסודי ונדפיס הודעה מתאימה.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      // Secret number (could be random in a more advanced version)
      const int secretNumber = 37;
      int guess;
      
      cout << "Welcome to the guessing game!" << endl;
      
      // Keep asking for guesses until correct
      do {
          cout << "Enter your guess (1-100): ";
          cin >> guess;
          
          if (guess > secretNumber) {
              cout << "Too high!" << endl;
          } else if (guess < secretNumber) {
              cout << "Too low!" << endl;
          } else {
              cout << "Congratulations! You got it!" << endl;
          }
      } while (guess != secretNumber);
      
      return 0;
  }`,
  },
  {
    level: 3,
    title: `סכום מספרים עד שלילי`,
    stack: `types (int), if else, loops, std:cin, std:cout`,
    question: `כתוב תוכנית הקולטת מספרים שלמים מהמשתמש עד שנקלט מספר שלילי. התוכנית תדפיס את סכום כל המספרים החיוביים שנקלטו.`,
    example: `קלט: 5 3 8 2 -1\nפלט: סכום המספרים הוא: 18`,
    hint: `השתמש בלולאת while שתמשיך לרוץ כל עוד לא הוכנס מספר שלילי. בכל איטרציה, קלוט מספר חדש והוסף אותו לסכום רק אם הוא חיובי.`,
    answer: `נגדיר משתנה לסכום ומשתנה למספר הנוכחי. נשתמש בלולאת while שתמשיך כל עוד המספר הנוכחי אינו שלילי. בכל איטרציה נקלוט מספר חדש, ואם הוא חיובי נוסיף אותו לסכום.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int sum = 0;
    int num = 0;  // Current number
    
    // Keep reading numbers until negative
    while (num >= 0) {
        // Add previous number to sum (skip first iteration)
        if (num > 0) {
            sum += num;
        }
        
        // Get next number
        cout << "Enter a number (negative to stop): ";
        cin >> num;
    }
    
    cout << "The sum is: " << sum << endl;
    return 0;
}`,
  },
  {
    level: -1,
    title: "פונקציות",
    example:
      "פונקציה היא בלוק קוד שניתן להשתמש בו שוב ושוב במקומות שונים בתוכנית. הפונקציה מקבלת קלט (פרמטרים), מבצעת פעולות מוגדרות, ויכולה להחזיר פלט.\n\nפונקציות מאפשרות לנו לארגן את הקוד בצורה מודולרית, להימנע מכפילות קוד, ולהפוך את התוכנית לקריאה ותחזוקתית יותר.\n\nהמבנה הבסיסי של פונקציה:\nטיפוס_החזרה שם_הפונקציה(פרמטרים) {\n    // גוף הפונקציה\n    return ערך_החזרה;\n}\n\nניתן להגדיר פונקציות שמחזירות ערך (למשל int, double, bool) או פונקציות void שלא מחזירות דבר.\n\nפונקציות יכולות לקבל פרמטרים בכמה דרכים: העברה לפי ערך (מעתיק את הערך), העברה לפי הפניה (reference - משתמש בערך המקורי), או העברה לפי מצביע (pointer).\n\nחשוב לזכור: ב-C++, כאשר מעבירים משתנים גדולים לפונקציה (כמו מערכים או אובייקטים), כדאי להשתמש בהעברה לפי הפניה כדי למנוע העתקות מיותרות ולחסוך בזיכרון.",
  },
  {
    level: 4,
    title: "מספר פלינדרום",
    stack: "types (int), if else, loops, std:cin, std:cout, function",
    question:
      "כתוב פונקציה שמקבלת מספר שלם חיובי ומחזירה 'true' אם המספר הוא פלינדרום (נקרא אותו הדבר מימין לשמאל ומשמאל לימין) ו-'false' אחרת. בתוכנית הראשית קלוט מספר מהמשתמש והדפס האם הוא פלינדרום.",
    example:
      "קלט: 12321\nפלט: המספר הוא פלינדרום\nקלט: 12345\nפלט: המספר אינו פלינדרום",
    hint: "בנה מספר חדש שהוא היפוך של המספר המקורי. למשל, עבור 123 בנה את המספר 321. השתמש בפעולות חילוק ושארית כדי לבנות את המספר ההפוך. בסוף השווה את המספר המקורי למספר ההפוך.",
    answer:
      "נכתוב פונקציה שבונה את המספר ההפוך: בלולאה נקח את הספרה האחרונה של המספר המקורי (באמצעות %), נכפיל את המספר ההפוך ב-10 ונוסיף את הספרה. נחזיר את התוצאה של השוואת המספר המקורי למספר ההפוך.",
    code: `#include <iostream>
  using namespace std;
  
  bool isPalindrome(int num) {
      int originalNum = num;
      int reversedNum = 0;
      
      // Build reversed number
      while(num > 0) {
          // Get last digit
          int digit = num % 10;
          // Add digit to reversed number
          reversedNum = reversedNum * 10 + digit;
          // Remove last digit from original number
          num = num / 10;
      }
      
      // Check if palindrome
      return originalNum == reversedNum;
  }
  
  int main() {
      int number;
      
      // Get input
      cout << "Enter a positive number: ";
      cin >> number;
      
      // Check and print result
      if(isPalindrome(number)) {
          cout << number << " is a palindrome" << endl;
      } else {
          cout << number << " is not a palindrome" << endl;
      }
      
      return 0;
  }`,
  },
  {
    level: 4,
    title: "מספרים משולשים",
    stack: "types (int), if else, loops, std:cin, std:cout, function",
    question:
      "כתוב פונקציה שמקבלת מספר n ומחזירה true אם הוא מספר משולש (מספר שניתן להציגו כסכום של מספרים עוקבים מ-1, למשל 6=1+2+3). בתוכנית הראשית, קלוט מספר והדפס את כל המספרים המשולשים עד למספר זה.",
    example: "קלט: 15\nפלט: המספרים המשולשים עד 15 הם: 1, 3, 6, 10, 15",
    hint: "מספר משולש הוא תמיד בצורה n*(n+1)/2 עבור מספר שלם n כלשהו. ניתן להשתמש בלולאה שבודקת אם המספר ניתן להצגה בצורה זו על ידי ניסוי ערכים שונים של n.",
    answer:
      "נכתוב פונקציה שבודקת אם מספר הוא משולש על ידי חישוב סדרת מספרים משולשים עד שמגיעים למספר הנתון או עוברים אותו. בתוכנית הראשית נרוץ על כל המספרים עד n ונבדוק כל אחד.",
    code: `#include <iostream>
using namespace std;

bool isTriangular(int num) {
    int sum = 0;
    int i = 1;
    
    // Keep adding numbers until sum >= num
    while(sum < num) {
        sum += i;
        if(sum == num) {
            return true;
        }
        i++;
    }
    
    return false;
}

int printTriangularSequence(int num) {
    // Print triangular numbers up to num
    cout << "Triangular numbers up to " << num << " are: ";
    int count = 0;
    
    for(int i = 1; i <= num; i++) {
        if(isTriangular(i)) {
            if(count > 0) {
                cout << ", ";
            }
            cout << i;
            count++;
        }
    }
    cout << endl;
    
    return count;
}

int main() {
    int n;
    
    // Get input
    cout << "Enter a number: ";
    cin >> n;
    
    // Print all triangular numbers up to n
    int count = printTriangularSequence(n);
    
    cout << "Found " << count << " triangular numbers" << endl;
    
    return 0;
}`,
  },
  {
    level: 4,
    title: "סינון מערך נגד כפילויות",
    stack: "types (int), if else, loops, std:cin, std:cout, array, function",
    question:
      "כתוב תוכנית הקולטת 10 מספרים למערך. הסר את כל המספרים שמופיעים יותר מפעם אחת במערך (כולל ההופעה הראשונה שלהם) והזז את שאר המספרים שמאלה. הדפס את המערך המעודכן.",
    example:
      "קלט: 1 2 3 2 4 1 5 6 7 8\nפלט: המערך לאחר הסרת כפילויות: 3 4 5 6 7 8",
    hint: "צור מערך נוסף למניית הופעות כל מספר. לאחר מכן, עבור שוב על המערך המקורי והעתק רק מספרים שמופיעים פעם אחת למערך חדש. לבסוף, העתק את המערך החדש חזרה למערך המקורי.",
    answer:
      "נשתמש במערך עזר למניית הופעות כל מספר. נעבור על המערך המקורי ונספור הופעות. נעבור שוב על המערך המקורי ונעתיק רק מספרים שמופיעים פעם אחת למערך חדש. נשמור את גודל המערך החדש.",
    code: `#include <iostream>
using namespace std;

// Function to count occurrences of each number
int countOccurrences(int arr[], int size, int counts[]) {
    // Initialize counts to 0
    for(int i = 0; i < 1000; i++) {  // Assuming numbers < 1000
        counts[i] = 0;
    }
    
    // Count occurrences
    for(int i = 0; i < size; i++) {
        counts[arr[i]]++;
    }
}

// Function to filter array and return new size
int filterArray(int arr[], int size) {
    int counts[1000] = {0};  // Array to count occurrences
    int tempArr[10];         // Temporary array for filtered numbers
    int newSize = 0;         // Size of filtered array
    
    // Count occurrences of each number
    countOccurrences(arr, size, counts);
    
    // Copy numbers that appear only once
    for(int i = 0; i < size; i++) {
        if(counts[arr[i]] == 1) {
            tempArr[newSize] = arr[i];
            newSize++;
        }
    }
    
    // Copy filtered numbers back to original array
    for(int i = 0; i < newSize; i++) {
        arr[i] = tempArr[i];
    }
    
    return newSize;
}

int main() {
    int arr[10];
    
    // Get input
    for(int i = 0; i < 10; i++) {
        cout << "Enter number " << (i+1) << ": ";
        cin >> arr[i];
    }
    
    // Filter array
    int newSize = filterArray(arr, 10);
    
    // Print filtered array
    cout << "Array after removing duplicates: ";
    for(int i = 0; i < newSize; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
  },
  {
    level: 4,
    title: "חיפוש תת-מחרוזת",
    stack: "types (char), if else, loops, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת שתי מחרוזות של תווים. התוכנית תבדוק אם המחרוזת השנייה מופיעה בתוך המחרוזת הראשונה (כתת-מחרוזת) ותדפיס את מיקום ההופעה הראשונה (המיקום הראשון הוא 1).",
    example:
      "קלט: מחרוזת ראשונה: programming\nמחרוזת שנייה: gram\nפלט: המחרוזת השנייה מופיעה במיקום 4",
    hint: "עבור על כל תו במחרוזת הראשונה. בכל מיקום, בדוק אם מתחילה שם תת-מחרוזת זהה למחרוזת השנייה על ידי השוואת תווים מקבילים.",
    answer:
      "נגדיר שני מערכים לאחסון המחרוזות. נקלוט את התווים. נעבור על כל תו במחרוזת הראשונה, ובכל מיקום נבדוק אם מתחילה שם תת-מחרוזת זהה על ידי השוואת כל התווים של המחרוזת השנייה.",
    code: `#include <iostream>
using namespace std;

int main() {
    char str1[100], str2[100];
    int len1 = 0, len2 = 0;
    
    // Get first string
    cout << "Enter first string: ";
    cin.getline(str1, 100);
    
    // Get second string
    cout << "Enter string to find: ";
    cin.getline(str2, 100);
    
    // Calculate lengths
    while(str1[len1] != '\\0') len1++;
    while(str2[len2] != '\\0') len2++;
    
    // Search for substring
    bool found = false;
    int position = -1;
    
    for(int i = 0; i <= len1 - len2; i++) {
        bool match = true;
        
        // Check if substring matches at position i
        for(int j = 0; j < len2; j++) {
            if(str1[i + j] != str2[j]) {
                match = false;
                break;
            }
        }
        
        if(match) {
            found = true;
            position = i + 1;  // Convert to 1-based indexing
            break;
        }
    }
    
    // Print result
    if(found) {
        cout << "Substring found at position " << position << endl;
    } else {
        cout << "Substring not found" << endl;
    }
    
    return 0;
}`,
  },
  {
    level: 4,
    title: "מיון בועות משופר",
    stack: "types (int), if else, loops, std:cin, std:cout, array, function",
    question:
      "כתוב פונקציה שממיינת מערך בסדר עולה בשיטת מיון בועות משופר. השיפור הוא שאם באיטרציה מסוימת לא היו החלפות, המערך כבר ממוין ואפשר לעצור. התוכנית תקלוט 8 מספרים, תמיין אותם ותדפיס כמה החלפות בוצעו.",
    example:
      "קלט: 5 2 8 1 9 3 7 4\nפלט: המערך הממוין: 1 2 3 4 5 7 8 9\nמספר ההחלפות שבוצעו: 12",
    hint: "הוסף משתנה בוליאני שעוקב אם בוצעו החלפות באיטרציה הנוכחית. אם לא בוצעו החלפות, המערך ממוין וניתן לעצור. ספור את מספר ההחלפות הכולל.",
    answer:
      "נממש את מיון הבועות עם משתנה בוליאני swapped. בכל איטרציה נאפס אותו ונעדכן אותו אם מתבצעת החלפה. אם בסוף איטרציה לא היו החלפות, נצא מהלולאה. נספור את סך ההחלפות.",
    code: `#include <iostream>
using namespace std;

// Function to perform improved bubble sort and return number of swaps
int improvedBubbleSort(int arr[], int size) {
    int swapCount = 0;
    bool swapped;
    
    for(int i = 0; i < size-1; i++) {
        swapped = false;
        
        // Last i elements are already in place
        for(int j = 0; j < size-i-1; j++) {
            // Compare and swap if needed
            if(arr[j] > arr[j+1]) {
                // Swap elements
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                
                swapped = true;
                swapCount++;
            }
        }
        
        // If no swaps occurred, array is sorted
        if(!swapped) {
            break;
        }
    }
    
    return swapCount;
}

int main() {
    int arr[8];
    
    // Get input
    for(int i = 0; i < 8; i++) {
        cout << "Enter number " << (i+1) << ": ";
        cin >> arr[i];
    }
    
    // Sort array and count swaps
    int swaps = improvedBubbleSort(arr, 8);
    
    // Print sorted array
    cout << "Sorted array: ";
    for(int i = 0; i < 8; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    // Print number of swaps
    cout << "Number of swaps: " << swaps << endl;
    
    return 0;
}`,
  },
  {
    level: 4,
    title: `מציאת מקסימום במערך`,
    stack: `types (int), if else, loops, std:cin, std:cout, array`,
    question: `כתוב תוכנית הקולטת 10 מספרים שלמים למערך. התוכנית תמצא ותדפיס את המספר הגדול ביותר במערך ואת המיקום שלו.`,
    example: `קלט: 5 8 2 9 1 7 3 4 6 0\nפלט: המספר המקסימלי הוא 9 במיקום 4`,
    hint: `הגדר משתנה למספר המקסימלי ומשתנה למיקום שלו. עבור על כל איברי המערך בלולאה, ובכל פעם שנמצא מספר גדול יותר, עדכן את המקסימום ואת המיקום שלו.`,
    answer: `נגדיר מערך בגודל 10 ונקלוט אליו מספרים. נגדיר משתנה max שיתחיל מהאיבר הראשון במערך, ומשתנה maxIndex שישמור את המיקום. נעבור על שאר איברי המערך, ובכל פעם שנמצא מספר גדול יותר נעדכן את max ואת maxIndex.`,
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[10];  // Array to store numbers
    
    // Get input from user
    for(int i = 0; i < 10; i++) {
        cout << "Enter number " << (i+1) << ": ";
        cin >> arr[i];
    }
    
    // Find maximum
    int max = arr[0];
    int maxIndex = 0;
    
    for(int i = 1; i < 10; i++) {
        if(arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }
    
    cout << "The maximum number is " << max << " at position " << maxIndex << endl;
    return 0;
}`,
  },
  {
    level: 5,
    title: `בדיקת מספר ראשוני`,
    stack: `types (int, bool), if else, loops, std:cin, std:cout, function`,
    question: `כתוב פונקציה הקולטת מספר שלם חיובי ומחזירה true אם המספר ראשוני ו-false אחרת. בתוכנית הראשית, קלוט מספר מהמשתמש והדפס אם הוא ראשוני או לא.`,
    example: `קלט: 17\nפלט: המספר 17 הוא ראשוני`,
    hint: `מספר ראשוני מתחלק רק ב-1 ובעצמו. בדוק חלוקה של המספר בכל המספרים מ-2 עד שורש המספר. אם לא מצאת מחלק, המספר ראשוני.`,
    answer: `נכתוב פונקציה isPrime שמקבלת מספר ומחזירה boolean. הפונקציה תבדוק אם המספר קטן מ-2 (לא ראשוני), ואז תנסה לחלק אותו בכל המספרים מ-2 עד שורש המספר. אם נמצא מחלק, המספר אינו ראשוני.`,
    code: `#include <iostream>
using namespace std;

// Function to check if number is prime
bool isPrime(int num) {
    // Numbers less than 2 are not prime
    if (num < 2) {
        return false;
    }
    
    // Check if num is divisible by any number from 2 to num-1
    for(int i = 2; i < num; i++) {
        if(num % i == 0) {
            return false;  // Found a divisor, not prime
        }
    }
    
    return true;  // No divisors found, number is prime
}

int main() {
    int num;
    
    // Get input from user
    cout << "Enter a number: ";
    cin >> num;
    
    // Check and print result
    if(isPrime(num)) {
        cout << num << " is prime" << endl;
    } else {
        cout << num << " is not prime" << endl;
    }
    
    return 0;
}`,
  },
  {
    level: 4,
    title: "ספירת אותיות",
    stack: "types (char, int), if else, loops, std:cin, std:cout",
    question:
      "כתוב תוכנית הקולטת תווים מהמשתמש עד שמוכנס התו '#'. התוכנית תספור ותדפיס כמה אותיות גדולות וכמה אותיות קטנות הוכנסו.",
    example: "קלט: aAbBcC#\nפלט: מספר אותיות גדולות: 3\nמספר אותיות קטנות: 3",
    hint: "השתמש במשתנה מטיפוס char לקליטת התווים. ניתן להשתמש בתנאים לבדיקה אם התו הוא אות גדולה (A-Z) או קטנה (a-z) על ידי השוואת קודי ASCII.",
    answer:
      "נשתמש בשני מונים - אחד לאותיות גדולות ואחד לקטנות. נקלוט תווים בלולאה עד '#'. עבור כל תו, נבדוק אם הוא אות גדולה (65-90 ב-ASCII) או קטנה (97-122 ב-ASCII) ונעדכן את המונה המתאים.",
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      char ch;
      int upperCount = 0, lowerCount = 0;
      
      cout << "Enter characters (# to stop):" << endl;
      
      // Read characters until #
      do {
          cin >> ch;
          
          // Check if uppercase (A-Z)
          if (ch >= 'A' && ch <= 'Z') {
              upperCount++;
          }
          // Check if lowercase (a-z)
          else if (ch >= 'a' && ch <= 'z') {
              lowerCount++;
          }
      } while (ch != '#');
      
      // Print results
      cout << "Uppercase letters: " << upperCount << endl;
      cout << "Lowercase letters: " << lowerCount << endl;
      
      return 0;
  }`,
  },
  {
    level: 5,
    title: "חישוב ממוצע מסונן",
    stack: "types (int), if else, loops, std:cin, std:cout, function",
    question:
      "כתוב פונקציה המקבלת מספר שלם n וקולטת n מספרים מהמשתמש. הפונקציה תחשב ותחזיר את הממוצע של המספרים, לא כולל מספרים שליליים.",
    example: "קלט: n=5\n1 -2 3 -4 5\nפלט: הממוצע של המספרים החיוביים הוא: 3",
    hint: "צור משתנה לסכום המספרים החיוביים ומונה למספר המספרים החיוביים. קלוט את המספרים בלולאה, והוסף לסכום רק את החיוביים. חשב את הממוצע בסוף.",
    answer:
      "נכתוב פונקציה שמקבלת את n, מאתחלת משתנים לסכום ולמונה. נרוץ בלולאה n פעמים, נקלוט מספר, ואם הוא חיובי נוסיף אותו לסכום ונגדיל את המונה. בסוף נחזיר את הסכום מחולק במונה.",
    code: `#include <iostream>
  using namespace std;
  
  // Function to calculate average of positive numbers
  double calculatePositiveAverage(int n) {
      int sum = 0;
      int count = 0;
      
      // Read n numbers
      for(int i = 0; i < n; i++) {
          int num;
          cout << "Enter number " << (i+1) << ": ";
          cin >> num;
          
          // Add to sum only if positive
          if(num > 0) {
              sum += num;
              count++;
          }
      }
      
      // Return average (avoid division by zero)
      if(count > 0) {
          return (double)sum / count;
      } else {
          return 0;
      }
  }
  
  int main() {
      int n;
      
      cout << "Enter how many numbers: ";
      cin >> n;
      
      double average = calculatePositiveAverage(n);
      cout << "The average of positive numbers is: " << average << endl;
      
      return 0;
  }`,
  },
  {
    level: 5,
    title: "סידור מערך לזוגי-אי זוגי",
    stack: "types (int), if else, loops, std:cin, std:cout, array, function",
    question:
      "כתוב פונקציה המקבלת מערך של מספרים שלמים ומסדרת אותו כך שכל המספרים הזוגיים יופיעו בתחילת המערך וכל האי-זוגיים בסופו. בתוכנית הראשית, קלוט 8 מספרים למערך, סדר אותו והדפס את התוצאה.",
    example: "קלט: 1 4 7 2 9 6 3 8\nפלט: המערך המסודר: 4 2 6 8 1 7 9 3",
    hint: "השתמש בשני אינדקסים - אחד שמתחיל מההתחלה ומחפש מספרים אי-זוגיים, ואחד מהסוף שמחפש מספרים זוגיים. כאשר שניהם מוצאים מספרים במקומות הלא נכונים, החלף ביניהם.",
    answer:
      "נכתוב פונקציה שמקבלת מערך. נגדיר שני אינדקסים - left ו-right. נקדם את left עד שנמצא מספר אי-זוגי, ואת right עד שנמצא מספר זוגי. נחליף ביניהם ונמשיך עד שהאינדקסים נפגשים.",
    code: `#include <iostream>
  using namespace std;
  
  // Function to arrange even-odd numbers
  void arrangeEvenOdd(int arr[], int size) {
      int left = 0;
      int right = size - 1;
      
      while(left < right) {
          // Find odd number from left
          while(left < right && arr[left] % 2 == 0) {
              left++;
          }
          
          // Find even number from right
          while(left < right && arr[right] % 2 != 0) {
              right--;
          }
          
          // Swap numbers if found
          if(left < right) {
              int temp = arr[left];
              arr[left] = arr[right];
              arr[right] = temp;
          }
      }
  }
  
  int main() {
      int arr[8];
      
      // Get input
      for(int i = 0; i < 8; i++) {
          cout << "Enter number " << (i+1) << ": ";
          cin >> arr[i];
      }
      
      // Arrange array
      arrangeEvenOdd(arr, 8);
      
      // Print result
      cout << "Arranged array: ";
      for(int i = 0; i < 8; i++) {
          cout << arr[i] << " ";
      }
      cout << endl;
      
      return 0;
  }`,
  },
  {
    level: 6,
    title: "סכום ספרות רקורסיבי",
    stack: "types (int), if else, std:cin, std:cout, function",
    question:
      "כתוב פונקציה המקבלת מספר שלם חיובי ומחשבת את סכום ספרותיו. אם הסכום גדול מ-9, יש לחשב שוב את סכום הספרות של התוצאה, עד שמתקבל מספר חד-ספרתי.",
    example: "קלט: 789\nפלט: 6 (כי 7+8+9=24, ואז 2+4=6)",
    hint: "פרק את הבעיה לשתי פונקציות: אחת שמחשבת סכום ספרות רגיל, ואחת שמפעילה אותה שוב ושוב עד קבלת מספר חד-ספרתי. השתמש בחילוק ב-10 ושארית כדי לחשב סכום ספרות.",
    answer:
      "נכתוב פונקציה digitSum שמחשבת סכום ספרות רגיל, ופונקציה recursiveDigitSum שקוראת ל-digitSum ובודקת אם התוצאה חד-ספרתית. אם לא, היא קוראת לעצמה עם התוצאה כקלט.",
    code: `#include <iostream>
  using namespace std;
  
  // Function to calculate sum of digits
  int digitSum(int num) {
      int sum = 0;
      
      while(num > 0) {
          sum += num % 10;  // Add last digit
          num /= 10;       // Remove last digit
      }
      
      return sum;
  }
  
  // Function to calculate recursive digit sum
  int recursiveDigitSum(int num) {
      // Calculate initial sum
      int sum = digitSum(num);
      
      // If sum is greater than 9, calculate again
      while(sum > 9) {
          sum = digitSum(sum);
      }
      
      return sum;
  }
  
  int main() {
      int num;
      
      // Get input
      cout << "Enter a number: ";
      cin >> num;
      
      // Calculate and print result
      int result = recursiveDigitSum(num);
      cout << "The recursive digit sum is: " << result << endl;
      
      return 0;
  }`,
  },
  {
    level: 6,
    title: `הפיכת מערך`,
    stack: `types (int), if else, loops, std:cin, std:cout, array, function`,
    question: `כתוב פונקציה המקבלת מערך של מספרים שלמים והופכת את סדר האיברים בו. בתוכנית הראשית, קלוט 5 מספרים למערך, הפוך אותו והדפס את התוצאה.`,
    example: `קלט: 1 2 3 4 5\nפלט: המערך ההפוך: 5 4 3 2 1`,
    hint: `השתמש בשתי אינדקסים - אחד שמתחיל מתחילת המערך ואחד מסופו. החלף את האיברים במיקומים האלה, והתקדם עם האינדקסים עד שהם נפגשים באמצע.`,
    answer: `נכתוב פונקציה reverseArray שמקבלת מערך. נגדיר שני אינדקסים - left ו-right. נחליף את האיברים במיקומים האלה ונקדם את left ימינה ואת right שמאלה עד שהם נפגשים.`,
    code: `#include <iostream>
using namespace std;

// Function to reverse array
void reverseArray(int arr[], int size) {
    int left = 0;
    int right = size - 1;
    
    // Swap elements until indexes meet
    while(left < right) {
        // Swap elements
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        // Move indexes
        left++;
        right--;
    }
}

int main() {
    int arr[5];  // Array of size 5
    
    // Get input from user
    for(int i = 0; i < 5; i++) {
        cout << "Enter number " << (i+1) << ": ";
        cin >> arr[i];
    }
    
    // Reverse array
    reverseArray(arr, 5);
    
    // Print reversed array
    cout << "Reversed array: ";
    for(int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
  },
  {
    level: 2,
    title: "מחשבון בסיסי",
    stack: `types int, if else, std:cin, std:cout, functions`,
    question:
      "כתוב תוכנית שקולטת שני מספרים שלמים ופעולה חשבונית (+, -, *, /) ומחזירה את התוצאה. במקרה של חלוקה באפס, יש להדפיס הודעת שגיאה מתאימה.",
    example:
      "קלט: 10 + 5\nפלט: 15\n\nקלט: 8 / 0\nפלט: שגיאה: אין אפשרות לחלק במספר 0",
    hint: "1. חלק את הבעיה לפונקציות קטנות יותר\n2. השתמש במשתנה char לקליטת הפעולה החשבונית\n3. השתמש ב-if-else או switch לטיפול בפעולות השונות\n4. אל תשכח לבדוק מקרי קצה כמו חלוקה באפס",
    answer:
      "התוכנית מקבלת קלט של שני מספרים ופעולה חשבונית. היא מחלקת את הלוגיקה לפונקציה נפרדת שמבצעת את החישוב. הפונקציה בודקת את סוג הפעולה ומבצעת את החישוב המתאים. במקרה של חלוקה, היא בודקת האם המחלק הוא 0 ומטפלת במקרה זה בהתאם.",
    code: `
#include <iostream>
using namespace std;

// Function to perform the calculation
int calculate(int num1, char op, int num2, bool& error) {
    error = false;
    switch(op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 == 0) {
                error = true;
                return 0;
            }
            return num1 / num2;
        default:
            error = true;
            return 0;
    }
}

int main() {
    int num1, num2;
    char operation;
    bool error;
    
    // Get input from user
    cin >> num1 >> operation >> num2;
    
    // Perform calculation
    int result = calculate(num1, operation, num2, error);
    
    // Print result or error message
    if(error) {
        cout << "שגיאה: אין אפשרות לחלק במספר 0" << endl;
    } else {
        cout << result << endl;
    }
    
    return 0;
}`,
  },
  {
    level: 3,
    title: "מציאת המספר הגדול ביותר",
    stack: `types int, arrays, loops, std:cin, std:cout, functions`,
    question:
      "כתוב תוכנית שקולטת 10 מספרים שלמים למערך ומדפיסה את המספר הגדול ביותר ואת מיקומו במערך.",
    example:
      "קלט: 4 8 2 9 1 5 7 3 6 0\nפלט: המספר הגדול ביותר הוא: 9\nנמצא במיקום: 4",
    hint: "1. השתמש במערך באורך 10\n2. השתמש בלולאה אחת לקליטת המספרים\n3. השתמש בלולאה נפרדת למציאת המקסימום\n4. שמור את האינדקס של המספר הגדול ביותר",
    answer:
      "התוכנית משתמשת במערך לשמירת המספרים. היא מבצעת שתי לולאות - אחת לקליטת המספרים ואחת למציאת המקסימום. בזמן החיפוש, היא שומרת גם את המיקום של המספר הגדול ביותר.",
    code: `
#include <iostream>
using namespace std;

// Function to find the maximum number and its position
void findMax(int arr[], int size, int& max, int& position) {
    max = arr[0];
    position = 0;
    
    // Loop through array to find maximum
    for(int i = 1; i < size; i++) {
        if(arr[i] > max) {
            max = arr[i];
            position = i;
        }
    }
}

int main() {
    const int SIZE = 10;
    int numbers[SIZE];
    
    // Input numbers
    for(int i = 0; i < SIZE; i++) {
        cin >> numbers[i];
    }
    
    // Find maximum
    int maxNumber, maxPosition;
    findMax(numbers, SIZE, maxNumber, maxPosition);
    
    // Print results
    cout << "המספר הגדול ביותר הוא: " << maxNumber << endl;
    cout << "נמצא במיקום: " << maxPosition + 1 << endl;
    
    return 0;
}`,
  },
  {
    level: 4,
    title: "בדיקת מחרוזת פלינדרום",
    stack: `types char, char[], loops, std:cin, std:cout, functions`,
    question:
      "כתוב תוכנית שקולטת מחרוזת ובודקת האם היא פלינדרום (נקראת אותו דבר מההתחלה לסוף ומהסוף להתחלה). התוכנית צריכה להתעלם מרווחים.",
    example:
      "קלט: אבא אבא\nפלט: המחרוזת היא פלינדרום\n\nקלט: שלום\nפלט: המחרוזת אינה פלינדרום",
    hint: "1. הסר את כל הרווחים מהמחרוזת\n2. השתמש בשתי אינדקסים - אחד מההתחלה ואחד מהסוף\n3. השווה תווים משני הצדדים עד שנפגשים באמצע\n4. זכור שמחרוזת מסתיימת ב-'\\0'",
    answer:
      "התוכנית מסירה תחילה את כל הרווחים מהמחרוזת. לאחר מכן, היא משתמשת בשני מצביעים - אחד בהתחלה ואחד בסוף - ומשווה את התווים משני הצדדים. אם כל התווים זהים עד שהמצביעים נפגשים, המחרוזת היא פלינדרום.",
    code: `
#include <iostream>
using namespace std;

// Function to remove spaces from string
void removeSpaces(char str[], char result[]) {
    int j = 0;
    for(int i = 0; str[i] != '\\0'; i++) {
        if(str[i] != ' ') {
            result[j] = str[i];
            j++;
        }
    }
    result[j] = '\\0';
}

// Function to check if string is palindrome
bool isPalindrome(char str[]) {
    char noSpaces[100];
    removeSpaces(str, noSpaces);
    
    int start = 0;
    int end = 0;
    // Find string length
    while(noSpaces[end] != '\\0') {
        end++;
    }
    end--;
    
    // Check palindrome
    while(start < end) {
        if(noSpaces[start] != noSpaces[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

int main() {
    char str[100];
    cin.getline(str, 100);
    
    if(isPalindrome(str)) {
        cout << "המחרוזת היא פלינדרום" << endl;
    } else {
        cout << "המחרוזת אינה פלינדרום" << endl;
    }
    
    return 0;
}`,
  },
  {
    level: 5,
    title: "חישוב עצרת ברקורסיה",
    stack: `types int, Recursion, std:cin, std:cout, functions`,
    question:
      "כתוב תוכנית שמחשבת עצרת של מספר בעזרת רקורסיה. התוכנית צריכה לבדוק שהקלט הוא חיובי.",
    example: "קלט: 5\nפלט: 120\n\nקלט: -3\nפלט: שגיאה: יש להזין מספר חיובי",
    hint: "1. הגדר מקרה בסיס (n=0 או n=1)\n2. הגדר את הנוסחה הרקורסיבית (n * (n-1)!)\n3. בדוק תקינות קלט לפני הקריאה לפונקציה הרקורסיבית\n4. זכור שעצרת מוגדרת רק למספרים אי-שליליים",
    answer:
      "התוכנית מקבלת מספר ובודקת שהוא חיובי. אם כן, היא מחשבת את העצרת באמצעות פונקציה רקורסיבית. הפונקציה מחזירה 1 עבור 0 או 1, ועבור כל מספר אחר מחזירה את המספר כפול העצרת של המספר הקודם.",
    code: `
#include <iostream>
using namespace std;

// Recursive function to calculate factorial
int factorial(int n) {
    // Base cases
    if(n == 0 || n == 1) {
        return 1;
    }
    
    // Recursive case
    return n * factorial(n - 1);
}

int main() {
    int number;
    cin >> number;
    
    // Check if input is valid
    if(number < 0) {
        cout << "שגיאה: יש להזין מספר חיובי" << endl;
        return 1;
    }
    
    // Calculate and print factorial
    int result = factorial(number);
    cout << result << endl;
    
    return 0;
}`,
  },
  {
    level: 4,
    title: "סכום ספרות ברקורסיה",
    stack: `types int, Recursion, std:cin, std:cout, functions`,
    question:
      "כתוב תוכנית שמקבלת מספר שלם חיובי ומחשבת את סכום הספרות שלו באמצעות רקורסיה. למשל, עבור המספר 1234, התוכנית תחזיר 10 (1+2+3+4).",
    example: "קלט: 1234\nפלט: 10\n\nקלט: 9999\nפלט: 36",
    hint: "1. חשוב על המקרה הבסיסי - מספר חד ספרתי\n2. בכל שלב, קח את הספרה האחרונה (n % 10)\n3. המשך רקורסיבית עם שאר המספר (n / 10)\n4. חבר את הספרה הנוכחית לתוצאת הקריאה הרקורסיבית",
    answer:
      "הפתרון משתמש ברקורסיה כדי לפרק את המספר לספרות בודדות. בכל שלב הוא לוקח את הספרה האחרונה (שארית החלוקה ב-10) ומוסיף אותה לסכום של שאר הספרות שמתקבל מהקריאה הרקורסיבית למספר המחולק ב-10.",
    code: `
#include <iostream>
using namespace std;

// Recursive function to sum digits
int sumDigits(int n) {
    // Base case: single digit number
    if(n < 10) {
        return n;
    }
    
    // Get last digit and add to sum of remaining digits
    return (n % 10) + sumDigits(n / 10);
}

int main() {
    int number;
    
    // Get input
    cin >> number;
    
    // Calculate and print sum
    if(number < 0) {
        cout << "יש להזין מספר חיובי" << endl;
    } else {
        cout << sumDigits(number) << endl;
    }
    
    return 0;
}`,
  },
  {
    level: 4,
    title: "הפיכת מחרוזת ברקורסיה",
    stack: `types char, char[], Recursion, std:cin, std:cout, functions`,
    question:
      "כתוב תוכנית שמקבלת מחרוזת והופכת אותה באמצעות רקורסיה (למשל, 'שלום' יהפוך ל-'םולש').",
    example: "קלט: שלום\nפלט: םולש\n\nקלט: אבג\nפלט: גבא",
    hint: "1. המקרה הבסיסי הוא מחרוזת ריקה או באורך 1\n2. בכל שלב, קח את התו הראשון\n3. קרא רקורסיבית לשאר המחרוזת\n4. הוסף את התו הראשון בסוף התוצאה",
    answer:
      "התוכנית משתמשת ברקורסיה להפיכת המחרוזת. בכל שלב היא לוקחת את התו הראשון, מהפכת את שאר המחרוזת רקורסיבית, ואז מוסיפה את התו הראשון בסוף התוצאה המהופכת.",
    code: `
#include <iostream>
#include <cstring>
using namespace std;

// Recursive function to reverse string
void reverseString(char str[], int start, int end) {
    // Base case: empty string or single character
    if(start >= end) {
        return;
    }
    
    // Swap first and last characters
    char temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    
    // Recursively reverse remaining string
    reverseString(str, start + 1, end - 1);
}

int main() {
    char str[100];
    
    // Get input
    cin.getline(str, 100);
    
    // Reverse string
    reverseString(str, 0, strlen(str) - 1);
    
    // Print result
    cout << str << endl;
    
    return 0;
}`,
  },
  {
    level: 4,
    title: "סדרת פיבונאצ'י ברקורסיה",
    stack: `types int, Recursion, std:cin, std:cout, functions`,
    question:
      "כתוב תוכנית שמקבלת מספר n ומדפיסה את n האיברים הראשונים בסדרת פיבונאצ'י באמצעות רקורסיה. הסדרה מתחילה ב-0, 1 וכל איבר הוא סכום שני האיברים הקודמים.",
    example: "קלט: 6\nפלט: 0 1 1 2 3 5\n\nקלט: 8\nפלט: 0 1 1 2 3 5 8 13",
    hint: "1. המקרים הבסיסיים הם האיברים הראשון והשני (0 ו-1)\n2. צור פונקציה שמחשבת את האיבר ה-n בסדרה\n3. השתמש בלולאה בmain כדי להדפיס את כל האיברים\n4. זכור שכל איבר הוא סכום שני קודמיו",
    answer:
      "הפתרון משתמש בפונקציה רקורסיבית שמחשבת את האיבר ה-n בסדרה. הפונקציה מחזירה את המספר עצמו עבור המקרים הבסיסיים (0 ו-1), ועבור כל מספר אחר מחזירה את סכום שני האיברים הקודמים בסדרה.",
    code: `
#include <iostream>
using namespace std;

// Recursive function to calculate nth Fibonacci number
int fibonacci(int n) {
    // Base cases
    if(n <= 1) {
        return n;
    }
    
    // Recursive case: sum of previous two numbers
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n;
    
    // Get input
    cin >> n;
    
    // Print Fibonacci sequence
    if(n < 1) {
        cout << "יש להזין מספר חיובי" << endl;
    } else {
        for(int i = 0; i < n; i++) {
            cout << fibonacci(i);
            if(i < n - 1) {
                cout << " ";
            }
        }
        cout << endl;
    }
    
    return 0;
}`,
  },
  {
    level: 4,
    title: "חיפוש בינארי ברקורסיה",
    stack: `types int, arrays, Recursion, std:cin, std:cout, functions`,
    question:
      "כתוב תוכנית שמקבלת מערך ממוין של 10 מספרים ומספר לחיפוש. התוכנית תמצא את מיקום המספר במערך באמצעות חיפוש בינארי רקורסיבי. אם המספר לא נמצא, יש להדפיס -1.",
    example:
      "קלט:\n1 3 5 7 9 11 13 15 17 19\n7\nפלט: 3\n\nקלט:\n1 3 5 7 9 11 13 15 17 19\n4\nפלט: -1",
    hint: "1. המקרה הבסיסי הוא כאשר תחום החיפוש ריק\n2. בדוק את האיבר האמצעי בכל שלב\n3. אם המספר קטן מהאמצע, חפש בחצי השמאלי\n4. אם המספר גדול מהאמצע, חפש בחצי הימני",
    answer:
      "התוכנית משתמשת בפונקציה רקורסיבית לחיפוש בינארי. בכל שלב היא בודקת את האיבר האמצעי - אם הוא המספר המבוקש, מחזירה את מיקומו. אחרת, ממשיכה לחפש בחצי המתאים של המערך.",
    code: `
#include <iostream>
using namespace std;

// Recursive binary search function
int binarySearch(int arr[], int left, int right, int target) {
    // Base case: element not found
    if(left > right) {
        return -1;
    }
    
    // Calculate middle point
    int mid = left + (right - left) / 2;
    
    // Check middle element
    if(arr[mid] == target) {
        return mid;
    }
    
    // If target is smaller, search left half
    if(arr[mid] > target) {
        return binarySearch(arr, left, mid - 1, target);
    }
    
    // If target is larger, search right half
    return binarySearch(arr, mid + 1, right, target);
}

int main() {
    const int SIZE = 10;
    int arr[SIZE];
    int target;
    
    // Get sorted array input
    for(int i = 0; i < SIZE; i++) {
        cin >> arr[i];
    }
    
    // Get number to search
    cin >> target;
    
    // Search and print result
    int result = binarySearch(arr, 0, SIZE - 1, target);
    cout << result << endl;
    
    return 0;
}`,
  },
  {
    level: 4,
    title: "מציאת מחלק משותף מקסימלי ברקורסיה",
    stack: `types int, Recursion, std:cin, std:cout, functions`,
    question:
      "כתוב תוכנית שמקבלת שני מספרים שלמים חיוביים ומוצאת את המחלק המשותף המקסימלי שלהם באמצעות אלגוריתם אוקלידס ברקורסיה.",
    example: "קלט: 48 18\nפלט: 6\n\nקלט: 35 15\nפלט: 5",
    hint: "1. השתמש באלגוריתם אוקלידס: GCD(a,b) = GCD(b, a mod b)\n2. המקרה הבסיסי הוא כאשר אחד המספרים הוא 0\n3. בכל שלב, השתמש בשארית החלוקה\n4. זכור לבדוק שהקלט חיובי",
    answer:
      "התוכנית משתמשת באלגוריתם אוקלידס ברקורסיה למציאת המחלק המשותף המקסימלי. האלגוריתם מבוסס על העיקרון שה-GCD של שני מספרים שווה ל-GCD של המספר השני ושארית החלוקה של הראשון בשני.",
    code: `
#include <iostream>
using namespace std;

// Recursive function to find GCD using Euclidean algorithm
int findGCD(int a, int b) {
    // Base case
    if(b == 0) {
        return a;
    }
    
    // Recursive case
    return findGCD(b, a % b);
}

int main() {
    int num1, num2;
    
    // Get input
    cin >> num1 >> num2;
    
    // Validate input
    if(num1 <= 0 || num2 <= 0) {
        cout << "יש להזין מספרים חיוביים בלבד" << endl;
        return 1;
    }
    
    // Calculate and print GCD
    cout << findGCD(num1, num2) << endl;
    
    return 0;
}`,
  },
  {
    level: 3,
    title: "החלפת מילים במשפט",
    stack: `types char, char[], pointers, std:cin, std:cout, functions`,
    question:
      "כתוב תוכנית שמקבלת משפט (מערך של תווים), מילה להחלפה ומילה חדשה. התוכנית תחליף כל הופעה של המילה הישנה במילה החדשה. הנח שאורך המשפט המקסימלי הוא 100 תווים.",
    example:
      "קלט:\nהיום יום שני והשמש זורחת\nיום\nלילה\nפלט: היום לילה שני והשמש זורחת",
    hint: "1. השתמש במצביעים למעבר על המשפט\n2. חפש את המילה להחלפה תו אחר תו\n3. כשמוצאים התאמה, בדוק שזו מילה שלמה (יש רווח או סוף משפט לפני ואחרי)\n4. השתמש במערך עזר לבניית המשפט החדש",
    answer:
      "התוכנית משתמשת במצביעים כדי לעבור על המשפט המקורי. כאשר היא מוצאת התאמה למילה להחלפה, היא בודקת שזו אכן מילה שלמה (שיש רווח או סוף משפט לפני ואחרי). המשפט החדש נבנה במערך עזר תוך כדי המעבר על המשפט המקורי.",
    code: `
#include <iostream>
#include <cstring>
using namespace std;

// Function to check if character marks a word boundary
bool isWordBoundary(char c) {
    return c == ' ' || c == '\\0' || c == '\\n';
}

// Function to replace words in a sentence
void replaceWord(char* sentence, const char* oldWord, const char* newWord) {
    char result[100] = "";  // Buffer for new sentence
    char* ptr = sentence;   // Pointer to traverse sentence
    char* writePtr = result;  // Pointer for writing to result
    
    while (*ptr != '\\0') {
        // Check if we found the old word
        if (strncmp(ptr, oldWord, strlen(oldWord)) == 0 &&
            (ptr == sentence || isWordBoundary(*(ptr-1))) &&
            isWordBoundary(*(ptr + strlen(oldWord)))) {
            
            // Copy new word to result
            strcpy(writePtr, newWord);
            writePtr += strlen(newWord);
            ptr += strlen(oldWord);
        } else {
            // Copy current character
            *writePtr = *ptr;
            writePtr++;
            ptr++;
        }
    }
    *writePtr = '\\0';
    
    // Copy result back to original sentence
    strcpy(sentence, result);
}

int main() {
    char sentence[100];
    char oldWord[20];
    char newWord[20];
    
    // Get input
    cin.getline(sentence, 100);
    cin.getline(oldWord, 20);
    cin.getline(newWord, 20);
    
    // Replace words and print result
    replaceWord(sentence, oldWord, newWord);
    cout << sentence << endl;
    
    return 0;
}`,
  },
  {
    level: 4,
    title: "מיון מערך מחרוזות",
    stack: `types char, char[], pointers, arrays, std:cin, std:cout, functions`,
    question:
      "כתוב תוכנית שמקבלת 5 מחרוזות (כל אחת עד 20 תווים) וממיינת אותן לפי סדר אלפביתי. יש להשתמש במערך של מצביעים למחרוזות ובמיון בועות.",
    example: "קלט:\nזברה\nאריה\nדב\nגמל\nחתול\nפלט:\nאריה\nגמל\nדב\nזברה\nחתול",
    hint: "1. צור מערך של מצביעים למחרוזות\n2. השתמש במערך נפרד לאחסון המחרוזות עצמן\n3. בצע מיון בועות על המצביעים\n4. השתמש ב-strcmp להשוואת מחרוזות",
    answer:
      "התוכנית מקצה מערך של מחרוזות ומערך של מצביעים אליהן. היא משתמשת במיון בועות כשההשוואה נעשית באמצעות strcmp, והחלפת מחרוזות נעשית על ידי החלפת המצביעים במקום העתקת המחרוזות עצמן.",
    code: `
#include <iostream>
#include <cstring>
using namespace std;

// Function to swap string pointers
void swapStrings(char** str1, char** str2) {
    char* temp = *str1;
    *str1 = *str2;
    *str2 = temp;
}

// Function to sort strings using bubble sort
void sortStrings(char* arr[], int n) {
    for(int i = 0; i < n-1; i++) {
        for(int j = 0; j < n-i-1; j++) {
            if(strcmp(arr[j], arr[j+1]) > 0) {
                swapStrings(&arr[j], &arr[j+1]);
            }
        }
    }
}

int main() {
    const int NUM_STRINGS = 5;
    const int MAX_LENGTH = 20;
    
    // Array to store actual strings
    char strings[NUM_STRINGS][MAX_LENGTH];
    // Array of pointers to strings
    char* stringPtrs[NUM_STRINGS];
    
    // Get input strings
    for(int i = 0; i < NUM_STRINGS; i++) {
        cin.getline(strings[i], MAX_LENGTH);
        stringPtrs[i] = strings[i];
    }
    
    // Sort strings
    sortStrings(stringPtrs, NUM_STRINGS);
    
    // Print sorted strings
    for(int i = 0; i < NUM_STRINGS; i++) {
        cout << stringPtrs[i] << endl;
    }
    
    return 0;
}`,
  },
  {
    level: 4,
    title: "איחוד מחרוזות ללא כפילויות",
    stack: `types char, char[], pointers, std:cin, std:cout, functions`,
    question:
      "כתוב תוכנית שמקבלת שתי מחרוזות ומאחדת אותן למחרוזת אחת כך שכל תו יופיע רק פעם אחת, בסדר הופעתו הראשון. יש להשתמש במצביעים.",
    example: "קלט:\nabcde\ncdeof\nפלט: abcdeof",
    hint: "1. צור מערך בוליאני לסימון תווים שכבר נראו\n2. השתמש במצביעים למעבר על המחרוזות\n3. בדוק כל תו מול מערך הסימון\n4. הוסף רק תווים שטרם נראו",
    answer:
      "התוכנית משתמשת במערך בוליאני כדי לעקוב אחר התווים שכבר הופיעו. היא עוברת על המחרוזת הראשונה ואז השנייה באמצעות מצביעים, ומוסיפה למחרוזת התוצאה רק תווים שטרם נראו.",
    code: `
#include <iostream>
using namespace std;

// Function to merge strings without duplicates
void mergeStrings(const char* str1, const char* str2, char* result) {
    bool seen[128] = {false};  // Array to mark seen characters
    char* writePtr = result;   // Pointer to write position in result
    
    // Process first string
    const char* readPtr = str1;
    while(*readPtr != '\\0') {
        if(!seen[*readPtr]) {
            seen[*readPtr] = true;
            *writePtr = *readPtr;
            writePtr++;
        }
        readPtr++;
    }
    
    // Process second string
    readPtr = str2;
    while(*readPtr != '\\0') {
        if(!seen[*readPtr]) {
            seen[*readPtr] = true;
            *writePtr = *readPtr;
            writePtr++;
        }
        readPtr++;
    }
    
    // Add null terminator
    *writePtr = '\\0';
}

int main() {
    char str1[50];
    char str2[50];
    char result[100];
    
    // Get input
    cin.getline(str1, 50);
    cin.getline(str2, 50);
    
    // Merge strings and print result
    mergeStrings(str1, str2, result);
    cout << result << endl;
    
    return 0;
}`,
  },
  {
    level: 5,
    title: "חיפוש תת-מחרוזת מקסימלית משותפת",
    stack: `types char, char[], pointers, arrays, std:cin, std:cout, functions`,
    question:
      "כתוב תוכנית שמקבלת שתי מחרוזות ומוצאת את תת-המחרוזת המשותפת הארוכה ביותר ביניהן. יש להשתמש במצביעים ובמטריצה דו-ממדית.",
    example: "קלט:\nabcdef\ndefabc\nפלט: def",
    hint: "1. צור מטריצה דו-ממדית לשמירת אורכי תת-המחרוזות המשותפות\n2. מלא את המטריצה בעזרת מצביעים\n3. מצא את המיקום והאורך המקסימלי במטריצה\n4. השתמש במצביעים לחילוץ תת-המחרוזת",
    answer:
      "התוכנית משתמשת בטכניקת תכנות דינמי עם מטריצה דו-ממדית. היא ממלאת את המטריצה כך שכל תא מכיל את אורך תת-המחרוזת המשותפת המקסימלית המסתיימת בתווים המתאימים. לאחר מכן היא מוצאת את הערך המקסימלי במטריצה ומחלצת את תת-המחרוזת המתאימה.",
    code: `
#include <iostream>
#include <cstring>
using namespace std;

// Function to find longest common substring
void findLongestCommonSubstring(const char* str1, const char* str2, char* result) {
    int len1 = strlen(str1);
    int len2 = strlen(str2);
    
    // Create 2D array for lengths
    int** lengths = new int*[len1 + 1];
    for(int i = 0; i <= len1; i++) {
        lengths[i] = new int[len2 + 1]();
    }
    
    // Variables to track maximum length and ending position
    int maxLength = 0;
    int endIndex = 0;
    
    // Fill the matrix
    for(int i = 1; i <= len1; i++) {
        for(int j = 1; j <= len2; j++) {
            if(str1[i-1] == str2[j-1]) {
                lengths[i][j] = lengths[i-1][j-1] + 1;
                if(lengths[i][j] > maxLength) {
                    maxLength = lengths[i][j];
                    endIndex = i - 1;
                }
            }
        }
    }
    
    // Extract the substring
    const char* start = str1 + endIndex - maxLength + 1;
    strncpy(result, start, maxLength);
    result[maxLength] = '\\0';
    
    // Clean up
    for(int i = 0; i <= len1; i++) {
        delete[] lengths[i];
    }
    delete[] lengths;
}

int main() {
    char str1[100];
    char str2[100];
    char result[100];
    
    // Get input
    cin.getline(str1, 100);
    cin.getline(str2, 100);
    
    // Find and print longest common substring
    findLongestCommonSubstring(str1, str2, result);
    cout << result << endl;
    
    return 0;
}`,
  },
];
