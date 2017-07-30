/**
 * Created by zhang on 2017-07-30.
 */

import colors from "./colors"

const API_KEY = "919c296a12994612a4ddac7b47dba958";

const RESPONSE_TYPE = {
    TEXT: 100000,
    LINK: 200000,
    NEWS: 302000
}

//

class chat {
    constructor(config = {}){
        this.input = config.input
        this.tips = config.tips
        this.messBox = config.messBox
        this.messNode = config.messNode
        this.amessHeight = config.amessHeight
        
        //用来通讯
        
        this.query = '';
        this.data = '';
        
        this.welcome()
        this.setName()


        this.bindEvent()



    }
    
    bindEvent(){
        this.input.focus((e)=>{
            window.document.onkeypress = (e)=>{
                // 获取事件
                e = e || window.event;
                // 获取按键编码
                var key = e.whick || e.keyCode;
                // 检测是否为回车键
                if(key == 13){
                    this.render()
                }
            }
        })
        
        
        
    }
    
    render(){
        //"hook用来拦截data 第一次设置name 不会发送data"
        if(this.onceset()){
            this.addQuery()
            this.addToBox(this.creatDOM("",`${this.name} 请吩咐！`))
            console.log("return?");
            return
        }
        
        this.addQuery()
        this.getData()
    }
    
    welcome(){
        const welText = "我是菠萝油王子";
        welText.split("").forEach((t)=>{
            this.addToBox(this.creatDOM("",`------${t}-----`))
        })
    }
    
    setName(){
        this.addToBox(this.creatDOM("",`请输入你的名字`))
    }
    onceset(){
        this.name =  this.input.val()
        this.onceset = ()=>{return false}
        return true
    }
    
    addQuery(){
        this.query = this.input.val()
        this.input.val("");
        this.addToBox(this.creatDOM(this.tips.text(),this.query))
    }
    
    creatDOM(tips,talk){
        let dom = $(`<span>${tips}${talk}</span>`)
        dom.css("color",colors.getRamdomColor())
        let messwrap = $(this.messNode)
        messwrap.append(dom)
        return messwrap
    }
    
    addToBox(dom){
        this.setBoxStyle(dom)
        this.messBox.append(dom)
    }
    
    setBoxStyle(dom){
        
        this.messBox.children().each((index,kid)=>{
            kid = $(kid)
            let tmp = kid.css("bottom")
            let lastH = parseInt(tmp.substring(0,tmp.length-2))
            //即时删除盒子
            if(lastH+this.amessHeight > ($(document).height()) - "50"){
                kid.remove()
            }
            
            kid.css("bottom",lastH+this.amessHeight + "px")
        })
        
        dom.css("bottom",50+"px")
    }
    
    getData(){
        
        let self = this;
        
        let datas = {
            "key":API_KEY,
            "info":this.query,
            "loc":"嘉兴市",
            "userid":this.name
        }
        
        
    
        $.ajax({
            type:'POST',
            url: "http://www.tuling123.com/openapi/api",
            data: datas,
            success: (data)=>{
                this.addToBox(this.creatDOM("",self.getDataStr(data)))
               
            },
            dataType:'json'
        });
    }
    
    getDataStr(data){
        switch(data.code) {
            case RESPONSE_TYPE.TEXT:
                return data.text;
            case RESPONSE_TYPE.LINK:
                return `${data.text} : ${data.url}`;
            case RESPONSE_TYPE.NEWS:
                let listInfo = '';
                (data.list || []).forEach((it) => {
                    listInfo += `\n文章: ${it.article}\n来源: ${it.source}\n链接: ${it.detailurl}`;
                });
                return `${data.text}\n${listInfo}`;
            default:
                return data.text;
        }
    }
    
}

export default chat