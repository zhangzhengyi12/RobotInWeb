/**
 * Created by zhang on 2017-07-30.
 */

function getRamdomColor() {
    var result='#';
    for(var i=0;i<6;i++){
        
        result+=Math.floor(Math.random()*16).toString(16);//获取0-15并通过toString转16进制
    }
    
    return result;
}


export  default {
    getRamdomColor:getRamdomColor
};