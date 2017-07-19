someData = [1,2,3,4,5]

d3.selectAll("div")
  .data(someData)
  .enter()
  .append("div")
  .html("wow")
  .style("color","green")
  .append("span")
  .html("Even MORE wow!")
  .style("font-weight","900")
  .style("color","blue");