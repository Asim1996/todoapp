//Todo app 

var todoList={
	todo: [],
	addtodo: function(todoText){
		this.todo.push({todoText:todoText,completed:false});
	},
	changetodo:function(position,todoText){
		this.todo[position].todoText=todoText;
	},
	deletetodo:function(position){
		this.todo.splice(position,1);
	},
	toggleCompleted: function(position){
		
		var todo=this.todo[position];
		todo.completed=!todo.completed;
	},
	
	toggleAll:function(){
	
		var totaltodos=this.todo.length;
		var completedtodos=0;
		this.todo.forEach(function(todo){
			if(todo.completed===true){
				completedtodos++;
			}

		})
		if(completedtodos===totaltodos){
			this.todo.forEach(function(todo){
				todo.completed=false;
			})}
			else{
				this.todo.forEach(function(todo){
				todo.completed=true;
			})
	}}
	}; 
var handler={
	togglealltodo:function(){
		todoList.toggleAll();
		view.displaytodo();
	},
	addtodo:function(){
		var addtodoinput=document.getElementById("addtodo");
		todoList.addtodo(addtodo.value);
		addtodo.value="";
		view.displaytodo();
	},
	changetodo:function(){
		var changetodoinput=document.getElementById("changetodo");
		var changetodopos=document.getElementById("changepos");
		todoList.changetodo(changetodopos.valueAsNumber,changetodoinput.value)
		changetodopos.value="";
		changetodoinput.value="";
		view.displaytodo();		
	},
	deletetodo:function(){
		var delpos=document.getElementById("deletepos");
		todoList.deletetodo(delpos.valueAsNumber);
		delpos.value="";
		view.displaytodo();

	},
	toggletodo:function(){
		var togglepos=document.getElementById("togglepos");
		todoList.toggleCompleted(togglepos.valueAsNumber);
		togglepos.value="";
		view.displaytodo();
	}
}
	
var view={
	displaytodo:function(){
	var ul=document.querySelector("ul");
	ul.innerHTML="";
	
	for(var i=0;i<todoList.todo.length;i++){
		var li=document.createElement("li");
		var todo = todoList.todo[i];
      	var todoTextWithCompletion = '';
      	if(todo.completed===true)
      	{
		todoTextWithCompletion='(x)'+todo.todoText;
		}else{
		todoTextWithCompletion='( )'+todo.todoText;
		}
		li.textContent=todoTextWithCompletion;
		ul.appendChild(li);
	}}
}

	
