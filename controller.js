//draggable library
import { Sortable, Plugins } from "@shopify/draggable";

// templates
import * as template from "./templates";
console.log(template.kanban);
//get randome color from string

// svg iconss
import edit from "url:./svg/edit-regular.svg";
import pen from "url:./svg/pen-solid.svg";
import plus from "url:./svg/plus-solid.svg";
import trash from "url:./svg/trash-alt-solid.svg";
import dots from "url:./svg/ellipsis-h-solid.svg";
import clock from "url:./svg/clock-regular.svg";
import times from "url:./svg/times-solid.svg";
import check from "url:./svg/check-solid.svg";
import checkCircle from "url:./svg/check-circle-solid.svg";
import unCheckCircle from "url:./svg/times-circle-solid.svg";

//imported html element
const lists = document.querySelector(".list-container");
const list = document.querySelectorAll(".list");
const newList = document.querySelector(".new-list");
const newListContainer = document.querySelector(".newlist-container");
const listContainer = document.querySelector(".list-container");
const listItem = document.querySelectorAll(".list-item");
const listTitle = document.querySelectorAll(".list-title");
const listClear = document.querySelector(".trash-btn");
const addTask = document.querySelectorAll(".add-task");
const fullList = document.querySelectorAll(".full-list");
const app = document.querySelector(".app");
const sortBtn = document.querySelector(".sort-btn");
const sortTab = document.querySelector(".sort-tab");
const sortItemContainer = document.querySelector(".sort-item-container");
const templateBtn = document.querySelector(".template-btn");
const templateTab = document.querySelector(".template-tab");

const kanban = document.querySelector(".kanban");
const priorities = document.querySelector(".priorities");
const review = document.querySelector(".review");
const progressReview = document.querySelector(".progress-review");

// get current date
const date = new Date();
const month = date.toLocaleString("default", { month: "short" });
const day = date.getUTCDate();
const currentDate = `${day} ${month}`;

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
<div class="text-tag-add text-task-add">
                              <textarea class='tags-text task-textarea' name="tags-text" id="task-text" placeholder="Enter Task">${value}</textarea>
                              <div class="add-cancel-btn">
                                <p class="add-tag-btn tag-btn">Add Task</p>
                                <p class="cancel-tag-btn tag-btn">Cancel</p>
                              </div>


                            </div>
`;
  return textareaValue;
};
const gitTaskMarkup = (value) => {
  const listItemText = `<p class='list-item-text'>${value}</p>`;
  return listItemText;
};

const gitLiMarkup = (value) => {
  const newListItemMarkup = `
           <div class='full-item'>

                      <li  class="list-item">
                      <div class='completed-container'>
                      <div class="completed">
                      <img
                        class="check-icon"
                        src="${check}"
                        alt=""
                      />
                      <p>Completed</p>
                      </div>
                    </div>

                        <div class="task-header">
                           <div class="tags">
                           <p class="add-tag tags-el">Add Tag +</p>

                           </div>
                         <img id='edit-con' class= 'edit-icon-li' src="${dots}"/>
                        </div>

                         <p class='list-item-text'>${value}</p>

                        <div class="task-footer">
                         <p class="created"> <img class="clock" src="${clock}" alt="">${currentDate}</p>
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

                          <div class='check-container'>
                            <div class='tab-icon tab-check'>
                              <img class= 'edit-check-li tab-img' src="${checkCircle}"/> <p class='tab-text-check'> Mark as complete </p>
                            </div>
                          </div>

                          <div class='uncheck-container'>
                            <div class='tab-icon tab-uncheck'>
                              <img class= 'edit-uncheck-li tab-img' src="${unCheckCircle}"/> <p class='tab-text-uncheck'> Unmark as complete </p>
                            </div>
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
                  <img class= 'edit-icon'src="${dots}"/> </h2>
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
    removeSortItem();
    sortTabHandler();
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
      removeSortItem();
      sortTabHandler();
    }
  });
  window.addEventListener(
    "mousedown",
    (e) => {
      if (e.target != tagCancel) {
        tagTextarea.addEventListener("blur", (e) => {
          const tagTextValue = tagTextarea.value.toLowerCase();
          if (tagTextValue) {
            insertTag(tagTextValue, tagTextareaAll);
          }
          if (!tagTextValue) {
            tagTextareaAll.remove();
          }
          updateSort();
          removeSortItem();
          sortTabHandler();
        });
      }
    },
    { once: true }
  );
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
    restoreTags();
    removeSortItem();
    sortTabHandler();
    updateStorage();
    updateSort();
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

    const fullItem = e.path[3];

    if (getEl) {
      getEl.classList.toggle("display-block");
    }
    if (getEl.classList.contains("display-block")) {
      fullItem.scrollIntoView({ behavior: "smooth" });
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
      const iconLi = el.previousElementSibling.childNodes[3].childNodes[3];

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
    restoreTags();
    removeSortItem();
    sortTabHandler();
    updateSort();
    updateStorage();
  }
  if (e.target.matches(".edit-trash-li")) {
    const liSibling = e.path[3];
    liSibling.remove();
    restoreTags();
    removeSortItem();
    sortTabHandler();
    updateSort();
    updateStorage();
  }
  if (e.target.matches(".tab-text-trash")) {
    const liSibling = e.path[3];
    liSibling.remove();
    restoreTags();
    removeSortItem();
    sortTabHandler();
    updateSort();
    updateStorage();
  }
});

// adding complete element and switch edit tab to unmark as complete
const checkTaskHandler = (complete, tabUncheck, tabCheck, editTab) => {
  complete.style.display = "block";
  tabUncheck.style.display = "block";
  tabCheck.style.display = "none";
  editTab.style.top = "5.5rem";
};

lists.addEventListener("click", (e) => {
  if (e.target.matches(".tab-check")) {
    const completeEl = e.path[3].childNodes[1].childNodes[1];
    const tabUncheckEl = e.path[1].nextElementSibling;
    const tabCheckEl = e.path[1];
    const editTab = e.path[2];

    checkTaskHandler(completeEl, tabUncheckEl, tabCheckEl, editTab);
    updateStorage();
  }
  if (e.target.matches(".edit-check-li")) {
    const completeEl = e.path[4].childNodes[1].childNodes[1];
    const tabUncheckEl = e.path[2].nextElementSibling;
    const tabCheckEl = e.path[2];
    const editTab = e.path[3];

    checkTaskHandler(completeEl, tabUncheckEl, tabCheckEl, editTab);
    updateStorage();
  }
  if (e.target.matches(".tab-text-check")) {
    const completeEl = e.path[4].childNodes[1].childNodes[1];
    const tabUncheckEl = e.path[2].nextElementSibling;
    const tabCheckEl = e.path[2];
    const editTab = e.path[3];
    checkTaskHandler(completeEl, tabUncheckEl, tabCheckEl, editTab);
    updateStorage();
  }
});

// removing complete element and switch edit tab to mark as complete
const uncheckTaskHandler = (complete, tabUncheck, tabCheck, editTab) => {
  complete.style.display = "none";
  tabUncheck.style.display = "none";
  tabCheck.style.display = "block";
  editTab.style.top = "2.5rem";
};

lists.addEventListener("click", (e) => {
  if (e.target.matches(".tab-uncheck")) {
    const completeEl = e.path[3].childNodes[1].childNodes[1];
    const tabUncheckEl = e.path[1];
    const tabCheckEl = e.path[1].previousElementSibling;
    const editTab = e.path[2];

    uncheckTaskHandler(completeEl, tabUncheckEl, tabCheckEl, editTab);
    updateStorage();
  }
  if (e.target.matches(".edit-uncheck-li")) {
    const completeEl = e.path[4].childNodes[1].childNodes[1];
    const tabUncheckEl = e.path[2];
    const tabCheckEl = e.path[2].previousElementSibling;
    const editTab = e.path[3];

    uncheckTaskHandler(completeEl, tabUncheckEl, tabCheckEl, editTab);
    updateStorage();
  }
  if (e.target.matches(".tab-text-uncheck")) {
    const completeEl = e.path[4].childNodes[1].childNodes[1];
    const tabUncheckEl = e.path[2];
    const tabCheckEl = e.path[2].previousElementSibling;
    const editTab = e.path[3];
    uncheckTaskHandler(completeEl, tabUncheckEl, tabCheckEl, editTab);
    updateStorage();
  }
});

// task name edit
const editTask = (element, fullItem) => {
  element.style.display = "none";
  // get the text of the list item
  const liInnerText = element.innerText;

  element.insertAdjacentHTML("afterend", gitTextareaMarkup(liInnerText));

  const taskTextarea = document.querySelector(".task-textarea");
  const taskTextareaAll = document.querySelector(".text-task-add");
  const tagCancel = document.querySelector(".cancel-tag-btn");
  const tagAdd = document.querySelector(".add-tag-btn");

  taskTextarea.focus();
  // move cursor to the end of the word
  taskTextarea.setSelectionRange(
    taskTextarea.value.length,
    taskTextarea.value.length
  );

  // adding text area text to a new task item when pressing enter

  tagCancel.addEventListener("mousedown", (e) => {
    e.preventDefault();
    taskTextareaAll.remove();
    updateSort();
    element.style.display = "block";
  });

  tagAdd.addEventListener("mousedown", () => {
    const textValue = taskTextarea.value;

    // only adding new task item if the textarea box containes text
    if (textValue) {
      taskTextareaAll.insertAdjacentHTML("afterend", gitTaskMarkup(textValue));
      element.remove();
      taskTextareaAll.remove();
    }
    if (!textValue) {
      fullItem.remove();
    }
    updateStorage();
  });

  taskTextarea.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const textValue = taskTextarea.value;

      // only adding new task item if the textarea box containes text
      if (textValue) {
        taskTextareaAll.insertAdjacentHTML(
          "afterend",
          gitTaskMarkup(textValue)
        );
        element.remove();
        taskTextareaAll.remove();
      }
      if (!textValue) {
        fullItem.remove();
      }
      updateStorage();
      updateSort();
    }
  });
  window.addEventListener(
    "mousedown",
    (e) => {
      if (e.target != tagCancel) {
        taskTextarea.addEventListener("blur", (e) => {
          const textValue = taskTextarea.value;

          // only adding new task item if the textarea box containes text
          if (textValue) {
            taskTextareaAll.insertAdjacentHTML(
              "afterend",
              gitTaskMarkup(textValue)
            );
            element.remove();
            taskTextareaAll.remove();
          }
          if (!textValue) {
            fullItem.remove();
          }
          updateStorage();
        });
      }
    },
    { once: true }
  );
};

// logic for editing task items when clicking edit task button in the tabs menu
lists.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches(".tab-pen")) {
    const tab = e.path[2].childNodes[1].childNodes[3].nextElementSibling;

    const fullItem = e.path[2];

    editTask(tab, fullItem);
  }

  if (e.target.matches(".edit-pen-li")) {
    const tab = e.path[3].childNodes[1].childNodes[5];

    const fullItem = e.path[3];

    editTask(tab, fullItem);
  }

  if (e.target.matches(".tab-text-pen")) {
    const tab = e.path[3].childNodes[1].childNodes[3].nextElementSibling;

    const fullItem = e.path[3];

    editTask(tab, fullItem);
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
    restoreTags();
    removeSortItem();
    sortTabHandler();
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
      restoreTags();
      removeSortItem();
      sortTabHandler();
      updateStorage();
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
          restoreTags();
          removeSortItem();
          sortTabHandler();
          updateStorage();
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
const removeSortItem = () => {
  const sortItem = document.querySelectorAll(".sort-item");
  sortItem.forEach((x) => x.remove());
};

const restoreTags = () => {
  const liContainer = document.querySelectorAll(".li-container");
  const fullItem = document.querySelectorAll(".full-item");
  const sortingByCancel = document.querySelector(".sorting-by");
  fullItem.forEach((x) => (x.style.display = "block"));
  if (sortingByCancel) {
    sortingByCancel.remove();
  }
  liContainer.forEach((x) => (x.style.maxHeight = "55vh"));
};

sortBtn.addEventListener("click", (e) => {
  sortTab.classList.toggle("display-block");
  if (e.currentTarget == sortBtn) {
  }
});
window.addEventListener("click", (e) => {
  if (
    !e.target.matches(".sort-h2") &&
    !e.target.matches(".sort-item-container") &&
    e.target != sortBtn &&
    e.target != sortTab
  ) {
    sortTab.classList.remove("display-block");
  }
});

const sortTabHandler = () => {
  const noTags = document.querySelector(".no-tags");
  const tags = document.querySelectorAll(".tags-all");
  const tagsInnerText = Array.from(tags, (x) => x.innerText);
  const tagsUnique = [...new Set(tagsInnerText)];

  if (tagsUnique.length > 0) {
    noTags.style.display = "none";
  }
  if (tagsUnique.length === 0) {
    noTags.style.display = "block";
  }
  const tagsTabMarkup = tagsUnique
    .map((x) => `<p class="sort-item">${x}</p>`)
    .join("");
  sortItemContainer.insertAdjacentHTML("afterbegin", tagsTabMarkup);
  const sortItem = document.querySelectorAll(".sort-item");
  sortItem.forEach((x) => {
    const color = `${x.innerText}`.toColor();
    x.style.backgroundColor = `${color}`;
  });
};
sortTabHandler();

// hidding list item that doesn't contain the value string
const sortByTag = (value) => {
  const tagsAll = document.querySelectorAll(".tags-all");
  const fullItem = document.querySelectorAll(".full-item");
  // hide all list items
  fullItem.forEach((x) => {
    x.style.display = "none";
  });
  // unhidding list item if they the match the value
  [...tagsAll].map((x) => {
    if (x.innerText == value) {
      x.closest(".full-item").style.display = "block";
    }
  });
};

//add sorting by text with the sorted by tag
const sortingByTextMarkup = (value) => {
  return ` <h2 class="sorting-by">
        Sorting By (${value}) <img class ='sorting-by-cancel' src="${times}" alt="" />
      </h2>`;
};

// sorting and adding
sortTab.addEventListener("click", (e) => {
  if (e.target.matches(".sort-item")) {
    const liContainer = document.querySelectorAll(".li-container");
    const sortTagText = e.path[0].innerText;
    const sortingBy = document.querySelector(".sorting-by");
    if (sortingBy) {
      sortingBy.remove();
    }
    sortByTag(sortTagText);
    app.insertAdjacentHTML("afterbegin", sortingByTextMarkup(sortTagText));
    liContainer.forEach((x) => (x.style.maxHeight = "43vh"));
  }
});

app.addEventListener("click", (e) => {
  if (e.target.matches(".sorting-by-cancel")) {
    restoreTags();
    updateStorage();
  }
});
restoreTags();
removeSortItem();
sortTabHandler();

templateBtn.addEventListener("click", () => {
  templateTab.classList.toggle("display-block");
});

const insertingTemplate = (template) => {
  return listContainer.insertAdjacentHTML("afterbegin", template);
};
console.log(kanban);
kanban.addEventListener("click", (e) => {
  e.preventDefault();
  insertingTemplate(template.kanban);
  updateStorage();
});

priorities.addEventListener("click", (e) => {
  e.preventDefault();
  insertingTemplate(template.priorities);
  updateStorage();
});

review.addEventListener("click", (e) => {
  e.preventDefault();
  insertingTemplate(template.review);
  updateStorage();
});

progressReview.addEventListener("click", (e) => {
  e.preventDefault();
  insertingTemplate(template.progressReview);
  updateStorage();
});
