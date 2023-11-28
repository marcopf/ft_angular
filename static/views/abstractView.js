export default class Aview{
    constructor(){

    }
    getHtml(){

    }
    setTitle(title){
        document.title = title;
    }
    getHeader(path){
        return (`<link rel="stylesheet" href="` + path + `">\n`)
    }
}