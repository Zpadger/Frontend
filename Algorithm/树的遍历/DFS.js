// 深度优先遍历递归写法
function dfs(node){
    let res = [];
    if (node){
        res.push(node);
        let childrens = node.children;
        for (let i = 0; i < childrens.length; i++){
            dfs(childrens[i]);
        }
    }
    return res;
}
// 深度优先遍历非递归写法
function dfs(node){
    let res = [];
    let stack = [];
    if (node){
        stack.push(node);
        while (stack.length){
            let item = stack.pop();
            res.push(item);
            let childrens = item.children;
            for (let i = childrens.length - 1; i >= 0; i--){
                stack.push(childrens[i]);
            }
        }
    }
    return res;
}