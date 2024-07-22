import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const SunburstChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 600;
    const radius = width / 6;
    const maxLabelWidth = radius * 1; // Adjust based on your needs

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Create the color scale
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateWarm, data.children.length + 1));

    // Define the gradient
    const svg = d3.select(svgRef.current)
      .attr("viewBox", [-width / 2, -width / 2, width, width])
      .style("font-size", "10px")
      .style("font-weight", "bold")
      .style("font-family", "Arial, sans-serif");

    svg.append("defs")
      .append("radialGradient")
      .attr("id", "grad1")
      .attr("x1", "00%")
      .attr("y1", "00%")
      .attr("x2", "100%")
      .attr("y2", "100%")
      .selectAll("stop")
      .data([
        { offset: "20%", color: "#d9c231" }, // Start color
        { offset: "100%", color: "#ee4395" } // End color
      ])
      .enter().append("stop")
      .attr("offset", d => d.offset)
      .attr("stop-color", d => d.color);


    // Compute the layout
    const hierarchy = d3.hierarchy(data)
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value);

    const root = d3.partition()
      .size([2 * Math.PI, hierarchy.height + 1])
      (hierarchy);

    root.each(d => d.current = d);

    const arc = d3.arc()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
      .padRadius(radius * 1.5)
      .cornerRadius(25)
      .innerRadius(d => d.y0 * radius)
      .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1));

    // Draw paths for the sunburst segments
    const path = svg.append("g")
      .selectAll("path")
      .data(root.descendants().slice(1))
      .join("path")
      .attr("fill", d => {
        while (d.depth > 1) d = d.parent;
        return color(d.data.name); // Use color scale for sunburst segments
      })
      .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 1 : 1) : 0)
      .attr("pointer-events", d => arcVisible(d.current) ? "auto" : "none")
      .attr("d", d => arc(d.current));

    path.filter(d => d.children)
      .style("cursor", "pointer")
      .on("click", clicked);

    const format = d3.format(",d");
    path.append("title")
      .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

    // Draw labels
    const labelGroup = svg.append("g")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .style("user-select", "none");

    labelGroup.selectAll("text")
      .data(root.descendants().slice(1))
      .join("text")
      .attr("dy", "0.35em")
      .attr("fill-opacity", d => +labelVisible(d.current))
      .attr("transform", d => labelTransform(d.current))
      .selectAll("tspan")
      .data(d => wrapText(d.data.name, maxLabelWidth))
      .enter().append("tspan")
      .attr("x", 0)
      .attr("dy", (d, i) => `${i * 1.2}em`)
      .text(d => d);

    // Draw the central circle with gradient
    const parent = svg.append("circle")
      .datum(root)
      .attr("r", radius - 15)
      .attr("fill", "url(#grad1)") // Apply gradient fill to the central circle
      .attr("pointer-events", "all")
      .on("click", clicked);

    // Add central text
    svg.append("text")
      .attr("x", 0)
      .attr("y", -20)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("Développeur ")
      .attr("pointer-events", "none");

    svg.append("text")
      .attr("x", 0)
      .attr("y", 0)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("JavaScript React")
      .attr("pointer-events", "none");

    svg.append("text")
      .attr("x", 0)
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("& Testeur QA")
      .attr("pointer-events", "none");

    function clicked(event, p) {
      parent.datum(p.parent || root);

      root.each(d => d.target = {
        x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        y0: Math.max(0, d.y0 - p.depth),
        y1: Math.max(0, d.y1 - p.depth)
      });

      const t = svg.transition().duration(750);

      path.transition(t)
        .tween("data", d => {
          const i = d3.interpolate(d.current, d.target);
          return t => d.current = i(t);
        })
        .filter(function(d) {
          return +this.getAttribute("fill-opacity") || arcVisible(d.target);
        })
        .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 1 : 1) : 0)
        .attr("pointer-events", d => arcVisible(d.target) ? "auto" : "none")
        .attrTween("d", d => () => arc(d.current));

      labelGroup.selectAll("text").filter(function(d) {
        return +this.getAttribute("fill-opacity") || labelVisible(d.target);
      }).transition(t)
        .attr("fill-opacity", d => +labelVisible(d.target))
        .attrTween("transform", d => () => labelTransform(d.current));
    }

    function arcVisible(d) {
      return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
    }

    function labelVisible(d) {
      return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
    }

    function labelTransform(d) {
      const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
      const y = (d.y0 + d.y1) / 2 * radius;
      return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }

    function wrapText(text, maxWidth) {
      const words = text.split(/\s+/);
      const lines = [];
      let line = "";

      for (const word of words) {
        const testLine = line + (line ? " " : "") + word;
        const testWidth = measureTextWidth(testLine);

        if (testWidth > maxWidth && line.length > 0) {
          lines.push(line);
          line = word;
        } else {
          line = testLine;
        }
      }

      lines.push(line);
      return lines;
    }

    function measureTextWidth(text) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.font = "10px sans-serif";
      return context.measureText(text).width;
    }

  }, [data]);

  return (
    <svg ref={svgRef} />
  );
};

export default SunburstChart;
