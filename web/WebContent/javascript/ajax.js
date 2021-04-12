let tbl = document.getElementById('tbl');
let tr, td, text;

let xhtp = new XMLHttpRequest();
xhtp.onreadystatechange = function () {
    console.log(xhtp.readyState, xhtp.status);
    if(xhtp.readyState == 4 && xhtp.status == 200) {
        console.log(xhtp.responseText);
        let data = JSON.parse(xhtp.responseText);
        console.log(data);
        for (obj of data) { // 0, ...... 14
            tr = document.createElement('tr');
            tbl.appendChild(tr);
            for( field in obj) { // id, first_name, last_name...
                td = document.createElement('td');
                text = document.createTextNode(obj[field]);
                tr.appendChild(td);
                td.appendChild(text);
                console.log(field, obj[field]);
            }
        }
    }
};
xhtp.open('get', 'MOCK_DATA.json');
xhtp.send();