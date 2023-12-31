    // Estrutura de dados do menu (árvore)
const menuItens = [
{
label: 'Home',
link: '/'
},
{
label: 'Produtos',
children: [
  {
    label: 'Eletrônicos',
    children: [
      {
        label: 'Celulares',
        link: '/produtos/celulares'
      },
      {
        label: 'Computadores',
        link: '/produtos/computadores'
      }
    ]
  },
  {
    label: 'Roupas',
    link: '/produtos/roupas'
  }
]
},
{
label: 'Contato',
link: '/contato'
}
];


// Função para renderizar o menu recursivamente
function renderMenu(menu, items) {
    
const ul = document.createElement('ul');

items.forEach(item => {
const li = document.createElement('li');
const a = document.createElement('a');
a.innerText = item.label;

if (item.link) {
  a.href = item.link;
} else {
  a.href = '#'; // Se não houver um link, coloque um valor padrão
}

li.appendChild(a);

if (item.children) {
  li.appendChild(renderMenu(document.createElement('div'), item.children));
}

ul.appendChild(li);

});

menu.appendChild(ul)

return menu;
}

// Encontrar o elemento do menu no HTML e renderizar o menu

const menuElement = document.querySelector('.menu');; 
// menuElement.classList.add('menu');
renderMenu(menuElement, menuItens);