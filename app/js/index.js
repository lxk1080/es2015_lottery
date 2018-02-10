// import 'babel-polyfill' // es6 API转换器
import './class/类与对象'

class Out {
  constructor() {
    this.name = 'hello world ah! 123'
  }
}

let o = new Out()

document.body.textContent = o.name
