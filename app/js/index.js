import 'babel-polyfill' // es6 API转换器
import './class/Generator'

class Out {
  constructor() {
    this.name = 'hello world ah! 123'
  }
}

let o = new Out()

let p = document.createElement('p')
p.textContent = o.name
document.body.appendChild(p)
