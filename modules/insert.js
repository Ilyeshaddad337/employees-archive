const insertInTable = (tbody,data) => {
    for (var i =0 ; i < data.length;i++) {
        var  tr = document.createElement('tr');
        let tdI =  document.createElement('td');
        tdI.innerText = (data[i].id);
        tdI.classList.add('id-cell')
        let tdN =  document.createElement('td');
        tdN.innerText = (data[i].name);
        let tdA =  document.createElement('td');
        tdA.innerText = (data[i].age);
        tdA.classList.add('age-cell')
        let tdO =  document.createElement('td');
        tdO.innerText = (data[i].occupation);
        let tdAct =  document.createElement('td');
        tdAct.innerHTML = ('<button class="btn updt-btn">Update</button> <button class="btn del-btn">X</button>');
        tr.appendChild(tdI)

        tr.appendChild(tdN)
        tr.appendChild(tdA)
        tr.appendChild(tdO)
        tr.appendChild(tdAct)

        tbody.appendChild(tr)
    }

}

export default insertInTable