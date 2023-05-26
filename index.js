const container = document.getElementById('container');

let pixel_numbers = 16;
let color = [ 'darkseagreen', 'hsl(56, 38%, 70%)', 'teal', 'lightseagreen', 'dimgray', 'darkslategray' ];

let change = false;


let board = document.createElement('div');
let smallboard = document.createElement('div');
let control_section = document.createElement('div');
let board_theme = document.createElement('button');
let pen = document.createElement('button');
let rainbow_pen = document.createElement('button');
let resize = document.createElement('button');
let reset = document.createElement('button');
let erase = document.createElement('button');


board_theme.innerText = 'New theme';
pen.innerText = 'Pen';
rainbow_pen.innerText = 'Rainbow Pen';
resize.innerText = 'Resize';
reset.innerText = 'Reset';
erase.innerText = 'Erase / Delete';

board.classList.add('board');
smallboard.classList.add('smallboard');
control_section.classList.add('control');

control_section.appendChild(board_theme);
control_section.appendChild(pen);
control_section.appendChild(rainbow_pen);
control_section.appendChild(resize);
control_section.appendChild(reset);
control_section.appendChild(erase);

// generate grid for drawing on board
for (let i = 0; i < pixel_numbers; i++)
{
    for (let j = 0; j < pixel_numbers; j++)
    {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        // console.log("created pixel: [", i, "]", "[", j, "]");

        board.appendChild(grid);
    }
}

// generate grid for small Board
for (let i = 0; i < 32; i++)
{
    for (let j = 0; j < 32; j++)
    {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        // console.log("created pixel: [", i, "]", "[", j, "]");
        grid.style.padding = `0.5rem`;

        smallboard.appendChild(grid);
    }
}



container.appendChild(board);
container.appendChild(control_section);

//................ Drawing functionality ............................
// -> change the color of board by user/ designer
let theme = (e) =>
{
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * color.length);
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid =>
    {
        grid.style.backgroundColor = color[ randomNumber ];
    });
}

board_theme.addEventListener('click', theme);

// -> choose the color of the pen

// -> rainbow pen

// -> resize the boarder
let changeSize = (e) =>
{
    change = !change;

    container.removeChild(control_section);
    if (change === true)
    {

        e.preventDefault();
        container.removeChild(board);
        container.appendChild(smallboard);
        container.appendChild(control_section);
    } else
    {

        e.preventDefault();
        container.removeChild(smallboard);
        container.appendChild(board);
        container.appendChild(control_section);
    }

}
resize.addEventListener('click', changeSize);

// -> reset/ erase everything writen on the board
// -> erase on the board