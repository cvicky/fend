/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){
    var laughs='';
    for(var i=0; i<num; i++){
        laughs+="ha";
    }
    laughs+="!";
    return laughs;
};

console.log(laugh(10));
