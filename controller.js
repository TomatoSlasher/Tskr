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

// allowing lists to be sortable
let sortableList = new Sortable(document.querySelectorAll(".list-container"), {
  draggable: ".full-list",
  mirror: {
    constrainDimensions: true,
  },
  SwapAnimation: {
    duration: 200,
    easingFunction: "ease-in-out",
  },

  plugins: [Plugins["SwapAnimation"]],
});

sortableList.on("drag:move", (e) => {
  e.source.style.visibility = "hidden";
});
sortableList.on("drag:stopped", (e) => {
  updateStorage();
});

// reasigning the lists to the sortable library when they get destroyed
const updateSortList = () => {
  sortableList.destroy();
  sortableList = new Sortable(document.querySelectorAll(".list-container"), {
    draggable: ".full-list",
    mirror: {
      constrainDimensions: true,
    },
    SwapAnimation: {
      duration: 200,
      easingFunction: "ease-in-out",
    },

    plugins: [Plugins["SwapAnimation"]],
  });

  sortableList.on("drag:move", (e) => {
    e.source.style.visibility = "hidden";
  });
  sortableList.on("drag:stopped", (e) => {
    updateStorage();
  });
};

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
  updateSortList();
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
    updateSortList();
  });
};

const taskTitleMarkup = `
 <div class="title-input-box">
  <textarea class='task-textarea-title' name="task-text" id="task-text" placeholder="Enter list name" ></textarea>
 </div>
`;

const textareaMarkup = `
<textarea class='task-textarea' name="task-text" id="task-text" placeholder="Enter task"></textarea>
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
  updateSortList();
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
    updateSortList();
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
    updateSortList();
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
      updateSortList();
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
    updateSortList();
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
    console.log(tagText);
    const color = `${tagText}`.toColor();
    el.style.backgroundColor = `${color}`;
  });
};
tagsColors();
// creating new lists
newList.addEventListener("click", (e) => {
  e.preventDefault();
  lists.insertAdjacentHTML("beforeend", taskTitleMarkup);
  const taskTextareaTitle = document.querySelector(".task-textarea-title");
  const titleInputBox = document.querySelector(".title-input-box");
  taskTextareaTitle.focus();

  // adding the list with the title when Enter key is pressed

  taskTextareaTitle.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      titleInputBox.remove();
      const textValue = taskTextareaTitle.value;
      // adding the list if the text area has a value
      if (textValue) {
        const newListMarkup = `
        <div class="full-list">
                  <ul class="list">
                  <h2 class='list-title'>${textValue}
                  <img class= 'edit-icon'src="${edit}"/> </h2>

                  </ul>

                  <p class="add-task">Add task <img class= 'edit-icon'src="${plus}"/></p>
                </div>
        `;

        lists.insertAdjacentHTML("beforeend", newListMarkup);
      }
    }
  });
  // adding the list with the title when clicked outside

  taskTextareaTitle.addEventListener("blur", (e) => {
    titleInputBox.remove();
    const textValue = taskTextareaTitle.value;

    // adding the list if the text area has a value

    if (textValue) {
      const newListMarkup = `
        <div class="full-list">
                  <ul class="list">
                  <h2 class='list-title'>${textValue}
                  <img class= 'edit-icon'src="${edit}"/> </h2>
                  <div class = 'li-container'></div>

                  </ul>

                  <p  class="add-task"><span class='task-plus'><img src="${plus}"/> </span>  Add task</p>
                </div>
        `;

      lists.insertAdjacentHTML("beforeend", newListMarkup);
      updateStorage();
      updateSortList();
    }
    updateStorage();
    updateSortList();
  });

  // animation scroll when you click the add new list button

  newListContainer.scrollIntoView({ behavior: "smooth" });
});

// switching between the list and task item to be draggable (only 1 part of the elements can be drggable)
lists.addEventListener("mousedown", (e) => {
  if (e.target.matches(".list-item-text")) {
    sortableList.destroy();
  }
  if (e.target.matches(".add-task")) {
    sortableList.destroy();
    sortable.destroy();
  }
  if (e.target.matches(".edit-icon-li")) {
    sortable.destroy();
    sortableList.destroy();
  }
  if (e.target.matches(".full-item")) {
    sortable.destroy();
  }
  if (e.target.matches(".list-item")) {
    sortableList.destroy();
  }
  if (e.target.matches(".li-container")) {
    sortableList.destroy();
  }
  if (e.target.matches(".task-textarea")) {
    sortableList.destroy();
    sortable.destroy();
  }
  if (e.target.matches(".task-header")) {
    sortableList.destroy();
  }
  if (e.target.matches(".add-tag")) {
    sortableList.destroy();
    sortable.destroy();
  }
  if (e.target.matches(".task-footer")) {
    sortableList.destroy();
  }
  if (e.target.matches(".created")) {
    sortableList.destroy();
  }
  if (e.target.matches(".clock")) {
    sortableList.destroy();
  }
  if (e.target.matches(".tags")) {
    sortableList.destroy();
  }
  if (e.target.matches(".tags-el")) {
    sortableList.destroy();
  }
  if (e.target.matches(".tag-delete")) {
    sortableList.destroy();
    sortable.destroy();
  }
});

lists.addEventListener("mouseup", (e) => {
  if (e.target.matches(".tag-delete")) {
    updateSort();
    updateSortList();
  }
});
// update sorting list when scrolling is stoped
let timer = null;
window.addEventListener(
  "scroll",
  function (e) {
    if (e.target.matches(".li-container")) {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        updateSortList();
      }, 50);
    }
  },
  true
);

// update sortList
window.addEventListener(
  "mousedown",
  function (e) {
    if (e.target.matches(".li-container")) {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        updateSortList();
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
          updateSortList();
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
    updateSortList();
    updateStorage();
  }
  if (e.target.matches(".edit-trash-li")) {
    const liSibling = e.path[3];
    liSibling.remove();
    updateSort();
    updateSortList();
    updateStorage();
  }
  if (e.target.matches(".tab-text-trash")) {
    const liSibling = e.path[3];
    liSibling.remove();
    updateSort();
    updateSortList();
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
    updateSortList();
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
  const textarea = document.querySelectorAll(".task-textarea");
  textarea.forEach((el) => {
    el.focus();
    // adding text area text to a new task item when pressing enter
    el.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const textValue = el.value;
        el.remove();

        // only adding new task item if the textarea box containes text
        if (textValue) {
          first.insertAdjacentHTML("beforeend", gitLiMarkup(textValue));
          updateStorage();
        }

        updateSort();
        updateSortList();
      }
    });

    // adding text area text to a new task item when clicking outside of it
    el.addEventListener("focusout", (e) => {
      const textValue = el.value;
      el.remove();
      // only adding new task item if the textarea box containes text
      if (textValue) {
        first.insertAdjacentHTML("beforeend", gitLiMarkup(textValue));
        el.remove();
        updateStorage();
        updateSort();
        updateSortList();
      }
      updateStorage();
      updateSort();
      updateSortList();
    });
  });
};
// adding new task
lists.addEventListener("click", (e) => {
  // e.preventDefault();
  if (e.target.matches(".add-task")) {
    const getEl = e.path[1].firstChild.nextSibling;
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
