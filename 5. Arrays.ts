var activeUsers: []=[];
activeUsers.add("Rupinder") // error becasue array is empty

var activeUsers2: string[]=[];
activeUsers2.push("Rupinder") // no error

// Alternate syntax for array types

const bools: Array<boolean> = [];

type Point = {
    x: number;
    y: number;
}

var points: Array<Point> = [];

//  Multi Dimensional
var board: Array<Array<string>> = [
    ["X","O","X"],
    ["X","O","X"],
    ["X","O","X"],
]