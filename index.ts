import * as main from "./src/main";


export async function greet() {
  let data = await main.getCourseList('canvas', '7~HaO4qXhlfhquEAircCxGAE68LUIho1kmJ3JcYviNHh8j7OjJpdcmwHX6hgJAcA4n');
  // console.log(data);
  return data;
}

  