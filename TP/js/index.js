
  /*validaciones de formulario*/
  var validado = false;
  let tarifaFinal;
  function validaciones() {
    // obtenemos todos los input radio de tipo de usuario que esten chequeados
    // si no hay ninguno lanzamos alerta
    tipoUsuario = document.querySelector('input[name="user"]:checked'); 
    if(!tipoUsuario) {
      alert('Seleccione tipo de usuario ');
      return
    } 
  
    //alerta para seleccionar zona, tiene que ser distinta a la que esta seleccionada
    selectZone = document.getElementById('zone');
    if(selectZone.value == 0 ) {
      alert('Seleccione la zona a la que pertenece');
      return
    } 
    
    //alerta para que ingrese cantidad de kWh
    kWh = document.getElementById('kWhValue').value;
    if( kWh <= 0 ) {
      alert('Ingrese una cantidad valida');
      return
    }else{
      
      validado = true;
    }
    calculadora()
  };

  function calculadora() {
    if (validado == true){
      tipoUsuario = document.querySelector('input[name="user"]:checked');
      if (tipoUsuario.value == 1){
        iva = 0.21;
      } else{
        iva = 0.27;
      }
      zona = document.getElementById('zone');
      costoZona =[0, 5.80, 5.40, 5.35, 5.60]

      kWhConsumido = document.getElementById('kWhValue').value;
      const costoServicio = 102;
      tarifaFinal = costoServicio + kWhConsumido * costoZona[zona.value] * (1 + iva);

    }

    let tarifa = document.getElementById('resultado');
    tarifa.innerText = "$" + tarifaFinal;

  };