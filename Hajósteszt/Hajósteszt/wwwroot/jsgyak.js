

let hova = document.getElementById("ide")
hova.innerHTML = ""
for (var i = 0; i < 10; i++) {
    var sor = document.createElement("div")
    hova.appendChild(sor)
    sor.innerText = i
    sor.style.background = `rgb(${30 + (30 * i)},0,0)`
    sor.classList.add("doboz")
}
let pascal=document.getElementById("pascal")

for (var sor = 0; sor < 10; sor++) {
    var divsor = document.createElement("div")
    divsor.classList.add("sor")
    pascal.appendChild(divsor)

    for (var oszlop = 0; oszlop <= sor; oszlop++) {
        var divelem = document.createElement("div")
        divelem.classList.add("elem")
        divsor.appendChild(divelem)
        

        var faktoriális = function (n) {
            let er = 1;
            for (let i = 2; i <= n; i++) {
                er = er * i;
            }
            return er;
        }
        divelem.innerText = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor - oszlop))
        
    }
}




