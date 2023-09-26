import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type LineChart2Props = {
  data: { x: number; y: number }[];
};
const svgWidth = 320; // SVG容器宽度
const svgHeight = 240; // SVG容器高度
const LineChart2: React.FC<LineChart2Props> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
   
    const margin = { top: 30, right: 30, bottom: 50, left: 50 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);

    // 清空之前的内容
    svg.selectAll('*').remove();

    // 创建比例尺
    const xScale = d3
      .scaleLinear()
      .domain([1, 20])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0.7, 1])
      .range([height, 0]);

    // 创建折线生成器
    const line = d3
      .line<{ x: number; y: number }>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    // 添加折线路径
    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    g.append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'green'); // 折线的颜色

    // 添加X轴
    g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).ticks(5)); // X轴的刻度数量

    // 添加Y轴
    g.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(yScale).ticks(5)); // Y轴的刻度数量

    // 添加X轴标签
    svg
      .append('text')
      .attr('class', 'x-axis-label')
      .attr('x', width / 2 + margin.left)
      .attr('y', height + margin.top + 35)
      .text('epoch'); // 替换为您的X轴标签文本

    // 添加Y轴标签
    svg
      .append('text')
      .attr('class', 'y-axis-label')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2 - margin.top)
      .attr('y', margin.left - 30)
      .text('auc'); // 替换为您的Y轴标签文本
  }, [data]);

  return <svg width={svgWidth} height={svgHeight} ref={svgRef} id="line-chart"></svg>;
};

export default LineChart2;
