// Some courses (to test)
const data = {
    name: "Software Engineering",
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
        },
        {
            name: "MATH110",
            children: [
                { name: "PHYS111" },
            ]
        },
        {
            name: "MATH109",
            children: [

            ]
        },
        {
            name: "CSC111",
            children: [
                { name: "CSC115" },
                { name: "CSC116" }
            ]
        },
        {
            name: "ENGR110",
            children: [
                { name: "ENGR120" },
            ]
        },
        {
            name: "ENGR130",
            children: [
                { name: "CO-OP 1" },
            ]
        }
    ]
};

// Size of the diagram
const margin = {top: 20, right: 90, bottom: 30, left: 90},
      width = window.innerWidth - margin.left - margin.right,
      height = 2000 - margin.top - margin.bottom;

// Append the SVG object (container for nodes and links) to the body of the page
const svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .call(d3.zoom().on("zoom", function (event) {
        svg.attr("transform", event.transform)
    }))
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

let i = 0;
const duration = 750;

// Create tree
const treemap = d3.tree().size([width, height]);

// Add parent, children, height, depth to d3
let root = d3.hierarchy(data, function(d) { return d.children; });
root.x0 = width / 2;
root.y0 = 0;

// Collapse after the second level
root.children.forEach(collapse);

update(root);

// Collapse the node and all its children
function collapse(d) {
  if(d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}

function update(source) {

    // Assigns the x and y position for the nodes
    const treeData = treemap(root);

    // Compute the new tree layout.
    const nodes = treeData.descendants(),
          links = treeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(function(d){ d.y = d.depth * 180});

    // ****************** Nodes section ***************************

    // Update the nodes...
    const node = svg.selectAll('g.node')
        .data(nodes, function(d) { return d.id || (d.id = ++i); });

    // Enter any new modes at the parent's previous position.
    const nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", function(d) {
            return "translate(" + source.x0 + "," + source.y0 + ")";
        })
        .on('click', click);

    // make nodes black circles and add labels
    nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style("fill", function(d) {
            return d._children ? "lightsteelblue" : "#fff";
        });

    nodeEnter.append('text')
    .attr("dy", "-1em")
    .attr("x", 0)
    .attr("text-anchor", "middle")
    .text(function(d) { return d.data.name; });

    // UPDATE
    const nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate.transition()
      .duration(duration)
      .attr("transform", function(d) { 
          return "translate(" + d.x + "," + d.y + ")";
       });

    // Update the node attributes and style
    nodeUpdate.select('circle.node')
      .attr('r', 10)
      .style("fill", function(d) {
          return d._children ? "lightsteelblue" : "#fff";
      })
      .attr('cursor', 'pointer');

    // Remove any exiting nodes
    const nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) {
            return "translate(" + source.x + "," + source.y + ")";
        })
        .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
      .attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    // ****************** Links section ***************************

    // Update the links...
    const link = svg.selectAll('path.link')
        .data(links, function(d) { return d.id; });

    // Enter any new links at the parent's previous position.
    const linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', function(d){
          const o = {x: source.x0, y: source.y0}
          return diagonal(o, o)
        });

    // UPDATE
    const linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(duration)
        .attr('d', function(d){ return diagonal(d, d.parent) });

    // Remove any exiting links
    const linkExit = link.exit().transition()
        .duration(duration)
        .attr('d', function(d) {
          const o = {x: source.x, y: source.y}
          return diagonal(o, o)
        })
        .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d){
      d.x0 = d.x;
      d.y0 = d.y;
    });

    // Creates a curved (diagonal) path from parent to the child nodes
    function diagonal(s, d) {
      const path = `M ${s.x} ${s.y}
              C ${s.x} ${(s.y + d.y) / 2},
                ${d.x} ${(s.y + d.y) / 2},
                ${d.x} ${d.y}`;

      return path;
    }

    // Toggle children on click.
    function click(event, d) {
      if (d.children) {
          d._children = d.children;
          d.children = null;
      } else {
          d.children = d._children;
          d._children = null;
      }
      update(d);
    }
}
