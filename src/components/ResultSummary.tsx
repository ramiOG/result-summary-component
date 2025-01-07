const ResultSummary = () => {
    return (
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
    );
  };
  
  export default ResultSummary;
  