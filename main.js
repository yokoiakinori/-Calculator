$(document).ready(function () {
    var inputNumber = $('#resultForm').text();
    var firstNumber;// before
    var secondNumber;// after
    var reservationWord;// EXP: + - × ÷

    for (let x = 0; x < 10; x++) {
        $(`#number${x}`).click(function(){
            var number = x;
            if (inputNumber == 0) {
                $(`<p id="resultForm">${number}</p>`).replaceAll('#resultForm');
                inputNumber = $('#resultForm').text();
            } else {
                inputNumber = inputNumber + number;
                $(`<p id="resultForm">${inputNumber}</p>`).replaceAll('#resultForm');
            }
        });
        
    }

    $('#numberReset').click(function () { 
        $(`<p id="resultForm">0</p>`).replaceAll('#resultForm');
        inputNumber = 0;
    });

    $('#reservation÷').click(function () { reservationWord = '÷'});
    $('#reservation×').click(function () { reservationWord = '×'});
    $('#reservationplus').click(function () { reservationWord = '+'});
    $('#reservation-').click(function () { reservationWord = '-'});

    $('.reservation').click(function () { 
        firstNumber = Number(inputNumber);
        inputNumber = 0;
        console.log(reservationWord);
    });

    $('#calculation').click(function () { 
        secondNumber = Number(inputNumber);
        switch (reservationWord) {
            case '+':
                inputNumber = firstNumber+secondNumber;
                break;
            case '-':
                inputNumber = firstNumber-secondNumber;
                break;
            case '×':
                inputNumber = firstNumber*secondNumber;
                break;
            case '÷':
                inputNumber = firstNumber/secondNumber;
                break;
        }
        $(`<p id="resultForm">${inputNumber}</p>`).replaceAll('#resultForm');
    });
})