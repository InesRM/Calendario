
function calcTable(year) {

    let arr = new Array(12);
    for (let x = 0; x < arr.length; x++) {
        arr[x] = new Array(6);

    }

    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr[x].length; y++) {
            arr[x][y] = new Array(7);
        }
    }

    for (let month = 0; month < arr.length; month++) {
        // calculo para saber el dia de la semana en que empieza el mes

        let startDayInWeek = new Date(year, month, 0).getDay() + 1;
      //calculo para saber cuantos dias tiene el mes

        let monthLong = new Date(year, month + 1,0).getDate() + 1;


//console.log(monthLong)

// el contador nos servirá para representar a cualquier mes que empieza en el día 1

        let beforCount = 0;
        let counter = 1;
        let startCount = false;

//esto determinará qué día de la semana comenzar a contar los días del mes
        for (let x = 0; x < arr[month].length; x++) {
            for (let y = 0; y < arr[month][x].length; y++) {



                if (beforCount == startDayInWeek) {
                    startCount = true;
                } else {
                    beforCount++;
                }


                if (startCount == true) {

                    arr[month][x][y] = counter;
                    counter++;

                } else {
                    arr[month][x][y] = "";
                }

                if (counter > monthLong) {
                    arr[month][x][y] = "";

                }




            }

        }
    }

    return arr;
}

module.exports = calcTable;