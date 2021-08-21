/*
The Actual Memory Size of your USB Flash Drive
Create a function that takes the memory size (ms is a string type) as an argument and returns the actual memory size.

Examples
actualMemorySize("32GB") ➞ "29.76GB"

actualMemorySize("2GB") ➞ "1.86GB"

actualMemorySize("512MB") ➞ "476MB"
Notes
The actual storage loss on a USB device is 7% of the overall memory size!
If the actual memory size was greater than 1 GB, round your result to two decimal places.
For the purposes of this challenge, there are 1000 MB in a Gigabyte.

Test.assertEquals(actualMemorySize("256MB"), "238MB")
Test.assertEquals(actualMemorySize("512MB"), "476MB")
Test.assertEquals(actualMemorySize("2GB"), "1.86GB")
Test.assertEquals(actualMemorySize("8GB"), "7.44GB")
Test.assertEquals(actualMemorySize("16GB"), "14.88GB")
Test.assertEquals(actualMemorySize("32GB"), "29.76GB")
Test.assertEquals(actualMemorySize("1GB"), "930MB")
*/

function actualMemorySize(ms) {
  let re = /[a-z]\w+/i;
  let unt = re.exec(ms);

  re = /(\d+)/;
  let space = parseInt(ms.match(re));

  if ("mb" == unt[0].toLowerCase()) {
    space = Math.floor(space - space * 0.07);
    return space + "MB";
  }

  if (unt[0].toLowerCase() == "gb" && space > 1) {
    return (space - space * 0.07).toFixed(2) + "GB";
  } else if (unt[0].toLowerCase() == "gb" && space === 1) {
    return (space - space * 0.07).toFixed(2) * 1000 + "MB";
  }
}

exports.actualMemorySize = actualMemorySize;
