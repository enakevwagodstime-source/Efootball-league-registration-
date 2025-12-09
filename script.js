document.getElementById("regForm").addEventListener("submit", function(e){
    e.preventDefault();

    var number = "2349079820557"; // ← REPLACE WITH YOUR WHATSAPP NUMBER

    var name = document.getElementById("name").value;
    var club = document.getElementById("club").value;
    var username = document.getElementById("username").value;
    var efootball = document.getElementById("efootball").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("location").value;
    var notes = document.getElementById("notes").value;

    var message =
        "*League Registration*" + "%0A%0A" +
        "*Full Name:* " + name + "%0A" +
        "*Club Name:* " + club + "%0A" +
        "*Username:* " + username + "%0A" +
        "*Efootball Username:* " + efootball + "%0A" +
        "*Gender:* " + gender + "%0A" +
        "*Phone:* " + phone + "%0A" +
        "*Email:* " + email + "%0A" +
        "*Location:* " + location + "%0A" +
        "*Notes:* " + notes;

    var url = "https://wa.me/" + number + "?text=" + message;

    window.open(url, "_blank");
});
