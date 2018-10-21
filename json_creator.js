var fs = require("fs");
var sampleObject = {
    "username": "victorgomes",
    "password": "12345",
    "questions": {
        "question1": "Did you eat healthy today?",
        "question2": "Did you eat a good breakfast?",
        "question3": "Did you believe in yourself today?"
    }
};

fs.writeFile("./data.json", JSON.stringify(sampleObject, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});