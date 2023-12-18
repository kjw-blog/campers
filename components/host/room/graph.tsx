import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';

import { ContentTitle } from './content-title';
import { useLayoutEffect } from 'react';
import { useTheme } from 'next-themes';

export const Graph = () => {
  const { theme } = useTheme();

  useLayoutEffect(() => {
    const root = am5.Root.new('chart-element');

    const responsive = am5themes_Responsive.new(root);

    responsive.addRule({
      name: 'AxisRendererY',
      relevant: function (width) {
        return width < 1000;
      },
      settings: {},
    });

    root.setThemes([am5themes_Animated.new(root), responsive]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 30,
        paddingBottom: 30,
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
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
          minorGridEnabled: true,
        }),
        categoryField: 'month',
      }),
    );

    xAxis.data.setAll(data);

    if (theme === 'dark') {
      yAxis.get('renderer').labels.template.set('fill', am5.color('#A1A1AA'));
      xAxis.get('renderer').labels.template.set('fill', am5.color('#A1A1AA'));
    }
    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: 'Series',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value1',
        categoryXField: 'month',
        fill: am5.color('#42B983'),
        stroke: am5.color('#42B983'),
        tooltip: am5.Tooltip.new(root, {
          labelText: '[#fff]{month} : {value1}만원',
        }),
      }),
    );

    series.bullets.push(function () {
      var bulletCircle = am5.Circle.new(root, {
        radius: 3,
        fill: series.get('fill'),
      });
      return am5.Bullet.new(root, {
        sprite: bulletCircle,
      });
    });

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
