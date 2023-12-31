// service_image: '*****',
// service_nome: 'Anúncios Pagos',
// first_service: 'Gestão de Tráfego',
// second_service: 'Maior Presença Online',
// third_service: 'Reconhecimento da Marca'

servico = [
    {
        service_image: 'serviceImg1.png',
        service_nome: 'Anúncios Pagos',
        service: [
            'Gestão de Tráfego',
            'Maior Presença Online',
            'Reconhecimento da Marca'
        ]
    },
    
]



function divService(imagem, nome){

    let banner = document.querySelector('.banner');
    let divIMG = document.createElement('div');
    let divtext = document.createElement('div');
    let divList = document.createElement('div');

    let h1 = document.createElement('h1');
    let h3 = document.createElement('h3');

    let img = document.createElement('img');

    let cth3;


    img.src = `./assets/images/services/${imagem}`;
    img.alt = `${nome}`;

    h1.innerHTML = nome;



    



    divIMG.classList.add('img');
    divtext.classList.add('text');
    divList.classList.add('list');

    divIMG.appendChild(img);
    divtext.appendChild(h1);
    divtext.appendChild(divList);


    
    servico.forEach(element => {
        elemento = h3;
        for(j of element.service){
            elemento.innerHTML = '<span>*</span> ' + j
            // elemento = '<span>*</span> ' + j
            // console.log(elemento)
            // h3 = elemento;
            divList.appendChild(h3);
            console.log(divList)

        }
    })
    
    
    
    
    
    banner.appendChild(divIMG);
    banner.appendChild(divtext);

    return banner;

}


function services(){
    servico.forEach(element => {

        // for(j of element.service){
        //     console.log(j)
        // }

        divService(element.service_image, element.service_nome);

        // console.log(element.service);
        
    });
}

services();