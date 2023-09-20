/*  
leer un conjunto de datos enteros que se complete una cantidad N previamente
ingresada por el operador o cuando un dato sea superior a 1000 y par. Se pide calcular 
y mostrar:
a) El promedio de los multiplos de 5.
b) El porcentaje de los multiplos de 3.
c) La cantidad de datos que sean multiplos de 3 y 5 simultaneamente.

*/

/* 

1. Inicializar variables:
   - sumaMultiplos5 a 0
   - totalMultiplos3 a 0
   - totalMultiplos3y5 a 0
   - totalDatos a 0

2. Solicitar al usuario la cantidad N de datos a ingresar y almacenarla en la variable N.

3. Mientras totalDatos sea menor que N:
   a. Solicitar al usuario un dato y almacenarlo en la variable dato.
   b. Incrementar totalDatos en 1.
   
   c. Verificar si dato es mayor que 1000 y par:
      - Si es así, salir del bucle.
   
   d. Calcular el promedio de los múltiplos de 5:
      - Si dato es múltiplo de 5, agregar dato a sumaMultiplos5.
   
   e. Verificar si dato es múltiplo de 3:
      - Si es así, incrementar totalMultiplos3 en 1.
   
   f. Verificar si dato es múltiplo de 3 y 5 simultáneamente:
      - Si es así, incrementar totalMultiplos3y5 en 1.

4. Calcular el promedio de los múltiplos de 5:
   - promedioMultiplos5 = sumaMultiplos5 / totalDatos

5. Calcular el porcentaje de los múltiplos de 3:
   - porcentajeMultiplos3 = (totalMultiplos3 / totalDatos) * 100

6. Mostrar los resultados:
   - Promedio de múltiplos de 5: promedioMultiplos5
   - Porcentaje de múltiplos de 3: porcentajeMultiplos3%
   - Cantidad de datos que son múltiplos de 3 y 5 simultáneamente: totalMultiplos3y5


   llamar a la app()
*/
