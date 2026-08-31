const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const event = new MyEmitter();

event.on("greet", (name) => {
    console.log(`hello ${name}`);
});

event.on("exit", () => {
    console.log("exits mycustom event emitter...");
});

event.emit("greet", "cse36");
event.emit("exit");