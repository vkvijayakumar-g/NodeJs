'use strict'
var buy = [];
var buy_time = [];
var sell = [];
var sell_time = [];
var d = new Date();


/*class is creating the stock Account of each user
and its constructor class to name the stock account user
and defined with some methods*/
class StockAccount {
  constructor(name) {
    this.name = name;
  }

  /*value of each user is initialized*/
  valueOf(value) {
    this.value = value;
  }
  /*the stock buy by the user*/
  buy(amount, symbol) {
    document.write("Buying the Share symbol: " + symbol + " for " + amount + "<br>");
    buy.push(symbol);
    buy_time.push(" time:" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ",Date: " + d.getDate() + " ");
    this.value = this.value - amount;
  }
  /*the stock value sold by the user*/
  sell(amount, symbol) {
    document.write("Selling the Share symbol: " + symbol + " for " + amount + "<br>");
    sell.push(symbol);
    sell_time.push(" time:" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ",Date: " + d.getDate() + " ");
    for (var i = 0; i < buy.length; i++) {
      if (buy[i] == symbol) {
        delete buy[i];
        delete buy_time[i];
        break;
      }
    }
    this.value = this.value + parseInt(amount);
  }

  printReport() {
    document.write("\tStock Account Inventory<br>");
    document.write("Account Name     : " + this.name + "<br>");
    document.write("Account Balance  : " + this.value + "<br>");
    document.write("------------------------------<br>");
  }

}

/*creating a node for the linklist function*/
function Node(data1, data2, data3) {
  this.name = data1;
  this.symbol = data2
  this.data_time = data3;
  this.next = null;
}

function symbols(data) {
  this.symbol = data;
}
/*objects for the orderted list */
function linkedlist() {
  this.head = null;
}

function company_list(data) {
  this.share_name = data;
}

/*display the node elements in the ordered list */
linkedlist.prototype.display = function() {
  var currentNode = this.head;
  while (currentNode.next) {
    document.write("Company Name: " + currentNode.name.share_name + ", Stock Symbol: " + currentNode.symbol.top.symbol + "<br>");
    currentNode = currentNode.next;
  }
  document.write("Company Name: " + currentNode.name.share_name + " Stock Symbol: " + currentNode.symbol.top.symbol + "<br>");
  //console.log(currentNode);
}

/*adding the new element to list if list empty then create new else
traverse the list till the last and insert /add it*/
linkedlist.prototype.add = function(value1, value2, value3) {
  //console.log(value3);
  var node = new Node(value1, value2, value3);
  var currentNode = this.head;
  if (currentNode == null) {
    this.head = node;
    document.write("Purchased By:" + node.name.share_name + "<br>");
    return node;
  }
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  document.write("Purchased By:" + node.name.share_name + "<br>");
  return node;

}

function stack() {
  this.top = 0;
}

function symbols(data) {
  this.symbol = data;
}
stack.prototype.display = function() {
  var currentNode = this.top;
  if (currentNode == null) {
    document.write("Node is Empty<br>");
  }
  while (currentNode) {
    document.write(currentNode.symbol + "<br>");

    currentNode = currentNode.next;

  }
  document.write("------------------------<br>");
}

stack.prototype.pushing = function(data) //pushing of the character
{
  var node = new symbols(data);
  if (this.top == null) {
    this.top = node;
  } else {
    node.next = this.top;
    this.top = node;
  }
}
stack.prototype.popping = function(company) {
  var currentNode = this.top;
  if (this.top == null) {
    document.write("Stack is empty");
  } else {
    document.write(currentNode.symbol + " symbol was solded recently by " + company.share_name + "<br>");
    currentNode = this.top.next;
    delete(this.top);
    this.top = currentNode;
  }
}

function queue() {
  this.rear = 0;
  this.front = 0;
}
/*function to queue to add date and time to queue*/
function date_time(data) {
  this.systime = data;
}
/*enqueue is function in queue to add the element to the queue
and the element added should like a queue format so whenever
new element is inserted it should be wait in the queue*/
queue.prototype.enqueue = function(data) {
  var node = new date_time(data);
  if (this.rear == null) {
    this.rear = node;
    this.front = this.rear;
  } else {
    this.rear = this.rear.next;
    this.rear = node;
  }
  document.write("Transaction Time:" + this.rear.systime + "<br>");
}

function read() {
  var name = document.getElementById('name').value;
  var balance = document.getElementById('bal').value;
  var object = new StockAccount(name);
  object.valueOf(balance);
  object.printReport();
  var stock_symbols = new stack();
  var company_transactions = new queue();
  var share_holders = new linkedlist();
  /*pushing the company list to the linklist */
  var company = new company_list(object.name);
  var buysize = prompt("How many shares you want to Buy", "");
  for (var i = 1; i <= buysize; i++) {
    var amount = prompt("enter the amount of share " + i + ":", "");
    var name = prompt("enter the name of share " + i + ":", "");
    object.buy(amount, name);
  }
  /*pushing the Purchased stock symbols into stack*/
  stock_symbols.pushing(buy);
  company_transactions.enqueue(buy_time);
  share_holders.add(company, stock_symbols, company_transactions);
  share_holders.display();
  document.write("------------------------------<br>");
  var sellsize = prompt("How many shares you want to Sell", "");
  for (var i = 1; i <= sellsize; i++) {
    var amount = prompt("enter the amount of share " + i + ":", "");
    var name = prompt("enter the name of share " + i + ":", "");
    object.sell(amount, name);
  }
  company_transactions.enqueue(sell_time);
  share_holders.display();
  document.write("Account Balance  : " + object.value + "<br>");
}