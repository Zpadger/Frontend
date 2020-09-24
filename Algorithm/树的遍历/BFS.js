function bfs(node){
    let res = [];
    let queue = [];
    if (node){
        queue.push(node);
        while (queue.length){
            let item = queue.shift();
            let childrens = item.children;
            res.push(item);
            for (let i = 0; i < childrens.length; i++){
                queue.push(childrens[i]);
            }
        }
    }
    return res;
}