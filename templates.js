import dots from "url:./svg/ellipsis-h-solid.svg";
import plus from "url:./svg/plus-solid.svg";
import pen from "url:./svg/pen-solid.svg";
import trash from "url:./svg/trash-alt-solid.svg";

export const kanban = `<div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>To Do</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>

                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>In progress</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>Done</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>
                `;

export const priorities = `
<div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>To Do</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>
                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>High priority</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>Low priority</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>Done</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>

`;

export const review = `
<div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>To Do</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>In review</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>Done</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>`;

export const progressReview = `
<div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>To Do</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>In progress</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>In review</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>
                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>Done</h2><img class= 'edit-icon'src="${dots}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${pen}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${trash}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${plus}"/> </span>  Add task</p>
                </div>`;
