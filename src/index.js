import './style.css';

const listData = [
  {
    description: 'Clean Home',
    completed: false,
    index: 0,
  },
  {
    description: 'Market',
    completed: false,
    index: 1,
  },
  {
    description: 'Programming',
    completed: false,
    index: 2,
  },
];

let listMark = `
  <div class="row title">
    <p>Today's To Do</p>
    <i class="fas fa-sync"></i>
  </div>
  <div class="row">
    <input class="add-input" type="text" placeholder="Add to your list">
    <i class="fas fa-level-down-alt rotate"></i>
  </div>
`;

listData.forEach((listItem) => {
  listMark += `
      <div class="row">
        <input type="checkbox">
        <p>${listItem.description}</p>
        <i class="fas fa-ellipsis-v"></i>
      </div>
  `;
});

listMark += `
    <div class="row clear">
      <p>Clear All Completed</p>
    </div>
`;

const listElement = document.querySelector('.list');
listElement.innerHTML = listMark;