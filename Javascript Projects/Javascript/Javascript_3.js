function displayType(movement) {
    var movementType = movement.getAttribute("data-movement-type");
    alert(movementType + " was my favorite way to get exercise in "
    + movement.innerHTML);
}