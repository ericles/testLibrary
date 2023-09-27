import * as main from "./src/main";

// hello.ts
export function greet() {
  // console.log('Hello, World!');
  // return 'Hello, World!';
  let data = main.getCourseList('canvas', '7~HaO4qXhlfhquEAircCxGAE68LUIho1kmJ3JcYviNHh8j7OjJpdcmwHX6hgJAcA4n');
  console.log(data);
  return data;
}

// Rest of your script
  