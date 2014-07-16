$(document).ready(function(){
  $("form#category-form").submit(function(event){
    event.preventDefault();
    var newCategory = $("input#category-input").val();

    var tasks = {category: newCategory};

    $("ul#category-display").append("<li class = 'lock'>" + tasks.category + "</li>");

    var newForm = "<form id='task-form'>"//<input id='task-input' placeholder='task'></input><button type='submit'>Add Task</button></form>";

    $("li.lock").last().click(function(){
      $("div#category-forms").append(newForm);
    });

  });
});
