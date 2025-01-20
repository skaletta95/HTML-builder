const { stdin, stdout } = process;
const fs = require("fs");
const path = require("path");

fs.writeFile(
    path.join(
        __dirname, "text.txt"
    ),
    "",
    (err) => {
        if (err) throw err;
        stdout.write("Hello, write text for file please\n");
        stdin.on("data", (data) => {
            if (data.toString().trim().toLowerCase() === "exit") {
                stdout.write("\nGoodbye! See you next time!\n");
                process.exit();
            } else {
            fs.appendFile(
                path.join(__dirname, "text.txt"),
                data.toString(),
                (err) => {
                    if (err) throw err;
                    stdout.write("File was modified with text, what you also want to add to it?\n");
                }
            )}
        })
    }
);
process.on("SIGINT", () => {
    sayGoodbye();
});
function sayGoodbye() {
    stdout.write("\nGoodbye! See you next time!\n");
    process.exit();
}