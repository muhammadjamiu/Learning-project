  const shoesData = [
  { value: "1", label: "foot-01", price: "N10,000",  },
  { value: "2", label: "foot-02", price: "N5000" },
  { value: "3", label: "foot-03", price: "N5000" },
  { value: "4", label: "foot-04", price: "N5000" },
  { value: "5", label: "foot-05", price: "N5000" },
  { value: "6", label: "foot-06", price: "N5000" },
  { value: "7", label: "foot-07", price: "N5000" }, 
  { value: "8", label: "foot-08", price: "N5000" },
  { value: "9", label: "foot-09", price: "N5000" },
  { value: "10", label: "foot-10", price: "N5000" },
  { value: "11", label: "foot-11", price: "N5000" },
  { value: "12", label: "foot-12", price: "N5000" },
  { value: "13", label: "foot-13", price: "N5000" },
  { value: "14", label: "foot-14", price: "N5000" },
  { value: "15", label: "foot-15", price: "N5000" },
  { value: "16", label: "foot-16", price: "N5000" },
  { value: "17", label: "foot-17", price: "N5000" },
  { value: "18", label: "foot-18", price: "N5000" },
  { value: "19", label: "foot-19", price: "N5000" },
  { value: "20", label: "foot-20", price: "N5000" },
  { value: "21", label: "foot-21", price: "N5000" },
  { value: "22", label: "foot-22", price: "N5000" },
  { value: "23", label: "foot-23", price: "N5000" },
  { value: "24", label: "foot-24", price: "N5000" },
  { value: "25", label: "foot-25", price: "N5000" },
  { value: "26", label: "foot-26", price: "N5000" },
  { value: "27", label: "foot-27", price: "N5000" },
  { value: "28", label: "foot-28", price: "N5000" },
  { value: "29", label: "foot-29", price: "N5000" },
  { value: "30", label: "foot-30", price: "N5000" },
  { value: "31", label: "foot-31", price: "N5000" },
  { value: "32", label: "foot-32", price: "N5000" },
  { value: "33", label: "foot-33", price: "N5000" },
  { value: "34", label: "foot-34", price: "N5000" },
  { value: "35", label: "foot-35", price: "N5000" },
  { value: "36", label: "foot-36", price: "N5000" },
  { value: "37", label: "foot-37", price: "N5000" },
  { value: "38", label: "foot-38", price: "N5000" },
  { value: "39", label: "foot-39", price: "N5000" },
];

  const selectElement = document.getElementById('footSelect');

    // Loop through the options and create option elements
    shoesData.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = `${option.label} = ${option.price}`;
      selectElement.appendChild(optionElement);
    });

 
   
   var button = document.getElementById('enter');
        var input = document.getElementById('userinput');
        var ul = document.getElementsByClassName("newUl")[0];

        button.addEventListener('click', function() {
            var li = document.createElement('li');
            li.setAttribute('class', 'item');
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);
            input.value = "";
        })


     function reset(){
      console.log("text")
  return  document.querySelector('.item').remove();
}