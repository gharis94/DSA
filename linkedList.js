
class Node{
    constructor(val){
        this.value=val;
        this.next=null
    }
}

class singlyLinkedList{
    constructor(){
        this.head=null,
        this.size=0

    }
    
    isEmpty(){
        return this.size ===0;
    }

    getSize(){
        return this.size;
    }

    prepand(val){
        const node = new Node(val);
        if(this.isEmpty()){
            console.log('p empty')
            this.head=node;
        }else{
            node.next = this.head;
            this.head = node;
            console.log('p not empty')
        }
        this.size++;
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let cur = this.head;
            let listvalue =[];
            while(cur){
                console.log(cur.next)
                listvalue=[...listvalue,cur.value]
                cur = cur.next
            }
            console.log(listvalue)
        }
    }

    append(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.head =node;
            console.log('ap empty')
        }else{
            let cur = this.head;
            while(cur.next){
                cur = cur.next
            }
            console.log('ap not empty')
            cur.next = node;
        }
        this.size++
    }
    
    insert(val,idx){
        if(idx<0 || idx> this.size) return;
        if(idx ===0) return this.prepand(val);
        if(idx === this.size) return this.append(val);
        const node = new Node(val);
        let prev = this.head;
        for(let i=0;i<idx;i++){
            prev = prev.next;
        }
        let temp = prev;
        prev = node;
        node.next =temp;
        this.size++;
    }
}

const x = new singlyLinkedList();
console.log(x.size);
x.append('a')
x.append('b')
x.prepand('c')
x.prepand('d')
x.prepand('e')
console.log(x.print())
console.log(x.size)