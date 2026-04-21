function agregar() {
    const texto = document.getElementById("tarea").value;

    if (texto === "") return;

    const li = document.createElement("li");
    li.textContent = texto;

    document.getElementById("lista").appendChild(li);

    document.getElementById("tarea").value = "";
}