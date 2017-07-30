import color from "./colors"
import chat from "./chat"



let chatS = new chat({
    input:$("#inputText"),
    tips:$("#inputTips"),
    messBox:$(".messBox"),
    messNode:`<div class="messone"><div>`,
    amessHeight:30
})