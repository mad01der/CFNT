import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data, width, height }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3
      .pie()
      .sort(null)
      .value((d) => d.value);

    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

    const arcs = pie(data);

    svg
      .selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('fill', (_d, i) => color(String(i)))
      .attr('d', (d) => arc(d))
      .attr('transform', `translate(${width / 2},${height / 2})`);

    svg
      .selectAll('text')
      .data(arcs)
      .enter()
      .append('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .text((d) => d.data.label);
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
