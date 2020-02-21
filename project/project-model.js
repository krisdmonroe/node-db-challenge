const db = require("./dbConfig.js")

module.exports = {
    getResource,
    addResource,
    getProject,
    addProject,
    getTask,
    addTask,
}


function getResource(){
    return db("resource")
}


function addResource(resource){
    return db("resource").insert(resource, "id")
}
function getProject(){
    return db("project")
}

function addProject(project){
    return db("project").insert(project, "id")
}
function getTask(){
    return db("task")
}

function addTask(task){
    return db("task").insert(task, "id")
}