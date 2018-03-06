myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest //
    request.onreadystatechange=()=>{
        if(request.readyState === 4){
            console.log('请求与响应都完毕了')
            if(request.status >= 200  && request.status < 300){
                console.log('说明请求成功')
                console.log(JSON.parse(request.responseText))
            }else if(request.status >= 400){
                console.log('说明请求失败')
            }
        }
    }
    request.open('GET','/xxx')    
    request.send()
})

getData.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest //必记
    request.onreadystatechange=()=>{ //必记API
        if(request.readyState===4){
            if(request.status >= 200 && request.status < 300){
                setDom(JSON.parse(request.responseText))
            }else if(request.status >= 400){
                console.log('请求失败')
            }
        }
    }
    request.open('GET','http://localhost:9999/getdata') //必记的方法
    request.send() //必记
})

function setDom(data){//获取到数据后进行的dom操作
    let domStr = `我叫${data.name}，今年${data.age}岁，目前在${data.college}读计算机科学与技术`
    textBox.textContent = domStr
}