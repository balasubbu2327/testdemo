var request=new XMLHttpRequest();
request.open("GET","https://www.anapioficeandfire.com/api/books/1");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);

    console.log(`Author name:${data.authors} Book name:${data.name} ISBN no:${data.isbn} No Of Pages:${data.numberOfPages} Publisher:${data.publisher}`);
}