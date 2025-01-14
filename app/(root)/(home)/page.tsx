import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const currentDate = new Date();

  const hourInTwelve =
    currentDate.getHours() > 12
      ? currentDate.getHours() - 12
      : currentDate.getHours();
  const amOrPm = currentDate.getHours() > 12 ? "PM" : "AM";
  const time = `${hourInTwelve}:${currentDate.getMinutes()} ${amOrPm}`;

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const dayOfMonth = currentDate.getDate();
  const year = currentDate.getFullYear();

  const date = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">
        <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
          <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
            <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
              Upcoming meeting at: 12:30pm
            </h2>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
              <p className="text-lg font-medium text-sky-1 lg:text-2xl">
                {date}
              </p>
            </div>
          </div>
        </div>
      </h1>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
