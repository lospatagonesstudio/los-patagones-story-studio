"use client";

import { useEffect, useState } from "react";

const text =
  "Cada viaje tiene una historia.\nNosotros hacemos que perdure.";

export default function Intro() {
  const [visible, setVisible] = useState(true);

  const [showLP, setShowLP] = useState(false);
  const [showSS, setShowSS] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);

  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setShowLP(true), 200));
    timers.push(setTimeout(() => setShowSS(true), 450));
    timers.push(setTimeout(() => setShowLine1(true), 1000));
    timers.push(setTimeout(() => setShowLine2(true), 1700));

    // Empieza la máquina de escribir
    timers.push(
      setTimeout(() => {
        let i = 0;

        const interval = setInterval(() => {
          setTypedText(text.substring(0, i + 1));
          i++;

          if (i >= text.length) {
            clearInterval(interval);
          }
        }, 40);
      }, 2600)
    );

    // Cursor titilando
    const cursor = setInterval(() => {
      setShowCursor((c) => !c);
    }, 500);

    // Desaparece la intro
    timers.push(
      setTimeout(() => {
        setVisible(false);
      }, 7000)
    );

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(cursor);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-center transition-opacity duration-1000">

      <h1 className="text-7xl md:text-8xl font-black tracking-widest">

        <span
          className={`text-yellow-400 transition-all duration-500 ${
            showLP ? "opacity-100" : "opacity-0"
          }`}
        >
          LP
        </span>

        <span
          className={`text-white transition-all duration-500 ${
            showSS ? "opacity-100" : "opacity-0"
          }`}
        >
          SS
        </span>

      </h1>

      <p
        className={`mt-12 text-2xl md:text-3xl text-white transition-opacity duration-700 ${
          showLine1 ? "opacity-100" : "opacity-0"
        }`}
      >
        Vos viajá.
      </p>

      <p
        className={`mt-4 text-2xl md:text-3xl font-semibold text-yellow-400 transition-opacity duration-700 ${
          showLine2 ? "opacity-100" : "opacity-0"
        }`}
      >
        Nosotros contamos la historia.
      </p>

      <div className="mt-10 min-h-[70px] max-w-2xl whitespace-pre-line text-lg text-gray-300">

        {typedText}

        <span>{showCursor ? "|" : " "}</span>

      </div>

    </div>
  );
}