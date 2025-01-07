import { ResultItem } from "../types";
import SummaryItem from "./SummaryItem";

interface SummaryListProps {
  data: ResultItem[];
  categoryColors: Record<string, { text: string; bg: string }>;
}

const SummaryList = ({ data, categoryColors }: SummaryListProps) => {
  return (
    <div className="flex w-1/2 flex-col justify-between px-6 py-8">
      <h1 className="text-lg font-extrabold text-dark-gray-blue">Summary</h1>
      <ul className="flex flex-col gap-4">
        {data.map((item) => (
          <SummaryItem key={item.category} item={item} categoryColors={categoryColors} />
        ))}
      </ul>
      <button className="rounded-3xl bg-dark-gray-blue from-light-slate-blue to-light-royal-blue px-6 py-3 text-center text-sm font-semibold text-pale-blue hover:bg-gradient-to-b">
        Continue
      </button>
    </div>
  );
};

export default SummaryList;
