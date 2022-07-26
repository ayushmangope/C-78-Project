var images= ["My_Family_Book.jpg", "Grandpa_c_78.jpg", "Papa_c_78.jpg", "Mother_c_78.png", "Kid_c_78.jpg"];
var names= ["Family Book", "Ranbir Singh", "Diljeet Singh", "Sonia Dixit", "Rehan Sharma"];
var i = 0;
function update()
{
    i++
    var My_Family_Book_in_array = 5
    if (i> My_Family_Book_in_array)
    {
        i = 0;
    }

    var updatedImage = images [i];
    document.getElementById("My_Family_Book").src = updatedImage;
    document.getElementById("My_Family_Book").src = updatedImage;
    document.getElementById("Grandpa_c_78.jpg").src = updatedImage;
    document.getElementById("Papa_c_78.jpg").src = updatedImage;
    document.getElementById("Mother_c_78.png").src = updatedImage;
    document.getElementById("Kid_c_78.jpg").src = updatedImage;

    var updatedName = images [i]
    document.getElementById("Family_Book").innerHTML = updatedName;
    document.getElementById("Family_Book").innerHTML = updatedName;
    document.getElementById("Ranbir_Singh").innerHTML = updatedName;
    document.getElementById("Ranbir_Singh").innerHTML = updatedName;
    document.getElementById("Diljeet_Singh").innerHTML = updatedName;
    document.getElementById("Sonia_Dixit").innerHTML = updatedName;
    document.getElementById("Rehan_Sharma").innerHTML = updatedName;
}