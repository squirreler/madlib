function replace() {
    let textBoxList = document.querySelectorAll("input")
    textBoxList.forEach((item) => {
        console.log(item.outerHTML)
        item.outerHTML = `<b><p style="display:inline"> ${item.value.toLowerCase()} </p></b>`
    });
    

    // let name1 = document.getElementById('name1')
    // let name1Value = name1.value
    
    // console.log(textBoxList)
    // console.log(name1.value)
}
