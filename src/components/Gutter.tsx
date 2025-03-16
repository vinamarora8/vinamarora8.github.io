import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

// Define proper types for nodes and links
interface Node extends d3.SimulationNodeDatum {
  id: number;
  x: number;
  y: number;
  k: number;
  radius: number;
  dendrites: { x: number, y: number }[];  // Add dendrites for neuron-like appearance
  lastFired: number;  // Timestamp of last activation
  firingRate: number; // How often this neuron fires (ms)
}

interface Link {
  source: Node;
  target: Node;
  opacity: number;
  signalPosition?: number; // Position of signal along the path (0-1)
  active?: boolean;       // Whether this link is currently transmitting a signal
}

const Gutter: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const linksRef = useRef<Link[]>([]);

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

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Second effect to create the network after page is loaded
  useEffect(() => {
    if (!pageLoaded || !ref.current) return;

    const svg = d3.select(ref.current);
    const width = ref.current.clientWidth;
    //const height = ref.current.clientHeight || window.innerHeight;
    const height = 200;

    const tau = 4e-2;

    console.log('Creating neuron network with dimensions:', width, height);

    // Clear previous content
    svg.selectAll('*').remove();

    const numNodes = 30; // Reduced number of nodes for better visibility
    
    // Generate dendrites for each neuron
    const generateDendrites = (x: number, y: number, count: number = 5) => {
      return Array.from({ length: count }, () => ({
        x: x + uniform(-15, 15),
        y: y + uniform(-15, 15)
      }));
    };
    
    // Create nodes with firing properties
    let nodes: Node[] = Array.from({ length: numNodes }, (_, i) => {
      const x = uniform(20, width - 20);
      const y = uniform(20, height - 20);
      return {
        id: i,
        x,
        y,
        k: uniform(150, 200),
        radius: uniform(4, 6),
        dendrites: generateDendrites(x, y, Math.floor(uniform(3, 7))),
        lastFired: -uniform(0, 5000), // Stagger initial firing
        firingRate: uniform(3000, 8000) // Random firing rate between 3-8 seconds
      };
    });
    
    nodesRef.current = nodes;

    // Generate random links with proper typing
    let links: Link[] = [];
    for (let i = 0; i < nodes.length; i++) {
      let src = nodes[i];
      for (let j = 0; j < nodes.length; j++) {
        if (i === j) continue;
        let dest = nodes[j];

        if (uniform(0, 1) < Math.exp(- dist(src, dest) * tau)) {
          links.push({
            source: src,
            target: dest,
            opacity: uniform(0.2, 0.5),
            signalPosition: 0,
            active: false
          });
        }
      }
    }
    
    linksRef.current = links;

    // Create a group for links
    const linksGroup = svg.append('g').attr('class', 'links');
    
    // Draw links as axons (curved paths)
    const linkElements = linksGroup
      .selectAll('path')
      .data(links)
      .enter()
      .append('path')
      .attr('class', 'axon')
      .attr('d', (d) => {
        const sourceX = d.source.x;
        const sourceY = d.source.y;
        const targetX = d.target.x;
        const targetY = d.target.y;
        
        // Calculate control point for curve
        const dx = targetX - sourceX;
        const dy = targetY - sourceY;
        
        // Create a slight curve
        const cpx = sourceX + dx / 2 + uniform(-20, 20);
        const cpy = sourceY + dy / 2 + uniform(-20, 20);
        
        return `M${sourceX},${sourceY} Q${cpx},${cpy} ${targetX},${targetY}`;
      })
      .attr('fill', 'none')
      .attr('stroke', '#aaa')
      .attr('stroke-width', 0.8)
      .attr('stroke-opacity', (d) => d.opacity);
      
    // Add signal markers that will travel along the axons
    const signalMarkers = linksGroup
      .selectAll('.signal-marker')
      .data(links)
      .enter()
      .append('circle')
      .attr('class', 'signal-marker')
      .attr('r', 1.5)
      .attr('fill', '#fff')
      .attr('opacity', 0); // Initially hidden
      
    // Create a group for neurons
    const neuronsGroup = svg.append('g').attr('class', 'neurons');
    
    // Create a group for each neuron
    const neurons = neuronsGroup
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'neuron');
      
    // Draw dendrites
    neurons.each(function(d) {
      const neuron = d3.select(this);
      
      // Draw dendrites as small lines radiating from the cell body
      d.dendrites.forEach(dendrite => {
        neuron.append('line')
          .attr('class', 'dendrite')
          .attr('x1', d.x)
          .attr('y1', d.y)
          .attr('x2', dendrite.x)
          .attr('y2', dendrite.y)
          .attr('stroke', `rgba(${d.k}, ${d.k}, ${d.k}, 0.7)`)
          .attr('stroke-width', uniform(0.5, 1.5));
      });
      
      // Draw cell body (soma)
      neuron.append('circle')
        .attr('class', 'soma')
        .attr('r', d.radius)
        .attr('fill', `rgb(${d.k}, ${d.k}, ${d.k})`)
        .attr('cx', d.x)
        .attr('cy', d.y)
        .attr('stroke', '#666')
        .attr('stroke-width', 0.5);
        
      // Add a highlight to make it look more 3D
      neuron.append('circle')
        .attr('class', 'highlight')
        .attr('r', d.radius * 0.4)
        .attr('fill', `rgba(255, 255, 255, 0.3)`)
        .attr('cx', d.x - d.radius * 0.3)
        .attr('cy', d.y - d.radius * 0.3);
        
      // Add a pulse circle for the action potential animation
      neuron.append('circle')
        .attr('class', 'pulse')
        .attr('r', d.radius)
        .attr('fill', 'none')
        .attr('stroke', 'rgba(255, 255, 255, 0)')
        .attr('stroke-width', 2)
        .attr('cx', d.x)
        .attr('cy', d.y);
    });
    
    // Animation function for neuronal firing
    const animate = (timestamp: number) => {
      // Update each neuron
      nodes.forEach((node, i) => {
        const timeSinceLastFire = timestamp - node.lastFired;
        
        // Check if it's time to fire
        if (timeSinceLastFire >= node.firingRate) {
          // Neuron fires!
          node.lastFired = timestamp;
          
          // Animate the neuron firing (action potential)
          const neuron = d3.select(neuronsGroup.selectAll('.neuron').nodes()[i]);
          const soma = neuron.select('.soma');
          const pulse = neuron.select('.pulse');
          
          // Action potential animation sequence
          // 1. Depolarization (rapid rise)
          soma.transition()
            .duration(50)
            .attr('fill', 'rgba(255, 255, 255, 0.9)')
            .transition()
            // 2. Repolarization (fall)
            .duration(100)
            .attr('fill', 'rgba(100, 100, 100, 0.8)')
            .transition()
            // 3. Hyperpolarization (undershoot)
            .duration(150)
            .attr('fill', `rgba(${node.k * 0.7}, ${node.k * 0.7}, ${node.k * 0.7}, 1)`)
            .transition()
            // 4. Return to resting state
            .duration(200)
            .attr('fill', `rgb(${node.k}, ${node.k}, ${node.k})`);
            
          // Pulse wave animation
          pulse.attr('stroke', 'rgba(255, 255, 255, 0.7)')
            .attr('r', node.radius)
            .transition()
            .duration(500)
            .attr('r', node.radius * 3)
            .attr('stroke', 'rgba(255, 255, 255, 0)')
            .ease(d3.easeExpOut);
            
          // Activate outgoing connections
          links.forEach(link => {
            if (link.source.id === node.id) {
              link.active = true;
              link.signalPosition = 0;
            }
          });
        }
      });
      
      // Update signal propagation along axons
      links.forEach((link, i) => {
        if (link.active) {
          // Move signal along the path
          link.signalPosition = (link.signalPosition || 0) + 0.01;
          
          if (link.signalPosition >= 1) {
            // Signal reached the target neuron
            link.active = false;
            
            // Potentially trigger the target neuron to fire sooner
            const targetNode = link.target;
            const currentTime = timestamp - targetNode.lastFired;
            
            // If the target is in a receptive state (not in refractory period)
            if (currentTime > 1000) {
              // Increase likelihood of firing based on proximity to natural firing time
              const firingProbability = currentTime / targetNode.firingRate;
              if (Math.random() < firingProbability * 0.8) {
                // Advance the firing time
                targetNode.lastFired = timestamp - targetNode.firingRate * 0.8;
              }
            }
          } else {
            // Update signal marker position
            const path = d3.select(linkElements.nodes()[i]);
            const pathNode = path.node() as SVGPathElement;
            
            if (pathNode && pathNode.getTotalLength) {
              const pathLength = pathNode.getTotalLength();
              const point = pathNode.getPointAtLength(pathLength * (link.signalPosition || 0));
              
              d3.select(signalMarkers.nodes()[i])
                .attr('cx', point.x)
                .attr('cy', point.y)
                .attr('opacity', 1);
            }
          }
        } else {
          // Hide inactive signals
          d3.select(signalMarkers.nodes()[i]).attr('opacity', 0);
        }
      });
      
      // Continue animation loop
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    
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
