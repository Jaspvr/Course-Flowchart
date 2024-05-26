// Some courses (to test)
const data = {
    nodes: [

        { id: "Software Engineering", x: 300, y: -100 },

        //1A
        { id: "MATH100/MATH109", x: 150, y: 200 },
        { id: "MATH101", x: 100, y: 300 },
        { id: "PHYS110", x: -80, y: 200 },
        { id: "MATH110", x: 50, y: 200 },
        { id: "CSC111", x: 700, y: 100 },

        //1B
        { id: "CSC115/CSC116", x: 600, y: 160 },
        { id: "ENGR110", x: -200, y: 120 },
        { id: "ENGR120", x: -200, y: 200 },
        { id: "ENGR130", x: 400, y: 0 },
        //{ id: "CO-OP 1", x: 500, y: 0 },

        //2A
        { id: "ECE255", x: 840, y: 260 },
        { id: "CSC230", x: 870, y: 320 },
        { id: "ECE260", x: -160, y: 400 },
        { id: "MATH122", x: 200, y: 300 },
        { id: "SENG265", x: 600, y: 260 },
        { id: "STAT260", x: 150, y: 380 },
        //{ id: "Complementary Studies Elective", x: 700, y: 400 },

        //Co-op
       // { id: "ENGR002", x: 200, y: 0 },

        //2B Summer
        { id: "CSC225", x: 400, y: 350 },
        { id: "ECON180", x: -50, y: 400 },
        { id: "ECE310", x: -350, y: 500 },
        { id: "SENG275", x: 530, y: 370 },
        { id: "SENG310", x: 650, y: 300 },
        //{ id: "Complementary Studies Elective", x: 700, y: 500 },

        //Co-op
        //{ id: "ENGR003", x: 300, y: 0 },

        //3A Spring
        { id: "ECE363", x: 980, y: 340 },
        { id: "CSC361", x: 860, y: 410 },
        { id: "CSC226", x: 370, y: 410 },
        { id: "ECE360", x: -300, y: 600 },
        { id: "SENG321", x: 600, y: 600 },
        { id: "SENG371", x: 500, y: 460 },
        //{ id: "Natural Science Elective", x: 800, y: 600 },

        //Co-op
        //{ id: "ENGR004", x: 400, y: 0 },

        //3B Fall
        { id: "ECE355", x: 700, y: 600 },
        { id: "CSC355", x: 300, y: 700 },
        { id: "CSC320", x: 365, y: 480 },
        { id: "CSC360", x: 520, y: 590 },
        { id: "CSC370", x: 600, y: 700 },
        { id: "SENG350", x: 400, y: 580 },
        { id: "SENG360", x: 900, y: 700 },

        //4A Summer
        { id: "SENG426", x: 180, y: 60 },
        { id: "SENG440", x: 300, y: 800 },
        { id: "SENG499", x: 730, y: 800 },
        //{ id: "Technical Elective", x: 500, y: 800 },
        //{ id: "Technical Elective", x: 600, y: 800 },

        //4B Spring
        { id: "ECE455", x: 200, y: 900 },
        { id: "CSC460", x: 300, y: 900 },
        { id: "SENG401", x: 400, y: 900 },
        // { id: "Software Engineering" },

        // //1A
        // { id: "MATH100/MATH109" },
        // { id: "MATH101" },
        // { id: "PHYS110" },
        // { id: "MATH110" },
        // { id: "CSC111" },

        // //1B

        // { id: "CSC115/CSC116" },
        // { id: "ENGR110" },
        // { id: "ENGR120" },
        // { id: "ENGR130" },
        // { id: "CO-OP 1" },


        // //2A
        // { id: "ECE255" },
        // { id: "CSC230" },
        // { id: "ECE260" },
        // { id: "MATH122" },
        // { id: "SENG265" },
        // { id: "STAT260" },

        // //Co-op
        // { id: "ENGR002" },

        // //2B Summer
        // { id: "CSC225" },
        // { id: "ECON180" },
        // { id: "ECE310" },
        // { id: "SENG275" },
        // { id: "SENG310" },


        // //Co-op
        // { id: "ENGR003" },

        // //3A Spring
        // { id: "ECE363" },
        // { id: "CSC361" },
        // { id: "CSC226"},
        // { id: "ECE360"},
        // { id: "SENG321"},
        // { id: "SENG371"},


        // //Co-op
        // { id: "ENGR004" },

        // //3B Fall
        // { id: "ECE355"},
        // { id: "CSC355"},
        // { id: "CSC320"},
        // {id: "CSC360"},
        // {id: "CSC370"},
        // {id: "SENG350"},
        // {id: "SENG360"},


        // //4A Summer
        // {id: "SENG426"},
        // {id: "SENG440"},
        // {id: "SENG499"},


        // //4B Spring
        // {id: "ECE455"},
        // {id: "CSC460"},
        // {id: "SENG401"},
        

        // electives
        // { id: "Comp Studies Elec 1" },
        // { id: "Comp Studies Elec 2" },

        // { id: "Nat Sci Elec 1"},
        // { id: "Nat Sci Elec 2"},
        // { id: "Nat Sci Elec 3"},

        // {id: "Tech Elec 1"},
        // {id: "Tech Elec 2"},
        // {id: "Tech Elec 3"},
        // {id: "Tech Elec 4"},
        // {id: "Tech Elec 5"},






    ],

    links: [
        { source: "Software Engineering", target: "MATH100/MATH109" },
        { source: "Software Engineering", target: "PHYS110" },
        { source: "Software Engineering", target: "MATH110" },
        { source: "Software Engineering", target: "CSC111" },
        { source: "Software Engineering", target: "ENGR110" },
        { source: "Software Engineering", target: "ENGR130" },


        { source: "MATH100/MATH109", target: "MATH101" },
        { source: "CSC111", target: "CSC115/CSC116"},
        { source: "ENGR110", target: "ENGR120" },

        { source: "CSC111", target: "ECE255" },
        { source: "CSC115/CSC116", target: "CSC230" },
        { source: "MATH101", target: "STAT260" },
        { source: "MATH101", target: "ECE260" },
        { source: "MATH110", target: "ECE260" },
        { source: "MATH100/MATH109", target: "MATH122" },
        { source: "CSC115/CSC116", target: "SENG265" },


        //2B
        { source: "CSC115/CSC116", target: "CSC225" },
        { source: "MATH122", target: "CSC225" },
        { source: "MATH101", target: "ECON180" },
        { source: "ECE260", target: "ECE310" },
        { source: "SENG265", target: "SENG275" },
        { source: "SENG265", target: "SENG310" },


        //3A
        { source: "ECE255", target: "ECE363" },
        { source: "CSC230", target: "ECE363" },
        { source: "CSC230", target: "CSC361" },
        { source: "ECE255", target: "CSC361" },
        { source: "SENG265", target: "CSC361" },
        { source: "CSC226", target: "CSC361" },
        { source: "CSC225", target: "CSC226" },
        { source: "STAT260", target: "CSC226" },
        { source: "ECE260", target: "ECE360" },
        { source: "SENG265", target: "SENG321" },
        { source: "SENG275", target: "SENG371" },

        //3B
        { source: "MATH122", target: "ECE355" },
        { source: "ECE255", target: "ECE355" },
        { source: "CSC230", target: "ECE355" },
        { source: "CSC230", target: "CSC355" },
        { source: "ECE255", target: "CSC355" },
        { source: "MATH122", target: "CSC355" },
        { source: "CSC226", target: "CSC320" },
        { source: "CSC225", target: "CSC360" },
        { source: "SENG265", target: "CSC360" },
        { source: "CSC230", target: "CSC360" },
        { source: "ECE255", target: "CSC360" },
        { source: "CSC225", target: "CSC370" },
        { source: "SENG265", target: "CSC370" },
        { source: "SENG275", target: "SENG350" },
        { source: "SENG265", target: "SENG360" },
        { source: "CSC370", target: "SENG360" },
        { source: "CSC361", target: "SENG360" },
        { source: "ECE363", target: "SENG360" },


        //4A
        { source: "SENG321", target: "SENG426" },
        { source: "SENG371", target: "SENG426" },
        { source: "SENG275", target: "SENG426" },
        { source: "CSC355", target: "SENG440" },
        { source: "ECE355", target: "SENG440" },
        { source: "SENG350", target: "SENG499" },
        { source: "CSC361", target: "SENG499" },
        { source: "ECE363", target: "SENG499" },
        { source: "CSC370", target: "SENG499" },
        { source: "SENG321", target: "SENG499" },


        //4B
        { source: "ECE355", target: "ECE455" },
        { source: "CSC355", target: "ECE455" },
        { source: "CSC355", target: "CSC460" },
        { source: "ECE355", target: "CSC460" },
        { source: "CSC360", target: "CSC460" },
        { source: "Software Engineering", target: "SENG401" },



        //COOP
    ]
};


const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(d3.zoom().on("zoom", (event) => {
        svg.attr("transform", event.transform);
    }))
    .append("g")
    .attr("transform", "translate(50,50)");

    svg.append("defs").append("marker")
    .attr("id", "arrowhead")
    .attr("viewBox", "0 0 10 10")
    .attr("refX", 15) // Position the arrowhead at the end of the line
    .attr("refY", 5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 L 10 5 L 0 10 Z") // Arrowhead path
    .attr("class", "arrowhead");

const link = svg.selectAll(".link")
    .data(data.links)
    .enter().append("line")
    .attr("class", "link")
    .attr("marker-end", "url(#arrowhead)");

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


// Initialize nodes with preset positions
data.nodes.forEach(node => {
    node.fx = node.x;
    node.fy = node.y;
});