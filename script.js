var app = new Vue({
    el: '.container',
    data: {
        header: 'Простой калькулятор ♥',
        calcs: [ 'C', '<-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '♥', '0', '.', '='],
        string: '',
        operation: '0',
        arr: [],
    },
    methods: {
        calculate: function(calc) {
            this.string += calc;
            switch(calc) {
                case '+':
                    this.operation = '+';
                    break;
                case '*':
                    this.operation = '*';
                    break;
                case '-':
                    this.operation = '-';
                    break;
                case '/':
                    this.operation = '/';
                    break;
                case '%':
                    this.operation = '%';
                    break;
                case 'C':
                    this.string = '';
                    break;
                case '<-':
                    this.string = this.string.slice(0, -3);
                    break;
                case '♥':
                    this.string = this.string.slice(0, -1);
                    alert("Я тебя тоже люблю, дурачок!");
                    break;
                case '=':
                    this.arr = this.string.split(/\+|\=|\-|\*|\/|\%/);
                    if (this.operation == '+') this.string += Number(this.arr[0]) + Number(this.arr[1]);
                    if (this.operation == '-') this.string += Number(this.arr[0]) - Number(this.arr[1]);
                    if (this.operation == '*') this.string += Number(this.arr[0]) * Number(this.arr[1]);
                    if (this.operation == '/') this.string += Number(this.arr[0]) / Number(this.arr[1]);
                    if (this.operation == '%') this.string += Number(this.arr[0]) % Number(this.arr[1]);
                    break;
            }
        }
    }
})