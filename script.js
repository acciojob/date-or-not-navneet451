var isDate = function (input) {
  //   write your code here
	if (input instanceof Date && !isNaN(input)) {
    return true;
  }
	if (typeof input === "string") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }

  // If none of the above checks are true, return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
