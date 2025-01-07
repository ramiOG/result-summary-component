import { ResultItem } from "../types";

interface SummaryItemProps {
  item: ResultItem;
  categoryColors: Record<string, { text: string; bg: string }>;
}

const SummaryItem = ({ item, categoryColors }: SummaryItemProps) => {
  return (
    <li
      className={`flex justify-between rounded-md px-4 py-3 ${categoryColors[item.category]?.bg}`}
    >
      <div className="flex items-center gap-2">
        <img src={item.icon} alt={item.category} className="h-4 w-4" />
        <span className={`text-sm font-medium ${categoryColors[item.category]?.text}`}>
          {item.category}
        </span>
      </div>
      <div className="text-sm font-bold">
        {item.score}
        <span className="font-normal text-dark-gray-blue"> / 100</span>
      </div>
    </li>
  );
};

export default SummaryItem;
