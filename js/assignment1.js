window.onload = function(){
    // window.onscroll = function() {scrollFunction()};
    // var gotop = document.getElementById("go-top");
    // gotop.onclick = function(){topFunction()};
    // function scrollFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         document.getElementById("go-top").style.display = "block";
    //     } else {
    //         document.getElementById("go-top").style.display = "none";
    //     }
    // }
    // function topFunction() {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }

    delBtns = document.getElementsByName('Clear');
    console.log(delBtns.length);
    for(i = 0; i < delBtns.length;i++){
        (function(){
            delBtns[i].onclick = function(){
                if(confirm("delete???")){
                    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                }
            }
        })();
    }
    var submit = document.getElementById('submitBtn');
    var jsonobj;
    var tbody = document.getElementById('messagetable');
    submit.onclick = function(ev){
        var e=ev||window.event;
        if(e.preventDefault){
            e.preventDefault();
            e.stopPropagation();
        }
        var form = document.getElementById('inputform');
        var jsonstr = toJSONString(form);
        jsonobj = JSON.parse(jsonstr);
        var trow = getDataRow(jsonobj); 
        tbody.appendChild(trow);
        delBtns = document.getElementsByName('Clear');
        var btn = delBtns[delBtns.length-1];
        btn.onclick = function(){
            if(confirm("delete???")){
                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
            }
        }
        var rows = document.getElementsByName('Clear');
        console.log(rows.length);
    }
    
    clearBtn = document.getElementById('ClearAll');
    console.log(clearBtn);
    clearBtn.onclick = function(){
        if(confirm("delete ALL???")){
            var table = document.getElementById('messagetable');
            var rows = table.rows;
            for(i = rows.length - 1; i >= 1; i--){
                table.deleteRow(i);
            }        
        }
    }
	  
    function getDataRow(json){
        var row = document.createElement('tr'); 
        
        var fromnameCell = document.createElement('td'); 
        fromnameCell.innerHTML = json.fromname; 
        row.appendChild(fromnameCell);
        var tonameCell = document.createElement('td');
        tonameCell.innerHTML = json.toname;
        row.appendChild(tonameCell);
        
        var categoryCell = document.createElement('td');
        categoryCell.innerHTML = json.category;
        row.appendChild(categoryCell);

        var text = document.createElement('td');
        text.innerHTML = json.textcontent;
        row.appendChild(text);

        var time = document.createElement('td');
        time.innerHTML = json.time;
        row.appendChild(time);
        
        var delCell = document.createElement('td');
        delCell.innerHTML = '<button type="reset" name="Clear">Clear</button>';
        row.appendChild(delCell);
        
        return row; 
    }	  


    function toJSONString(form) {
        var obj = {};
        var elements = form.querySelectorAll("input, select, textarea");
        for (var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;
            if (name) {
                obj[name] = value;
            }
        }
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date+' '+time;
        obj['time'] = dateTime;
        console.log(JSON.stringify(obj));
        return JSON.stringify(obj);
    }
        
      
}