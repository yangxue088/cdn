function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

function insertCssStyle(cssContent){
    var styleSheet = document.createElement("style");
    styleSheet.innerText = cssContent;
    document.head.appendChild(styleSheet);
}

var stylec = `/* CSS */.button-32 {background-color: #fff000;border-radius: 12px;color: #000;cursor: pointer;font-weight: bold;padding: 10px 15px;text-align: center;transition: 200ms;width: 100%;box-sizing: border-box;border: 0;font-size: 14px;user-select: none;-webkit-user-select: none;touch-action: manipulation;}.button-32:not(:disabled):hover,.button-32:not(:disabled):focus {outline: 0;background: #f4e603;box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);}.button-32:disabled {filter: saturate(0.2) opacity(0.5);cursor: not-allowed;}`;
insertCssStyle(stylec);

function createCustomDiv(){
    var customDiv = document.getElementById('customDiv');
    if(!customDiv) {
        customDiv = document.createElement('div');
        customDiv.id = 'customDiv';

        customDiv.style.position = "fixed";
        customDiv.style.right = "50px";
        customDiv.style.bottom = "35px";
        customDiv.style.cursor = "pointer";
        customDiv.style['z-index'] = "999";

        document.body.appendChild(customDiv);
    }
}

function createCustomButton(name, id, clickFunction){
    var btn =document.createElement("button");

    btn.id = id;
    btn.className = 'button-32';

    btn.innerHTML = name;
    btn.onclick = clickFunction;

    var btnDiv = document.createElement('div');
    btnDiv.appendChild(btn);

    var customDiv = document.getElementById("customDiv");
    customDiv.appendChild(btnDiv);
}
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

function insertCssStyle(cssContent){
    var styleSheet = document.createElement("style");
    styleSheet.innerText = cssContent;
    document.head.appendChild(styleSheet);
}

var stylec = `/* CSS */.button-32 {background-color: #fff000;border-radius: 12px;color: #000;cursor: pointer;font-weight: bold;padding: 10px 15px;text-align: center;transition: 200ms;width: 100%;box-sizing: border-box;border: 0;font-size: 14px;user-select: none;-webkit-user-select: none;touch-action: manipulation;}.button-32:not(:disabled):hover,.button-32:not(:disabled):focus {outline: 0;background: #f4e603;box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);}.button-32:disabled {filter: saturate(0.2) opacity(0.5);cursor: not-allowed;}`;
insertCssStyle(stylec);

function createCustomDiv(){
    var customDiv = document.getElementById('customDiv');
    if(!customDiv) {
        customDiv = document.createElement('div');
        customDiv.id = 'customDiv';

        customDiv.style.position = "fixed";
        customDiv.style.right = "50px";
        customDiv.style.bottom = "35px";
        customDiv.style.cursor = "pointer";
        customDiv.style['z-index'] = "999";

        document.body.appendChild(customDiv);
    }
}

function createCustomButton(name, id, clickFunction){
    var btn =document.createElement("button");

    btn.id = id;
    btn.className = 'button-32';

    btn.innerHTML = name;
    btn.onclick = clickFunction;

    var btnDiv = document.createElement('div');
    btnDiv.appendChild(btn);

    var customDiv = document.getElementById("customDiv");
    customDiv.appendChild(btnDiv);
}

Date.prototype.Format = function(fmt) { //author: meizz
    var d = new Date();
    var o = {
        "M+": d.getMonth() + 1, //月份
        "d+": d.getDate(), //日
        "h+": d.getHours(), //小时
        "m+": d.getMinutes(), //分
        "s+": d.getSeconds(), //秒
        "q+": Math.floor((d.getMonth() + 3) / 3), //季度
        "S": d.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
Date.prototype.Format = function(fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
