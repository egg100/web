function createCal() {
    // 2021년 4월
    let today = new Date();
    let thisYear = today.getFullYear(); // 2021
    let thisMonth = today.getMonth(); // 3(4월)
    let thisDate = today.getDate(); // 6
    let thisDay = today.getDay() // 0:일, 1:월, 2:화...

    let lastDate = new Date(thisYear, thisMonth + 1, 0).getDate(); //0이면 지날달 마지막날
    let firstDay = new Date(thisYear, thisMonth, 1).getDay(); //이번달 1일의 요일
    let rest = 7 - (lastDate + firstDay) % 7;
    let days = ["일", "월", "화", "수", "목", "금", "토"];


    document.write('<h2>' + thisYear + '년 ' + (thisMonth + 1) + '월</h2>');
    document.write('<table border="1" style="border-collapse: collapse;">');
    document.write('<tr>');
    for (let i = 0; i < days.length; i++) {
        document.write('<th>' + days[i] + '</th>');
    }
    document.write('</tr>');

    for (let i = 0; i < lastDate + firstDay + rest; i++) {
        if (i % 7 == 0) {
            document.write('<tr>')
        }
        if (i < firstDay || i >= lastDate + firstDay) {
            document.write('<td></td>');
        } else if (thisDate == i - firstDay + 1) {
            document.write('<td style="background-color:yellow;">' + (i - firstDay + 1) + '</td>');
        } else {
            document.write('<td>' + (i - firstDay + 1) + '</td>');
        }
        if (i % 7 == 6) {
            document.write('</tr>')
        }
    }
    document.write('</table>');
}