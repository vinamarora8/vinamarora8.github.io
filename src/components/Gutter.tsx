import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

// Define proper types for nodes and links
interface Node extends d3.SimulationNodeDatum {
  id: number;
  x: number;
  y: number;
  k: number;
  radius: number;
}

interface Link {
  source: Node;
  target: Node;
  opacity: number;
}

const Gutter: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null);
  const [pageLoaded, setPageLoaded] = useState(false);

  // First effect to detect when page is fully loaded
  useEffect(() => {
    const handleLoad = () => {
      // Add a small delay to ensure everything else has rendered
      setTimeout(() => {
        setPageLoaded(true);
      }, 500);
    };

    // If page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  // Second effect to create the network after page is loaded
  useEffect(() => {
    if (!pageLoaded || !ref.current) return;

    const svg = d3.select(ref.current);
    const width = ref.current.clientWidth;
    const height = 200; // ref.current.clientHeight;
    const tau = 2e-2;

    console.log('Creating network with dimensions:', width, height);

    // Clear previous content
    svg.selectAll('*').remove();

    const numNodes = 20;
    let nodes: Node[] = Array.from({ length: numNodes }, (_, i) => ({
      id: i,
      x: uniform(0, width),
      y: uniform(-10, 10 + height),
      k: uniform(150, 200),
      radius: uniform(3, 4),
    }));

    console.log(nodes);

    // Generate random links with proper typing
    let links: Link[] = [];
    for (let i = 0; i < nodes.length; i++) {
      let src = nodes[i];
      for (let j = 0; j < nodes.length / 2; j++) {
        let dest = nodes[j];

        if (
          uniform(0, 1) < Math.exp(- dist(src, dest) * tau)
        ) {
          links.push({
            source: src,
            target: dest,
            opacity: uniform(0.1, 0.3),
          });
        }
      }
    }

    console.log(links);

    // Draw links
    svg
      .append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', '#999')
      .attr('stroke-width', 1)
      .attr('stroke-opacity', (d) => d.opacity)
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y);

    // Draw nodes
    svg
      .append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', (d) => d.radius)
      .attr('fill', (d) => `rgb(${d.k},${d.k},${d.k})`)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y);
    
  }, [pageLoaded]); // Only run when pageLoaded changes to true

  return (
    <div className="gutter">
      <svg ref={ref} width="100%" height="100%" />
    </div>
  );
};

function uniform(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function dist(n1: Node, n2: Node) {
  return Math.sqrt((n1.x - n2.x)**2 + (n1.y - n2.y)**2)
}

export default Gutter;
