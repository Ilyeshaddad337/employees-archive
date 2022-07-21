function search (event,tbody,select)  {
  const value = event.target.value.toLowerCase().trim();
  var column = select.value;
  switch (column) {
    case "All":
      column = "do not choose";
      break;
    case "Id":
      column = 0;
      break;
    case "Name":
      column = 1;
      break;
    case "Age":
      column = 2;
      break;
    case "Occupation":
      column = 3;
      break;

  };
  const rows = Array.from(tbody.querySelectorAll("tr"));
  if (column == "do not choose") {
      rows.forEach((e) => {
      if (e.textContent.toLowerCase().match(value) === null) {
        e.classList.add('hide');
      }else {
        e.classList.remove('hide')
      }
    });
  } else {
  
      rows.forEach((e) => {
        if (!e.querySelector(`td:nth-child(${column + 1})`).classList.contains('hide')) {
          if (
            e
              .querySelector(`td:nth-child(${column + 1})`)
              .textContent.toLowerCase()
              .match(value) === null
          ) {
            e.classList.add("hide");
          } else {
            e.classList.remove("hide");
          }
        }
      })
      
      
  }
};


export default search