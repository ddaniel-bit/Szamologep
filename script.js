function osszeadas() {
    var szam_a = document.getElementById("szam_a").value;
    var szam_b = document.getElementById("szam_b").value;
    document.getElementById("eredmeny").innerHTML = parseFloat(szam_a) + parseFloat(szam_b);
}
function kivonas() {
    var szam_a = document.getElementById("szam_a").value;
    var szam_b = document.getElementById("szam_b").value;
    document.getElementById("eredmeny").innerHTML = parseFloat(szam_a) - parseFloat(szam_b);
}
function szorzas() {
    var szam_a = document.getElementById("szam_a").value;
    var szam_b = document.getElementById("szam_b").value;
    document.getElementById("eredmeny").innerHTML = parseFloat(szam_a) * parseFloat(szam_b);
}
function osztas() {
    var szam_a = document.getElementById("szam_a").value;
    var szam_b = document.getElementById("szam_b").value;
    document.getElementById("eredmeny").innerHTML = parseFloat(szam_a) / parseFloat(szam_b);
}