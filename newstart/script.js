var website = "https://dailydelightvegetables.com/";

var serverURL = "https://klugerkopf.com/ddv/api/";

var serverErrorMessage = "Something went wrong. Please try again.";

var orderPlaceTimeStart = "01:00:00";
var orderPlaceTimeEnd = "22:30:00";

function getConfigValue(configId){
    let response = null;
    $.ajax({
        url: serverURL+"get_config_value.php",
        type: "GET",
        async: false,
        cache: false,
        data: "config_id="+configId,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function requestOTP(email){
	let response = null;
    $.ajax({
        url: serverURL+"temp_login.php",
        type: "GET",
        async: false,
        cache: false,
        data: "email_id="+email,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function reRequestOTP(email){
    let response = null;
    $.ajax({
        url: serverURL+"resend_otp.php",
        type: "GET",
        async: false,
        cache: false,
        data: "email_id="+email,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function validateOTP(email,otp){
    let response = null;
    $.ajax({
        url: serverURL+"validate_otp.php",
        type: "GET",
        async: false,
        cache: false,
        data: "email_id="+email+"&otp="+otp,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function createAccount(email,contact,name,pincode,address,password){
    let response = null;
    $.ajax({
        url: serverURL+"create_account.php",
        type: "GET",
        async: false,
        cache: false,
        data: "email_id="+email+"&contact_no="+contact+"&full_name="+name+"&pincode="+pincode+"&address="+address+"&password="+password,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function requestOTPForPassword(email){
    let response = null;
    $.ajax({
        url: serverURL+"reset_password.php",
        // url: serverURL+"reset_password.php",
        // url:'https://klugerkopf.com/ddv/api/temp_login.php?email_id=<'+document.getElementById('email').value +'>',
        type: "GET",
        async: false,
        cache: false,
        data: "email_id="+email,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function updateAccountPassword(email,password){
    let response = null;
    $.ajax({
        url: serverURL+"update_password.php",
        type: "GET",
        async: false,
        cache: false,
        data: "email_id="+email+"&password="+password,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function login(email,password){
    let response = null;
    $.ajax({
        url: serverURL+"login.php",
        type: "GET",
        async: false,
        cache: false,
        data: "email_id="+email+"&password="+password,
        success: function(result) {
            response = result;
        },
        error: function() {
            alert(serverErrorMessage);
        }
    });
    return response;
}

function getUserDetails(email){
    let response = null;
    $.ajax({
        url: serverURL+"get_user_details.php",
        type: "GET",
        async: false,
        cache: false,
        data: "email_id="+email,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function getPackagesForUser(){
    let response = null;
    $.ajax({
        url: serverURL+"get_package_list.php",
        type: "GET",
        async: false,
        cache: false,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function updateProfile(userId,contact,name,pincode,address){
    let response = null;
    $.ajax({
        url: serverURL+"update_profile.php",
        type: "GET",
        async: false,
        cache: false,
        data: "user_id="+userId+"&contact_no="+contact+"&full_name="+name+"&pincode="+pincode+"&address="+address,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function saveSubscription(userId,packageId){
    let response = null;
    $.ajax({
        url: serverURL+"save_subscription.php",
        type: "GET",
        async: false,
        cache: false,
        data: "user_id="+userId+"&package_id="+packageId,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function getCurrentDateTime(){
    let response = null;
    $("#hdnCurrentDateTime").val("");
    $.ajax({
        url: serverURL+"get_current_date_time.php",
        type: "GET",
        async: false,
        cache: false,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function getPackageDetails(userId,packageId){
    let response = null;
    $.ajax({
        url: serverURL+"get_package_details.php",
        type: "GET",
        async: false,
        cache: false,
        data: "user_id="+localStorage.getItem("user_id")+"&package_id=0",
        success: function(result) {
            response = result;
        },
        error: function() {
            alert(serverErrorMessage);
        }
    });
    return response;
}

function getItemsForPackage(packageId){
    let response = null;
    $.ajax({
        url: serverURL+"get_product_for_order.php",
        type: "GET",
        async: false,
        cache: false,
        data: "package_id="+packageId,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function placeOrder(userId,subscribeId,items,quantities){
    let response = null;
    $.ajax({
        url: serverURL+"place_order.php",
        type: "GET",
        async: false,
        cache: false,
        data: "user_id="+userId+"&subscribe_id="+subscribeId+"&item_arr="+items+"&quantity_arr="+quantities,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function getOrderDetails(userId,orderId){
    let response = null;
    $.ajax({
        url: serverURL+"get_order_details.php",
        type: "GET",
        async: false,
        cache: false,
        data: "user_id="+userId+"&order_id="+orderId,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function updateOrder(userId,subscribeId,orderId,items,quantities){
    let response = null;
    $.ajax({
        url: serverURL+"update_order.php",
        type: "GET",
        async: false,
        cache: false,
        data: "user_id="+userId+"&subscribe_id="+subscribeId+"&order_id="+orderId+"&item_arr="+items+"&quantity_arr="+quantities,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function getOrderList(userId){
    let response = null;
    $.ajax({
        url: serverURL+"get_order_list.php",
        type: "GET",
        async: false,
        cache: false,
        data: "user_id="+userId,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}

function updateSubscription(subscribeId){
    let response = null;
    $.ajax({
        url: serverURL+"update_subscription.php",
        type: "GET",
        async: false,
        cache: false,
        data: "subscribe_id="+subscribeId,
        success: function(result) {
            response = result;
        },
        error: function() {
            response = serverErrorMessage;
        }
    });
    return response;
}















// function getCurrentDateTime(){
//     $("#hdnCurrentDateTime").val("");
//     $.ajax({
//         url: serverURL+"get_current_date_time.php",
//         type: "GET",
//         async: false,
//         cache: false,
//         success: function(result) {
//             // console.log(result);
//             $("#hdnCurrentDateTime").val(result);
//             var currDate = new Date(result);
//             // console.log(currDate.toTimeString());
//             var placeDt = new Date(result);
//             var placeTimeArr = orderPlaceTime.split(":");
//             placeDt.setHours(placeTimeArr[0]);
//             placeDt.setMinutes(placeTimeArr[1]);
//             placeDt.setSeconds(placeTimeArr[2]);
//             // console.log(placeDt.toTimeString());
//             if(currDate.toTimeString() > placeDt.toTimeString()){
//                 // console.log("Currdate is greater");
//                 isPlaceTimeOver = true;
//             }else{
//                 // console.log("Currdate is lesser");
//                 isPlaceTimeOver = false;
//             }

//             var processDt = new Date(result);
//             var processTimeArr = orderProcessTime.split(":");
//             processDt.setHours(processTimeArr[0]);
//             processDt.setMinutes(processTimeArr[1]);
//             processDt.setSeconds(processTimeArr[2]);
//             // console.log(processDt.toTimeString());
//             if(currDate.toTimeString() > processDt.toTimeString()){
//                 // console.log("Currdate is greater");
//                 isProcessTimeOver = true;
//             }else{
//                 // console.log("Currdate is lesser");
//                 isProcessTimeOver = false;
//             }
//         },
//         error: function() {
//             $("#hdnCurrentDateTime").val("");
//             alert(serverErrorMessage);
//         }
//     });
// }

function getHomePage(){
    // console.log(localStorage.getItem("user_id"));
    if(localStorage.getItem("user_id") != null){
        var package_id = getPackageDetailsForHomePage();
        if(package_id!=0){
            window.location.href = "home-screen.html";
        }else{
            window.location.href = "select-package.html";
        }
    }else{
        //Nothing
    }
}

function signOut(){
    if(confirm("Are you sure want to sign out from this device?")){
        localStorage.clear();
        window.location.href = "index.html";
    }
}

function getPackageDetailsForHomePage(){
    var package_id = 0;
    $.ajax({
        url: serverURL+"get_package_details.php",
        type: "GET",
        async: false,
        cache: false,
        data: "user_id="+localStorage.getItem("user_id")+"&package_id=0",
        success: function(result) {
            var jsonData = JSON.parse(result);
            if(jsonData.length > 0){
                for(i=0; i<jsonData.length; i++){
                    var counter = jsonData[i];
                    package_id = counter.package_id;
                }
            }else{
                package_id = 0;
            }
        },
        error: function() {
            package_id = 0;
            alert(serverErrorMessage);
        }
    });
    return package_id;
}








function placeNextOrder(){
    return false;
}

function getUserDetailsLocally(){
    var user_name = localStorage.getItem("full_name");
    var uname = user_name.split(" ");
    $("#userName").html(uname[0]);
}

function getOrderList(){
    var totalOrders = [];
    $.ajax({
        url: serverURL+"get_order_list.php",
        type: "GET",
        async: false,
        cache: false,
        data: "user_id="+localStorage.getItem("user_id"),
        success: function(result) {
            totalOrders = JSON.parse(result);
        },
        error: function() {
            totalOrders = [];
            alert(serverErrorMessage);
        }
    });
    return totalOrders;
}

function getOrderDetailsForIntake(){
    $.ajax({
        url: serverURL+"get_order_details.php",
        type: "GET",
        async: false,
        cache: false,
        data: "user_id="+localStorage.getItem("user_id")+"&order_id=0",
        success: function(result) {
            var orderData = "";
            var jsonData = JSON.parse(result);
            if(jsonData.length > 0){
                for(i=0; i<jsonData.length; i++){
                    var counter = jsonData[i];
                    orderData += "<div class=\"form-group has-feedback icon-container\">"+
                                    "<button type=\"button\" style=\"text-align: left;\" class=\"btn btn-outline-theme btn-block btn-round-lg\">"+
                                        counter.product_name+
                                    "</button>"+
                                    "<span class=\"fa fa-angle-right form-control-feedback container-icon\"></span>"+
                                  "</div>";
                }
                orderData += "<div class=\"form-group has-feedback icon-container\">"+
                                    "<button type=\"button\" style=\"text-align: left;\" class=\"btn btn-outline-theme btn-block btn-round-lg\">"+
                                    "Type of Soil"+
                                    "</button>"+
                                    "<span class=\"fa fa-angle-right form-control-feedback container-icon\"></span>"+
                                  "</div>";
                console.log(orderData);
                $("#divOrderDetails").html(orderData);
            }else{
                //Nothing
            }
        },
        error: function() {
            alert(serverErrorMessage);
        }
    });
}

function getOrderDetailsForModify(){
    $.ajax({
        url: serverURL+"get_order_details.php",
        type: "GET",
        async: false,
        cache: false,
        data: "user_id="+localStorage.getItem("user_id")+"&order_id=0",
        success: function(result) {
            var jsonData = JSON.parse(result);
            if(jsonData.length > 0){
                var daily = 0;
                var essentials = 0;
                for(i=0; i<jsonData.length; i++){
                    var counter = jsonData[i];
                    if(counter.category_id != 7 && counter.category_id != 8){
                        if(counter.quantity == 2){
                            $("#item"+(daily+1)).val(counter.product_id);
                            $("#item"+(daily+2)).val(counter.product_id);
                            daily+=2;
                        }else{
                            $("#item"+(daily+1)).val(counter.product_id);
                            daily+=1;
                        }
                    }else if(counter.category_id == 7){
                        if(counter.quantity == 2){
                            $("#item3_"+(essentials+1)).val(counter.product_id);
                            $("#item3_"+(essentials+2)).val(counter.product_id);
                            essentials+=2;
                        }else{
                            $("#item3_"+(essentials+1)).val(counter.product_id);
                            essentials+=1;
                        }
                        
                    }
                    $("#hdnOrderId").val(counter.order_id);
                    // if(counter.category_id != 7 && counter.category_id != 8){
                    // item_arr.push(counter.product_id);
                    // quantity_arr.push(counter.quantity);
                    // order_id_arr.push(counter.order_det_id);
                    // $("#hdnOrderDateTime").val(counter.order_date_time);
                }
            }else{
                //Nothing
            }
        },
        error: function() {
            alert(serverErrorMessage);
        }
    });
}

function getCalenderDetails(){
    alert("This module is under process.");   
}

function getHomeDetails(){
    window.location.href = "home-screen.html";   
}

function openWebSite(){
    if(confirm("Are you sure want to open website? This will open your browser.")){
        window.open(website, '_system');
        return false;
    }
}