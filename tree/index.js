//二叉树
function BinarySearchTree(){
  var Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null;
  var insertNode = function(node, newNode){
    if(newNode.key < node.key){
      if(node.left === null){
        node.left = newNode;
      }else{
        insertNode(node.left,newNode)
      }
    }else{
      if(node.right === null){
        node.right = newNode
      }else{
        insertNode(node.right,newNode)
      }
    }
  }
  this.insert = function(key){
    var newNode = new Node(key);
    if(root === null){
      root = newNode;
    }else{
      insertNode(root, newNode)
    }
  }
  var inOrderTraverseNode = function (node, callback) { 
    if (node !== null) { //{2} 
    inOrderTraverseNode(node.left, callback); //{3} 
    callback(node.key); //{4} 
    inOrderTraverseNode(node.right, callback); //{5} 
    } 
  };
  this.inOrderTraverse = function(callback){
    inOrderTraverseNode(root,callback)
  }
}