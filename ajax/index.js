function getData(){
  console.log("function getData is executed");
  //fetch is a keyword/ a function, used to call the server and get the data. 
  //It takes two parameters: 
  //A string which is the URL of API.
  //An object, which has headers, method etc.
  //fetch function returns a Promise, whether it is successful or not.
  fetch("https://jsonplaceholder.typicode.com/todos/1",{ 
    headers: { "Content-Type": "application/json" } 
  })
  // To actually get the data, we need to get the body of the response. - Since we passed the content-type as application/json in headers, the response object is expected to be in .json() method. 
  .then(res =>
    res.json()
  )
  //The .json() method on a Response object returns a Promise, so we need to chain on another .then() in which actual data is received.
  .then(data => {
    console.log("data",data); 
    let element = document.getElementById("data");
    element.textContent = data.title;
  });

}
