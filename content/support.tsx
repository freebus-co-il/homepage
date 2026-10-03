import type { Doc } from "@/components/doc-page";
import { contactEmail, pathFor, type Lang } from "@/lib/i18n";

// The store listings' Support URL. App Store Connect requires it to lead to
// a way of contacting us.

const mail = <a href={`mailto:${contactEmail}`}>{contactEmail}</a>;
const repo = "https://github.com/freebus-co-il/freebus";

const en: Doc = {
  title: "Support",
  description: "Get help with the FreeBus app, report a problem or suggest a feature.",
  body: (
    <>
      <h2>Contact</h2>
      <ul>
        <li>
          <strong>Email:</strong> {mail}. Send us your question or a description of the problem. Response times may vary.
        </li>
        <li>
          <strong>Report a bug or suggest a feature:</strong> open an issue on{" "}
          <a href={`${repo}/issues`}>GitHub</a>. Issues are public, so please don&apos;t include personal details.
        </li>
      </ul>
      <p>When reporting a problem, it helps to include your phone model, the app version (Settings → About &amp; legal) and the line or stop involved.</p>

      <h2>Common questions</h2>

      <div className="faq">
        <details>
          <summary>Does FreeBus cost anything?</summary>
          <p>No. The app is free, has no ads, no paid features and no account.</p>
        </details>
        <details>
          <summary>Why is a time wrong, or a bus missing?</summary>
          <p>
            Timetables come from the Ministry of Transport&apos;s national timetable, and live locations from the
            Ministry&apos;s real-time data. Times shown in green are live estimates; other times are the published schedule.
            Holiday changes may be missing from the data, so the app may show a regular
            schedule even when services have changed. Always check the signs at the stop.
          </p>
        </details>
        <details>
          <summary>Why does the app ask for location &ldquo;Always&rdquo;?</summary>
          <p>
            Only to alert you before your stop while you are on a trip you started. Location in the background is processed
            on your phone and stops when the trip ends. Other location features use foreground permission. Without location permission, you can enter your starting point
            and destination manually, but location-based features will be unavailable. See the <a href={pathFor("en", "privacy")}>Privacy Policy</a>.
          </p>
        </details>
        <details>
          <summary>I didn&apos;t get an alert before my stop.</summary>
          <p>Check that:</p>
          <ul>
            <li>Notifications are allowed for FreeBus.</li>
            <li>Location is set to &ldquo;Always&rdquo; (iPhone) or &ldquo;Allow all the time&rdquo; (Android).</li>
            <li>Battery saver isn&apos;t restricting FreeBus. On Android, set the app&apos;s battery usage to &ldquo;Unrestricted&rdquo;.</li>
            <li>Focus or Do Not Disturb modes allow time-sensitive notifications from FreeBus.</li>
          </ul>
        </details>
        <details>
          <summary>How do I delete my data?</summary>
          <p>
            Saved places, recent searches and settings are stored only on your phone. To delete all of it, uninstall the
            app, or on Android clear its storage in the system settings. There is no account to delete. Device backups may retain copies. For server data or support messages, contact us by email; see the Privacy Policy for details.
          </p>
        </details>
        <details>
          <summary>Can I help?</summary>
          <p>
            Yes. FreeBus is open source. You can suggest ideas, report problems, or contribute code on{" "}
            <a href={repo}>GitHub</a>.
          </p>
        </details>
      </div>

      <h2>Legal</h2>
      <p>
        <a href={pathFor("en", "privacy")}>Privacy Policy</a> · <a href={pathFor("en", "terms")}>Terms of Use</a>
      </p>
    </>
  ),
};

const he: Doc = {
  title: "תמיכה",
  description: "עזרה באפליקציה פריבוס, דיווח על תקלה והצעת תכונות חדשות.",
  body: (
    <>
      <h2>יצירת קשר</h2>
      <ul>
        <li>
          <strong>אימייל:</strong> {mail}. אפשר לשלוח שאלה או לתאר את התקלה. זמני המענה עשויים להשתנות.
        </li>
        <li>
          <strong>דיווח על תקלה או רעיון לשיפור:</strong> אפשר לפתוח פנייה ב-<a href={`${repo}/issues`}>GitHub</a>. הפניות
          גלויות לכולם, אז אל תצרפו פרטים אישיים.
        </li>
      </ul>
      <p>כשמדווחים על תקלה, כדאי לציין את דגם הטלפון, את גרסת האפליקציה (הגדרות ← אודות ומידע משפטי) ואת הקו או התחנה.</p>

      <h2>שאלות נפוצות</h2>

      <div className="faq">
        <details>
          <summary>האם פריבוס עולה כסף?</summary>
          <p>לא. האפליקציה חינמית, בלי פרסומות, בלי תכונות בתשלום ובלי חשבון.</p>
        </details>
        <details>
          <summary>למה זמן מסוים שגוי, או שאוטובוס לא מופיע?</summary>
          <p>
            לוחות הזמנים מגיעים מלוח הזמנים הארצי של משרד התחבורה, והמיקומים בזמן אמת מנתוני זמן האמת של המשרד. זמנים
            בירוק הם הערכות בזמן אמת, ושאר הזמנים הם לוח הזמנים המתוכנן. שינויים בחגים עלולים להיות חסרים בנתונים, ולכן
            האפליקציה עלולה להציג לוח זמנים רגיל גם כשהשירות השתנה. בדקו תמיד את השילוט בתחנה.
          </p>
        </details>
        <details>
          <summary>למה האפליקציה מבקשת הרשאת מיקום &quot;תמיד&quot;?</summary>
          <p>
            רק כדי להתריע לפני התחנה שלכם במהלך נסיעה שהתחלתם. המיקום ברקע מעובד בטלפון ומפסיק כשהנסיעה מסתיימת. לתכונות מיקום אחרות מספיקה
            הרשאה בזמן השימוש. בלי הרשאת מיקום אפשר להזין ידנית מאיפה יוצאים ולאן נוסעים, אבל תכונות שתלויות במיקום לא יפעלו. ראו את{" "}
            <a href={pathFor("he", "privacy")}>מדיניות הפרטיות</a>.
          </p>
        </details>
        <details>
          <summary>לא קיבלתי התראה לפני התחנה.</summary>
          <p>בדקו ש:</p>
          <ul>
            <li>ההתראות מופעלות עבור פריבוס.</li>
            <li>הרשאת המיקום מוגדרת ל&quot;תמיד&quot; (באייפון) או ל&quot;לאפשר כל הזמן&quot; (באנדרואיד).</li>
            <li>מצב חיסכון בסוללה לא מגביל את פריבוס. באנדרואיד, הגדירו את השימוש בסוללה של האפליקציה ל&quot;ללא הגבלה&quot;.</li>
            <li>מצבי ריכוז או &quot;נא לא להפריע&quot; מאפשרים התראות דחופות מפריבוס.</li>
          </ul>
        </details>
        <details>
          <summary>איך מוחקים את המידע שלי?</summary>
          <p>
            מקומות שמורים, חיפושים אחרונים והגדרות נשמרים רק בטלפון שלכם. כדי למחוק את כולם, הסירו את האפליקציה, או
            באנדרואיד נקו את האחסון שלו בהגדרות המערכת. אין חשבון שצריך למחוק. עותקים עשויים להישאר בגיבויי המכשיר. לגבי מידע בשרת או פניות לתמיכה, אפשר לפנות אלינו באימייל. פרטים נוספים מופיעים במדיניות הפרטיות.
          </p>
        </details>
        <details>
          <summary>אפשר לעזור?</summary>
          <p>
            כן. הקוד של פריבוס פתוח לכולם. אפשר להציע רעיונות, לדווח על תקלות או לתרום קוד ב-<a href={repo}>GitHub</a>.
          </p>
        </details>
      </div>

      <h2>מסמכים משפטיים</h2>
      <p>
        <a href={pathFor("he", "privacy")}>מדיניות פרטיות</a> · <a href={pathFor("he", "terms")}>תנאי שימוש</a>
      </p>
    </>
  ),
};

export const support: Record<Lang, Doc> = { he, en };
