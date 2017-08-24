
# 展示 #

![](http://ot7z7wqqo.bkt.clouddn.com/TIM%E5%9B%BE%E7%89%8720170801163541.png)

# 技巧 #

对于一条消息记录让他往上走是我通过遍历之前的消息让bottom多加一定的数达到的，每次新消息的bottom都是恒定的50px,以此来模仿消息向上顶的效果。

随机的颜色是通过一个十六进制生成算法来做到的非常简单。

	function getRamdomColor() {
		    var result = '#';
		    for (var i = 0; i < 6; i++) {
	
		        result += Math.floor(Math.random() * 16).toString(16); //获取0-15并通过toString转16进制
		    }
	
		    return result;
		}


# 地址 #

预览


[http://www.laoliuscript.tk/RobotInWeb/](http://www.laoliuscript.tk/RobotInWeb/)


源码

[https://github.com/zhangzhengyi12/RobotInWeb](https://github.com/zhangzhengyi12/RobotInWeb)


tips:其实拥有一定的bug,比如说当传过来的消息过多就可能导致文本溢出问题，毕竟我每个消息盒子的高度是固定的
