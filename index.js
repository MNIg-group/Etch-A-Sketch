const container = document.getElementById('container');

let pixel_numbers = 16;
let color = [ 'darkseagreen', 'hsl(56, 38%, 70%)', 'teal', 'lightseagreen', 'dimgray', 'darkslategray' ];
let penColor = `#333`;

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
pen.classList.add('pen');

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

//................ Drawing functionality .....................................................................
// -> change the color of board by user/ designer ..............................................
let theme = (e) =>
{
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * color.length);
    board.style.backgroundColor = color[ randomNumber ];
    smallboard.style.backgroundColor = color[ randomNumber ];
}

board_theme.addEventListener('click', theme);

// -> choose the color of the pen ..........................................................
let pen_choice = document.createElement('div');
let black_pen = document.createElement('button');
let white_pen = document.createElement('button');

pen_choice.classList.add('pen_choice');
pen_choice.classList.add('visibility');
white_pen.classList.add('white_pen');
white_pen.innerText = 'White';
black_pen.classList.add('black_pen');
black_pen.innerText = 'Black';

pen_choice.appendChild(white_pen);
pen_choice.appendChild(black_pen);

control_section.appendChild(pen_choice);

//toggle visibility function
pen.addEventListener('click', () =>
{
    pen_choice.classList.toggle('visibility');
});
white_pen.addEventListener('click', () =>
{
    penColor = `#f8f8ff`;

    pen_choice.classList.toggle('visibility');
});
black_pen.addEventListener('click', () =>
{
    penColor = `#333`;
    pen_choice.classList.toggle('visibility');
});

let grids = document.querySelectorAll('.grid');

grids.forEach(grid => 
{
    grid.addEventListener('dragover', () => 
    {
        grid.style.backgroundColor = penColor
    });
});



// -> rainbow pen ...............................................................................................

// -> resize the boarder .........................................................................................
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

// -> reset/ erase everything written on the board .......................................................
// -> erase on the board .................................................................................