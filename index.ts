import * as main from "./src/main";
const token= '7~HaO4qXhlfhquEAircCxGAE68LUIho1kmJ3JcYviNHh8j7OjJpdcmwHX6hgJAcA4n';
const courseId = "7809868";

export async function test() {
  let courseListData = await main.getCourseList('canvas', token);
  console.log("getCourseList"+(courseListData));
  let courseIdData = await main.getCourseById('canvas', token, courseId);
  console.log("getCourseById"+JSON.stringify(courseIdData));
  return courseListData;
}

  