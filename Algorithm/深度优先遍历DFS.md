模板
```javascript
function dfs(grid, i, j, x, y){
        // 边界判断
        if (i < 0 || i > x - 1 || j < 0 || j > y - 1 || grid[i][j] === 0){
            return 0;
        }
        // let count = 1;
        // 遍历过置为 “0”，防止循环遍历
        grid[i][j] = 0;
        // 朝周围扩散
        dfs(grid, i + 1, j, x, y);
        dfs(grid, i, j + 1, x, y);
        dfs(grid, i - 1, j, x, y);
        dfs(grid, i, j - 1, x, y);
        return count;
    }
```
