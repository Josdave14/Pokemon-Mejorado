var nom ;
var vidaPoke; ///= Math.floor(Math.random() * 41) + 70;
var ataPoke;  ///=  Math.floor(Math.random() * 51) + 50;
var op,yo;	// var imagen=document.createElement("img");
var poke,poke2;
var max=9,min=0;
var oponente;
var turno = 0;
var r=1;
var informe;

function Pokemon(n,v,a,g)
{

	this.grito = g;
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function()
	{
		var gritoPok = ["Pika","Bulba", "Rat","Charm","Squi","Alaka","Dewg","On","Metal","Cra"];
		alert(gritpPok[this.grito]);
	}
}

function inicio()
{
	yo=document.getElementById("nomPa");
	op=document.getElementById("listaPoke")

	var b = document.getElementById("botoncito");
	b.addEventListener("click",juego);

	var b = document.getElementById("ata");
	b.addEventListener("click",ataque);
	// op = prompt("Elige un Pokemon para la batala:\n\n "+
	// "1- Pikachu\n2- Bulbasaur\n3- Rattata\n4- Charmelon\n5- Squirtle\n6- Alakasam\n7- Dewgong\n8- Onix\n9- Articuno\n10- Groudon");
	nom = ["Pikachu", "Bulbasaur", "Rattata","Charmeleon","Squirtle","Alakazam","Dewgong","Onix","Articuno","Groudon"];
	function juego()
	{
		
		vidaPoke=100;
		ataPoke = [50,60,70,80,90,100,40,110,30,20];
		poke = new Pokemon(op.options[op.selectedIndex].value,vidaPoke,ataPoke[op.selectedIndex],op.selectedIndex);
		nomParticipa.innerText = yo.value;
		nombrePokemon.innerText =  poke.nombre;
		datosPokemon.innerText = "Vida: " + poke.vida + "\nAtaque: " + poke.ataque;
		fotoPoke.setAttribute("src", "imagen/"+op.options[op.selectedIndex].value+".jpg");

		oponente = Math.floor(Math.random() * (max - min + 1) + min);

		poke2 = new Pokemon(nom[oponente],vidaPoke,ataPoke[oponente],oponente);
		nomParticipa2.innerText = "Computer";
		nombrePokemon2.innerText = poke2.nombre;
		datosPokemon2.innerText = "Vida: " + poke2.vida + "\nAtaque: " + poke2.ataque;
		fotoPoke2.setAttribute("src", "imagen/"+nom[oponente]+".jpg");
	}

	function ataque()
	{
		r=1;
		sec=document.getElementById("round");
		sec.innerHTML="";

		do
		{
		var vidaUno=poke.vida,vidaDos=poke2.vida;

		if(turno==0)
		{
			sec.innerHTML += "Round: "+ r +" Turno es para "+yo.value+"</br>";   ///alert("Turno es para "+yo);
			if(vidaDos >0)
			{
				poke2.vida -= poke.ataque;
				vidaDos=poke2.vida
				if(vidaDos<0)
				{
					poke2.vida=0
				}
				datosPokemon2.innerText = "Vida: " + poke2.vida + "\nAtaque: " + poke2.ataque;
				turno=1;
				r++;
			}
			else
			{
				poke.vida=0;
			}

		}
		else
		{
			sec.innerHTML += "Round "+ r +" Turno es para Computer"+"</br>";  
			if(vidaUno >0)
			{
				poke.vida=poke.vida-poke2.ataque;
				vidaUno=poke.vida
				if(vidaUno<0)
				{
					poke.vida=0
				}
				datosPokemon.innerText = "Vida: " + poke.vida + "\nAtaque: " + poke.ataque;
				turno=0;
				r++;
			}
			else
			{
				poke2.vida=0;
			}

		}
		}while(vidaUno>0 && vidaDos>0);

		if(poke2.vida>poke.vida)
		{
			sec.innerHTML += "Computer GANA!!! " ;
		}
		else
		{
			sec.innerHTML += yo.value+" GANA!!! ";
		}
	}

}


// poke.nombre = nom[op-1];
// poke.vida = vidaPoke;
// poke.ataque = ataPoke;
// poke.grito = 

// var pikachu = new Pokemon("Pikachu",100, 55);
// pikachu.vida = pikachu.vida - 13
// ///pikachu.gritar();

// function inicio()
// {
// 	var rattata = new Pokemon("Rattata",40, 2);
// 	rattata.vida = rattata.vida - 13
// 	// rattata.grito = "Paredes !!!!"
// 	// rattata.gritar(;
// 	nombrePokemon.innerText = rattata.nombre;
// 	datosPokemon.innerText = 
// }


// // Asignacion por valor
// // Asignación por referencia

// function Pokemon(nomPoke, vidaPoke, ataPoke)
// {
// 	var estructuraPokemon =
// 	{
// 		nombre: nomPoke,
// 		vida: vidaPoke,
// 		ataque: ataPoke,
// 		datos: {tipo: "Tierra", debilidad: "Fuego"}
// 	};
// 	return estructuraPokemon;
// }


// var pikachu = Pokemon("Pikachu",100,55);
// var bulbasaur = Pokemon("Bulbasaur",90,50);

// console.log(bulbasaur);

//document.write(bulbasaur.nombre);

///DOCUMENT OBJECT MODEL
//Objeto
// Variable
// Funciones

// document.write("Hola Mam");

// var pi=3.141592654;
// pi=Math.floor(pi);
// document.write(pi);

// var maxima;
// maxima = Math.max(5,23,4,12,23,24,100);
// document.write(maxima);


