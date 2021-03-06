import { Loading } from 'element-ui'
let loading
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: '加载中......',
    background: 'rgba(255, 255, 255, 0.4)'
  })
}

function endLoading() {
  loading.close()
}
const localData = (() => {
  return {
    hname: location.hostname ? location.hostname : 'localStatus',
    isLocalStorage: window.localStorage || false,
    dataDom: null,
    initDom: function () { // 初始化userData
      if (!this.dataDom) {
        try {
          this.dataDom = document.createElement('input') // 这里使用hidden的input元素
          this.dataDom.type = 'hidden'
          this.dataDom.style.display = 'none'
          // userData 为IE 浏览器
          this.dataDom.addBehavior('#default#userData') // 这是userData的语法
          document.body.appendChild(this.dataDom)
          var exDate = new Date()
          exDate = exDate.getDate() + 30
          this.dataDom.expires = exDate.toUTCString() // 设定过期时间
        } catch (ex) {
          return false
        }
      }
      return true
    },
    // 设置
    set: function (key, value) {
      if (this.isLocalStorage) {
        window.localStorage.setItem(key, value)
      } else {
        if (this.initDom()) {
          this.dataDom.load(this.hname)
          this.dataDom.setAttribute(key, value)
          this.dataDom.save(this.hname)
        }
      }
    },
    // 获取
    get: function (key) {
      if (this.isLocalStorage) {
        return window.localStorage.getItem(key)
      } else {
        if (this.initDom()) {
          this.dataDom.load(this.hname)
          return this.dataDom.getAttribute(key)
        }
      }
    },
    // 删除
    remove: function (key) {
      if (this.isLocalStorage) {
        localStorage.removeItem(key)
      } else {
        if (this.initDom()) {
          this.dataDom.load(this.hname)
          this.dataDom.removeAttribute(key)
          this.dataDom.save(this.hname)
        }
      }
    }
  }
})()
let needLoadingRequestCount = 0
 function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}


 function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
export default {
  localData,
  showFullScreenLoading,
  tryHideFullScreenLoading,
  startLoading,
  endLoading,
}
