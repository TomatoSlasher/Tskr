//draggable library
import { Sortable, Plugins } from "@shopify/draggable";

//get randome color from string

// svg iconss
import edit from "url:./svg/edit-regular.svg";
import pen from "url:./svg/pen-solid.svg";
import plus from "url:./svg/plus-solid.svg";
import trash from "url:./svg/trash-alt-solid.svg";
import dots from "url:./svg/ellipsis-h-solid.svg";
import clock from "url:./svg/clock-regular.svg";
import times from "url:./svg/times-solid.svg";

//imported html element
const lists = document.querySelector(".list-container");
const list = document.querySelectorAll(".list");
const newList = document.querySelector(".new-list");
const newListContainer = document.querySelector(".newlist-container");
const listContainer = document.querySelector(".list-container");
const listItem = document.querySelectorAll(".list-item");
const listTitle = document.querySelectorAll(".list-title");
const listClear = document.querySelector(".list-clear");
const addTask = document.querySelectorAll(".add-task");
const fullList = document.querySelectorAll(".full-list");
const app = document.querySelector(".app");

String.prototype.toColor = function () {
  var colors = [
    "#ff3f3f",
    "#f2ab23",
    "#ef4f91",
    "#ff1a0a",
    "#f9ea13",
    "#5a49d8",
    "#5cc4ed",
    "#7216af",
    "#ba0754",
    "#32af1f",
    "#1fa52f",
    "#500da3",
    "#a572cc",
    "#f7ada3",
    "#e57214",
    "#424241",
  ];

  var hash = 0;
  if (this.length === 0) return hash;
  for (var i = 0; i < this.length; i++) {
    hash = this.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  hash = ((hash % colors.length) + colors.length) % colors.length;
  return colors[hash];
};

// update local storage to current page inner html
function updateStorage() {
  let listsHtml = document.querySelector(".list-container").innerHTML;

  const entry = {
    listUL: listsHtml,
  };
  localStorage.setItem("entry", JSON.stringify(entry));
}

let items = JSON.parse(localStorage.getItem("entry"));

// inserting localstorage inner html when refreshing

if (items) {
  lists.insertAdjacentHTML("afterbegin", items.listUL);
}

// // allowing task items to be sortable
let sortable = new Sortable(document.querySelectorAll(".li-container"), {
  draggable: ".full-item",
  mirror: {
    constrainDimensions: true,
  },
  SwapAnimation: {
    duration: 200,
    easingFunction: "ease-in-out",
  },

  plugins: [Plugins["SwapAnimation"]],
});

// make the task items hidden when starting to drag
sortable.on("drag:move", (e) => {
  e.source.style.backgroundColor = "#cbcdd1";
  e.source.childNodes[1].style.visibility = "hidden";
});

sortable.on("drag:stopped", (e) => {
  updateStorage();
});

// reasigning the task items to the sortable library when they get destroyed
const updateSort = function () {
  sortable.destroy();
  sortable = new Sortable(document.querySelectorAll(".li-container"), {
    draggable: ".full-item",
    mirror: {
      constrainDimensions: true,
    },
    SwapAnimation: {
      duration: 200,
      easingFunction: "ease-in-out",
    },

    plugins: [Plugins["SwapAnimation"]],
  });

  sortable.on("drag:move", (e) => {
    e.source.style.backgroundColor = "#cbcdd1";
    e.source.childNodes[1].style.visibility = "hidden";
  });

  // updating storage and re-asigning the lists to the sortable library
  sortable.on("drag:stopped", (e) => {
    updateStorage();
  });
};

const taskTitleMarkup = `
  <div class="text-tag-add text-list-add">
                              <textarea class='tags-text list-textarea' name="tags-text" id="task-text" placeholder="Enter List Name"></textarea>
                              <div class="add-cancel-btn">
                                <p class="add-tag-btn tag-btn">Add List</p>
                                <p class="cancel-tag-btn tag-btn">Cancel</p>
                              </div>


                            </div>
  `;

const textareaMarkup = `
  <div class="text-tag-add text-task-add">
                              <textarea class='tags-text task-textarea' name="tags-text" id="task-text" placeholder="Enter Task"></textarea>
                              <div class="add-cancel-btn">
                                <p class="add-tag-btn tag-btn">Add Task</p>
                                <p class="cancel-tag-btn tag-btn">Cancel</p>
                              </div>


                            </div>
  `;

const gitTextareaMarkup = (value) => {
  const textareaValue = `
<textarea class='task-textarea' name="task-text" id="task-text" placeholder="Enter task" >${value}</textarea>
`;
  return textareaValue;
};

const gitLiMarkup = (value) => {
  const newListItemMarkup = `
           <div class='full-item'>

                      <li  class="list-item">
                        <div class="task-header">
                           <div class="tags">
                           <p class="add-tag tags-el">Add Tag +</p>

                           </div>
                         <img id='edit-con' class= 'edit-icon-li' src="${dots}"/>
                        </div>

                         <p class='list-item-text'>${value}</p>

                        <div class="task-footer">
                         <p class="created"> <img class="clock" src="${clock}" alt=""> 4 May</p>
                         <p class="created"> <img class="clock" src="${clock}" alt="">Due 18 May</p>
                        </div>


                      </li>

                      <div id = 'tab' class='li-edit-tab'>
                          <div class='tab-icon tab-pen'>
                             <img class= 'edit-pen-li tab-img' src="${pen}"/>
                             <p class='tab-text-pen'> Edit task </p>
                          </div>

                          <div class='tab-icon tab-trash'>
                            <img class= 'edit-trash-li tab-img' src="${trash}"/> <p class='tab-text-trash'> Remove task </p>
                          </div>

                      </div>
                    </div>
          `;
  return newListItemMarkup;
};
const gitListMarkup = (value) => {
  const newListMarkup = `
        <div class="full-list">
                  <ul class="list">
                  <h2 class='list-title'>${value}
                  <img class= 'edit-icon'src="${edit}"/> </h2>
                  <div class = 'li-container'></div>

                  </ul>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>
        `;
  return newListMarkup;
};

const tagTextMarkup = `
  <div class="text-tag-add">
                              <textarea class='tags-text' name="tags-text" id="task-text" placeholder="Enter Tag"></textarea>
                              <div class="add-cancel-btn">
                                <p class="add-tag-btn tag-btn">Add Tag</p>
                                <p class="cancel-tag-btn tag-btn">Cancel</p>
                              </div>


                            </div>
  `;

const tagMarkup = (value) => {
  const markup = `
   <p class="tags-el tags-all">${value}<img class = 'tag-delete' src="${times}" alt=""></p>
  `;
  return markup;
};

const insertTag = (value, el) => {
  el.insertAdjacentHTML("afterend", tagMarkup(value));
  el.remove();
  updateStorage();
  updateSort();

  tagsColors();
};

// add new tags
const tagTextHandler = (el) => {
  el.insertAdjacentHTML("beforeBegin", tagTextMarkup);
  const tagTextareaAll = document.querySelector(".text-tag-add");
  const tagTextarea = document.querySelector(".tags-text");
  const tagCancel = document.querySelector(".cancel-tag-btn");
  const tagAdd = document.querySelector(".add-tag-btn");

  tagTextarea.focus();
  // move cursor to the end of the word
  tagTextarea.setSelectionRange(
    tagTextarea.value.length,
    tagTextarea.value.length
  );
  tagCancel.addEventListener("click", () => {
    tagTextareaAll.remove();
    updateSort();
  });
  tagAdd.addEventListener("click", () => {
    const tagTextValue = tagTextarea.value.toLowerCase();
    if (tagTextValue) {
      insertTag(tagTextValue, tagTextareaAll);
    }
    if (!tagTextValue) {
      tagTextareaAll.remove();
    }
    updateSort();
  });

  tagTextarea.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const tagTextValue = tagTextarea.value.toLowerCase();
      if (tagTextValue) {
        insertTag(tagTextValue, tagTextareaAll);
      }
      if (!tagTextValue) {
        tagTextareaAll.remove();
      }
      updateSort();
    }
  });

  tagTextarea.addEventListener("blur", (e) => {
    window.addEventListener("click", () => {
      if (e.target != tagCancel) {
        const tagTextValue = tagTextarea.value.toLowerCase();
        if (tagTextValue) {
          insertTag(tagTextValue, tagTextareaAll);
        }
        if (!tagTextValue) {
          tagTextareaAll.remove();
        }
      }
    });
    updateSort();
  });
};

lists.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches(".add-tag")) {
    const addTagEl = e.path[0];
    tagTextHandler(addTagEl);
  }
  if (e.target.matches(".tag-delete")) {
    const tagEl = e.path[1];
    tagEl.remove();
    updateStorage();
  }
});

const tagsColors = () => {
  const tagsAll = document.querySelectorAll(".tags-all");
  tagsAll.forEach((el) => {
    const tagText = el.innerText;

    const color = `${tagText}`.toColor();
    el.style.backgroundColor = `${color}`;
  });
};
tagsColors();

const listTextareaHandler = (first) => {
  const el = document.querySelector(".list-textarea");
  const textListAdd = document.querySelector(".text-list-add");
  const tagCancel = document.querySelector(".cancel-tag-btn");
  const tagAdd = document.querySelector(".add-tag-btn");

  el.focus();
  textListAdd.scrollIntoView({ behavior: "smooth" });

  // adding text area text to a new task item when pressing enter

  tagCancel.addEventListener("mousedown", (e) => {
    e.preventDefault();

    textListAdd.remove();
    updateSort();
  });

  tagAdd.addEventListener("click", () => {
    const textValue = el.value;

    // only adding new task item if the textarea box containes text
    if (textValue) {
      first.insertAdjacentHTML("beforeend", gitListMarkup(textValue));
      textListAdd.remove();
      updateStorage();
      updateSort();
    }
    if (!textValue) {
      textListAdd.remove();
    }

    updateStorage();
    updateSort();
  });

  el.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const textValue = el.value;
      textListAdd.remove();

      // only adding new task item if the textarea box containes text
      if (textValue) {
        first.insertAdjacentHTML("beforeend", gitListMarkup(textValue));
        updateStorage();
      }

      updateSort();
    }
  });
  window.addEventListener(
    "mousedown",
    (e) => {
      if (e.target != tagCancel) {
        el.addEventListener("blur", (e) => {
          const textValue = el.value;
          if (textValue) {
            first.insertAdjacentHTML("beforeend", gitListMarkup(textValue));
            textListAdd.remove();
            updateStorage();
            updateSort();
          }
          if (!textValue) {
            textListAdd.remove();
          }
          updateSort();
        });
      }
    },
    { once: true }
  );
};

// creating new lists
newList.addEventListener("click", (e) => {
  e.preventDefault();
  lists.insertAdjacentHTML("beforeend", taskTitleMarkup);
  listTextareaHandler(lists);

  // animation scroll when you click the add new list button
  newListContainer.scrollIntoView({ behavior: "smooth" });
});

// switching between the list and task item to be draggable (only 1 part of the elements can be drggable)
lists.addEventListener("mousedown", (e) => {
  if (e.target.matches(".add-task")) {
    sortable.destroy();
  }
  if (e.target.matches(".edit-icon-li")) {
    sortable.destroy();
  }
  if (e.target.matches(".full-item")) {
    sortable.destroy();
  }
  if (e.target.matches(".task-textarea")) {
    sortable.destroy();
  }
  if (e.target.matches(".task-header")) {
  }
  if (e.target.matches(".add-tag")) {
    sortable.destroy();
  }
  if (e.target.matches(".tag-delete")) {
    sortable.destroy();
  }
});

lists.addEventListener("mouseup", (e) => {
  if (e.target.matches(".tag-delete")) {
    updateSort();
  }
});
// update sorting list when scrolling is stoped

// update sortList
window.addEventListener(
  "mousedown",
  function (e) {
    if (e.target.matches(".full-item")) {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        updateSort();
      }, 50);
    }
  },
  true
);

// adding the editing tab when you click the pencil inside the task items
lists.addEventListener("click", (e) => {
  if (e.target.matches(".edit-icon-li")) {
    const getEl = e.path[2].nextElementSibling;
    const iconDot = e.path[1].childNodes[3];

    if (getEl) {
      getEl.classList.toggle("display-block");
    }
    if (!getEl.classList.contains("display-block")) {
      updateSort();
    }
  }
});

// removing task tab when clicking outside
let tabTrash = "";
window.addEventListener("click", (e) => {
  tabTrash = document.querySelectorAll(".li-edit-tab");

  tabTrash.forEach((el) => {
    if (el) {
      const iconLi = el.previousElementSibling.childNodes[1].childNodes[3];
      if (el.classList.contains("display-block")) {
        if (e.target != el && e.target != iconLi) {
          el.classList.remove("display-block");
          updateSort();
        }
      }
    }
  });
});

// logic for removing task items when clicking remove item button in the tabs menu
lists.addEventListener("click", (e) => {
  if (e.target.matches(".tab-trash")) {
    const liSibling = e.path[2];
    liSibling.remove();
    updateSort();

    updateStorage();
  }
  if (e.target.matches(".edit-trash-li")) {
    const liSibling = e.path[3];
    liSibling.remove();
    updateSort();

    updateStorage();
  }
  if (e.target.matches(".tab-text-trash")) {
    const liSibling = e.path[3];
    liSibling.remove();
    updateSort();

    updateStorage();
  }
});

const editTask = (element) => {
  element.style.display = "none";
  // get the text of the list item
  const liInnerText = element.childNodes[1].childNodes[3].innerText;

  element.insertAdjacentHTML("afterend", gitTextareaMarkup(liInnerText));
  element.remove();

  const taskTextarea = document.querySelector(".task-textarea");

  taskTextarea.focus();
  // move cursor to the end of the word
  taskTextarea.setSelectionRange(
    taskTextarea.value.length,
    taskTextarea.value.length
  );

  taskTextarea.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      taskTextarea.remove();
    }
  });
  taskTextarea.addEventListener("blur", (e) => {
    e.stopImmediatePropagation();

    const textValue = taskTextarea.value;

    // only adding new task item if the textarea box containes text
    if (textValue) {
      taskTextarea.insertAdjacentHTML("afterend", gitLiMarkup(textValue));
      taskTextarea.remove();
      updateStorage();
    }
    if (!textValue) {
      taskTextarea.remove();
      updateStorage();
    }

    updateSort();
  });
};

// logic for editing task items when clicking edit task button in the tabs menu
lists.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches(".tab-pen")) {
    const tab = e.path[2];
    editTask(tab);
  }

  if (e.target.matches(".edit-pen-li")) {
    const tab = e.path[3];
    editTask(tab);
  }

  if (e.target.matches(".tab-text-pen")) {
    const tab = e.path[3];
    editTask(tab);
  }
});

const textareaHandler = (first) => {
  const el = document.querySelector(".task-textarea");
  const textTaskAdd = document.querySelector(".text-task-add");
  const tagCancel = document.querySelector(".cancel-tag-btn");
  const tagAdd = document.querySelector(".add-tag-btn");

  el.focus();
  textTaskAdd.scrollIntoView({ behavior: "smooth" });

  // adding text area text to a new task item when pressing enter

  tagCancel.addEventListener("mousedown", (e) => {
    e.preventDefault();
    console.log("kgk");
    textTaskAdd.remove();
    updateSort();
  });

  tagAdd.addEventListener("click", () => {
    const textValue = el.value;

    // only adding new task item if the textarea box containes text
    if (textValue) {
      first.insertAdjacentHTML("beforeend", gitLiMarkup(textValue));
      textTaskAdd.remove();
      updateStorage();
      updateSort();
    }
    if (!textValue) {
      textTaskAdd.remove();
    }

    updateStorage();
    updateSort();
  });

  el.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const textValue = el.value;
      textTaskAdd.remove();

      // only adding new task item if the textarea box containes text
      if (textValue) {
        first.insertAdjacentHTML("beforeend", gitLiMarkup(textValue));
        updateStorage();
      }

      updateSort();
    }
  });
  window.addEventListener(
    "mousedown",
    (e) => {
      if (e.target != tagCancel) {
        el.addEventListener("blur", (e) => {
          const textValue = el.value;
          if (textValue) {
            first.insertAdjacentHTML("beforeend", gitLiMarkup(textValue));
            textTaskAdd.remove();
            updateStorage();
            updateSort();
          }
          if (!textValue) {
            textTaskAdd.remove();
          }
          updateSort();
        });
      }
    },
    { once: true }
  );
};

// adding new task
lists.addEventListener("click", (e) => {
  if (e.target.matches(".add-task")) {
    const getEl = e.path[1].firstChild.nextSibling;
    const firstChild = getEl.childNodes[3];
    //entering teaxtarea box when click the add task button
    firstChild.insertAdjacentHTML("beforeend", textareaMarkup);
    // const taskTextarea = document.querySelector(".task-textarea");
    textareaHandler(firstChild);
  }
  if (e.target.matches(".add-task-img")) {
    const getEl = e.path[3].childNodes[1];
    const firstChild = getEl.childNodes[3];

    //entering teaxtarea box when click the add task button
    firstChild.insertAdjacentHTML("beforeend", textareaMarkup);

    // const taskTextarea = document.querySelector(".task-textarea");
    textareaHandler(firstChild);
  }
});

// clear button for deleting localstorage
listClear.addEventListener("click", () => {
  window.localStorage.clear();
  lists.innerHTML = "";
});
