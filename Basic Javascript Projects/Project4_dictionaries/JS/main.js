function A_Dictionary() { //defining function//
    var Oregon = { //creating variable //
        Location: "West", //dictionary inputs/ KVPS //
        Weather: "Rainy",
        Politics: "Liberal",
        Landscape: "Mountains and Forests",
    };
    delete Oregon.Weather; //deleting one KVP//
    document.getElementById("Dictionary").innerHTML = Oregon.Weather; //sending to HTML Doc 
}