var whowon
var won
var xoro = 1;
window.toplay = "0"
function firstplay() {
    let e1 = document.getElementsByName("xoro")
    e1.forEach(e => {
        if (e.checked) {
            toplay = e.value;
            console.log(toplay)
            document.getElementById("turn").innerText = ` Turn for ${toplay}`
            if (xoro > 1)
                document.location.reload();
        }
    })
}

function checkwin() {
    box = document.getElementsByClassName("box");
    win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]
   win.forEach(e => {
        if (((box[e[0]].innerText) == (box[e[1]].innerText)) && ((box[e[1]].innerText) == (box[e[2]].innerText)) && ((box[e[0]].innerText)) != "") {
            document.getElementById("turn").innerText = `${box[e[0]].innerText} Won`
            whowon = box[e[0]].innerText;
            won = "yes";
            Array.from(box, (element) => {
                element.style = "pointer-events:none"
            });
        }

        else if (xoro >= 9) {
            if (won == "yes")
                document.getElementById("turn").innerText = `${whowon} Won`
            else
                document.getElementById("turn").innerText = `Game Draw`

        }
    });
}

function play() {
    var ele = event.currentTarget;
    if (toplay == "X") {
        if (xoro % 2 != 0) {
            ele.innerText = 'X'
            document.getElementById("turn").innerText = "Turn for 0"
            checkwin()
            ele.style = "pointer-events:none"
            xoro++;
        }
        else {
            ele.innerText = '0'
            document.getElementById("turn").innerText = "Turn for X"
            checkwin()
            ele.style = "pointer-events:none"
            xoro++;
        }
    }
    else {
        if (xoro % 2 != 0) {
            ele.innerText = '0'
            document.getElementById("turn").innerText = "Turn for X"
            checkwin()
            ele.style = "pointer-events:none"
            xoro++;
        }
        else {
            ele.innerText = 'X'
            document.getElementById("turn").innerText = "Turn for 0"
            checkwin()
            ele.style = "pointer-events:none"
            xoro++;
        }
    }
}

document.getElementById("reset").addEventListener("click", () => {
    document.location.reload();
})
