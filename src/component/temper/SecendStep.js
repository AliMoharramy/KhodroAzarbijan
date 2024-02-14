import { useCallback, useEffect, useState } from "react";

const talks1 = [
  "خب",
  "سلام",
  "اگه فکر کردی تموم شده",
  ".. باید بگم که",
  "😁 نه جانم هنوز کار داریم",
  "❤️👈 اینو میبینی ؟ ",
  "! این قلب من بود",
  "شاید با خودت بگی که علی شوخیش گرفته",
  "ولی کاملا در اشتباهی",
  "🧍‍♀️اونو که یادته قلب من بود حالا اینم تویی",
  "🧍‍♂️❤️اینم منم با قلبم",
  "یه روز دیدم قلبم داره ازم دور میشه",
  "خیلی ترسیدم فکر کردم مریض شدم",
  "بعد دیدم نه مثل اینکه داره یه جای خاصی میره",
  "❤️🧍‍♂️",
  "❤️.🧍‍♂️",
  "❤️...🧍‍♂️",
  "❤️.....🧍‍♂️",
  "❤️.......🧍‍♂️",
  "❤️.........🧍‍♂️",
  "یهو دیدم عه یه دختری هست",
  "داره میره سمت اون",
  "🧍‍♀️.........❤️",
  "🧍‍♀️.......❤️",
  "🧍‍♀️.....❤️",
  "🧍‍♀️...❤️",
  "🧍‍♀️.❤️",
  "🧍‍♀️❤️",
  "اوه",
  "🥺قلبم اسیرت شد",
  "بعد من افتادم دنبال قلبم",
  "ببینم آخه کیه قلبم رو دزدیده",
  "🧍‍♀️❤️.......🚶‍♂️",
  "🧍‍♀️❤️.....🚶‍♂️",
  "🧍‍♀️❤️...🚶‍♂️",
  "🧍‍♀️❤️🚶‍♂️",
  "..وقتی رسیدم",
  "🧍‍♀️😍",
  "🎇🎆✨",
  "دیدی چیشد؟",
  "🥹❤️عاشقت شدم",
  "",
  "",
  ".",
];
export default function SecendStep({ setThird }) {
  const [newName, setnewName] = useState("😍❤️");
  if (newName === ".") {
    setThird(true);
  }
  let i = 0;
  const shuffle = useCallback(() => {
    setnewName(talks1[i]);
    if (i <= talks1.length) i++;
  }, [i]);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1200);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <div className="secendStep">
      <p className="secendStepp">
        {newName}
        {!newName && <p className="love">I LOVE YOU ♡</p>}
      </p>
    </div>
  );
}
