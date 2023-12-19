import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { useLayoutEffect } from 'react';
import { useTheme } from 'next-themes';

interface GraphProps {
  data: any[];
}

export const Graph = ({ data }: GraphProps) => {
  const { theme } = useTheme();

  useLayoutEffect(() => {
    const root = am5.Root.new('chart-element');

    root.setThemes([am5themes_Animated.new(root)]);

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

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
          cellStartLocation: 0,
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

    yAxis.get('renderer').labels.template.set('fontSize', '12px');
    xAxis.get('renderer').labels.template.set('fontSize', '12px');

    if (theme === 'dark') {
      yAxis.get('renderer').labels.template.set('fill', am5.color('#A1A1AA'));
      xAxis.get('renderer').labels.template.set('fill', am5.color('#A1A1AA'));
    }
    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: 'Series',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        categoryXField: 'month',
        fill: am5.color('#42B983'),
        stroke: am5.color('#42B983'),
        tooltip: am5.Tooltip.new(root, {
          labelText: '[fontSize: 12px #fff]{month} : {value}만원[/]',
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
    chart.appear(1000, 0);

    return () => {
      root.dispose();
    };
  }, [theme, data]);

  return (
    <div
      id="chart-element"
      className="h-full w-full text-zinc-300 dark:bg-zinc-700"
    />
  );
};
