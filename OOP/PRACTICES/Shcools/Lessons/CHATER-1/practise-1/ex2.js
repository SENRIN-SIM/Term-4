// Instructions:
// • Inspect type of `pie`
// • Add an explicit type annotation to `pie`
// • Try assigning invalid types, for fun

// var pie;
// pie = "blueberry";
// console.log("[Exercise 1.2]", "I like to eat ".concat(pie, "-flavored pie."));

var pie = String;
pie = "blueberry";
console.log("[Exercise 1.2]", "I like to eat ",`${pie} flavored pie.`);