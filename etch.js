    createGrid(16);
    
    let currentGrid = 16;

    const buttonContainer = document.getElementById('buttonContainer');
    const clearButton = document.getElementById('clearButton');
    const setGridSize = document.getElementById('setGridSize');
    buttonContainer.appendChild(setGridSize);
    buttonContainer.appendChild(clearButton);

    document.getElementById('setGridSize').addEventListener('click', () => {
        let gridSize = prompt("Enter the number of squares per side of the grid (between 1 and 100).");

        gridSize = parseInt(gridSize);
        if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
            alert("Please enter a valid number between 1 and 100.");
            return;
        }
        currentGrid = gridSize;

        createGrid(gridSize);
    })


    function createGrid(gridSize) {
        const container = document.getElementById('container');
        container.innerHTML = '';
        

        const containerWidth = 960;
        const squareSize = containerWidth / gridSize;

        container.style.width = containerWidth + 'px';
        container.style.display = 'flex';
        container.style.flexwrap = 'wrap';

        container.style.boxSizing = 'border-box';

        for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        square.style.border = '1px solid, black';
        square.style.boxSizing = 'border-box';

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'rgba(255, 0, 43, 0.616)';
        });

        container.appendChild(square);
    }
    }

    document.getElementById('clearButton').addEventListener('click', () => {
        createGrid(currentGrid);
    });

    
