$(document).ready(function() {
    $.ajax({
        url: '../MOCK_DATA.json',
        success: function(data) {
            //배열에 태그내용을 넣어서 join해주면 append없이 간결하게 가능 
            let table = [];
            table.push('<table border="1" />');
            // let tbl = $('<table border="1" />');
            // let ulTag = $('<ul />');
            console.log(data);
            for(let i = 0; i < data.length; i++) {
                table.push('<tr />')
                // let trTag = $('<tr />');
                // tbl.append(trTag);
                for(f in data[i]) {
                    table.push('<td>' + data[i][f] + '</td>');
                    // let tdTag = $('<td />').html(data[i][f]);
                    // trTag.append(tdTag);

                }
                // let liTag = $('<li />').html(data[i].id);
                // ulTag.append(liTag);
            }
            let tag = table.join('');
            $('body').html(tag);
            // $('body').append(tbl);
            // $('body').append(ulTag);
        }
    });
});

$.ajax({
    url: '../MOCK_DATA.json',
    type: 'get',
    data: 'name=hong&age=20',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        let arry = data;
        let ulTag = $('<ul />');
        $(arry).each(function(idx, obj) {
            console.log(idx, obj);
            // ulTag.append($('<li />').html('<a href="#">' + obj.first_name + '</a>'));
            ulTag.append($('<li />').append(
                    $('<a />').html(obj.first_name)
                    .attr('href','get.jsp?name=' + obj.first_name)
                )
            );
        });
        $('body').append(ulTag);
    },
    error: function(reject) {
        console.error(reject.status, reject.statusText);
    }
});