let boxes = document.querySelectorAll(".box");

let container = document.querySelector(".container");
let msg = document.querySelector("span");
let reset = document.querySelector("button") ;

let isgameover = false;







let ct = 0;
boxes.forEach((ibox) => {
  ibox.addEventListener("click", function () {

reset.setAttribute ("href","game.html") ;


    if (isgameover) {
      msg.textContent = "GAME OVER";
      return;
    }

    if (ibox.textContent !== "") {
      return;
    }

    if (ct % 2 == 0) {
      ibox.textContent = "O";
      ct = 1;
    } else {
      ibox.textContent = "X";
      ct = 0;
    }

    let box = [];
    box = [
      [
        boxes[0].textContent.trim(),
        boxes[1].textContent.trim(),
        boxes[2].textContent.trim(),
      ],
      [
        boxes[3].textContent.trim(),
        boxes[4].textContent.trim(),
        boxes[5].textContent.trim(),
      ],
      [
        boxes[6].textContent.trim(),
        boxes[7].textContent.trim(),
        boxes[8].textContent.trim(),
      ],
    ];

    // conditon check
    // Single loop se 3 Rows aur 3 Columns ek saath check:

    for (let i = 0; i < 3; i++) {
      // 1. Row Check (i change hoga: Row 0, Row 1, Row 2)
      if (
        box[i][0] !== "" &&
        box[i][0] === box[i][1] &&
        box[i][1] === box[i][2]
      ) {
        // alert("Winner: " + box[i][0]);
        msg.innerText = `Winner is : ${box[i][0]}`;

        boxes[i * 3 + 0].classList.add("win");
        boxes[i * 3 + 1].classList.add("win");
        boxes[i * 3 + 2].classList.add("win");
        isgameover = true;
        return;
      }

      // 2. Column Check (i column position ban jayega: Col 0, Col 1, Col 2)
      if (
        box[0][i] !== "" &&
        box[0][i] === box[1][i] &&
        box[1][i] === box[2][i]
      ) {
        // alert("Winner: " + box[0][i]);
        msg.innerText = `Winner is : ${box[0][i]}`;
        isgameover = true;
        boxes[0 * 3 + i].classList.add("win");
        boxes[1 * 3 + i].classList.add("win");
        boxes[2 * 3 + i].classList.add("win");
        return;
      }
    }

    // 3. Diagonals ke liye loop ki bhi zaroorat nahi, direct 2 conditions:
    // Main Diagonal (\)
    if (
      box[0][0] !== "" &&
      box[0][0] === box[1][1] &&
      box[1][1] === box[2][2]
    ) {
        boxes[0 * 3 + 0].classList.add("win");
  boxes[1* 3 + 1].classList.add("win");
  boxes[2 * 3 + 2].classList.add("win");
      //   alert("Winner: " + box[0][0]);
      msg.innerText = `Winner is : ${box[0][0]}`;
      isgameover = true;

      return;
    }

    // Anti Diagonal (/)
    if (
      box[0][2] !== "" &&
      box[0][2] === box[1][1] &&
      box[1][1] === box[2][0]
    ) {
      //   alert("Winner: " + box[0][2]);
boxes[0 * 3 + 2].classList.add("win");
  boxes[1 * 3 + 1].classList.add("win");
  boxes[2 * 3 + 0].classList.add("win");
      msg.innerText = `Winner is : ${box[2][2]}`;
      isgameover = true;
    }
  });
});
