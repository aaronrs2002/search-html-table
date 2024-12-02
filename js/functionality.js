let tableOBJ = [];


[].forEach.call(document.querySelectorAll(".searchTable tr"), (e, i) => {

    e.setAttribute("data-row", i);
    tableOBJ.push({ "row": i, "dataStr": "" })

});


for (let i = 0; i < tableOBJ.length; i++) {

    let htmlStr = "";
    [].forEach.call(document.querySelectorAll("tr[data-row='" + i + "'] > td"), (e) => {
        htmlStr = htmlStr + e.innerHTML.replace(" ", "").toLowerCase();
    });


    tableOBJ[i].dataStr = htmlStr;

    console.log("JSON.stringify(tableOBJ): " + JSON.stringify(tableOBJ));

}

function runSearch() {
    let searchTerm = document.querySelector("[name='searchField']").value.toLowerCase();

    [].forEach.call(document.querySelectorAll(".searchTable tr"), (e, i) => {

        e.classList.add("hide");

    });

    for (let i = 0; i < tableOBJ.length; i++) {
        if (tableOBJ[i].dataStr.indexOf(searchTerm) !== -1) {
            document.querySelector("tr[data-row='" + i + "']").classList.remove("hide");
        }
    }


}