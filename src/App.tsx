import { useEffect, useState } from "react";
import { ResultItem } from "./types";

const App = () => {
  const [data, setData] = useState<ResultItem[]>([]);

  const fetchJson = () => {
    fetch('./data.json')
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  const categoryColors: Record<string, { text: string; bg: string }> = {
    Reaction: {
      text: "text-light-red-default",
      bg: "bg-light-red-light",
    },
    Memory: {
      text: "text-orangey-yellow-default",
      bg: "bg-orangey-yellow-light",
    },
    Verbal: {
      text: "text-green-teal-default",
      bg: "bg-green-teal-light",
    },
    Visual: {
      text: "text-cobalt-blue-default",
      bg: "bg-cobalt-blue-light",
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pale-blue font-hanken">
      {/* SUMMARY RESULTS */}
      <div className="flex h-[400px] w-[500px] rounded-3xl bg-white shadow-lg">
        {/*Left section */}
        <aside className="flex w-1/2 flex-col items-center justify-between gap-6 rounded-3xl bg-light-slate-blue bg-gradient-to-b from-light-slate-blue to-light-royal-blue px-6 py-8">
          <h1 className="text-lg font-medium text-pale-blue font-hanken">Your Result</h1>

          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue text-white">
            <span className="text-5xl">76</span>
            <span className="text-sm text-light-lavender">of 100</span>
          </div>

          <h2 className="text-xl font-semibold text-white ">Great</h2>

          <p className="text-center text-sm text-pale-blue">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </aside>

        {/* RIGHT SECTION */}
        <div className="flex w-1/2 flex-col justify-between px-6 py-8">
          <h1 className="text-lg font-extrabold text-dark-gray-blue ">Summary</h1>
          <ul className="flex flex-col gap-4">
            {data.map((item) => (
              <li
                key={item.category}
                className={`flex justify-between rounded-md px-4 py-3 ${categoryColors[item.category]?.bg}`}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={item.icon}
                    alt={item.category}
                    className="h-4 w-4"
                  />
                  <span
                    className={`text-sm font-medium ${categoryColors[item.category]?.text}`}
                  >
                    {item.category}
                  </span>
                </div>
                <div className="text-sm font-bold">
                  {item.score}
                  <span className="font-normal text-dark-gray-blue">
                    {" "}
                    / 100
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <button className="rounded-3xl bg-dark-gray-blue from-light-slate-blue to-light-royal-blue px-6 py-3 text-center text-sm font-semibold text-pale-blue hover:bg-gradient-to-b">
            Continue
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
