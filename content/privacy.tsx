import type { Doc } from "@/components/doc-page";
import { contactEmail, pathFor, type Lang } from "@/lib/i18n";

// What the app and its server actually do with data. When the app starts
// sending something new, or a new third party sees a request, this page and
// its "Last updated" date change in the same release.

const mail = <a href={`mailto:${contactEmail}`}>{contactEmail}</a>;

const en: Doc = {
  title: "Privacy Policy",
  description: "What data the FreeBus app and freebus.co.il collect, how it is used, and the choices you have.",
  updated: "2 October 2026",
  body: (
    <>
      <p>
        This policy explains what information the FreeBus mobile app (for iOS and Android) and the freebus.co.il website
        handle, why, and who else sees it. In this policy, &ldquo;we&rdquo; means the people operating
        FreeBus. For privacy questions and requests, contact {mail}.
      </p>

      <div className="doc-summary">
        <strong>The short version</strong>
        <ul>
          <li>Using the app requires no account, name, email address or phone number. If you contact support, we receive the details you send.</li>
          <li>The app contains no advertising, analytics or tracking SDKs, and we don&apos;t sell or share data for advertising.</li>
          <li>Saved places, recent searches and settings are stored only on your device.</li>
          <li>
            To plan trips, the app sends searches and locations to our server. Requests do not include an account ID, but IP addresses and locations may be personal information.
          </li>
          <li>Location in the background is used only during a trip you started, to alert you before your stop.</li>
        </ul>
      </div>

      <h2>1. Information stored on your device</h2>
      <p>The app keeps the following on your device only. It is not synced or backed up to our servers:</p>
      <ul>
        <li>Saved places (for example Home and Work) and their coordinates.</li>
        <li>Recent searches, lines and stops.</li>
        <li>Your preferences: language, theme and alert settings.</li>
        <li>The trip you are currently following, and any &ldquo;time to leave&rdquo; reminder you set. These are removed when the trip ends.</li>
      </ul>
      <p>You can remove saved places in the app. Removing the app or clearing its storage removes local app data, subject to your operating system. Device backups may retain copies under your Apple or Google backup settings.</p>

      <h2>2. Information sent to our server</h2>
      <p>
        Timetables, trip plans and live bus locations come from our server at api.freebus.co.il. To answer a request, the
        app sends what that request needs:
      </p>
      <ul>
        <li>Text you type to search for an address, a place, a stop or a line.</li>
        <li>The start and destination of a trip you plan, which may be your current location.</li>
        <li>Your location when you look for nearby stops, and the area of the map you are viewing.</li>
        <li>Your location while you follow walking directions, if you go off the route and the app finds a new one.</li>
        <li>Identifiers of stops, lines and trips, and the app&apos;s language.</li>
      </ul>
      <p>
        Requests to our API do not include an account ID or advertising ID. They do expose your IP address and technical
        connection information. Address searches may also include a random search-session token that groups related
        searches. Search text and precise locations can reveal personal information, even without an account.
      </p>
      <p>
        <strong>Server logs.</strong> Our API request logs do not store your IP address, request headers or raw
        request URLs. They contain technical diagnostics such as request IDs, HTTP methods, route templates,
        response codes and timings. Error logs omit error messages and attached request data and retain error codes
        and stack frames. The API uses IP addresses temporarily in memory to limit request rates and prevent abuse.
        This does not cover separate processing by hosting providers, map services or the website analytics described below.
      </p>

      <h2>3. Location</h2>
      <p>
        The app asks for location permission. You can use it without location by typing your starting point. With
        permission, location is used to:
      </p>
      <ul>
        <li>Set your current location as a trip&apos;s starting point and show nearby stops.</li>
        <li>Show your position on the map and give walking directions.</li>
        <li>
          <strong>In the background, only during a trip you started:</strong> alert you before your stop and keep the
          lock-screen Live Activity (iPhone) or ongoing notification (Android) up to date. This needs the
          &ldquo;Always&rdquo; or &ldquo;Allow all the time&rdquo; permission, and the feature is off without it.
        </li>
      </ul>
      <p>
        Background location is processed on your device to decide when to alert you. It is not sent to our server.
        Background tracking stops when you end the trip, when you arrive, or shortly after the scheduled arrival time,
        whichever comes first. You can change or revoke the permission at any time in your phone&apos;s settings.
      </p>

      <p>Providing location is optional. Without it, automatic nearby-stop searches and location-based alerts will not work;
        you can still enter a starting point and destination yourself. A trip-planning request needs those details to produce a route.</p>

      <h2>4. Notifications</h2>
      <p>
        Trip alerts and reminders are scheduled on your device. The app doesn&apos;t register for push notifications, so we
        never receive a push token.
      </p>

      <h2>5. Sharing a place to FreeBus</h2>
      <p>
        If you share a location or link from another app to FreeBus, it is read on your device. If it is a Google Maps
        short link, the app opens it directly with Google to find the place it points to. If it is an address, it is
        searched as described in section 2.
      </p>

      <h2>6. Third parties</h2>
      <p>Some requests are handled by, or pass through, other companies:</p>
      <ul>
        <li>
          <strong>Address search.</strong> Searches are handled by our self-hosted Photon service or, when enabled, Google
          Places. With Google Places, our server sends the search text, a search-session token and location when
          provided to rank nearby results. Google receives our server&apos;s IP address for these requests, rather
          than the IP address of your device.{" "}
          <a href="https://policies.google.com/privacy">Google Privacy Policy</a>.
        </li>
        <li>
          <strong>Maps.</strong> The maps in the app are provided by Apple Maps on iPhone and Google Maps on Android,
          which load map data directly to your device under{" "}
          <a href="https://www.apple.com/legal/privacy/">Apple&apos;s</a> and{" "}
          <a href="https://policies.google.com/privacy">Google&apos;s</a> privacy policies.
        </li>
        <li>
          <strong>App updates.</strong> The app checks for updates with Expo (650 Industries, Inc.), sending a random
          installation ID, the platform and the app version. <a href="https://expo.dev/privacy">Expo Privacy Policy</a>.
        </li>
        <li>
          <strong>Hosting.</strong> Our server runs on Hetzner Online GmbH in the European Union, and traffic to it may
          pass through Cloudflare, Inc. for security and performance.
        </li>
        <li>
          <strong>App stores.</strong> Apple and Google may share crash reports and usage statistics with us if you
          have agreed to that in your phone&apos;s settings. These reports may include technical and diagnostic information and are governed by their policies.
        </li>
      </ul>
      <p>
        Timetables come from Israel&apos;s Ministry of Transport and live bus data from the Ministry&apos;s feed via the
        Public Knowledge Workshop (Hasadna). Our server fetches this data on its own; none of your information is sent
        to them.
      </p>

      <h2>7. The freebus.co.il website</h2>
      <p>
        The website uses Google Analytics to count visits and see which pages are read. Google Analytics sets cookies
        and receives your IP address and browser information. You can block it with your browser&apos;s settings or
        Google&apos;s <a href="https://tools.google.com/dlpage/gaoptout">opt-out add-on</a>. The website also remembers
        your language choice in your browser&apos;s local storage. The app does not use Google Analytics.
      </p>

      <h2>8. What we don&apos;t do</h2>
      <ul>
        <li>We don&apos;t sell, rent or trade information.</li>
        <li>We don&apos;t use information for advertising or track you across other apps and websites.</li>
        <li>We don&apos;t combine requests to build a profile of you or your movements.</li>
      </ul>
      <p>
        We may disclose information if Israeli law or a valid legal order requires it. Any disclosure depends on the request and the information we actually hold.
      </p>

      <h2>9. Contacting support</h2>
      <p>When you email us, we receive your email address, your message and any attachments you choose to send.
        We use them to respond and investigate the issue. Mail is handled through Gmail under
        {" "}<a href="https://policies.google.com/privacy">Google&apos;s Privacy Policy</a>.
        Do not send passwords, identity documents or unnecessary location history. GitHub issues are public.</p>
      <p>Service providers may process information outside Israel. Their own retention and processing policies also apply.
        Support messages may remain in the mailbox and in related records while the request is being handled or when
        needed for follow-up or legal obligations. You can contact us to request deletion.</p>

      <h2>10. Children</h2>
      <p>
        FreeBus is a general-audience app and isn&apos;t aimed at children. Location and technical data may still be processed when a child uses the app, as described above.
        Parents or guardians can contact us with questions or requests about a child&apos;s information.
      </p>

      <h2>11. Your rights</h2>
      <p>
        Under applicable privacy law, you may have rights to access information about you and request corrections.
        Rights to deletion, objection and other requests depend on the law that applies and the circumstances.
        Contact {mail} to make a request. We may need limited details to locate the information and verify that
        the request concerns you. Please do not send identity documents unless we explain why they are needed.
        You can also contact the Israeli Privacy Protection Authority or another competent authority.
      </p>

      <h2>12. Security</h2>
      <p>
        All communication between the app and our server is encrypted (HTTPS). Access to the server is restricted. No system can guarantee complete security.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        If we change this policy, we will update it here and change the date at the top. If a change significantly
        affects how information is handled, we will also announce it in the app or in the store release notes.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions or requests about privacy: {mail}. FreeBus is open source, so you can also check what the app does in
        its <a href="https://github.com/freebus-co-il/freebus">source code</a>. See also the{" "}
        <a href={pathFor("en", "terms")}>Terms of Use</a>.
      </p>
      <p>If the English and Hebrew versions differ, the Hebrew version prevails, subject to applicable law.</p>
    </>
  ),
};

const he: Doc = {
  title: "מדיניות פרטיות",
  description: "אילו נתונים אוספים האפליקציה פריבוס והאתר freebus.co.il, איך משתמשים בהם ומה האפשרויות שלכם.",
  updated: "2 באוקטובר 2026",
  body: (
    <>
      <p>
        מדיניות זו מסבירה באיזה מידע מטפלים האפליקציה פריבוס (ל-iOS ולאנדרואיד) והאתר freebus.co.il, לאיזו מטרה ומי
        עוד רואה אותו. במדיניות הזו, &quot;אנחנו&quot; הם מפעילי פריבוס. לשאלות ולבקשות בנושא פרטיות אפשר לפנות
        לכתובת {mail}.
      </p>

      <div className="doc-summary">
        <strong>בקצרה</strong>
        <ul>
          <li>כדי להשתמש באפליקציה לא צריך להירשם או למסור שם, אימייל או מספר טלפון. אם פונים לתמיכה, אנחנו מקבלים את הפרטים ששולחים לנו.</li>
          <li>באפליקציה אין פרסומות, כלי אנליטיקה או כלי מעקב, ואנחנו לא מוכרים או משתפים מידע לצורכי פרסום.</li>
          <li>מקומות שמורים, חיפושים אחרונים והגדרות נשמרים רק במכשיר שלכם.</li>
          <li>כדי לתכנן נסיעות, האפליקציה שולחת חיפושים ומיקומים לשרת שלנו, בלי מזהה חשבון. כתובת IP ונתוני מיקום עדיין עשויים להיות מידע אישי.</li>
          <li>מיקום ברקע משמש רק במהלך נסיעה שהתחלתם, כדי להתריע לפני התחנה שלכם.</li>
        </ul>
      </div>

      <h2>1. מידע שנשמר במכשיר</h2>
      <p>האפליקציה שומרת את המידע הבא במכשיר שלכם בלבד. המידע לא מסונכרן לשרתים שלנו ולא מגובה בהם:</p>
      <ul>
        <li>מקומות שמורים (למשל בית ועבודה) והמיקומים שלהם.</li>
        <li>חיפושים, קווים ותחנות אחרונים.</li>
        <li>ההעדפות שלכם: שפה, ערכת נושא והגדרות התראות.</li>
        <li>הנסיעה שאתם עוקבים אחריה כרגע ותזכורת &quot;הגיע הזמן לצאת&quot; אם הגדרתם. הן נמחקות כשהנסיעה מסתיימת.</li>
      </ul>
      <p>אפשר למחוק מקומות שמורים באפליקציה. הסרת האפליקציה או ניקוי האחסון שלה מוחקים מידע מקומי בהתאם למערכת ההפעלה. עותקים עשויים להישאר בגיבויי המכשיר, לפי הגדרות הגיבוי שלכם ב-Apple או ב-Google.</p>

      <h2>2. מידע שנשלח לשרת שלנו</h2>
      <p>
        לוחות הזמנים, מסלולי הנסיעה ומיקומי האוטובוסים בזמן אמת מגיעים מהשרת שלנו בכתובת api.freebus.co.il. כדי לענות
        על בקשה, האפליקציה שולחת את מה שהבקשה צריכה:
      </p>
      <ul>
        <li>טקסט שאתם מקלידים כדי לחפש כתובת, מקום, תחנה או קו.</li>
        <li>נקודת המוצא והיעד של נסיעה שאתם מתכננים, שיכולים לכלול את המיקום הנוכחי שלכם.</li>
        <li>המיקום שלכם כשאתם מחפשים תחנות קרובות, והאזור במפה שאתם צופים בו.</li>
        <li>המיקום שלכם בזמן הליכה לפי הוראות הניווט, אם יצאתם מהמסלול והאפליקציה מחשבת מסלול חדש.</li>
        <li>מזהים של תחנות, קווים ונסיעות, ושפת האפליקציה.</li>
      </ul>
      <p>
        הבקשות לשרת שלנו לא כוללות מזהה חשבון או מזהה פרסום. הן כן חושפות כתובת IP ומידע טכני על החיבור. חיפושי
        כתובות עשויים לכלול גם מזהה אקראי שמקשר בין בקשות באותו חיפוש. טקסט חיפוש ומיקום מדויק עשויים לחשוף
        מידע אישי גם בלי חשבון משתמש.
      </p>
      <p>
        <strong>יומני שרת.</strong> לוגי הבקשות של ה-API שלנו לא שומרים כתובות IP, כותרות בקשה או כתובות בקשה
        מלאות. הם כוללים פרטים טכניים כמו מזהה בקשה, סוג הפעולה, תבנית הנתיב, קוד התשובה וזמן הטיפול.
        בלוגי שגיאות נשמרים קוד השגיאה ומיקומה בקוד, בלי הודעת השגיאה או נתוני בקשה שצורפו אליה.
        ה-API משתמש בכתובת ה-IP באופן זמני בזיכרון כדי להגביל את קצב הבקשות ולמנוע שימוש לרעה.
        ההסבר הזה לא חל על עיבוד נפרד אצל ספקי האחסון, שירותי המפות או כלי המדידה באתר, שמתוארים בהמשך.
      </p>

      <h2>3. מיקום</h2>
      <p>
        האפליקציה מבקשת הרשאת מיקום. אפשר להשתמש בה גם בלי הרשאה, ולהקליד את נקודת המוצא. אם נתתם הרשאה, המיקום משמש כדי:
      </p>
      <ul>
        <li>לקבוע את המיקום הנוכחי כנקודת המוצא של נסיעה ולהציג תחנות קרובות.</li>
        <li>להציג את המיקום שלכם על המפה ולתת הוראות הליכה.</li>
        <li>
          <strong>ברקע, רק במהלך נסיעה שהתחלתם:</strong> להתריע לפני התחנה שלכם ולעדכן את עדכוני הנסיעה במסך הנעילה
          (באייפון) או את ההתראה הקבועה (באנדרואיד). לשם כך נדרשת ההרשאה &quot;תמיד&quot; או &quot;לאפשר כל הזמן&quot;,
          ובלעדיה התכונה כבויה.
        </li>
      </ul>
      <p>
        המיקום ברקע מעובד במכשיר שלכם כדי להחליט מתי להתריע, ולא נשלח לשרת שלנו. המעקב ברקע מפסיק כשאתם מסיימים את
        הנסיעה, כשאתם מגיעים ליעד, או זמן קצר אחרי שעת ההגעה המתוכננת, המוקדם מביניהם. אפשר לשנות או לבטל את ההרשאה
        בכל עת בהגדרות הטלפון.
      </p>

      <p>מסירת המיקום היא לבחירתכם. בלי הרשאה לא ניתן לזהות אוטומטית תחנות לידכם או להתריע לפי המיקום.
        עדיין אפשר להקליד מאיפה יוצאים ולאן נוסעים. כדי לחשב מסלול, צריך לשלוח לשרת את נקודת המוצא והיעד.</p>

      <h2>4. התראות</h2>
      <p>
        התראות ותזכורות לנסיעה מתוזמנות במכשיר שלכם. האפליקציה לא נרשמת להתראות פוש, כך שאנחנו אף פעם לא מקבלים מזהה
        התראות.
      </p>

      <h2>5. שיתוף מקום לפריבוס</h2>
      <p>
        כשאתם משתפים מיקום או קישור מאפליקציה אחרת לפריבוס, המידע נקרא במכשיר שלכם. אם זה קישור מקוצר של Google Maps, האפליקציה
        פונה ישירות ל-Google כדי לברר לאיזה מקום הוא מפנה. אם זו כתובת, מתבצע חיפוש שלה כפי שמתואר בסעיף 2.
      </p>

      <h2>6. צדדים שלישיים</h2>
      <p>חלק מהבקשות מטופלות על ידי חברות אחרות או עוברות דרכן:</p>
      <ul>
        <li>
          <strong>חיפוש כתובות.</strong> החיפושים מטופלים בשירות Photon שבשרת שלנו או ב-Google Places, כשהוא מופעל.
          כשמשתמשים ב-Google Places, השרת מעביר את טקסט החיפוש, מזהה החיפוש ואת המיקום, אם נמסר, כדי להציג
          תוצאות קרובות. בבקשות האלה Google מקבלת את כתובת ה-IP של השרת שלנו ולא של המכשיר שלכם.{" "}
          <a href="https://policies.google.com/privacy?hl=iw">מדיניות הפרטיות של Google</a>.
        </li>
        <li>
          <strong>מפות.</strong> המפות באפליקציה מסופקות על ידי Apple Maps באייפון ו-Google Maps באנדרואיד, שטוענות את
          נתוני המפה ישירות למכשיר בכפוף למדיניות הפרטיות של{" "}
          <a href="https://www.apple.com/il/legal/privacy/">Apple</a> ושל{" "}
          <a href="https://policies.google.com/privacy?hl=iw">Google</a>.
        </li>
        <li>
          <strong>עדכוני אפליקציה.</strong> האפליקציה בודקת אם יש עדכונים מול Expo (650 Industries, Inc.), ושולחת מזהה התקנה
          אקראי, את סוג הפלטפורמה ואת גרסת האפליקציה. <a href="https://expo.dev/privacy">מדיניות הפרטיות של Expo</a>.
        </li>
        <li>
          <strong>אחסון.</strong> השרת שלנו פועל אצל Hetzner Online GmbH באיחוד האירופי, והתעבורה אליו עשויה לעבור דרך
          Cloudflare, Inc. לצורכי אבטחה וביצועים.
        </li>
        <li>
          <strong>חנויות האפליקציות.</strong> Apple ו-Google עשויות לשתף איתנו דוחות קריסה וסטטיסטיקות שימוש אם הסכמתם
          לכך בהגדרות הטלפון. הדוחות עשויים לכלול מידע טכני ומידע על התקלה, והם כפופים למדיניות שלהן.
        </li>
      </ul>
      <p>
        לוחות הזמנים מגיעים ממשרד התחבורה, ונתוני האוטובוסים בזמן אמת מגיעים מהמידע של משרד התחבורה דרך הסדנה לידע
        ציבורי. השרת שלנו מושך את הנתונים האלה בעצמו, ושום מידע שלכם לא נשלח אליהם.
      </p>

      <h2>7. האתר freebus.co.il</h2>
      <p>
        האתר משתמש ב-Google Analytics כדי לספור ביקורים ולראות אילו עמודים נקראים. Google Analytics שומר עוגיות ומקבל
        את כתובת ה-IP ופרטי הדפדפן שלכם. אפשר לחסום אותו בהגדרות הדפדפן או בעזרת{" "}
        <a href="https://tools.google.com/dlpage/gaoptout?hl=iw">התוסף של Google לחסימת Analytics</a>. בנוסף, האתר זוכר את בחירת
        השפה שלכם באחסון המקומי של הדפדפן. האפליקציה לא משתמשת ב-Google Analytics.
      </p>

      <h2>8. מה אנחנו לא עושים</h2>
      <ul>
        <li>אנחנו לא מוכרים, משכירים או סוחרים במידע.</li>
        <li>אנחנו לא משתמשים במידע לפרסום ולא עוקבים אחריכם באפליקציות ובאתרים אחרים.</li>
        <li>אנחנו לא מצליבים בקשות כדי לבנות פרופיל שלכם או של התנועות שלכם.</li>
      </ul>
      <p>
        ייתכן שנמסור מידע אם החוק הישראלי או צו שיפוטי תקף מחייבים זאת. היקף המידע שיימסר תלוי בדרישה ובמידע שנמצא בידינו בפועל.
      </p>

      <h2>9. פנייה לתמיכה</h2>
      <p>כששולחים לנו אימייל, אנחנו מקבלים את כתובת המייל, תוכן ההודעה והקבצים שבחרתם לצרף. המידע משמש
        למענה ולבירור הפנייה. הדואר מטופל ב-Gmail בהתאם ל
        <a href="https://policies.google.com/privacy?hl=iw">מדיניות הפרטיות של Google</a>.
        אל תשלחו סיסמאות, תעודות מזהות או היסטוריית מיקומים שאינה נחוצה. דיווחים ב-GitHub פתוחים לציבור.</p>
      <p>ספקי השירות עשויים לעבד מידע מחוץ לישראל, וגם מדיניות העיבוד והשמירה שלהם חלה על המידע שהם מקבלים.
        פניות לתמיכה עשויות להישמר בתיבת הדואר וברישומים הקשורים לפנייה בזמן הטיפול, לצורך המשך בירור או בהתאם
        לחובה חוקית. אפשר לפנות אלינו בבקשה למחיקה.</p>

      <h2>10. ילדים</h2>
      <p>
        פריבוס מיועד לקהל הרחב ולא לילדים במיוחד. גם כשילדים משתמשים באפליקציה, מידע טכני ונתוני מיקום עשויים להיות מעובדים כפי שמתואר
        כאן. הורים ואפוטרופוסים יכולים לפנות אלינו בשאלות או בבקשות לגבי מידע של ילדיהם.
      </p>

      <h2>11. הזכויות שלכם</h2>
      <p>
        בהתאם לדין החל, עשויה לעמוד לכם הזכות לעיין במידע עליכם ולבקש לתקן אותו. בקשות למחיקה, להתנגדות
        לשימוש במידע וזכויות נוספות תלויות בדין ובנסיבות. אפשר לשלוח בקשה לכתובת {mail}. ייתכן שנצטרך פרטים
        מצומצמים כדי למצוא את המידע ולוודא שהבקשה נוגעת לכם. אין צורך לשלוח צילום תעודה מזהה, אלא אם נסביר
        מדוע הוא נחוץ. אפשר גם לפנות לרשות להגנת הפרטיות או לרשות מוסמכת אחרת.
      </p>

      <h2>12. אבטחת מידע</h2>
      <p>
        כל התקשורת בין האפליקציה לשרת שלנו מוצפנת (HTTPS), והגישה לשרת מוגבלת. אי אפשר להבטיח אבטחה מוחלטת של כל מערכת.
      </p>

      <h2>13. שינויים במדיניות</h2>
      <p>
        אם נשנה את המדיניות, נעדכן אותה כאן ונשנה את התאריך בראש העמוד. אם שינוי משפיע באופן מהותי על הטיפול במידע,
        נודיע עליו גם באפליקציה או בהערות הגרסה בחנויות.
      </p>

      <h2>14. יצירת קשר</h2>
      <p>
        שאלות ובקשות בנושא פרטיות: {mail}. הקוד של פריבוס פתוח לכולם, כך שאפשר גם לבדוק מה האפליקציה עושה ב
        <a href="https://github.com/freebus-co-il/freebus">קוד המקור</a>. ראו גם את{" "}
        <a href={pathFor("he", "terms")}>תנאי השימוש</a>.
      </p>
      <p>במקרה של הבדל בין הנוסח העברי לאנגלי, הנוסח העברי קובע, בכפוף לדין החל.</p>
    </>
  ),
};

export const privacy: Record<Lang, Doc> = { he, en };
