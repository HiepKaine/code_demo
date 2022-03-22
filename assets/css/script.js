    // const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
    // const imgContainer = document.querySelector(".aspect-ratio-169");
    // const dotItem = document.querySelectorAll(".dot");
    // let imgNumber = imgPosition.length
    // let index = 0;

    // imgPosition.forEach(function(image, index){
    //     image.style.left = index*100 + "%"
    //     image.style.padding = "0 37px"
    //     image.style.border-radius = "20%"

    //     dotItem[index].addEventListener("click", function(){
    //         slider (index)
    //     })
    // })

    // function imgSlide() {
    //     index++;
    //     if (index >= imgNumber) {index = 0}
    //         slider(index)
    // }
    // function slider (index) {
    //     imgContainer.style.left = "-" + index*100 + "%"
    //     const dotActive = document.querySelector(".active")
    //     dotActive.classList.remove("active")
    //     dotItem[index].classList.add("active")
    // }
    // setInterval(imgSlide,1000);


    const btnInfo1 = document.querySelector(".search__location")
    const btnInfo2 = document.querySelector(".search__date")
    const btnInfo3 = document.querySelector(".search__customer")
    if(btnInfo1) {
     btnInfo1.addEventListener("click",function(){
        document.querySelector(".search__location").classList.toggle("active")
        })
     }
    if(btnInfo2) {
    btnInfo2.addEventListener("click",function(){
        document.querySelector(".search__date").classList.toggle("active")
        })
    }
    if(btnInfo3) {
    btnInfo3.addEventListener("click",function(){
        document.querySelector(".search__customer").classList.toggle("active")
        })
    }

    // hide modal
    const hideMenuMobile = document.querySelector('.js-menu-mobile')
    const modal = document.querySelector('.modal')
    const modalClose = document.querySelector('.close-btn')
    const modalContainer = document.querySelector('.modal-container')
    
    hideMenuMobile.addEventListener("click", showMenu)
    modalClose.addEventListener("click", hideMenu)
    modal.addEventListener("click", hideMenu)
    modalContainer.addEventListener("click",function(event) {
        event.stopPropagation()
    })


    function showMenu() {
        modal.classList.add('open')
    }

    function hideMenu() {
        modal.classList.remove('open')

    }