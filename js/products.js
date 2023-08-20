//URL que contiene los datos
const URL = 'https://japceibal.github.io/emercado-api/cats_products/101.json';

//Variable creada para contener el div 'list-container'
const listContainer = document.getElementsByClassName('list-container');

//Funcion que hace el fetch de la url
async function getJsonData(url) {
    const response = await fetch(url);
    const data = await response.json();
    showData(data.products);
};

getJsonData(URL)

//Funcion que muestra los datos
function showData(dataArray) {
    for(const item of dataArray) {
        listContainer[0].innerHTML += `
        <div  class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                    <img src="${item.image}" alt="Imagen del modelo ${item.name}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${item.name} - USD ${item.cost}</h4>
                            <small class="text-muted">${item.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${item.description}</p>
                    </div>
                </div>
            </div>
        `;
    }
}