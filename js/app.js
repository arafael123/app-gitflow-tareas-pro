function agregar() {
    const texto = document.getElementById("tarea").value;

    if (texto === "") return;

    const li = document.createElement("li");
    li.textContent = texto;

    document.getElementById("lista").appendChild(li);

    document.getElementById("tarea").value = "";

    li.onclick = function () {
    li.style.textDecoration = "line-through";
    li.style.color = "gray";

    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = function () {
    li.remove();
};

li.appendChild(btn);
};
}