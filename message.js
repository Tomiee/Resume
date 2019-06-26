window.onload = function () {
  let request = new XMLHttpRequest
  request.open('get', 'http://127.0.0.1:9000/message')
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      if (request.status == 200) {
        console.log(request.responseText)
        let data = JSON.parse(request.responseText)
        console.log(data.Message)
        let arr = data.Message
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
        // successFn()
      } else {
        console.log('失败了')
        // failFn()
      }
    }
  }
  request.send()
}


let ul = document.getElementById('message').getElementsByTagName('ul')
// console.log(ul)
let mesForm = document.getElementById('mesForm')
let input = mesForm.getElementsByTagName('input')


mesForm.addEventListener('submit', function (e) {
  e.preventDefault()
  let body = 'name=' + input[0].value + '&' + 'message=' + input[1].value
  let request = new XMLHttpRequest
  request.open('get', `http://127.0.0.1:9000/add?${body}`)
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      if (request.status == 200) {
        console.log(request.responseText)
      } else {
        console.log('err')
      }
    }
  }
  request.send()
  var timerID

  function delay() {
    timerID = setTimeout(getData, 300)
  }

  delay()
  input[0].value = ''
  input[1].value = ''
})


function getData() {
  let request = new XMLHttpRequest
  request.open('get', 'http://127.0.0.1:9000/message')
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      if (request.status == 200) {
        console.log(request.responseText)
        let data = JSON.parse(request.responseText)
        console.log(data.Message)
        let arr = data.Message
        let n = arr.length - 1
        let li = document.createElement('li')
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        span1.textContent = arr[n].name
        span2.textContent = arr[n].message
        li.appendChild(span1)
        li.appendChild(span2)
        ul[0].appendChild(li)
        // successFn()
      } else {
        console.log('失败了')
        // failFn()
      }
    }
  }
  request.send()
}

// function showMessage(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li')
//     let span1 = document.createElement('span')
//     let span2 = document.createElement('span')
//     span1.textContent = arr[i].name
//     span2.textContent = arr[i].message
//     li.appendChild(span1)
//     li.appendChild(span2)
//     ul[0].appendChild(li)
//   }
// }

// function newMessage(arr) {
//   let n = arr.length - 1
//   let li = document.createElement('li')
//   let span1 = document.createElement('span')
//   let span2 = document.createElement('span')
//   span1.textContent = arr[n].name
//   span2.textContent = arr[n].message
//   li.appendChild(span1)
//   li.appendChild(span2)
//   ul[0].appendChild(li)
// }