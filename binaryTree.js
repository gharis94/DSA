// Binary Tree


class Node{
    constructor(val){
        this.val =val,
        this.right=null,
        this.left=null
    }

}

class BinaryTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root ===null;
    }

    insert(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.root =node;
        }else{
            this.inserNode(this.root,node);
        }
    }

    inserNode(root,node){
        if(root.val > node.val){
            if(root.left === null){
                root.left=node
            }else{
                this.inserNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right =node
            }else{
                this.inserNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(! root){
            return false;
        }else{
            if(root.value === value){
                return true;
            }else if(root.value > value){
                
            }
        }
    }
}

const bts = new BinaryTree();
console.log(bts.isEmpty())
bts.insert(2)
console.log(bts.isEmpty())