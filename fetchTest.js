const response = await fetch("http://example.com/movies.json?TOKEN=mitokenSupersecreto");
const movies = await response.json();
console.log(movies);

const USER_KEY="12312321QWEQWEQWE"

const response2 = await fetch("http://example.com/movies.json?USER_KEY="+USER_KEY);
const result2 = await response2.json();
console.log(result2);
