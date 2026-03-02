let getMoney=()=>
{
    let numberBox = document.getElementById('usdAmount');
    let n1 = numberBox.value;
    try
    {
        n1 = Number(n1);
        if(!Number.isInteger(n1))
        {
            throw new Error("Not a Number");
        }
        if(n1<0)
        {
           throw new Error("Number Can't Be Negative");
        }
    }
    catch(err)
    {
        alert(err)
        return;
    }
    fetchMoney(n1);
}

let fetchMoney = (n1)=>
{
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then((response)=>response.json())
    .then((data)=>showMoney(data,n1))
    .catch((err)=>console.log(err));
}

let showMoney = (data,n1)=>
{
    let INR = data.rates.INR;
    let amount = INR * n1;
    console.log(amount);

    let resultBox = document.getElementById("result");
    resultBox.innerText = "Amount is Rs : "+amount.toFixed(2);
}