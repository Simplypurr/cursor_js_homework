// version 1
function generateBlock(quantity = 25, inClassElement = '.wrapper', className = 'inner-block') {
    const inside = document.querySelector(inClassElement);
    const blocks = [...Array(quantity)].map((item) => document.createElement('div'));
    setInterval(() => {
        blocks.map((item) => {
            item.setAttribute('class', className);
            item.style.backgroundColor = generateHexColor();
        });
        inside.append(...blocks);
    },1000);
}


// version 2
function generateBlocks(quantity = 25) {
    const getTemplate = (color) => `<div class="inner-block" style="background-color: ${color}"></div>`;
    const inside = document.querySelector('.wrapper');
    const blocks = [...Array(quantity)].map(() => document.createElement('div'));
    setInterval(() => {
        const htmlString = blocks.reduce((acc, _) => acc + getTemplate(generateHexColor()),'')
        inside.innerHTML = htmlString;
    },1000);
}

function generateHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



generateBlocks();
generateBlock(25, '.wrapper-2', 'another-inner-block');
