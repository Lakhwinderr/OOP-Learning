/* Create an array of task objects. Each task should have:

title (string)
isDone (boolean)
priority (number or string like "low", "medium", "high")
markDone() method (optional but awesome)

Add addTask(title, priority) function that pushes new tasks
Add a deleteTask(title) function to remove by name
Add a printAll() function that shows a clean list of all tasks with ✅ or ❌

 */

tasks = [
    {title: "Study OOP",
        isDone: false,
        priority: "high",
        markDone : function(){
            this.isDone = true;
        }
    }
    
]

const addTask =  function(title, priority){
    tasks.push({
        title: title,
        priority: priority,
        isDone: false,
        markDone : function(){
            this.isDone = true;
        }
    })
}
const printAll = function(){
   tasks.forEach(task => {
    console.log(`${task.title} is ${task.isDone ?  "is done ✅": "is not done ❌"}.`)
   });
}

printAll()
addTask("DSA Problems", "medium");
tasks[0].markDone()
printAll()