
//function for sending OTP 
function sendOTP() {
    var url = "https://graph.facebook.com/v13.0/108647965249651/messages";
    var phoneNumber = document.getElementById('cellphone').value;
    console.log(phoneNumber);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer EAARUNDTe6nsBAIJ3ZAhHuur5wZAm35IZBKY32BOdPZAJyOAv8xK17rZCZAZCmgaTh9RkYZASOfhcwFTZCzSRtUeNEOGNMqg5RSG5U070osGW54SUneSxBU9BZBGd0yMirBBRLsTtoMmNVVFDNLjTvYwblO9mxOzAyJ7ZBZB13MTEV2b1KyZAlL5KNJTh4SKK1acxjRSvgzSy0dofLNZCQ0YT1cDZAgg");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);



            console.log(xhr.responseText);
        }
    };

    var data = `{"messaging_product":"whatsapp", "to": ${phoneNumber}, "type": "template", "template": { "name": "mbsb_registration", "language": { "code": "en" } }}`;

    xhr.send(data);

    document.getElementById('cellphoneForm').style.display = 'none'
    document.getElementById('otpdiv').style.display = 'block'
}

//function for confirm OTP
function confirmOTP(){
    var otp = document.getElementById('otp').value;
    if(otp == 129045){
        document.getElementById('otpdiv').style.display = "none";
        document.getElementById('registerDiv').style.display = 'block'

    }else{
        alert('Wronge OTP')
    }
}