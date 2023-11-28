import Login from "/views/login.js"
import Signup from "/views/signup.js"

const navigateTo = url => {
    history.pushState(null, null, url);
    Router();
};

let lastClass = 'null';

const Router =()=>{
    let     matechedLocation = 0;
    const   Routes = [
        { path: "/", view: "ciao" },
        { path: "/login", view: Login, style: "/style/login.css"},
        { path: "/signup", view: Signup, style: "/style/signup.css" },
    ]

    if (lastClass != 'null')
    {
        let lines = document.querySelector("head").innerHTML.split("\n").filter((val)=>{return val.indexOf(lastClass) == -1});
        document.querySelector("head").innerHTML = "";
        for (let line of lines)
            document.querySelector("head").innerHTML += ( line + '\n');
    }
    for (let route of Routes)
    {
        if (route.path == location.pathname)
        {
            matechedLocation = new route.view;
            lastClass = route.style.substring(route.style);
            document.querySelector("head").innerHTML = document.querySelector("head").innerHTML + matechedLocation.getHeader(route.style);
            break ;
        }
    }
    if (matechedLocation == 0)
        matechedLocation = Routes[0];
    document.querySelector("#app").innerHTML = matechedLocation.getHtml();
}

Router();

//make the back key works
window.addEventListener("popstate", Router);

//define the behaviour when clicking links making them internal routing
document.addEventListener("click", (e)=>{
    if (e.target.matches("[data-link]"))
    {
        e.preventDefault();
        navigateTo(e.target.href);
    }
})