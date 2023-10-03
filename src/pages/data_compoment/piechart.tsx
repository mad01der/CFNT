import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
type PieChartProps = {
  data: { label: string; value: number }[];
  width: number;
  height: number;
};

const PieChart: React.FC<PieChartProps> = ({ data, width, height }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3
      .pie<{ label: string; value: number }>()
      .sort(null)
      .value((d) => d.value);

    const arc = d3
      .arc<{ label: string; value: number }>()
      .innerRadius(0)
      .outerRadius(radius);

    const arcs = pie(data);

    svg
      .selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('fill', (_d, i) => color(String(i)))
      // @ts-ignore
      .attr('d', arc)
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // 添加标签
    svg
      .selectAll('text')
      .data(arcs)
      .enter()
      .append('text')
       // @ts-ignore
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .text((d) => d.data.label);

    // 添加图例
    const legend = svg
      .selectAll('.legend')
      .data(data.map((d) => d.label))
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (_, i) => `translate(0,${i * 20})`);

    legend
      .append('rect')
      .attr('x', width - 18)
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', (_d, i) => color(String(i)));

    legend
      .append('text')
      .attr('x', width - 24)
      .attr('y', 9)
      .attr('dy', '.35em')
      .style('text-anchor', 'end')
      .text((d) => d);
  }, [data, width, height]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    ></svg>
  );
};

export default PieChart;
