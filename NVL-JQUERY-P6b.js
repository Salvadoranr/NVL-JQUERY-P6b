var newList = $("ul")
var items = [];


loop();
loop(true);


$("<ul id='new'></ul>").insertAfter("ul")
$("#new").append(items)
$("#new li:last").clone().insertBefore($("li:first"))
$("#new").append("<li id='perejil' class='odd'><span>Isla de Perejil</span></li>");




function loop(detach) {
    for (var i = 0; i < 5; i++) {
        if(detach){
             $("li:first").detach()
        }else{

            if (i === 0) {
                items.push($("li:first").clone());
            }
            else {
                items.push($("li:gt(" + (i - 1) + "):first").clone());
            }
        }

    }
}

