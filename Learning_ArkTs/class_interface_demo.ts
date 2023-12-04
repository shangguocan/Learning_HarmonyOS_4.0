// 定义枚举
enum Msg{
    HI = 'Hi',
    HELLO = 'Hello'
}

// 定义接口，抽象方法接收枚举参数
interface A {
    say(msg: Msg): void
}

// 实现接口
class B implements A {
    say(msg: Msg): void {
        console.log(msg + ', I am B')
    }
}


// 初始化对象
let a:A = new B()
// 调用方法，传递枚举参数
a.say(Msg.HI)