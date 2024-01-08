const dirs = [
  [0, 1],   // top
  [1, 0],   // right
  [0, -1],  //bottom
  [-1, 0],   //left
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][]): boolean {

  // 1. Base Case
  // off the map
  if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
    return false;
  }

  // on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  if (curr.x === end.x && curr.y === end.y) {
    return true;
  }

  if (seen[curr.y][curr.x]) {
    return false;
  }

  // 3. recurse
  // pre
  path.push(curr);

  //recurse
  for (let i = 0; i < path.length; ++i) {

  }

  // post
  path.pop();
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

}
