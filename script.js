const accordionItems = document.querySelectorAll(".accordion-item")
let activeTitle = document.querySelector(".active-title")
let activeContent = document.querySelector(".active-content")

accordionItems.forEach(item => {
    const title = item.children[0]
    const content = item.children[1]

    title.addEventListener("click", () => {
        const height = content.scrollHeight

        activeTitle.classList.remove("active-title")
        activeContent.classList.remove("active-content")
        activeContent.style.maxHeight = "0px"

        activeTitle = title
        activeContent = content

        activeTitle.classList.add("active-title")
        activeContent.classList.add("active-content")
        activeContent.style.maxHeight = `${height}px`
    })
})

window.addEventListener("load", () => {
    const height = activeContent.scrollHeight
    activeContent.style.maxHeight = `${height}px`
})