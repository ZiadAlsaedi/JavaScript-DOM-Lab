//1
let h1Class=document.getElementsByClassName("h1Class")[0]
h1Class.style.color = "blue";
h1Class.style.backgroundColor = "black";
//2
let name1= document.getElementById("name")
name1.style.fontWeight="bold"
name1.setAttribute("class", "name");
//3
const image = document.getElementsByTagName('img')[0].src="https://training.epam.ua/static/news/255/self-study_03375353.png"
//4
let list=document.querySelector('ul')
let item= `<li>item1</li>
<li>item2</li>
<li>item3</li>
`
list.insertAdjacentHTML("afterbegin",item)
list.style.border="2px solid black"
list.style.color="blue"
list.style.display="flex"
list.style.justifyContent="space-between"




//another way
// for (let index = 0; index < 3; index++) {
//     let item=document.createElement("li")
//     item.innerText=`item ${index}`
//     list.append(item)   
// }


//5



