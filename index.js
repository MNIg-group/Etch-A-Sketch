const form = document.getElementById('form');
const container = document.getElementById('container');
const pixels_input = document.getElementById('pixels');

form.onsubmit = (e) =>
{
    e.preventDefault();
    const px1 = document.getElementById('px1').value;
    const px2 = document.getElementById('px2').value;

    if (px1 != '' && px2 != '')
        if (px1 > 0 && px2 > 0)
        {

            pixels_input.classList.toggle('visibility');
            container.classList.toggle('visibility');


            let color = [ 'darkseagreen', 'hsl(56, 38%, 70%)', 'teal', 'lightseagreen', 'dimgray', 'darkslategray' ];
            let penColor = `#333`;



            let board = document.createElement('div');
            let control_section = document.createElement('div');
            let board_theme = document.createElement('button');
            let pen = document.createElement('button');
            let rainbow_pen = document.createElement('button');
            let newBoard = document.createElement('button');
            let reset = document.createElement('button');
            let erase = document.createElement('button');


            board_theme.innerText = 'New theme';
            pen.innerText = 'Pen';
            rainbow_pen.innerText = 'Rainbow Pen';
            newBoard.innerText = 'Add Board';
            reset.innerText = 'Reset';
            erase.innerText = 'Erase / Delete';

            board.classList.add('board');
            control_section.classList.add('control');
            pen.classList.add('pen');

            control_section.appendChild(board_theme);
            control_section.appendChild(pen);
            control_section.appendChild(rainbow_pen);
            control_section.appendChild(newBoard);
            control_section.appendChild(reset);
            control_section.appendChild(erase);



            board.style = `grid-template-columns: repeat(${ px1 }, 1fr);`

            // generate grid for drawing on board
            if (px1 > 21)
            {
                for (let i = 0; i < px1; i++)
                {
                    for (let j = 0; j < px2; j++)
                    {
                        let grid = document.createElement('div');
                        grid.classList.add('grid');
                        grid.style.padding = `0.3rem`;
                        board.style.padding = `0.3rem`;
                        // console.log("created pixel: [", i, "]", "[", j, "]");

                        board.appendChild(grid);
                    }
                }
            } else if (px1 > 64)
            {
                for (let i = 0; i < px1; i++)
                {
                    for (let j = 0; j < px2; j++)
                    {
                        let grid = document.createElement('div');
                        grid.classList.add('grid');
                        grid.style.padding = `0.1rem`;
                        board.style.padding = `0.1rem`;
                        // console.log("created pixel: [", i, "]", "[", j, "]");

                        board.appendChild(grid);
                    }
                }
            } else
            {
                for (let i = 0; i < px1; i++)
                {
                    for (let j = 0; j < px2; j++)
                    {
                        let grid = document.createElement('div');
                        grid.classList.add('grid');
                        // console.log("created pixel: [", i, "]", "[", j, "]");

                        board.appendChild(grid);
                    }
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

                localStorage.setItem('color', color[ randomNumber ]);
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
                grid.addEventListener('mousedown', () =>  
                {
                    grid.style.backgroundColor = penColor
                });
            });



            // -> rainbow pen ...............................................................................................

            // -> newBoard the boarder .........................................................................................

            newBoard.addEventListener('click', () =>
            {
                pixels_input.classList.toggle('visibility');
                container.classList.toggle('visibility');
            })
            // -> reset/ erase everything written on the board .......................................................
            reset.addEventListener('click', () =>
            {
            let color = localStorage.getItem('color');
            console.log(color);
            })
            // -> erase on the board .................................................................................

        }
}
