;
var todolist = [
    {
        content: "学习",
        status: true
    },
    {
        content: "吃饭",
        status: false
    }
];
var title = document.querySelector('#title');
var list = document.querySelector('.list');
var item = document.querySelector('.item');
function reader() {
    var listLi = '';
    var itemLi = '';
    if (todolist.length >= 0) {
        todolist.map(function (value, index) {
            if (value.status) {
                listLi += "<li><input type=\"checkbox\" checked=\"checked\"/>" + value.content + " <button id=" + index + ">\u5220\u9664</button></button></li>";
            }
            else {
                itemLi += "<li><input type=\"checkbox\"/>" + value.content + " <button id=" + index + ">\u5220\u9664</button></li>";
            }
            list.innerHTML = listLi;
            item.innerHTML = itemLi;
        });
    }
}
;
//添加代办事项
function addToDo() {
    var content = title.value.trim();
    if (!content) {
        alert("请输入代办事项！");
        return false;
    }
    todolist.push({
        content: content,
        status: false
    });
    title.value = '';
    reader();
}
title.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        addToDo();
    }
});
//删除代办事项
list.addEventListener("click", function (e) {
    var target = e.target;
    var index = target.getAttribute('id');
    todolist.splice(index, 1);
    reader();
});
item.addEventListener("click", function (e) {
    var target = e.target;
    var index = target.getAttribute('id');
    todolist.splice(index, 1);
    reader();
});
//修改代办事项状态
list.addEventListener('change', function (e) {
    var target = e.target;
    var index = target.nextElementSibling().getAttribute('id');
    todolist[index].status = !target.checked;
    reader();
});
item.addEventListener('change', function (e) {
    var target = e.target;
    var index = target.nextElementSibling().getAttribute('id');
    todolist[index].status = !target.checked;
    reader();
});
window.addEventListener('load', function () {
    reader();
});
