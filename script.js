let btn = document.getElementById(("btn"))

function unitConverter(){
    let value = Number(document.getElementById("value").value);
    let unit = (document.getElementById("units").value);
    let resultDiv = document.getElementById("result");
    if(isNaN(value)){
        resultDiv.textContent = `Please Enter the Value`;
        return ;
    }

    let result;

    if(unit == "celcius"){
        result = (value - 32) * 5/9;
        resultDiv.textContent = `Fernhite ${value}°F = ${result.toFixed(2)}°C`
    }else{
        result = (value * 9/5) + 32;
        resultDiv.textContent = `Celcius ${value}°C = ${result.toFixed(2)}°F`;
    }

    document.getElementById("value").value = "";
    document.getElementById("units").value = "default";
}

btn.addEventListener("click", unitConverter)