/* 
### 🔧 Examples of Methods You Can Add:

1. `learn(skill)` – adds a new skill to your skills array
    
2. `completeGoal()` – marks a short-term goal as "done" or moves it to a `completedGoals` array
    
3. `play()` – logs what hobby you’re doing now
    
4. `dailyRoutine()` – logs your current plan like:
    
    > "Wake up at 6AM, code for 2 hours, play football at 6PM"
    
5. `printSkills()` – logs your current skills with count
    
*/

const me = {
  name: "Lakhwinder",
  age: 25,
    skills: ["JavaScript", "Guitar", "Geology"],
    goals: {
        shortTerm: "Become a better developer",
        longTerm: "Build impactful applications"
    },
    hobbies: ["Singing", "Studying", "Learning new Things"],
    introduce: function() {
        return `Hi, I’m ${this.name}. I’m a passionate developer and I love ${this.hobbies.join(" and ")}. My goal is to ${this.goals.shortTerm}
        and ${this.goals.longTerm}. 
        
        `;
    },
    learn: function(newSkill){
        this.skills.push(newSkill)
    },
    completeGoal: function(){
        this.completedGoals = [];
        this.completedGoals.push(this.goals.shortTerm);
        this.goals.shortTerm = "";
    },
    play: function(){
        const id = Math.floor(Math.random() * this.hobbies.length);
        return(this.hobbies[id]);
    },
    printSkills: function(){
        console.log(`My skills are ${this.skills.join(" and ")}.`)
    }
};

me.learn("violin")
me.learn("guitar")
me.printSkills()
me.completeGoal();
console.log(me.goals);
console.log(me.completedGoals)
console.log(me.play())