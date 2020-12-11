/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/* NO TOCAR SI NO SE ENTIENDE */
/* lo que hace es conmutar entre dos estados la barra de navegación
   en uno de ellos "topnav" se ve la barra a lo ancho (al inicio)
   en el otro "topnav responsive" se ve la barra plegada y el icono
   de hamburguesa */
   
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

 

