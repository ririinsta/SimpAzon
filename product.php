<html>
    <head>
        <link href="css/main.css" rel="stylesheet">
        <link href="css/product.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300&family=Poppins:wght@500&family=Roboto:wght@300;500&family=Urbanist&family=Rubik&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="css/modal.css" rel="stylesheet">
        <script src="js/both/TOP SITE.js"></script>
        <script src="js/product/purchase.js"></script>
        <title id="title">SimpAzon | Item Name</title>
    </head>
    <body>
        <div class="header">
            <a href="index.html" class="logo">SimpAzon</a>
            <div class="header-right">
                <a class="headeritem" class="" href="index.html"><center><span class="material-icons">&#xE88A;</span></center></a>
                <a class="headeritem" id="orders" onclick="omodalOpen();" href="javascript:void(0);"><center><span class="material-icons">&#xE158;</span></center></a>
                <a class="headeritem" id="account" onclick="checkLogin();" href="javascript:void(0);"><center><span class="material-icons">&#xE87C;</span></center></a>
            </div>
        </div>
        <div class="info">
            <img class="productpicture" id="productpicture" src="img/1.png">
            <h2><span class="productname" id="productname">Test Item</span><span id="productindacator" class="material-icons tooltip">&#xE1D1;</span></h2> 
            <p class="description" id="discription">This is a Test Item</p>
        </div>
        <div class="buy">
            <h3 id="productprice" class="purchaseprice">C$</h3>
            <a class="purchase" onclick="modelOpen();" href="javascript:void(0);">
                <span id="buytext">Purchase</span>
            </a>
            <br>
            <br>
            <br>
            <a class="addtocart" href="javascript:void(0);">
                <span id="carttext">Add To Cart</span>
            </a>
        </div>
        <div id="purchasemodal" class="purchasemodal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Purchase</h2>
            </div>
        </div>
        <div id="loginmodal" class="loginmodal">
            <div class="modal-content" style="width: 200px;">
                <span id="close" class="material-icons" style="float: right;">&#xE5CD;</span>
                <form>
                    <input type="number" name="usercid" id="citizenid" placeholder="Citizen ID">
                    <br>
                    <input type="password" name="userid" id="usernumber" placeholder="Player ID">
                    <br>
                    <input type="button" value="Login" onclick="login();">
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
    </body>
    <div id="ordermodal" class="ordermodal" onload="//setUserDetails();" style="display: none;">
        <div class="modal-content" style="width: 200px;">
            <span id="oclose" class="material-icons" style="float: right;">&#xE5CD;</span>
            <table id="ordertable">

            </table>
        </div>
    </div> 
    <script src="js/index/product.js"></script>
    <script src="js/both/modal.js"></script>
    <script src="js/both/login.js"></script>
    <script src="js/product/purchase.js"></script>
    <script src="js/both/user.js"></script>
    <script src="js/product/setProductInfo.js"></script>
    <script src="js/both/BOTTOM SITE.js"></script>
</html>
