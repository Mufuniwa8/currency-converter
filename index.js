const input = document.getElementById("currency").value;
const output = document.getElementById("output").value;
const select = document.getElementById("select").value;
const select2 = document.getElementById("select-V").value;
const button = document.getElementById("btn");

// function convert_btn () [
//     {

// selectElementById(select)
//         let inputValue = () => {
//             let output =((parentInt(rands.value) * 0.042).toFiixed(2));

//             pounds.value = output;
//         }

let display = () => {
  let output = (parentInt(pounds.value) / 0.042).toFixed(2);

  rands.value = output;
};

let convert_btn = () => {
  display.value = eval(display.value);
};

// addEventListener('click'), function(){

// }
//     },
// ]

function convert_btn() {
  if ((select = "zar")) {
    if (select2 == "pounds") {
      (parentInt(rands.value) * 0.042).toFixed(2);
    }
    else if (select2 == "euro") {
        (parentInt(rands.value) * 20.65).toFixed(2);
      }

    else if (select2 == "USD") {
        (parentInt(rands.value) * 19.33).toFixed(2);
      }

    
  }  if (select = "pounds") {
    (select2 == "zar") {
        (parentInt(rands.value) * 23.93).toFixed(2);
      }

    if (select2 == "euro") {
        (parentInt(rands.value) * 1.16).toFixed(2);
      }

    else if (select2 == "usd") {
        (parentInt(rands.value) * 1.24).toFixed(2);
      }

    
  }  if (select = "euro") {
if (select2 == "zar") {
    (parentInt(rands.value) * 20.63).toFixed(2);
  }

    else if (select2 == "pounds") {
        (parentInt(rands.value) * 0.86).toFixed(2);
      }
   else if (select2 == "usd") {
    (parentInt(rands.value) * 1.07).toFixed(2);
  }

    USD = (parentInt(euro.value) * 1.07).toFiixed(2);
  } else if (select = "usd") {

    if(select2 == "zar") {
        (parentInt(rands.value) * 19.31).toFixed(2);
      }
      (select2 == "euro") {
        (parentInt(rands.value) * 0.094).toFixed(2);
      }

      (select2 == "pounds") {
        (parentInt(rands.value) * 0.081).toFixed(2);
      }

    
  }
}
