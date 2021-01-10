const newTaskInput = document.querySelector("#new-task");
const addTaskBtn = document.querySelector(".btn-add");
const list = document.querySelector(".list-todo");
const Donelist = document.querySelector(".list-done");
const Dellist = document.querySelector(".list-del");
const todoBtns = document.querySelector(".todo-control-btns");
const doneBtns = document.querySelector(".done-control-btns");
const delBtns = document.querySelector(".del-control-btns");
const tasksStatus = document.querySelector(".tasks-status");
const theme = document.querySelector("#checkbox");

addTaskBtn.addEventListener("click", addNewTask);
function addNewTask(e) {
  e.preventDefault();
  if (newTaskInput.value === "") {
    alert("you need to add task first");
  } else {
    // create task div with (task & btns)
    const newTaskItem = document.createElement("li");
    newTaskItem.classList.add("task-item", "todo-task");
    newTaskItem.innerText = newTaskInput.value;
    list.appendChild(newTaskItem);
    TasksNr();
    newTaskInput.value = null;
    function TasksNr() {
      const TasksNr = list.childNodes.length;
      if (TasksNr === 0) {
        tasksStatus.innerText = `You don't have tasks`;
      } else if (TasksNr === 1) {
        tasksStatus.innerText = `You still have 1 Task to do`;
      } else if (TasksNr > 1) {
        tasksStatus.innerText = `You still have ${TasksNr} Tasks to do`;
      }
    }

    function addTodoBtns() {
      const ctrlBtns = document.createElement("li");
      const checkBtn = document.createElement("button");
      checkBtn.classList.add("done-btn");
      checkBtn.innerHTML = `<i class="fas fa-check"></i>`;

      const delBtn = document.createElement("button");
      delBtn.classList.add("del-btn");
      delBtn.innerHTML = `<i class="far fa-minus-square"></i>`;

      ctrlBtns.appendChild(checkBtn);
      ctrlBtns.appendChild(delBtn);
      todoBtns.appendChild(ctrlBtns);

      //btns Events
      checkBtn.addEventListener("click", doneTask);
      function doneTask() {
        Donelist.appendChild(newTaskItem);
        checkBtn.remove();
        delBtn.remove();
        newTaskItem.classList.add("done-task");
        TasksNr();
        function addDoneBtns() {
          const ctrlBtns = document.createElement("li");
          const backBtn = document.createElement("button");
          backBtn.classList.add("back-btn");
          backBtn.innerHTML = `<i class="fas fa-undo"></i>`;

          const delBtn = document.createElement("button");
          delBtn.classList.add("del-btn");
          delBtn.innerHTML = `<i class="far fa-minus-square"></i>`;
          ctrlBtns.appendChild(backBtn);
          ctrlBtns.appendChild(delBtn);
          doneBtns.appendChild(ctrlBtns);

          backBtn.addEventListener("click", restoreTask);
          function restoreTask() {
            backBtn.remove();
            delBtn.remove();
            list.appendChild(newTaskItem);
            newTaskItem.classList.remove("done-task");
            addTodoBtns();
          }
          delBtn.addEventListener("click", delTask);
          function delTask() {
            Dellist.appendChild(newTaskItem);
            backBtn.remove();
            delBtn.remove();
            function addDeleteBtns() {
              const ctrlBtns = document.createElement("li");
              const backBtn = document.createElement("button");
              backBtn.classList.add("back-btn");
              backBtn.innerHTML = `<i class="fas fa-undo"></i>`;
              const perDelBtn = document.createElement("button");
              perDelBtn.classList.add("delete-final");
              perDelBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
              ctrlBtns.appendChild(backBtn);
              ctrlBtns.appendChild(perDelBtn);
              delBtns.appendChild(ctrlBtns);

              backBtn.addEventListener("click", restoreTaskfromDel);
              function restoreTaskfromDel() {
                backBtn.remove();
                perDelBtn.remove();
                list.appendChild(newTaskItem);
                newTaskItem.classList.remove("done-task");
                newTaskItem.classList.remove("del-task");

                addTodoBtns();
              }
              perDelBtn.addEventListener("click", perDelTask);
              function perDelTask() {
                newTaskItem.remove();
                perDelBtn.remove();
                backBtn.remove();
              }
            }
            addDeleteBtns();
            newTaskItem.classList.add("del-task");
          }
        }
        addDoneBtns();
      }
      delBtn.addEventListener("click", delTaskFromtodo);
      function delTaskFromtodo() {
        Dellist.appendChild(newTaskItem);
        checkBtn.remove();
        delBtn.remove();
        function addDeleteBtns() {
          const ctrlBtns = document.createElement("li");
          const backBtn = document.createElement("button");
          backBtn.classList.add("back-btn");
          backBtn.innerHTML = `<i class="fas fa-undo"></i>`;
          const perDelBtn = document.createElement("button");
          perDelBtn.classList.add("delete-final");
          perDelBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
          ctrlBtns.appendChild(backBtn);
          ctrlBtns.appendChild(perDelBtn);
          delBtns.appendChild(ctrlBtns);
          TasksNr();

          backBtn.addEventListener("click", restoreTaskfromDel);
          function restoreTaskfromDel() {
            backBtn.remove();
            perDelBtn.remove();
            list.appendChild(newTaskItem);
            newTaskItem.classList.remove("done-task");
            newTaskItem.classList.remove("del-task");
            addTodoBtns();
          }
          perDelBtn.addEventListener("click", perDelTask);
          function perDelTask() {
            newTaskItem.remove();
            perDelBtn.remove();
            backBtn.remove();
          }
        }
        addDeleteBtns();
        newTaskItem.classList.add("del-task");
      }
    }
    addTodoBtns();
  }
}
theme.addEventListener("change", themeChange);
function themeChange() {
  if (theme.checked) {
    document.documentElement.style.setProperty(
      "--light-color",
      "rgb(29, 53, 87)"
    );
    document.documentElement.style.setProperty(
      "--primary-color",
      "rgb(241, 250, 238)"
    );
  } else {
    document.documentElement.style.setProperty(
      "--light-color",
      "rgb(241, 250, 238)"
    );
    document.documentElement.style.setProperty(
      "--primary-color",
      "rgb(29, 53, 87)"
    );
  }
}
