const book = document.getElementById("book");
const findOut = document.getElementById("element");
const goBack = document.getElementById("goBack");
const rButton = document.getElementById("rButton");
const page6 = document.getElementById("page6");
var p6ItemArray = [...page6.firstElementChild.children];

findOut.addEventListener("click", function(){
    book.classList.toggle("poems")
    book.classList.toggle("moveRight")
    p6ItemArray.forEach(element => {
        element.classList.remove("page1")
    });
    changeContent((page6.firstElementChild.lastElementChild.lastElementChild), "Flip right to see a letter of recommendation")
    changeContent((page6.firstElementChild.firstElementChild), "So why am I qualified? Most importantly, I’m passionate about creating and improving the things I’m involved in. I’m a quick language learner, whether it be a new Javascript library or Chinese(I’m fluent!).As part of my major, I’ve taken classes in Front - end Web Development, Behavioral Economics, Python, Java and much more – I’m documenting my journey of learning D3 <a href = 'https://www.notion.so/kaielwooddieu/Kai-Elwood-Dieu-s-Coding-Life-Documentation-e50a3862e1744aeb84fa85c556e507e5'> here</a >.")
    changeContent((page6.firstElementChild.childNodes[3]), "From an experience standpoint, this summer I interned as the Digital Officer for Drew’s Honeybees, where I managed a team responsible for overhauling the company’s web footprint.I’m currently a freelance web developer, where I’ve developed sites using JS, Bootstrap 4, JQuery, and other languages. My most recent project is <a href='https://www.beverlyhillsinvesting.com/'> here</a>. Beyond coding, I have previous intern experience at the US Embassy in Beijing, where I developed economic analysis reports on various parts of the Chinese economy, and with Senator Cardin’s office as part of the US Senate Small Business Committee, where I conducted research and analysis on small business policy implementation.")
    changeContent((page6.firstElementChild.childNodes[5]), "I have a diverse skillset, I am driven and passionate about what I do, and if accepted to this internship I would approach challenges meticulously and passionately. Thank you so much for your time in reading this letter.")
})

goBack.addEventListener("click", function () {
    book.classList.toggle("poems")
    book.classList.toggle("moveRight")
    book.classList.remove("poemsFlip")
})

rButton.addEventListener("click", function(){
    flipPage2();
})

function flipPage2(){
    book.classList.toggle("poemsFlip");
    // page6.firstElementChild.lastElementChild.classList.toggle("notVisible")
    p6ItemArray.forEach(flipText);
    if (p6ItemArray[1].classList.contains("page1")) {
        changeContent((page6.firstElementChild.lastElementChild.lastElementChild), "Flip left to see my cover letter")
        debugger
        changeContent((page6.firstElementChild.firstElementChild), "To whom it may concern,")
        changeContent((page6.firstElementChild.childNodes[3]), "My name is Calli Higgins and I’m a software engineer at the New York Times. I am also an adjunct professor in NYU’s Interactive Media Arts program and had the pleasure of teaching Kai Elwood-Dieu this past semester. I understand Kai is applying for an internship with the Washington Post and wanted to take a moment to encourage you to move forward with his application.")
        changeContent((page6.firstElementChild.childNodes[5]), "Kai stood out in our Front End Development classroom for many reasons. Despite not having much experience with front end technologies, he was a hungry learner and quickly emerged as a top student both by writing excellent code and by implementing thoughtful design. His final project executed a unique and delightful idea, and he pushed himself to complete it entirely with great attention to detail.")
    } else {
        changeContent((page6.firstElementChild.lastElementChild.lastElementChild), "Flip right to see a letter of recommendation")
        changeContent((page6.firstElementChild.firstElementChild), "So why am I qualified? Most importantly, I’m passionate about creating and improving the things I’m involved in. I’m a quick language learner, whether it be a new Javascript library or Chinese(I’m fluent!).As part of my major, I’ve taken classes in Front - end Web Development, Behavioral Economics, Python, Java and much more – I’m documenting my journey of learning D3 <a href='https://www.notion.so/kaielwooddieu/Kai-Elwood-Dieu-s-Coding-Life-Documentation-e50a3862e1744aeb84fa85c556e507e5'> here</a >.")
        changeContent((page6.firstElementChild.childNodes[3]), "From an experience standpoint, this summer I interned as the Digital Officer for Drew’s Honeybees, where I managed a team responsible for overhauling the company’s web footprint.I’m currently a freelance web developer, where I’ve developed sites using JS, Bootstrap 4, JQuery, and other languages. My most recent project is <a href='https://www.beverlyhillsinvesting.com/'> here</a>. Beyond coding, I have previous intern experience at the US Embassy in Beijing, where I developed economic analysis reports on various parts of the Chinese economy, and with Senator Cardin’s office as part of the US Senate Small Business Committee, where I conducted research and analysis on small business policy implementation.")
        changeContent((page6.firstElementChild.childNodes[5]), "I have a diverse skillset, I am driven and passionate about what I do, and if accepted to this internship I would approach challenges meticulously and passionately. Don’t pick me as your intern because of what I currently know – pick me because I have the drive and the passion to learn, implement, and scale what I don’t know! Thank you so much for your time in reading this letter.")
    }
}

function flipText(item) {
    item.classList.toggle("page1")
}

function changeContent(element, newContent){
    element.innerHTML = newContent
}