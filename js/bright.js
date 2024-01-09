let uname = document.getElementById('uname');
let loupes = document.getElementById('loupes');
let led = document.getElementById('led');
let save = document.getElementById('save');
let price = document.getElementById('price');
//let delete = document.getElementById('delete');

let mood = 'create'
let tmp;
//careat product

let datapro;
if (localStorage.newn != null) {
    datapro = JSON.parse(localStorage.newn)
} else {
    datapro = [];
}



save.onclick = function () {
    let newlist = {
        uname: uname.value,
        loupes: loupes.value,
        led: led.value,
        price: price.value
    }
    if (mood === 'create') {

        datapro.push(newlist);
    } else {
        datapro[tmp] = newlist;
        mood = 'create';
        save.innerHTML = 'sava';

    }

    localStorage.setItem('newn', JSON.stringify(datapro))


    showData()


}
//clear inputs
function clearData() {
    uname.value = '';
    loupes.value = '';
    led.value = '';
    price.value = '';
}
//read
function showData() {

    let table = '';
    for (let i = 0; i < datapro.length; i++) {
        table += `
        <tr>
        <td>${i}</td>
        <td>${datapro[i].uname}</td>
        <td>${datapro[i].loupes}</td>
        <td>${datapro[i].led}</td>
        <td>${datapro[i].price}</td>
        
        
        <td><button onclick="updateData(${i})" type="button"
        class="btn btn-warning">update</button></td>

<td> <button onclick="deletData(${i})" id="delete" type="button"
        class="btn btn-danger">delete</button></td>
</tr>`

    }
    document.getElementById('tbody').innerHTML = table;
    clearData()
    showData()
} showData()

//delet
function deletData(i) {
    datapro.splice(i, 1);
    localStorage.newn = JSON.stringify(datapro);
    showData()


}
//update

function updateData(i) {
    uname.value = datapro[i].uname;
    loupes.value = datapro[i].loupes;
    led.value = datapro[i].led;
    price.value = datapro[i].price;
    save.innerHTML = 'Updata'
    mood = 'Updata'
    tmp = i;
}
//search
let searchmood = 'uname'
function getsearchmood(id) {
    let search = document.getElementById('search');
    if (id == 'searchname') {
        searchmood = 'uname';
    } else {

    }
    search.focus()
}
function searchdata(value) {
    if (
        searchmood == 'uname'
    )
        for (let i = 0; i < datapro.length; i++) {
            if (datapro[i].uname.includes(value))
                console.log(i);
        }

}







