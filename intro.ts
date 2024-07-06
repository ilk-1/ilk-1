class FrontendEngineer {
    name = "ilk-1";
    email = "ilovekfc1024@qq.com";
    // Yeah, forever 20
    age = 20;
    nation = "China";

    hobbyList: string[] = [];

    sayHello = () => console.log("Hello!");
}

const my = new FrontendEngineer();
my.hobbyList.push(
    "Programming", 
    "Reading", 
    "Mountain Climbing",
);
my.sayHello();
