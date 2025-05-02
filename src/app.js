let pronombres = ['the', 'our'];
let adjs = ['great', 'big'];
let nombres = ['jogger', 'racoon'];
let ext = ['.com', '.es'];
  //write your code here
const lista = document.getElementById("url")
lista.innerHTML = ""
for (let inicio of pronombres){
   for (let medio of adjs){
     for (let fin of nombres){
       for (let puntos of ext){
        let dominios = "www." + inicio + medio + fin + puntos   
            console.log (dominios)
            const items = document.createElement ("li")
            items.textContent = dominios
            lista.appendChild (items)
        };
      };
    };
  };
  