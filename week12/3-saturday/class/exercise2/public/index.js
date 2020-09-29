$().ready(() => {
  fetch("./api/todos")
    .then((res) => res.json())
    .then((data) => {
      $("#current-todos").html(data);
    });
  $("#add").click(() => {
    fetch("./api/todos", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        $("#current-todos").html(data);
      });
  });

  $("#delete").click(() => {
    fetch("./api/todos/:id", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        $("#current-todos").html(data);
      });
  });
});
$("#add").click(() => {
  fetch("./api/todos", { method: "POST" })
    .then((res) => res.json())
    .then((data) => {
      $("#current-todos").html(data);
    });
});

$("#delete").click(() => {
  fetch("./api/decrement", { method: "POST" })
    .then((res) => res.json())
    .then((data) => {
      $("#current-todos").html(data);
    });
});
