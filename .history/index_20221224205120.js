<html>
<head>
  <title></title>
  <script type="text/javascript" src="sudoku.js"></script>
  <script type="text/javascript" src="analytics.js"></script>
  <style type="text/css">

    body { font-family: Calibri, sans-serif; }
    #container { text-align: center }
    table { border-collapse: collapse; font-size: 2em; margin: 0 auto; }
    colgroup, tbody { border: solid medium; }
    td { border: solid thin; height: 1.4em; width: 1.4em; text-align: center; padding: 0; }
    button { margin-top: 15px; font-size: 1.5em; }
    
    padd{padding-bottom: 100px;}
    ]
  </style>
</head>
<body>
  
    
  <div id="container">
    <img src="gfg.png" style = "height:100px ; width: 400px; align ="left" "  >

    <h1 class = "padd">Sudoku Solver</h1>

    <table id="sudoku-board">
      
      
      <colgroup><col><col><col>
      <colgroup><col><col><col>
      <colgroup><col><col><col>
      <tbody>
       <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>
       <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>     
       <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>
      <tbody>
       <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>
       <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>     
       <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>
      <tbody>
       <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>
       <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>     
       <tr> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td> <td contenteditable="true"></td>
    </table>
    <div>
      <button id="solve-button">Solve!</button>
    </div>
    <div>
      <button id="clear-button">Clear board</button>
    </div>
  </div>
</body>

<script type="text/javascript">
  document.getElementById("sudoku-board").addEventListener("keyup", function(event) {
    if(event.target && event.target.nodeName == "TD") {
      var validNum = /[1-9]/;
      var tdEl = event.target;
      if (tdEl.innerText.length > 0 && validNum.test(tdEl.innerText[0])) {
        tdEl.innerText = tdEl.innerText[0];
      } else {
        tdEl.innerText = "";
      }
    }
  });

  document.getElementById("solve-button").addEventListener("click", function(event) {
    var boardString = boardToString();
    var solution = SudokuSolver.solve(boardString);
    if (solution) {
      stringToBoard(solution);
    } else {
      alert("Invalid board!");
    }
  })

  document.getElementById("clear-button").addEventListener("click", clearBoard);

  function clearBoard() {
    var tds = document.getElementsByTagName("td");
    for (var i = 0; i < tds.length; i++) {
      tds[i].innerText = "";
    }
  }

  function boardToString() {
    var string = "";
    var validNum = /[1-9]/;
    var tds = document.getElementsByTagName("td");
    for (var i = 0; i < tds.length; i++) {
      if (validNum.test(tds[i].innerText[0])) {
        string += tds[i].innerText;
      } else {
        string += "-";
      }
    }
    return string;
  }

  function stringToBoard(string) {
    var currentCell;
    var validNum = /[1-9]/;
    var cells = string.split("");
    var tds = document.getElementsByTagName("td");
    for (var i = 0; i < tds.length; i++) {
      currentCell = cells.shift();
      if (validNum.test(currentCell)) {
        tds[i].innerText = currentCell;
      }
    }
  }
</script>
</html>