import promptSync from "prompt-sync";

const prompt = promptSync();

export default (options) => {
    console.clear();
    console.log(options);
    const option = prompt();
    return option;  
};
