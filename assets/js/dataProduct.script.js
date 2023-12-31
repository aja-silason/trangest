let databaseItems = [
    {
        img: 'images.png',
        status: 'A venda',
        articleName: 'CANTER ISUZU',
        price: '30.000.000,00',
        comission: '2.000.000,00',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, fugiat dolorum minima porro exercitationem officiis cumque dolorem eum? Earum adipisci veritatis laboriosam harum consequatur voluptatem sapiente alias animi. Maxime, consequatur?',
        contact: '938 916 226 | 954 066 554',
        opacidade: 'on',
        id: 1
    }
]

function criarParagrafo(elemento, descricao, valor){
  let pegaElemento = document.createElement(`${elemento}`);
  pegaElemento.innerHTML = `<strong>${descricao}</strong> ${valor}`;
  return pegaElemento;
}

function criarDiv(el, generalContainer){

  const banner = document.querySelector('.bannerCarrossel');


  const divConteudo = document.createElement('div');
  const divImg = document.createElement('div');
  const h3 = document.createElement('h3');
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
 
  const preco = criarParagrafo('p', 'Preço:', el.price);
  const comissao = criarParagrafo('p', 'Comissão:', el.comission);
  const descricao = criarParagrafo('p', '', el.description);
  const contacto = criarParagrafo('p', 'Contacto:', el.contact);

  const a = document.createElement('a');

  divImg.classList.add('imageCarrossel');
  divConteudo.classList.add('conteudoCarrossel');

  let pathImg = './assets/images/';
  img.src = pathImg+el.img;
  

  h3.innerText = el.status;
  h2.innerText = el.articleName; 

  a.innerText = 'Saber mais..'
  // a.target = '_blank'
  // a.href = `?${el.articleName}_${el.id}`.replace(' ','_').toLocaleLowerCase();
  a.href = './product.html';

  


  divImg.appendChild(img);
  divConteudo.appendChild(h3);
  divConteudo.appendChild(h2);
  divConteudo.appendChild(preco);
  divConteudo.appendChild(comissao);
  divConteudo.appendChild(descricao);
  divConteudo.appendChild(contacto);
  divConteudo.appendChild(a);

  generalContainer.appendChild(divImg);
  generalContainer.appendChild(divConteudo);
  
  banner.appendChild(generalContainer);

}


function createCarouselItems(items) {
  const container = document.querySelector('.itemCarrossel');
  const banner = document.querySelector('.bannerCarrossel');


  let btn = document.createElement('button');
  let btnNxt = document.createElement('button');

  btn.innerHTML = '&leftarrow;';
  btn.classList.add('prev');
  btnNxt.innerHTML = '&rightarrow;';
  btnNxt.classList.add('next');

  banner.appendChild(btn);

  items.forEach(item => {
    criarDiv(item, container);

  });

  banner.appendChild(btnNxt);


  console.log(items);

  }

//createCarouselItems(databaseItems);



  



  // Função para inicializar o carrossel
  function initCarousel() {
    createCarouselItems(databaseItems);
  
    const slides = document.querySelectorAll('.itemCarrossel');
    let slideIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
      });
    }
  
    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
      console.log('clicado')
    }
  
    function prevSlide() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
      console.log('clicado')
    }
  
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  
    showSlide(slideIndex);
  }
  
  // Inicializar o carrossel ao carregar a página
  window.addEventListener('load', initCarousel);
