/* 
Create a project object that represents one of your real or imagined coding projects.

It should include:

title (string)
description (string)
techStack (object with keys like frontend, backend, database)
contributors (array of strings)
status (e.g., "in progress", "completed")
logSummary() – method that prints a summary like:
"Project Portfolio: Built with HTML and Node.js. Status: in progress"
Add a method addContributor(name)
Add deployment object: { platform: "GitHub Pages", url: "..." }
Add a deadline property and a method to update status based on the date

*/

const project = {
  title: "Github Repo Management",
  descripton: "tracks your repo, md files and the status of your repos.",
  techstack: {
    frontend: "html css js",
    backend: "node.js express",
    database: "local storage",
  },
  contributors: ["Lakhwinder"],
  status: "in progress",
  logSummary: function () {
    console.log(
      `Project: ${this.title}.
            Built with ${Object.keys(this.techstack)
              .map((key) => this.techstack[key])
              .join(" and ")}.
            Status: ${this.status}.
            Contributors: ${this.contributors.join(", ")}.
            `
    );
  },
  addContributor: function (name) {
    this.contributors.push(name);
  },
  deployment: {
    platform: "netlify",
    url: "lakhwinder.netlify.app",
  },
  deadline: "30-06-2025",
  updateStatus: function () {
    
    const [day, month, year] = this.deadline.split("-");
    const targetDate = new Date(year, month - 1, day);
    const today = new Date();

    // Set time to start of day for accurate date comparison
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    // Compare
    if (targetDate < today) {
      this.status = "pending"
    } else if (targetDate >= today) {
      this.status = "in-progress"
    }
  }
};


project.logSummary();
console.log(project.descripton);
project.addContributor("Universe");
project.deadline = "21-06-2025"
console.log(project.deadline)
project.updateStatus()
project.logSummary();

console.log(project.deployment)