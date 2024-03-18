let btn = document.getElementById('btn');
let authors = document.getElementById('authors');
let quotes = document.getElementById('quotes');
let container = document.getElementById('container');
container.style.backgroundImage = 'url("bg/bg1.jpg")';


let arr = [
    {
        'title':'“So many books, so little time.”',
        'author':'― Frank Zappa',
        'img':'url("bg/bg2.jpg")',
    }
    ,
    {
        'title':'“A room without books is like a body without a soul.”',
        'author':'― Marcus Tullius Cicero',
        'img':'url("bg/bg3.jpg")',
    }
    ,
    {
        'title':'“You only live once, but if you do it right, once is enough.”',
        'author':'― Mae West',
        'img':'url("bg/bg4.jpg")',
    }
    ,
    {
        'title':'“Be the change that you wish to see in the world.”',
        'author':'― Mahatma Gandhi',
        'img':'url("bg/bg5.jpg")',
    }
    ,
    {
        'title':'“Always forgive your enemies; nothing annoys them so much.”',
        'author':'― Oscar Wilde',
        'img':'url("bg/bg6.jpg")',
    }
];




function getQuote() {
    let random =Number.parseInt(Math.random()*arr.length + 1); //Math.random() always returns a number lower than 1
    quotes.innerHTML=`${arr[random].title}`;
    authors.innerHTML=`${arr[random].author}`;
    container.style.backgroundImage=`${arr[random].img}`;
};
