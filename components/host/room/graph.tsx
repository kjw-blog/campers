import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import { ContentTitle } from './content-title';
import { useLayoutEffect } from 'react';
import { useTheme } from 'next-themes';

export const Graph = () => {
  const { theme } = useTheme();

  useLayoutEffect(() => {
    const root = am5.Root.new('chart-element');

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      }),
    );

    let data = [
      {
        month: '1월',
        value1: 12.9,
      },
      {
        month: '2월',
        value1: 15.7,
      },
      {
        month: '3월',
        value1: 14.1,
      },
      {
        month: '4월',
        value1: 142.5,
      },
      {
        month: '5월',
        value1: 52.9,
      },
      {
        month: '6월',
        value1: 42.9,
      },
      {
        month: '7월',
        value1: 72.4,
      },
      {
        month: '8월',
        value1: 58.9,
      },
      {
        month: '9월',
        value1: 22.9,
      },
      {
        month: '10월',
        value1: 8.7,
      },
      {
        month: '11월',
        value1: 112.4,
      },
      {
        month: '12월',
        value1: 81.9,
      },
    ];

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      }),
    );

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),

        categoryField: 'month',
      }),
    );
    xAxis.data.setAll(data);

    if (theme === 'dark') {
      xAxis.get('renderer').labels.template.set('fill', am5.color('#D4D4D8'));
    }

    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: 'Series',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value1',
        categoryXField: 'month',
        tooltip: am5.Tooltip.new(root, {
          labelText: '{month} : ' + '{value1}만원',
        }),
      }),
    );

    series.data.setAll(data);

    chart.set('cursor', am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, [theme]);

  return (
    <div className="flex flex-col grid-in-graph">
      <ContentTitle title="매출 그래프" />
      <div
        id="chart-element"
        className="h-full w-full text-zinc-300 dark:bg-zinc-700"
      />
    </div>
  );
};
