(function initArea(){
    console.log('sdf');
    var container = document.getElementsByClassName('area')[0];
    var x = document.getElementById('x');
    var y = document.getElementById('y');
    container.onmousemove = function(e){
        x.innerHTML = e.x;
        y.innerHTML = e.y;
    }
    var box = document.getElementById('container');
    box.onmousedown = function(e){
        console.log('dsf')
    }
})()

