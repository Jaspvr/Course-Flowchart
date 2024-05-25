// Some courses (to test)
const data = {
    nodes : [
        { id: "Software Engineering" },
        { id: "MATH100" },
        { id: "MATH101" },
        { id: "MATH200" },
        { id: "PHYS110" },
        { id: "PHYS111" },
        { id: "MATH110" },
        { id: "MATH109" },
        { id: "CSC111" },
        { id: "CSC115" },
        { id: "CSC116" },
        { id: "ENGR110" },
        { id: "ENGR120" },
        { id: "ENGR130" },
        { id: "CO-OP 1" }
    ],

    links : [
        { source: "Software Engineering", target: "MATH100" },
        { source: "MATH100", target: "MATH101" },
        { source: "MATH101", target: "MATH200" },
        { source: "Software Engineering", target: "PHYS110" },
        { source: "PHYS110", target: "PHYS111" },
        { source: "Software Engineering", target: "MATH110" },
        { source: "MATH110", target: "PHYS111" }, // Shared child
        { source: "Software Engineering", target: "MATH109" },
        { source: "Software Engineering", target: "CSC111" },
        { source: "CSC111", target: "CSC115" },
        { source: "CSC111", target: "CSC116" },
        { source: "Software Engineering", target: "ENGR110" },
        { source: "ENGR110", target: "ENGR120" },
        { source: "Software Engineering", target: "ENGR130" },
        { source: "ENGR130", target: "CO-OP 1" }
    ]
};

const width = 960;
const height = 600;

const svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

// Create a simulation with forces
const simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links).id(d => d.id).distance(100))
    .force("charge", d3.forceManyBody().strength(-200))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("y", d3.forceY().strength(0.1)) // Pull nodes towards center vertically
    .force("collide", d3.forceCollide(50))
    .on("tick", ticked);

// Add links
const link = svg.selectAll(".link")
    .data(data.links)
    .enter().append("line")
    .attr("class", "link")
    .attr("class", d => d.source.level === d.target.level ? 'link vertical-link' : 'link');

// Add nodes
const node = svg.selectAll(".node")
    .data(data.nodes)
    .enter().append("g")
    .attr("class", "node")
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

node.append("circle")
    .attr("r", 10)
    .style("fill", "#1f77b4");

node.append("text")
    .attr("dy", -3)
    .attr("x", 12)
    .text(d => d.id);

function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("transform", d => `translate(${d.x},${d.y})`);
}

function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}