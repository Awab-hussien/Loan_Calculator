function calc(){
   const amount =  document.querySelector('#amount').value;
   const insterest_rate =  document.querySelector('#interest').value;
   const month =   document.querySelector('#month').value;


   const interest = (amount * (insterest_rate * 0.01))/month;


    const payment = (amount / month) + interest;	

    document.querySelector('#payment').innerHTML = 'Total payment = '+ payment;


}