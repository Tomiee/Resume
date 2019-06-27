let ul = document.getElementById('message').getElementsByTagName('ul')
let mesForm = document.getElementById('mesForm')
let input = mesForm.getElementsByTagName('input')


window.onload = function () {
  sendAjax().then(function (a) {
    let data = JSON.parse(a)
    console.log(data.Message)
    let arr = data.Message
    creatM(arr)
  })
}

mesForm.addEventListener('submit', function (e) {
  e.preventDefault()
  store().then(sendAjax).then(function(a){
    let data = JSON.parse(a)
    let arr = data.Message
    arr = [arr.pop()]
    creatM(arr)
  })
  input[0].value = ''
  input[1].value = ''
})


//以下自定义函数


//存储留言
function store() {
  return new Promise(function (resolve, reject) {
    let body = 'name=' + input[0].value + '&' + 'message=' + input[1].value
    let request = new XMLHttpRequest
    request.open('get', `http://127.0.0.1:9000/add?${body}`)
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        if (request.status == 200) {
          console.log(request.responseText)
          console.log('写入成功')
          resolve()
        } else {
          console.log('err')
        }
      }
    }
    request.send()
  })
}


function sendAjax() {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest
    request.open('get', 'http://127.0.0.1:9000/message')
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        if (request.status == 200) {
          console.log(request.responseText);
          resolve(request.responseText);
          // successFn()
        } else {
          console.log('失败了')
          // failFn()
        }
      }
    }
    request.send()
  })
}

// 生成留言
function creatM(arr) {
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    span1.textContent = arr[i].name
    span2.textContent = arr[i].message
    li.appendChild(span1)
    li.appendChild(span2)
    ul[0].appendChild(li)
  }
}