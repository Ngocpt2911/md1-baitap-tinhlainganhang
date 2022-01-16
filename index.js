let money = +prompt('Hãy nhập vào số tiền cần gửi');
let year = +prompt('Hãy nhập vào số năm');
let interestRate = +prompt('Hãy nhập vào lãi suất (%)') / 100;

let interest = year * money * interestRate;
let total = money + interest;
// console.log('Số tiền bạn nhận được sau' + year + 'năm là:' + total + '(triệu đồng)');
document.write('Số tiền bạn nhận được sau' + year + 'năm là:' + total + '(triệu đồng)');