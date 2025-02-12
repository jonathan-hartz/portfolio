export default function BubblesAnimation() {
  const gradient_type = "bg-gradient-to-r";
  const from = "from-blue-600 ";
  const to = "to-violet-600";
  const very_small_duration = "animate-duration-[28s]";
  const small_duration = "animate-duration-[33s]";
  const intermediary_duration = "animate-duration-[39s]";
  const long_duration = "animate-duration-[46s]";
  const extremly_long_duration = "animate-duration-[54s]";

  const bubbles_classname = [
    `${extremly_long_duration} left-[10%] h-10 w-10 `,
    `${small_duration} left-[5%] h-10 w-10 rounded-xl animate-delay-[-2s]`,
    `${very_small_duration} left-[20%] h-14 w-14 animate-delay-[-4s]`,
    `${extremly_long_duration} left-[25%] h-10 w-10 rounded-xl`,
    `${very_small_duration} left-[40%] h-16 w-16`,
    `${very_small_duration} left-[70%] h-10 w-10 animate-delay-[-4s]`,
    `${very_small_duration} left-[80%] h-32 w-32 rounded-xl animate-delay-[-7s]`,
    `${intermediary_duration} left-[32%] h-40 w-40 animate-delay-[-15s]`,
    `${long_duration} left-[55%] h-5 w-5 animate-delay-[-3s]`,
    `${very_small_duration} left-[25%] h-3 w-3 animate-delay-[-11s]`,
    `${very_small_duration} left-[90%] h-40 w-40  rounded-xl animate-delay-[-16s]`,
    `${intermediary_duration} left-[33%] h-40 w-40 animate-delay-[-5s]`,
    `${intermediary_duration} left-[73%] h-40 w-40 animate-delay-[-8s]`,
    `${long_duration} left-[85%] h-40 w-40 animate-delay-[-1s]`,
    `${intermediary_duration} h-10 w-10 animate-delay-[-2s]`,
  ];

  return (
    <ul className="absolute left-0 top-0 z-10 h-full w-full">
      {bubbles_classname.map((bubble_classname, key) => (
        <li
          key={key}
          className={`${gradient_type} ${from} ${to} absolute -bottom-52 animate-square list-none transition ease-linear ${bubble_classname} `}
        ></li>
      ))}
    </ul>
  );
}
