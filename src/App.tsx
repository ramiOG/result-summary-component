import { useEffect, useState } from "react";
import { ResultItem } from "./types";
import ResultSummary from "./components/ResultSummary";
import SummaryList from "./components/SummaryList";

const App = () => {
  const [data, setData] = useState<ResultItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJson = async () => {
    try {
      const response = await fetch("./data.json");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
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
      <div className="flex h-[400px] w-[500px] rounded-3xl bg-white shadow-lg">
        <ResultSummary />
        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <SummaryList data={data} categoryColors={categoryColors} />
        )}
      </div>
    </main>
  );
};

export default App;
