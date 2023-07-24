const wrapper  = document.querySelector('.wrapper')
const toast    = wrapper.querySelector('.toast')
const wifiIcon = wrapper.querySelector('.icon')
const title    = wrapper.querySelector('span')
const subTitle = wrapper.querySelector('p')

window.onload = () => {
    function ajax() {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", "https://sonplaceholder.typicode.com/posts", true)
        xhr.onload = (e) => {
            if(!xhr.status == 200 & xhr.status < 300){
                offline()
            }
        }
        xhr.onerror = () => {
            offline()
        }
        xhr.send()
    }

    function offline(){
        toast.classList.add("offline")
        title.innerText = "You're offline now"
        subTitle.innerText = "Internet is disconnect"
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash">'
    }
    ajax()

    setInterval(() => {
        ajax()
    }, 2000)
}
