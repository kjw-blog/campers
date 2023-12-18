import { ContentTitle } from './content-title';
import { Graph } from './graph';

export const GraphContent = () => {
  return (
    <div className="flex flex-col grid-in-graph">
      <ContentTitle title="매출 그래프" />
      <Graph />
    </div>
  );
};
