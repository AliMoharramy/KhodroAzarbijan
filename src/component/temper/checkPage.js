import { useState } from "react";
import FirstStep from "./FirstStep";
import SecendStep from "./SecendStep";
import ThirdStrp from "./ThirdStrp";
import data from "../adminPage/data.json";
const wrongans = [
  "هه دفعه اول نمیتونی",
  "بازم غلطه 😂",
  "عزیزم اشتباهه",
  "ناح",
  "🤣❌",
  "هی نزن پشت سرهم یکم فکر کن",
  "هممم یه بار دیگه امتحان کن",
  "ذره ای هم فکر نکن اگه پیام بدی کمکت میکنم 🤣",
  "از قدیم گفتن کم بزن با دقت بزن ",
  "من محدودیت تعداد میزاشتم میخواستی چیکار بکنی ؟",
  "دیگه حالتی هم مونده نزده باشی ؟ 😂",
  "من میرم چرت بزنم 😴",
  "چرا عصبانی میشی حالا 👉👈",
  "یکم خارج از چارچوب فکر کن ریزبین باش",
  "😇 پنجاه میگیرم حرف اولشو میگم",
  "این اطراف رو خوب نگاه کن",
];
let i = 0;
let shown = "دو کلمه هست که کنار هم قرار میدی و یه کلمه 14 حرفی میشه";
let showComment = "(انگلیسی)رو باکس بالا بزن و بهم یه کلمه 14 حرفی متوالی بده";
export default function CheckPage() {
  const [answer, setAnswer] = useState("");
  const [secender, setSecender] = useState(false);
  const [third, setThird] = useState(false);
  if (answer.length === data.trueAns[0].pasokh.length && secender === false) {
    if (answer === data.trueAns[0].pasokh) {
      showComment = "Yeeessss";
      setSecender(true);
    } else {
      if (i >= wrongans.length) {
        showComment = "🥲 کامنتام تموم شد ";
      } else {
        showComment = wrongans[i];
        i++;
      }
      setAnswer("");
    }
  }
  function changing(e) {
    setAnswer(e.toLowerCase());
  }
  return (
    <div className="willBeRemove">
      <audio id="player" src={require("./Rains.mp3")} loop></audio>
      {secender && !third && <SecendStep setThird={setThird} />}
      {third && <ThirdStrp />}
      {!secender && !third && (
        <FirstStep
          answer={answer}
          changing={changing}
          showComment={showComment}
        />
      )}
    </div>
  );
}
