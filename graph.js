// Some courses (to test)
const data = {
    nodes: [
        { id: "Software Engineering" },

        //1A
        { id: "MATH100/MATH109" },
        { id: "PHYS110" },
        { id: "PHYS111" },
        { id: "MATH110" },
        { id: "CSC111" },
        { id: "ENGR130" },

        //1B
        { id: "MATH101" },
        { id: "CSC115/CSC116" },
        { id: "ENGR110" },
        { id: "ENGR120" },
        { id: "NATSCI" },

        { id: "CO-OP 1" }
    ],

    links: [
        { source: "Software Engineering", target: "MATH100/MATH109" },
        { source: "Software Engineering", target: "PHYS110" },
        { source: "Software Engineering", target: "MATH110" },
        { source: "Software Engineering", target: "CSC111" },
        { source: "Software Engineering", target: "ENGR110" },
        { source: "Software Engineering", target: "ENGR130" },


        { source: "ENGR130", target: "CO-OP 1" },
        { source: "MATH100/MATH109", target: "MATH101" },
        { source: "CSC111", target: "CSC115/CSC116" },
        { source: "ENGR110", target: "ENGR120" },

        



    ]
};


const width = 960;
const height = 600;

const svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(d3.zoom().on("zoom", (event) => {
        svg.attr("transform", event.transform);
    }))
    .append("g")
    .attr("transform", "translate(50,50)");

const link = svg.selectAll(".link")
    .data(data.links)
    .enter().append("line")
    .attr("class", "link");

const node = svg.selectAll(".node")
    .data(data.nodes)
    .enter().append("g")
    .attr("class", "node");

node.append("circle")
    .attr("r", 5);

node.append("text")
    .attr("dy", ".31em")
    .attr("x", 10)
    .style("text-anchor", "start")
    .text(d => d.id);

let pinnedNode = null;

node.call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended));

function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
    d3.select(this).raise().attr("stroke", "black");
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = d.x;
    d.fy = d.y;
    d3.select(this).attr("stroke", null);
}

const simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links).id(d => d.id).distance(100))
    .force("charge", d3.forceManyBody().strength(-400))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", () => {
        if (pinnedNode) {
            pinnedNode.fx = pinnedNode.x;
            pinnedNode.fy = pinnedNode.y;
        }

        link.attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node.attr("transform", d => `translate(${d.x},${d.y})`);
    });
