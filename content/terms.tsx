import type { Doc } from "@/components/doc-page";
import { contactEmail, pathFor, type Lang } from "@/lib/i18n";

// The terms for using the app and the hosted service. The source code is
// separately MIT-licensed; section 6 says so. Store licences are addressed
// separately in section 12; this page does not claim to replace them.

const mail = <a href={`mailto:${contactEmail}`}>{contactEmail}</a>;
const repo = "https://github.com/freebus-co-il/freebus";

const en: Doc = {
  title: "Terms of Use",
  description: "The terms for using the FreeBus app, its server and the freebus.co.il website.",
  updated: "2 October 2026",
  body: (
    <>
      <p>
        These terms apply to the FreeBus mobile app, the server it connects to (api.freebus.co.il) and the
        freebus.co.il website (together, the &ldquo;Service&rdquo;). In these terms, &ldquo;we&rdquo; means the people operating FreeBus.
        You can contact us at {mail}. By installing or using the Service you agree to these
        terms. If you don&apos;t agree, please don&apos;t use it.
      </p>

      <h2>1. The Service</h2>
      <p>
        FreeBus is a free public transit app for Israel. It shows timetables, plans trips, shows live bus locations
        where available, and can alert you during a trip. It requires no account and has no ads or paid features. We
        may change, suspend or stop parts of the Service, including for maintenance or security reasons.
        Availability is not guaranteed. These terms do not limit rights that cannot be waived under applicable law.
      </p>

      <h2>2. Transit information may be wrong</h2>
      <p>
        Timetables, routes and stops come from the national timetable published by Israel&apos;s Ministry of Transport.
        Live bus locations and arrival estimates come from the Ministry&apos;s real-time data, received via the Public
        Knowledge Workshop (Hasadna). Addresses and places come from Google and OpenStreetMap. We don&apos;t control any of
        these sources, and we pass their data on as we receive it. In particular:
      </p>
      <ul>
        <li>Buses and trains may be early, late, cancelled, diverted or not tracked at all.</li>
        <li>
          Changes for holidays, strikes or special events may be missing or delayed in the data. The app may therefore
          show a regular schedule when service is reduced or not running.
        </li>
        <li>Walking directions may be inaccurate, and may not account for road works, closed paths or safety conditions.</li>
        <li>Estimated times, transfer warnings and walking times are estimates, not promises.</li>
      </ul>
      <p>
        Always check the signs at the stop and the operator&apos;s announcements. The limits on our liability are described in section 8, subject to applicable law.
      </p>

      <h2>3. Alerts and reminders</h2>
      <p>
        Alerts before your stop, &ldquo;time to leave&rdquo; reminders and lock-screen updates depend on your phone: its
        location accuracy, battery-saving settings, notification and location permissions, and whether the operating
        system keeps the app running. They may come late or not at all. Use them as a convenience, not as your only way
        to wake up or to know when to get off.
      </p>

      <h2>4. Use the Service safely</h2>
      <p>
        Don&apos;t use the app in a way that distracts you while driving, cycling or crossing a road. Pay attention to
        your surroundings and follow traffic laws and the instructions of transit staff, even if the app suggests
        otherwise.
      </p>

      <h2>5. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Overload, disrupt or try to bypass the limits of our server, for example with automated bulk requests.</li>
        <li>Use our server as the backend for another app or service without our written permission.</li>
        <li>Access the Service in ways that break the law or harm other users.</li>
      </ul>
      <p>
        If you need the API for a project of your own, the whole stack is open source and you are welcome to run your own
        copy. We may block traffic that breaks these rules.
      </p>

      <h2>6. Open source and data licences</h2>
      <p>
        The FreeBus source code is available on <a href={repo}>GitHub</a> under the MIT License. That licence governs your
        rights to the code, and nothing in these terms limits it. These terms govern the Service we operate: the app as we
        distribute it in the stores, and our server.
      </p>
      <p>Some content in the Service belongs to others and is used under their terms:</p>
      <ul>
        <li>Timetable data: Israel&apos;s Ministry of Transport, under the gov.il terms of use.</li>
        <li>
          Map, routing and address data: © OpenStreetMap contributors, under the{" "}
          <a href="https://opendatacommons.org/licenses/odbl/1-0/">Open Database License</a>.
        </li>
        <li>
          Address search and maps on Android: Google. By using these features you also agree to the{" "}
          <a href="https://maps.google.com/help/terms_maps/">Google Maps Terms of Service</a>.
        </li>
        <li>Maps on iPhone: Apple Maps, under Apple&apos;s terms.</li>
      </ul>
      <p>The FreeBus name and logo identify the project; please don&apos;t use them in a way that suggests we endorse you.</p>

      <h2>7. No warranty</h2>
      <p>
        The Service is provided free of charge, &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the extent the law
        allows, we make no warranty of any kind, express or implied, including that the Service will be accurate, reliable,
        available, error-free, or fit for a particular purpose.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the extent the law allows, we will not be liable for any indirect, incidental or consequential damage, or for
        lost time, missed trips, travel costs or lost data, arising from use of the Service or inability to use it, even if
        we were told such damage was possible. Nothing in these terms excludes liability that cannot be excluded by law.
      </p>

      <h2>9. Privacy</h2>
      <p>
        How the Service handles information is described in our <a href={pathFor("en", "privacy")}>Privacy Policy</a>.
      </p>

      <h2>10. Changes to these terms</h2>
      <p>
        We may update these terms and the date at the top of this page. Material changes will be communicated through
        the Service or release notes as appropriate. If applicable law requires notice or consent, those requirements
        apply; publishing an update does not replace them.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Israel, without limiting mandatory protections under
        applicable law. Jurisdiction is determined by applicable law.
      </p>

      <h2>12. App stores</h2>
      <p>
        Apps downloaded from the App Store or Google Play are also subject to the applicable store terms and the
        licence supplied with the app. For App Store downloads, Apple&apos;s
        {" "}<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">standard licence agreement</a>
        {" "}applies unless a custom licence is provided through the store. These website terms do not replace that agreement.
      </p>
      <p>The MIT licence continues to govern the source code. Questions about FreeBus support can be sent to {mail}.</p>

      <h2>13. Contact</h2>
      <p>
        Questions about these terms: {mail}. Bug reports and feature requests are welcome on{" "}
        <a href={`${repo}/issues`}>GitHub</a>.
      </p>
      <p>If the English and Hebrew versions differ, the Hebrew version prevails, subject to applicable law.</p>
    </>
  ),
};

const he: Doc = {
  title: "תנאי שימוש",
  description: "התנאים לשימוש באפליקציה פריבוס, בשרת שלו ובאתר freebus.co.il.",
  updated: "2 באוקטובר 2026",
  body: (
    <>
      <p>
        התנאים האלה חלים על האפליקציה פריבוס, על השרת שהיא מתחברת אליו (api.freebus.co.il) ועל האתר freebus.co.il (יחד:
        &quot;השירות&quot;). בתנאים האלה, &quot;אנחנו&quot; הם מפעילי פריבוס. אפשר ליצור קשר בכתובת {mail}. התקנת השירות או
        השימוש בו מהווים הסכמה להתנאים האלה. אם התנאים לא מתאימים לכם, אין להשתמש בשירות. התנאים מנוסחים בלשון רבים
        ומיועדים לכל המגדרים.
      </p>

      <h2>1. השירות</h2>
      <p>
        פריבוס היא אפליקציה חינמית לתחבורה ציבורית בישראל. היא מציגה לוחות זמנים, מתכננת נסיעות ומציגה מיקומי אוטובוסים
        בזמן אמת כשיש נתונים זמינים, ויכולה להתריע במהלך נסיעה. אין צורך בחשבון, ואין בה פרסומות או תכונות בתשלום.
        ייתכנו שינויים, הפסקות או השבתות בשירות, בין היתר לצורכי תחזוקה ואבטחה. אין התחייבות לזמינות רציפה,
        ואין בתנאים האלה כדי לגרוע מזכויות שלא ניתן לוותר עליהן לפי הדין.
      </p>

      <h2>2. המידע על התחבורה עלול להיות שגוי</h2>
      <p>
        לוחות הזמנים, המסלולים והתחנות מגיעים מלוח הזמנים הארצי שמפרסם משרד התחבורה. מיקומי האוטובוסים וזמני ההגעה
        המשוערים מגיעים מנתוני זמן האמת של משרד התחבורה, דרך הסדנה לידע ציבורי. כתובות ומקומות מגיעים מ-Google
        ומ-OpenStreetMap. המקורות האלה אינם בשליטתנו, ואנחנו מעבירים את הנתונים כפי שהם מתקבלים. בפרט:
      </p>
      <ul>
        <li>אוטובוסים ורכבות עלולים להקדים, לאחר, להתבטל, לשנות מסלול או לא להופיע במעקב כלל.</li>
        <li>
          שינויים בחגים, בשביתות או באירועים מיוחדים עלולים לא להופיע בנתונים או להתעדכן באיחור. לכן האפליקציה
          עלולה להציג לוח זמנים רגיל גם כשהשירות מצומצם או לא פועל.
        </li>
        <li>הוראות ההליכה עלולות להיות לא מדויקות, ולא להביא בחשבון עבודות בכביש, דרכים חסומות או תנאי בטיחות.</li>
        <li>זמנים משוערים, אזהרות על החלפות וזמני הליכה הם הערכה בלבד ולא התחייבות.</li>
      </ul>
      <p>
        בדקו תמיד את השילוט בתחנה ואת ההודעות של המפעיל. הגבלות האחריות שלנו מפורטות בסעיף 8, בכפוף לדין החל.
      </p>

      <h2>3. התראות ותזכורות</h2>
      <p>
        התראות לפני התחנה, תזכורות &quot;הגיע הזמן לצאת&quot; ועדכונים במסך הנעילה תלויים בטלפון שלכם: בדיוק המיקום,
        בהגדרות חיסכון בסוללה, בהרשאות ההתראות והמיקום, ובשאלה אם מערכת ההפעלה ממשיכה להריץ את האפליקציה. הן עלולות להגיע
        באיחור או לא להגיע כלל. השתמשו בהן לנוחות בלבד, ולא כאמצעי היחיד להתעורר או לדעת מתי לרדת.
      </p>

      <h2>4. שימוש בטוח</h2>
      <p>
        אל תשתמשו באפליקציה באופן שמסיח את דעתכם בזמן נהיגה, רכיבה או חציית כביש. שימו לב לסביבה, וצייתו לחוקי התנועה
        ולהוראות של צוות התחבורה הציבורית, גם אם האפליקציה מציעה אחרת.
      </p>

      <h2>5. שימוש מותר</h2>
      <p>כדי לשמור על השירות זמין לכולם, אין:</p>
      <ul>
        <li>להעמיס על השרת שלנו, לשבש אותו או לנסות לעקוף את המגבלות שלו, למשל באמצעות בקשות אוטומטיות בכמויות.</li>
        <li>להשתמש בשרת שלנו כצד השרת של אפליקציה או שירות אחר ללא אישור בכתב מאיתנו.</li>
        <li>לגשת לשירות בדרך שמפרה את החוק או פוגעת במשתמשים אחרים.</li>
      </ul>
      <p>
        אם אתם צריכים את ה-API לפרויקט משלכם, כל המערכת היא קוד פתוח ואתם מוזמנים להריץ עותק משלכם. אנחנו רשאים לחסום
        תעבורה שמפרה כללים אלה.
      </p>

      <h2>6. קוד פתוח ורישיונות נתונים</h2>
      <p>
        קוד המקור של פריבוס זמין ב-<a href={repo}>GitHub</a> ברישיון MIT. הרישיון הזה קובע את זכויותיכם בקוד, ושום
        דבר בתנאים האלה לא מגביל אותו. התנאים האלה חלים על השירות שאנחנו מפעילים: האפליקציה כפי שאנחנו מפיצים אותה בחנויות,
        והשרת שלנו.
      </p>
      <p>חלק מהתוכן בשירות שייך לאחרים ומשמש בכפוף לתנאים שלהם:</p>
      <ul>
        <li>נתוני לוחות הזמנים: משרד התחבורה, בכפוף לתנאי השימוש של gov.il.</li>
        <li>
          נתוני מפה, ניתוב וכתובות: © תורמי OpenStreetMap, ברישיון{" "}
          <a href="https://opendatacommons.org/licenses/odbl/1-0/">Open Database License</a>.
        </li>
        <li>
          חיפוש כתובות ומפות באנדרואיד: Google. השימוש בתכונות האלה מהווה הסכמה גם ל
          <a href="https://maps.google.com/help/terms_maps/?hl=iw">תנאים ולהגבלות של Google Maps</a>.
        </li>
        <li>מפות באייפון: Apple Maps, בכפוף לתנאים של Apple.</li>
      </ul>
      <p>השם והלוגו של פריבוס מזהים את הפרויקט. אנא אל תשתמשו בהם באופן שמשתמע ממנו שאנחנו תומכים בכם.</p>

      <h2>7. זמינות השירות ואחריות</h2>
      <p>
        השירות ניתן ללא תשלום, &quot;כמות שהוא&quot; (AS IS) ו&quot;כפי שהוא זמין&quot;. ככל שהדין מאפשר,
        אנחנו לא נותנים אחריות מכל סוג, מפורשת או משתמעת, כולל לכך שהשירות יהיה מדויק, אמין, זמין, נקי משגיאות או מתאים
        למטרה מסוימת.
      </p>

      <h2>8. הגבלת אחריות</h2>
      <p>
        ככל שהדין מאפשר, לא נהיה אחראים לנזק עקיף, מקרי או תוצאתי, או לאובדן זמן, החמצת נסיעות, הוצאות נסיעה
        או אובדן מידע, הנובעים מהשימוש בשירות או מחוסר היכולת להשתמש בו, גם אם נאמר לנו שנזק כזה אפשרי. אין בתנאים
        אלה כדי לפטור מאחריות שלא ניתן לפטור ממנה על פי דין.
      </p>

      <h2>9. פרטיות</h2>
      <p>
        האופן שבו השירות מטפל במידע מתואר ב<a href={pathFor("he", "privacy")}>מדיניות הפרטיות</a>.
      </p>

      <h2>10. שינויים בתנאים</h2>
      <p>
        אם נעדכן את התנאים, נעדכן גם את התאריך בראש העמוד. על שינויים מהותיים נודיע דרך השירות או בהערות הגרסה,
        לפי העניין. אם הדין מחייב הודעה או הסכמה, נפעל בהתאם. פרסום נוסח מעודכן אינו מחליף את הדרישות האלה.
      </p>

      <h2>11. הדין החל וסמכות שיפוט</h2>
      <p>
        על התנאים האלה חלים דיני מדינת ישראל, בלי לגרוע מהגנות מחייבות לפי הדין החל. סמכות השיפוט תיקבע לפי הדין.
      </p>

      <h2>12. חנויות האפליקציות</h2>
      <p>
        על הורדה מ-App Store או מ-Google Play חלים גם תנאי החנות והרישיון שמצורף לאפליקציה.
        בהורדה מ-App Store חל
        {" "}<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">הסכם הרישיון הרגיל של Apple</a>,
        אלא אם נמסר בחנות רישיון נפרד. תנאי האתר האלה אינם מחליפים את הסכם הרישיון הזה.
      </p>
      <p>על קוד המקור ממשיך לחול רישיון MIT. לשאלות ולתמיכה בפריבוס אפשר לפנות לכתובת {mail}.</p>

      <h2>13. יצירת קשר</h2>
      <p>
        שאלות על התנאים האלה: {mail}. דיווחים על תקלות והצעות לתכונות חדשות אפשר לשלוח ב-
        <a href={`${repo}/issues`}>GitHub</a>.
      </p>
      <p>במקרה של הבדל בין הנוסח העברי לאנגלי, הנוסח העברי קובע, בכפוף לדין החל.</p>
    </>
  ),
};

export const terms: Record<Lang, Doc> = { he, en };
