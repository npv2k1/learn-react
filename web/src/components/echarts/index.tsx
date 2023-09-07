import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';

type EChartsOption = echarts.EChartsOption;

export type EchartContainerProps = {
  option?: EChartsOption;
};

const EchartContainer = ({ option }: EchartContainerProps) => {
  return (
    <div className="h-full w-full">
      {option && (
        <EChartsReact className="flex-1" option={option} notMerge={true} lazyUpdate={true} />
      )}
    </div>
  );
};

export default EchartContainer;
