//excelColumnToNumber.js

//Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.
//o(n)
//Input - string, a column title
function columnToNumber(s)
{
    // This process is similar to
    // binary-to-decimal conversion
    let result = 0;
    for (let i = 0; i < s.length; i++)
    {
        result *= 26;
        result += s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    return result;
}

//o(n)
//Input - number, a column number
function columnTitle(columnNumber)
{
    // To store result (Excel column name)
    let columnName = [];
  
    while (columnNumber > 0) {
        // Find remainder
        let rem = columnNumber % 26;

        // If remainder is 0, then a
        // 'Z' must be there in output
        if (rem == 0) {
            columnName.push("Z");
            columnNumber = Math.floor(columnNumber / 26) - 1;
        }
        else // If remainder is non-zero
        {
            columnName.push(String.fromCharCode((rem - 1) + 'A'.charCodeAt(0)));
            columnNumber = Math.floor(columnNumber / 26);
        }
    }

    // Reverse the string and print result
    return columnName.reverse().join("");
}

var value = columnToNumber('CDA');
console.log(value);

var title = columnTitle(2133);
console.log(title);