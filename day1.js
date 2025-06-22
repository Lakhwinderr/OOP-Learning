/* 
Write a JavaScript object named `me` with:
- `name` (string)
- `age` (number or `"secret"` 😄)
- `skills` (array of strings, like `"JavaScript"`, `"Guitar"`, `"Geology"`)
- `goals` (array of strings or an object with short- and long-term)
- `hobbies` (array or string)
- `introduce()` (method that returns a string like:
    > "Hi, I’m Lakhwinder. I’m a passionate developer and I love football and building cool apps.")
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
    }
};

console.log(me.introduce()); // "Hi, I’m Lakhwinder. I’m a passionate developer and I love Football and Reading and Traveling."

