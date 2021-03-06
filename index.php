<html>
    <head>
        <meta charset="UTF-8" />
        <title>SimpAzon</title>
        <link href="css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="css/modal.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&family=Urbanist&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js" integrity="sha256-/H4YS+7aYb9kJ5OKhFYPUjSJdrtV6AeyJOtTkw6X72o=" crossorigin="anonymous"></script>
        <script src="js/both/TOP SITE.js"></script>
    </head>
    <body>
        <div class="header">
            <a href="#" class="logo">SimpAzon</a>
            <div class="header-right">
                <div class="header-right">
                    <a class="headeritem" class="" href="index.html"><center><span class="material-icons">&#xE88A;</span></center></a>
                    <a class="headeritem" id="orders" onclick="omodalOpen();" href="javascript:void(0);"><center><span class="material-icons">&#xE158;</span></center></a>
                    <a class="headeritem" id="account" onclick="loginButton();" href="javascript:void(0);"><center><span class="material-icons">&#xE87C;</span></center></a>
                </div>
            </div>
        </div>
        <div class="items">
            <div class="item" id="1" onclick="openproduct(1)">
                <center>
                    <img id="imi1" class="product" src="img/1.png">
                </center>
                <center>
                    <p id="imn1">Wood (Long Distance Only)</p>
                    <p class="quantity" id="imq1">x10</p>
                    <p id="imp1">C$3.00</p>
                </center>
            </div>
            <div class="item" id="2" onclick="openproduct(2);">
                <center>
                    <img id="imi2" class="product" src="img/1.png">
                </center>
                <center>
                    <p id="imn2">Hay Bale</p>
                    <p class="quantity" id="imq2">x1</p>
                    <p id="imp2">C$3.00</p>
                </center>
            </div>
            <div class="item" id="3" onclick="openproduct(3);">
                <center>
                    <img id="imi3" class="product" src="img/1.png">
                </center>
                <center>
                    <p id="imn3">Hay Bale</p>
                    <p class="quantity" id="imq3">x1</p>
                    <p id="imp3">C$3.00</p>
                </center>
            </div>
            <div class="item" id="4" onclick="openproduct(4);">
                <center>
                    <img id="imi4" class="product" src="img/1.png">
                </center>
                <center>
                    <p id="imn4">Wood (Long Distance Only)</p>
                    <p class="quantity" id="imq4">x10</p>
                    <p id="imp4">C$3.00</p>
                </center>
            </div>
            <div class="item" id="5" onclick="openproduct(5);">
                <center>
                    <img id="imi5" class="product" src="img/1.png">
                </center>
                <center>
                    <p id="imn5">Hay Bale</p>
                    <p class="quantity" id="imq5">x1</p>
                    <p id="imp5">C$3.00</p>
                </center>
            </div>
            <div class="item" id="6" onclick="openproduct(6);">
                <center>
                    <img id="imi6" class="product" src="img/1.png">
                </center>
                <center>
                    <p id="imn6">Hay Bale</p>
                    <p class="quantity" id="imq6">x1</p>
                    <p id="imp6">C$3.00</p>
                </center>
            </div>
        </div>
        <div id="debugmodal" class="debugmodal">
            <div class="modal-content" style="width: 30%;">
                <span id="dclose" class="material-icons" style="float: right;">&#xE5CD;</span>
                <input type="number" id="amount">
                <button onclick="setQuantity();">Set Current Item Quantity</button>
                <br>
                <input type="text" name="accounts" id="account-id">
                <button onclick="loadaccounts();">Set account cookie</button>
                <br>
                <button onclick="setGithubLayout();">Set Github Layout</button>
            </div>
        </div>
        <div id="loginmodal" class="loginmodal">
            <div class="modal-content" style="width: 200px;">
                <span id="close" class="material-icons" style="float: right;">&#xE5CD;</span>
                <form action="inc_login.php" method="post">
                    <input type="number" id="pid" name="pid" placeholder="Citizen ID">
                    <br>
                    <input type="password" id="cid" name="cid" placeholder="Player ID">
                    <br>
                    <input type="submit" id="submit" name="submit" value="Login">
                </form>
            </div>
        </div>
        <div id="usermodal" class="usermodal" onload="//setUserDetails();" style="display: none;">
            <div class="modal-content" style="width: 200px;">
                <span id="uclose" class="material-icons" style="float: right;">&#xE5CD;</span>
                <p id="username">Username: </p>
                <p id="balance">Balance: </p>
                <p id="orderamount">Orders: </p>
            </div>
        </div> 
        <div id="ordermodal" class="ordermodal" onload="//setUserDetails();" style="display: none;">
            <div class="modal-content" style="width: 200px;">
                <span id="oclose" class="material-icons" style="float: right;">&#xE5CD;</span>
                <table id="ordertable">
                </table>
            </div>
        </div>
        <script src="js/index/darkmode.js"></script>
        <script src="js/both/modal.js"></script>
        <script src="js/index/setjuan.js"></script>
        <script src="js/both/modalsetting.js"></script>
        <script src="js/both/user.js"></script>
        <script src="js/index/product.js"></script>
        <script src="js/both/BOTTOM SITE.js"></script>
        <script>
            setUserDetails();
        </script>
    </body>
</html>
