document.getElementById("form-get-color-scheme").addEventListener("submit", function(e) {
    e.preventDefault()
    const colorHex = document.getElementById("input-color").value.replace("#", "")
    const colorScheme = document.getElementById("select-color-scheme").value
    const data = {
        hex: colorHex,
        mode: colorScheme
    }

    // const options = {     // Options are only used for POST/PUT methods
    //     method: "GET",
    //     body: JSON.stringify(data),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${colorScheme}`)
        .then(response => response.json())
        .then(data => {
            let colorBlocksHtml = ""
            let colorLabelsHtml = ""
            for (let color of data.colors){
                colorBlocksHtml += `<div class="color-block"
                        id="${color.hex.clean}"
                        style="background-color:${color.hex.value};
                        height: 370px;
                        display:block;">
                        </div>`
                        
            }
            for (let color of data.colors) {
                colorLabelsHtml += `<label class="color-label" id="${color.hex.clean}">${color.hex.value}</label>`
            }
            document.getElementById("generated-color-scheme").innerHTML = colorBlocksHtml + colorLabelsHtml
        })
})
