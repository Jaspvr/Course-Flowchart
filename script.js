// Some courses (to test)
const data = {
    name: "Engineering",
    children: [
        {
            name: "MATH100",
            children: [
                {
                    name: "MATH101",
                    children: [
                        { name: "MATH200" },
                    ]
                },
            ]
        },
        {
            name: "PHYS110",
            children: [
                { name: "PHYS111" },
            ]
        }
    ]
};

// Size of the diagram
const margin = {top: 20, right: 90, bottom: 30, left: 90},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

// Append the SVG object (container for nodes and links) to the body of the page
const svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Create tree
const treemap = d3.tree().size([height, width]);

// Add parent, children, height, depth to d3
const root = d3.hierarchy(data, d => d.children);
treemap(root);

const nodes = root.descendants();
const links = root.links();

// Create the links between the nodes
svg.selectAll('path.link')
  .data(links)
  .enter().append('path')
  .attr('class', 'link')
  .attr('d', d3.linkHorizontal()
      .x(d => d.y)
      .y(d => d.x));

// Create nodews
const node = svg.selectAll('g.node')
  .data(nodes)
  .enter().append('g')
  .attr('class', 'node')
  .attr('transform', d => `translate(${d.y},${d.x})`);

// make nodes black cirlces and add labels
node.append('circle')
  .attr('r', 5);

node.append('text')
  .attr('dy', '.35em')
  .attr('x', d => d.children ? -10 : 10)
  .attr('text-anchor', d => d.children ? 'end' : 'start')
  .text(d => d.data.name);
