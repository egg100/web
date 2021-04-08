let obj = {}; //new Object();
        obj.color = 'white';
        obj.price = 1000000;
        obj.info = function () {
            return obj.color + ' ' + obj.price;
        }
        // console.log(obj.color);
        // console.log(obj.price);
        // console.log(obj.info());

        function getTime() {
            let show = document.getElementById('show');
            let time = new Date();
            let year = time.getFullYear();
            let month = time.getMonth();
            let date = time.getDate();
            let hh = time.getHours();
            let mm = time.getMinutes();
            let ss = time.getSeconds();
            
            show.innerHTML = year + '년 ' + month + '월 ' + date + '일 ' 
                            + hh + ':' + mm + ':' + ss;
                            
        }
        // setInterval(function () {
        //     getTime();
        // }, 1000);

        let f = new Date('2002/5/31'); // 5월이고 출력시 4
        f = new Date(2020, 11, 30); // 11이라쓰면 12월
        // console.log(f.getMonth()); // 11 --> 12월


        Math.abs(-100);
        console.log(Math.ceil(3.5));


        let today = new Date();
        let nowYear = today.getFullYear();

        let theDate = new Date(nowYear, 11, 31);
        let diffDate = theDate.getTime() - today.getTime();

        let result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
        document.write("연말 D-day: " + result + "일 남았습니다.");

        let launch = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 50);
        console.log(today);
        console.log(launch);
        diffDate = launch.getTime() - today.getTime();
        let hh = Math.floor(diffDate / (1000 * 60 * 60));
        let mm = Math.floor((diffDate - (hh * 1000 * 60 * 60)) / (1000 * 60));
        let ss = Math.floor((diffDate - (hh * 1000 * 60 * 60) - (mm * 1000 * 60)) / 1000);
        show.innerHTML = '점심시간까지 ' + hh + ':' + mm + ':' + ss;

        // let str = 'Hello'; //new String();
        // str.charAt(0);
        // str.indexOf('a'); // 찾는 문자가 없으면 -1리턴

        let t = "Hello Thank you good luck to you";
        document.write("<br/>");
        document.write(t.charAt(16),"<br/>");
        document.write(t.indexOf("you"),"<br/>");
        document.write(t.indexOf("you",16),"<br/>");
        document.write(t.lastIndexOf("you"),"<br/>");
        document.write(t.lastIndexOf("you",25),"<br/>");
        document.write(t.match("luck"),"<br/>");
        document.write(t.search("you"),"<br/>");
        document.write(t.substr(21,4),"<br/>");
        document.write(t.substring(6,12),"<br/>");
        document.write(t.replace("you","me"),"<br/>");
        document.write(t.toLowerCase(),"<br/>");
        document.write(t.toUpperCase(),"<br/>");
        document.write(t.length,"<br/>");
        
        let s = t.split(" ");
        
        document.write(s[0],"<br/>");
        document.write(s[4],"<br/>");

        let str = "A";
        let tt = str.charCodeAt(0);

        document.write(tt,"<br/>");
        document.write(String.fromCharCode(65),"<br/>");
        

        function writeEmail() {
            let userEmail = prompt("당신의 이메일 주소는?", "");
            let arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];
    
            let check1 = false;
            let check2 = false;
    
            if(userEmail.indexOf("@") > 0) {check1 = true;}
    
            for(let i = 0; i < arrUrl.length; i++) {
                if(userEmail.indexOf(arrUrl[i]) > 0) {
                    check2 = true;
                }
            }
    
            if(check1 && check2) {
                document.write(userEmail);
            } else {
                alert("이메일 형식이 잘못되었습니다.");
            }
        }