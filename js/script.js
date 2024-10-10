    function konversiCtoF()
        {
          var tempCelcius = document.getElementById("celcius").value;
          var tempFahrenheit = (tempCelcius * (9 / 5 )) + 32;
          document.getElementById("fahrenheit").value = tempFahrenheit;
          document.getElementById("kalkulasi").value = tempFahrenheit + " = ("+ tempCelcius + " * (9 / 5) + 32 ";
        }
    
    function konversiFtoC()
        {
          var tempFahrenheit = document.getElementById("fahrenheit").value;
          var tempCelcius = (tempFahrenheit - 32 ) * (5 / 9);
          document.getElementById("celcius").value = tempCelcius;
          document.getElementById("kalkulasi").value = tempCelcius + " = ("+ tempFahrenheit + " - 32) * (5 / 9) ";
        }
        
    function reset() 
        {
          document.getElementById('celcius').value = '';
          document.getElementById('fahrenheit').value = '';
          document.getElementById('kalkulasi').value = '';
        }
    function reverse()
        {
          var tempFahrenheit = document.getElementById("fahrenheit").value;
          var tempCelcius = document.getElementById("celcius").value;
          document.getElementById("celcius").value = tempFahrenheit;
          this.konversiCtoF();
        }