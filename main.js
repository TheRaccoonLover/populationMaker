function updateFamilyTree() {
    var treeBox = document.querySelector('.treeBox');
    treeBox.innerHTML = "";

    var svg = d3.select('.treeBox')
        .append('svg')
        .attr('width', 300) 
        .attr('height', 200); 

    svg.append('text')
        .attr('x', 10)
        .attr('y', 30)
        .text('Family Tree')
        .style('font-size', '16px');

    var nodes = [
        { id: 0, name: 'Parent' },
        { id: 1, name: 'kid' }
    ];

    var links = [
        { source: 0, target: 1 }
    ];

    var simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id))
        .force('charge', d3.forceManyBody().strength(-500))
        .force('center', d3.forceCenter(150, 100));

    var link = svg.selectAll('.link')
        .data(links)
        .enter().append('line')
        .attr('class', 'link');

    var node = svg.selectAll('.node')
        .data(nodes)
        .enter().append('circle')
        .attr('class', 'node')
        .attr('r', 20)
        .attr('fill', 'white');

    simulation.on('tick', function () {
        link.attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node.attr('cx', d => d.x)
            .attr('cy', d => d.y);
    });
}

document.querySelector('button').addEventListener('click', updateFamilyTree);
