import React, { useEffect, useMemo } from "react";
import TextTransition, { presets } from "react-text-transition";

export default function Countdown() {
  const conferenceDate = useMemo(() => new Date("2024-10-31"), []);
  const [days, setDays] = React.useState(
    Math.floor((conferenceDate - new Date()) / (1000 * 60 * 60 * 24))
  );
  const [hours, setHours] = React.useState(
    Math.floor((conferenceDate - new Date()) / (1000 * 60 * 60)) % 24
  );
  const [minutes, setMinutes] = React.useState(
    Math.floor((conferenceDate - new Date()) / (1000 * 60)) % 60
  );
  const [seconds, setSeconds] = React.useState(
    Math.floor((conferenceDate - new Date()) / 1000) % 60
  );

  useEffect(() => {
    setInterval(() => {
      setDays(
        Math.floor((conferenceDate - new Date()) / (1000 * 60 * 60 * 24))
      );
      setHours(
        Math.floor((conferenceDate - new Date()) / (1000 * 60 * 60)) % 24
      );
      setMinutes(Math.floor((conferenceDate - new Date()) / (1000 * 60)) % 60);
      setSeconds(Math.floor((conferenceDate - new Date()) / 1000) % 60);
    }, 1000);
  }, [conferenceDate]);

  return (
    <div className="flex gap-12">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold">
          <TextTransition springConfig={presets.gentle} inline>
            {days}
          </TextTransition>
        </p>
        <p>Days</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold">
          <TextTransition springConfig={presets.gentle} inline>
            {hours}
          </TextTransition>
        </p>
        <p>Hours</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold">
          <TextTransition springConfig={presets.gentle} inline>
            {minutes}
          </TextTransition>
        </p>
        <p>Minutes</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold">
          <TextTransition springConfig={presets.gentle} inline>
            {seconds}
          </TextTransition>
        </p>
        <p>Seconds</p>
      </div>
    </div>
  );
}
