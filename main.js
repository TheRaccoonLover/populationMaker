function updateFamilyTree() {
    var treeBox = document.querySelector('.treeBox');
    treeBox.innerHTML = "";

    // Create a new family tree graph using D3.js
    var svg = d3.select('.treeBox')
        .append('svg') // Makes the svg
        .attr('width', 300)  // Set the width of the SVG
        .attr('height', 200); // Set the height of the SVG

    // Add a text element to the SVG with the family tree information, to remove later
    svg.append('text')
        .attr('x', 10) // Where the text is placed
        .attr('y', 30) // Where the text is placed
        .text('Family Tree') // The label for the tree, remove later
        .style('font-size', '16px'); // font size

    // Add two nodes
    var nodes = [
        { id: 0, name: 'Parent' }, //Basic node setup
        { id: 1, name: 'kid' }
    ];

    // Add one link between the nodes
    var links = [
        { source: 0, target: 1 } //I think this is supposed to be a line? Idk, just copied off the internet
    ];

    // Create a force simulation
    var simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id)) //Don't even ask
        .force('charge', d3.forceManyBody().strength(-500)) //Strength between nodes, higher strength closer together, you can figure out what lower strength does
        .force('center', d3.forceCenter(150, 100)); //Where the center is? Idk, it's midnight and I'll tinker with this tomorrow if I can get a break from fortnite.

    // Add links
    var link = svg.selectAll('.link')
        .data(links)
        .enter().append('line') //Just skip past this
        .attr('class', 'link');

    // Add nodes
    var node = svg.selectAll('.node')
        .data(nodes)
        .enter().append('circle') //Makes the node a circle or something
        .attr('class', 'node') 
        .attr('r', 20) //The radius of the circle, pretty self explanatory
        .attr('fill', 'white'); //Fills the circle with white, duh

    // Update node and link positions during simulation
    simulation.on('tick', function () {
        link.attr('x1', d => d.source.x) //Where the node is and where it wants to be maybe?
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node.attr('cx', d => d.x)
            .attr('cy', d => d.y);
    });
}

// Attach the updateFamilyTree function to the button click event
document.querySelector('button').addEventListener('click', updateFamilyTree);
