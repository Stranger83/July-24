function solve(input) {
    console.log(input.map(Number)
        .sort((a, b) => a>b)
        .reverse()
        .slice(0,3)
        .join("\r\n"));
}
solve(['10', '30', '15', '20', '50', '5']);