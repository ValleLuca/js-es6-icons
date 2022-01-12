const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let container = document.getElementById("container-box");				//Preso contenitore dal dom per poter inserire sucessivamente box al suo interno

icone.forEach((elemento) => {											//Stampa su dom box con icone colorate e testo
	container.innerHTML +=`
	<div class="col ${elemento.type}">
		<div class="d-flex text-center align-items-center flex-column p-2">
			<i class="fas fa-${elemento.name} fs-2" style="color: ${elemento.color}"></i>
			<p>${elemento.name}</p>
		</div>
	</div>
    `;
});

const selezione = document.getElementById("fxtipo");					//Preso id select per ottenere selezione di ricerca da parte dell'utente
selezione.addEventListener("change", myfunction);						//Aggiunto addEventListener per poter far scattare un'azione al cambio del menu da parte dell'utente

const animaliArr = icone.filter((element) =>  element.type == "animal");
const vegetableArr = icone.filter((element) =>  element.type == "vegetable");
const userArr = icone.filter((element) =>  element.type == "user");
/*console.log(animaliArr.value);
console.log(vegetableArr.type);
console.log(userArr.type);*/



function myfunction() {
	let dato = selezione.value;
	console.log(dato);
	console.log(animaliArr.type);
	if(dato == "animal")
	{
		animaliArr.forEach((elemento) => {											
			container.innerHTML +=`
			<div class="col ${elemento.type}">
				<div class="d-flex text-center align-items-center flex-column p-2">
					<i class="fas fa-${elemento.name} fs-2" style="color: ${elemento.color}"></i>
					<p>${elemento.name}</p>
				</div>
			</div>
			`;
		});
	}
	elseif(dato == "vegetable")																		//questo maledetto di da sempre errore "Uncaught ReferenceError: elseif is not defined"
	{
		vegetableArr.forEach((elemento) => {											
			container.innerHTML +=`
			<div class="col ${elemento.type}">
				<div class="d-flex text-center align-items-center flex-column p-2">
					<i class="fas fa-${elemento.name} fs-2" style="color: ${elemento.color}"></i>
					<p>${elemento.name}</p>
				</div>
			</div>
			`;
		});
	}
	elseif(dato == "user")
	{
		userArr.forEach((elemento) => {											
			container.innerHTML +=`
			<div class="col ${elemento.type}">
				<div class="d-flex text-center align-items-center flex-column p-2">
					<i class="fas fa-${elemento.name} fs-2" style="color: ${elemento.color}"></i>
					<p>${elemento.name}</p>
				</div>
			</div>
			`;
		});
	}
	console.log(dato);
	return;
};

//