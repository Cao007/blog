---
title: 数据结构
---

# 第一章 绪论

## 基本概念

数据：能输入到计算机中处理的符号的集合

数据项：**最小单位**

数据元素：**基本单位**，一个数据元素由若干个数据项组成

数据结构：存在一种或多种特定关系的数据元素的集合

数据对象：**相同性质**的数据元素的集合

数据类型：值的集合以及定义在该集合上的一组操作

抽象数据类型ADT：逻辑结构+数据的运算

![image-20240609194457792](index.assets/image-20240609194457792.png)

## 数据结构三要素

### **逻辑结构**

- 集合
- 线性结构
- 树形结构
- 图形结构



### **存储结构（物理结构）**

- 顺序存储
  - 逻辑上相邻的运算在物理上也相邻
  - 优点：随机存取
  - 缺点：可能产生外部碎片
- 链式存储
  - 逻辑上相邻的元素在物理上可以不相邻
  - 优点：不产生外部碎片
  - 缺点：只能顺序存取，指针占用了额外的存储空间
- 索引存储
  - 建立索引表，存储（关键字，地址）
  - 优点：改查数据快
  - 缺点：增删数据需要修改索引表，增加了时间的开销；索引表占用了额外的存储空间
- 散列存储（哈希存储）
  - 根据关键字直接计算出元素的存储地址
  - 优点：增删改查快
  - 缺点：散列函数的设计；解决元素存储单元的冲突增加了时间和空间的开销



### **数据的运算**

- 运算的定义是针对逻辑结构的
- 运算的实现是针对存储结构的



## 算法

**算法的定义**：

- 特定问题的求解步骤
- 指令的有限序列，每个指令表示一个或多个操作



**算法的特性**：

- 0个或多个输入
- 1个或多个输出

- 有穷性：必须执行有限步骤后完成
  - 算法是有穷的，程序可以无穷
- 确定性：每一步必须有确切的定义（相同的输入有相同的输出）
- 可行性：任何步骤都能被分解为基本的可执行操作，每个操作都能在有限时间内完成



**算法的评价**：

- 正确性：算法可以正确解决问题
- 可读性：算法程序应该易读，好理解
- 健壮性（鲁棒性）：可以处理非法数据、边界条件
- 高效率和低存储量



## 时间复杂度

复杂度运算规则：
$$
O(f(n))+O(g(n))=O(max(f(n),g(n))\\
O(f(n)) \times O(g(n))=O(f(n)\times g(n))
$$
常见的时间复杂度排序：
$$
O(1)\leq O(log_{2}{n})\leq O(n) \leq O(nlog_{2}{n}) \leq O(n^2) \leq O(n^3) \leq ... \leq O(n^k) \leq O(2^n) \leq O(n!) \leq O(n^n)
$$

- O($n^2$)表示执行时间与$n^2$成正比
- O(1)表示执行时间为常量，与问题规模n无关

~~~c++
int i;
int count = 0;
for(i=1; i<=n; i++){
	count++;
}
~~~

$$
\sum_{i=1}^{n}1=n => O(n^2)
$$

~~~c++
int i;
int count = 0;
for(i=1; i<=n; i*=2){
    count++;
}
~~~

设自增k次退出循环，此时$2^k$=n，则有
$$
\sum_{i=1}^{n}1=\sum_{i=1}^{2^k}1=\sum_{i=2^0}^{2^k}1=k+1=log_{2}{n}+1=>O(log_{2}{n})
$$



~~~c++
int i,j;
int count = 0;
for(i=1; i<=n; i++){
    for(j=1; j<=n; j++){
    	count++;
    }
}
~~~

$$
\sum_{i=1}^{n}\sum_{j=1}^{n}1=\sum_{i=1}^{n}n=n\sum_{i=1}^{n}1=n^2=>O(n^2)
$$

~~~c++
int i,j;
int count = 0;
for(i=1; i<=n; i++){
    for(j=1; j<=i; j++){
    	count++;
    }
}
~~~

$$
\sum_{i=1}^{n}\sum_{j=1}^{i}1=\sum_{i=1}^{n}i=\frac{(1+n)n}{2}=>O(n^2)
$$

~~~c++
int i,j;
int count = 0;
for(i=1; i<=n; i++){
    for(j=1; j<=i; j*=2){
    	count++;
    }
}
~~~

设j自增k次退出循环, 则有$2^k$=i
$$
\sum_{i=1}^{n}\sum_{j=1}^{2^k}1=\sum_{i=1}^{n}(k+1)=\sum_{i=1}^{n}(log_{2}{i}+1)=log_{2}{n!}+n=>O(log_{2}{n!})=O(nlog_{2}{n})
$$

~~~c++
int i,j;
int count = 0;
for(i=1; i<=n; i*=2){
    for(j=1; j<=i; j++){
    	count++;
    }
}
~~~

设i自增k次退出循环, 此时$2^k$=n, k=$log_{2}{n}$
$$
\sum_{i=1}^{2^k}\sum_{j=1}^{i}1=\sum_{i=1}^{2^k}i=1+2+...+2^k=2^{k+1}-1=2n-1=>O(n)
$$

~~~c++
for(int i=1;i<=n;i++){
	for(int j=1;j<=i;j++){
        for(int k=1;k<=j;k++){
			count++;
        }
    }
}
~~~

$$
\sum_{i=1}^{n}\sum_{j=1}^{i}\sum_{k=1}^{j}1=\sum_{i=1}^{n}\sum_{j=1}^{i}\frac{(1+i)i}{2}=\frac{1}{2}(\sum_{i=1}^{n}i+\sum_{i=1}^{n}i^2)=\frac{1}{2}[\frac{(1+n)n}{2}+\frac{n(n+1)(2n+1)}{6}]
$$

**while循环**

~~~c++
int y=0;
while((y+1)*(y+1) <= n){
    y = y+1;
}
~~~

$$
O(log_{2}{n})
$$

**循环体内的语句**

~~~c++
int i,j;
int count=0;
for(i=1; i<n; i++){
    for(j=1; j<n; j++){
        count++;
        i++;
    }
}
~~~

$$
O(n)
$$

**master公式**
$$
T(N)=aT(\frac{N}{b})+O(N^d)\\
1.若log_{b}{a}>d，则O(n^{log_{b}{a}})\\
2.若log_{b}{a}<d，则O(n^{d})\\
3.若log_{b}{a}=d，则O(nlog_{2}{n})\\
$$

- T(N)为母问题的数据量
- $T(\frac{N}{b})$是子问题的规模
- $O(N^d)$是除了调用之外剩余的时间复杂度

例子：
$$
T(n)=
\begin{cases}
    1, &\text{n=1}\\
    2T(\frac{n}{2})+n,&\text{n>1}
\end{cases}
$$

$$
因为log_{2}{2}=1=d,所以时间复杂度为O(nlog_{2}{n})
$$


## 空间复杂度

用于计算空间复杂度的：形参，局部变量，数组

- O($n^2$)表示所需辅助空间大小与$n^2$成正比
- O(1)表示所需辅助空间大小为常量，与问题规模n无关，称为**原地工作**

~~~c++
int foo(int n){  //n 4B
	int i=1;     //i 4B
    while(i<=n){
		i++;
    }
}

// 空间复杂度为O(8)=O(1) -> 算法原地工作
~~~

~~~c++
int foo(int n){    //4
	int arr[n][n]; //4n^2
    int arr2[n];   //4n
    int i;         //4
}

// 空间复杂度为O(4n^2+4n+8)=O(n^2)
~~~

**递归型**

~~~c++
int foo(int n){
	int a,b,c;
    if(n>1)
        foo(n-1);
}

int main(){
    // 以3为例
	foo(3);
}
~~~

| n递归次数 | 空间消耗    |
| --------- | ----------- |
| n=3       | n+a+b+c=16B |
| n=2       | n+a+b+c=16B |
| n=1       | n+a+b+c=16B |

- 故空间复杂度为O(16n)=O(n)



~~~c++
int foo(int n){
	int arr[n];
    if(n>1)
        foo(n-1);
}

int main(){
    // 以3为例
	foo(3);
}
~~~

| n递归次数 | 空间消耗            |
| --------- | ------------------- |
| n=3       | arr[n]+n = (3*4+4)B |
| n=2       | arr[n]+n = (2*4+4)B |
| n=1       | arr[n]+n = (1*4+4)B |

- 故空间复杂度为O([(1+2+...+n)*4+4n])=O($n^2$)

# 第二章 线性表

## 线性表的概念

线性表：n(n≥0)个相同数据类型的数据元素的有限序列

- **逻辑上**有先后顺序，而非物理位置上的前后次序

- 除表头元素外，每个元素有且仅有一个直接前驱

- 除表尾元素外，每个元素有且仅有一个直接后继



## 线性表的存储

### 顺序存储结构—顺序表

~~~c++
// 静态分配
typedef struct{
	ElemType data[MaxSize];
    int length;
}SeqList;
~~~

~~~c++
//动态分配
typedef struct{
	ElemType *data;
    int MaxSize,length;
}SeqList;

//C: (Elemtype*)malloc(sizeof(Elemtype)*Size)
//C++: new Elemtype[Size]
~~~



### 链式存储结构—链表

**单链表**

~~~c++
// 结点的定义
typedef struct LNode{ 
    Elemtype data;
	struct LNode *next;
}LNode;

// 链表的定义
typedef struct LinkedList{
	LNode *head;
    int length;
}LinkedList;
~~~

![image-20240610124521297](index.assets/image-20240610124521297.png)

- 头结点：一般没有数据域
- 头指针：指向第一个结点的指针，故头指针可能指向头结点或首元结点

- 首元结点（开始结点）：第一个存放数据的结点

- 单链表一般都是带头结点的，但是在做选择题的时候如果题目没有声明，那就是不带头结点



**双链表**

~~~c++
// 结点的定义
typedef struct DNode{ 
    Elemtype data;
    struct DNode *prior;
    struct DNode *next;
}DNode;
~~~

![image-20240610125017651](index.assets/image-20240610125017651.png)



**循环单链表**

![image-20240610125207360](index.assets/image-20240610125207360.png)



**循环双链表**

![image-20240610125321463](index.assets/image-20240610125321463.png)



**静态链表**

~~~c++
typedef struct{
    Elemtype data;
    int cur; //游标（数组下标）
}SLinkList[100]; //假设申请了100个连续的内存空间
~~~

![image-20240610125450311](index.assets/image-20240610125450311.png)

## 线性表的运算

**插入节点**

![image-20240610125840372](index.assets/image-20240610125840372.png)



**删除节点**

![image-20240610131608747](index.assets/image-20240610131608747.png)



**查找节点**

- 按序查找
- 按值查找



# 第三章 栈、队列

## 栈

### 栈的逻辑结构

栈：只能在一端插入或删除的线性表

- 栈顶（top）：允许进行插入删除操作的一端。

- 栈底（bottom）：固定不变，不允许进行任何操作。

- 先进后出（FILO）的特性

卡特兰数：n 个不同元素进栈，能在任意时刻出栈，则出栈元素不同的排列顺序的个数为$\frac{1}{n+1}C_{2n}^{n}$



### 栈的存储结构

**顺序栈**

~~~c++
typedef struct {
    Elemtype data[maxSize];
    int top; 
}SeqStack;

// 初始化
SeqStack S;
S.top = -1; //栈顶指针top指向栈顶元素

// 入栈
S.data[++S.top] = e;

// 出栈
e = S.data[S.top--];

// 获取栈顶元素
S.data[S.top];

// 判满
S.top == maxSize-1;

// 判空
S.top == -1;
~~~

~~~c++
typedef struct{
    Elemtype data[maxSize];
    int top; 
}SeqStack;

// 初始化
SeqStack S;
S.top = 0; //栈顶指针top指向栈顶元素的下一个元素

// 入栈
S.data[S.top++] = e;

// 出栈
e = S.data[--S.top];

// 获取栈顶元素
S.data[S.top-1];

// 判满
S.top-1 == maxSize-1;

// 判空
S.top == 0;
~~~



**共享栈**

~~~c++
typedef struct{
    Elemtype data[maxSize];
    int top0,top1; 
}ShareStack;

// 初始化
ShareStack S;
S.top0 = -1;
S.top1 = maxSize;

// 判满
S.top0+1 == S.top1; //top0入栈时栈满
S.top1-1 == S.top0; //top1入栈时栈满

// 判空
S.top == -1 && S.top1 == maxSize;
~~~



**链栈**

~~~c++
// 链栈结点定义
typedef struct {
	Elemtype data;
 	struct LinkNode *next;    
}LinkNode;

// 链栈定义
typedef struct {
    LinkNode *top;
}LinkStack;
~~~

- 默认无头结点
- top指向栈顶元素（开始结点）
- 头插法**入栈**

- top指针后移**出栈**



### **括号匹配**

~~~c++
#define _CRT_SECURE_NO_WARNINGS
#include <bits/stdc++.h>
using namespace std;

bool check(string str) {
	stack<char> Stack;
	for (int i = 0; i < str.length(); i++)
	{
		// 遍历到左括号，左括号入栈
		if (str[i] == '(' || str[i] == '[' || str[i] == '{') {
			Stack.push(str[i]);
		}
		else {
			// 1.遍历到右括号，若栈为空，则右括号多余
			if (Stack.empty())
				return false;
			// 2.判断左右括号是否匹配
			char topElem = Stack.top();
			Stack.pop();
			if ((str[i] == ')' && topElem != '(') ||
				(str[i] == ']' && topElem != '[') ||
				(str[i] == '}' && topElem != '{'))
				return false;
		}
	}
	// 3.遍历完字符串，若栈非空，则左括号多余
	return Stack.empty();
}

int main() {
	string s;
	getline(cin, s);
	cout << check(s);
	return 0;
}
~~~



### 进制转换

~~~c++
~~~



### **表达式求值**

#### 表达式的概念

表达式：一个表达式由操作数、运算符、界限符组成。**界限符反映了运算的顺序**

- **前后缀表达式不用界限符符也可以表达运算顺序**

中缀表达式：运算符在操作数中间

前缀表达式（波兰表达式）：运算符在操作数之前

后缀表达式（逆波兰表达式）：运算符在操作数之后



#### **中缀转后缀**

**手算**

从左到右遍历中缀表达式

1. 确定中缀表达式中**各个运算符的运算顺序（左优先）**
   - 左优先：只要左边运算符能先计算，则优先计算左边的
2. 按照**左操作数 右操作数 运算符**组成一个新的操作数
3. 验证：运算符升序，操作数相对顺序不变

~~~bash
# 中缀表达式
A+B*(C-D)-E/F
 3 2  1  5 4
 
# 后缀表达式
ABCD-*+EF/-
    123  45
~~~

**机算**

从左到右遍历中缀表达式

1. 操作数：直接加入后缀表达式

2. 界限符："("入栈，若遇到")"则依次弹出()内的所有运算符，加入到后缀表达式

3. 运算符：

   - 若栈顶元素优先级≥当前运算符优先级，则依次弹出栈中优先级≥当前运算符的所有运算符，栈顶为"("或空则停止弹出，且当前运算符入栈

   - 若栈顶元素优先级<当前运算符优先级，则当前运算符入栈

<img src="./index.assets/default.jpg" alt="default" style="zoom:50%;" />

#### 后缀表达式求值

**手算**

**从左到右**遍历后缀表达式，每遇到一个运算符，则将运算符**前**最近的两个操作数运算，运算结果作为一个操作数

- 运算符前的第一个操作数为左操作数（**左** 右 根）
- 运算符前的第二个操作数为右操作数（左 **右** 根）

~~~bash
# 后缀表达式
ABCD-*+EF/-

# 中缀表达式
# C-D
# B*(C-D)
# A+B*(C-D)
# A+B*(C-D) E/F
# A+B*(C-D)-E/F
A+B*(C-D)-E/F
~~~

**机算**

**从左到右遍历后缀表达式**

1. 所有字符依次入栈
2. 每遇到一个运算符，则将栈内的操作数出栈。先出栈的操作数作为**右操作数**
3. 将2的运算结果再入栈，可作为下个操作数

<img src="./index.assets/default (4).jpg" alt="default (4)" style="zoom:50%;" />

#### 中缀转前缀

**手算**

从右到左遍历中缀表达式

1. 确定中缀表达式中**各个运算符的运算顺序（右优先）**
   - 右优先：只要右边运算符能先计算，则优先计算右边的
2. 按照**运算符 左操作数 右操作数**组成一个新的操作数
3. 验证：运算符降序，操作数相对顺序不变

~~~bash
# 中缀表达式
A+B*(C-D)-E/F
 5 3  2  4 1

# 前缀表达式
+A-*B-CD/EF
5 43 2  1
~~~

**机算**

从右到左遍历中缀表达式

1. 操作数：直接加入前缀表达式

2. 界限符：")"入栈，若遇到"("则依次弹出()内的所有运算符，加入到前缀表达式

3. 运算符：

   - 若栈顶元素优先级≥当前运算符优先级，则依次弹出栈中优先级≥当前运算符的所有运算符，栈顶为"("或空则停止弹出，且当前运算符入栈

   - 若栈顶元素优先级<当前运算符优先级，则当前运算符入栈

<img src="./index.assets/default (2).jpg" alt="default (2)" style="zoom:50%;" />

#### 前缀表达式求值

**手算**

**从右到左**遍历前缀表达式，每遇到一个运算符，则将运算符**后**最近的两个操作数运算，运算结果作为一个操作数

- 运算符后的第一个操作数为左操作数（根 **左** 右）
- 运算符后的第二个操作数为右操作数（根 左 **右**）

~~~bash
# 前缀表达式
+A-*B-CD/EF

# 中缀表达式
# E/F
# C-D E/F
# B*(C-D) E/F
# B*(C-D)-E/F
# A B*(C-D)-E/F
# A+B*(C-D)-E/F
A+B*(C-D)-E/F
~~~

**机算**

**从右到左遍历前缀表达式**

1. 所有字符依次入栈
2. 每遇到一个运算符，则将栈内的操作数出栈。先出栈的操作数作为**左操作数**
3. 将2的运算结果再入栈，可作为下个操作数

<img src="./index.assets/default (3).jpg" alt="default (3)" style="zoom:50%;" />

#### 中缀表达式求值

**机算**

**从左到右遍历中缀表达式**

1. 操作数入栈S1，运算符、界限符入栈S2
2. 运算符：
   - 若栈顶运算符优先级≥当前运算符优先级，则S2弹出栈顶运算符，S1弹出两个操作数（先弹出的为右操作数），且当前运算符入栈S2
   - 若栈顶运算符优先级<当前运算符优先级，则当前运算符入栈S2

<img src="./index.assets/default (5).jpg" alt="default (5)" style="zoom:50%;" />



### 出栈序列



### 函数调用栈、递归

1. 二叉树的前、后、中序遍历
2. 图的深度优先遍历
3. 迷宫问题
4. 递归算法使用的是**系统栈**，转化为非递归算法时，使用**用户栈**保存中间结果（尾递归可以很好地转化为**循环迭代**）



## 队列

### 队列的逻辑结构

队列：只允许在一端插入，另一端删除的线性表

- 队头（front）：允许删除的一端。
- 队尾（rear）：允许插入的一端。

- 先进先出（FIFO）的特性



### 队列的存储结构

**顺序队列**

~~~c++
typedef struct{
    Elemtype data[MaxSize];
    int front, rear;
}SeqQueue;

// 初始化
SeqQueue Q;
Q.front = 0; //front指向当前队头元素
Q.rear = 0;  //rear指向队尾元素的下一个元素

// 入队
Q.data[Q.rear++] = e;

// 出队
e = Q.data[Q.front++];

// 判空
Q.front == Q.rear;
    
// 判满
Q.rear == MaxSize; //存在假溢出
~~~

**循环队列**

~~~c++
typedef struct{
    Elemtype data[MaxSize];
    int front, rear;
}SeqQueue;

// 初始化
SeqQueue Q;
Q.front = 0; //front指向当前队头元素
Q.rear = 0;  //rear指向队尾元素的下一个元素

// 入队
Q.data[Q.rear] = e;
Q.rear = (Q.rear+1)%MaxSize;

// 出队
e = Q.data[Q.front];
Q.front = (Q.front+1)%MaxSize;
    
// 元素个数
(Q.rear-Q.front+MaxSize)%MaxSize;
~~~

由于**Q.front==Q.rear**时，无法区分出队满还是队空。

判空、判满的方法：

<img src="./index.assets/default (6).jpg" alt="default (6)" style="zoom:50%;" />

1.牺牲一个存储单元

- 判空：Q.front==Q.rear
- 判满：(Q.rear+1)%MaxSize==Q.front

2.在类型中新增一个数据成员Size表示队列中元素个数

- 判空：Q.Size=0
- 判满：Q.Size=MaxSize

3.在类型中新增一个数据成员tag表示入队还是出队操作

- 判空：出队时（Q.tag==0时）导致的Q.front==Q.rear
- 判满：入队时（Q.tag==1时）导致的Q.front==Q.rear



**链式队列**

无头结点的链式队列：

~~~c++
// 链队列的结点
typedef struct{
	ElemType data;
    struct LinkNode *next;
}LinkNode;

// 链队列
typedef struct{
	LinkNode *front, *rear;
}LinkQueue;

// 初始化
LinkQueue Q;
Q.front = NULL;
Q.rear = NULL;

// 入队
LinkNode *s = (LinkNode *)malloc(sizeof(LinkNode));
s.data = e;
s.next = NULL;
Q.rear->next = s;
Q.rear = s;

// 出队
x = Q.front->data;
if(Q.front->next == null){ //被删除结点是不是队列最后一个元素
    Q.front = null;
    Q.rear = null;
}else{
    Q.front = Q.front->next;
}
~~~

**双端队列**

![image-20240610180530635](index.assets/image-20240610180530635.png)

### 队列的应用

1. 树的层序遍历
2. 图的广度优先遍历
3. 解决主机与外部设备速度不匹配问题——利用队列作为缓冲区
4. 解决多用户引起的资源竞争问题——FCFS（First Come First Service）策略
5. 页面替换算法



# 第四章 数组、矩阵、广义表、串

## 数组

数组：n(n≥1)个相同数据类型的数据元素的有限序列

- 数组是线性表的推广
- 除了初始化和销毁外，数组只有存取和修改元素的操作
- 一维数组可以看做是线性表
- 二维数组可以看做数据元素是定长线性表的线性表

一维数组元素的存储地址：
$$
Loc(a[i])=Loc(a[i-1])+sizeof(ElemType) \\
Loc(a[i])=Loc(a[0])+i\times sizeof(ElemType)
$$


二维数组（m行n列）元素的存储地址：

![image-20240614182112737](index.assets/image-20240614182112737.png)
$$
Loc(a[i][j])=Loc(a[0][0])+(i\times N +j)\times sizeof(ElemType)
$$


![image-20240614182228816](index.assets/image-20240614182228816.png)
$$
Loc(a[i][j])=Loc(a[0][0])+(j\times M + i)\times sizeof(ElemType)
$$


## 矩阵

### 矩阵的概念

矩阵：一般用二维数组存储（数据结构中的矩阵同线性代数中的矩阵）

- 矩阵的开始下标可以是(0,0)或(1,1)
- 二维数组的开始下标只能是(0,0)



### 矩阵的运算

~~~c++
#include<bits/stdc++.h>
using namespace std;
const int MaxSize = 10;

// 打印
void printMatrix(int arr[][MaxSize], int m, int n) {
	for (int i = 0; i < m; i++)
	{
		for (int j = 0; j < n; j++) {
			printf("%d ", arr[i][j]);
		}
		printf("\n");
	}
}

/*
	arr1的m行n列 转置为 arr2的n行m列
*/
void transMatrix(int arr1[][MaxSize], int arr2[][MaxSize], int m, int n) {
	for (int i = 0; i < m; i++)
	{
		for (int j = 0; j < n; j++) {
			arr2[j][i] = arr1[i][j];
		}
	}
}

/*
	arr1的m行n列 乘以 arr2的n行s列
	res为n行s列矩阵
*/
void mulMatrix(int res[][MaxSize], int arr1[][MaxSize], int arr2[][MaxSize], int m, int n, int s) {
	for (int i = 0; i < m; i++)
	{
		for (int j = 0; j < s; j++) {
			res[i][j] = 0;
			for (int k = 0; k < n; k++) {
				res[i][j] += arr1[i][k] * arr2[k][j];
			}
		}
	}
}

int main() {
	int arr1[MaxSize][MaxSize] = {
		{1,2,3},
		{4,5,6}
	};
	int arr2[MaxSize][MaxSize] = { 0 };
	transMatrix(arr1, arr2, 2, 3);
	printMatrix(arr2, 3, 2);

	int res[MaxSize][MaxSize] = { 0 };
	mulMatrix(res, arr1, arr2, 2, 3, 2);
	printMatrix(res, 2, 2);
}
~~~



### 矩阵的压缩存储

矩阵的压缩存储：

- 将多个值相同的元素只分配一个存储空间
- 零元素不分配空间



#### 对称矩阵

![image-20240614200516135](index.assets/image-20240614200516135.png)

- 存储主对角线和下三角
- 行优先

- 矩阵下标从(1,1)开始，数组下标从0开始

待定系数法：行数等差数列求和，故函数是与行数i相关的二次函数。列数j的系数为1。

$设k=ai^2+bi+c+j$，代入主对角线的元素下标解出a、b、c

- (1,1)->k=0 即 0=a+b+c+1
- (2,2)->k=12 即12=4a+2b+c+2
- (3,3)->k=23 即23=9a+3b+c+3

![image-20240614200727761](index.assets/image-20240614200727761.png)

- 存储主对角线和下三角
- 列优先

- 矩阵下标从(1,1)开始，数组下标从0开始

待定系数法：列数等差数列求和，故函数是与列数j相关的二次函数。行数i的系数为1。

$设k=aj^2+bj+c+i$，代入主对角线的元素下标解出a、b、c



#### 三角矩阵

存储上三角（或下三角）区域 + 常数区域

上三角（或下三角）区域的元素的存储同对称矩阵



#### 三对角矩阵

![image-20240614222523213](index.assets/image-20240614222523213.png)

- 存储三对角线
- 行优先

- 矩阵下标从(1,1)开始，数组下标从0开始

待定系数法：$设k=ai+bj+c$，解出a、b、c



### 稀疏矩阵

稀疏矩阵：零元素多，且非零元素没有规律性

#### 三元组表示法

<img src="./index.assets/image-20240614224934262.png" alt="image-20240614224934262" style="zoom: 67%;" />

~~~c++
// 三元组一行的定义
typedef struct{
	int i; //非零元素的行下标
    int j; //非零元素的列下标
    ElemType val;
}TriRow;

// 三元组表的定义
typedef struct{
	TriRow data[MaxSize];
    int rows; //矩阵行数
    int cols; //矩阵列数
    int noZeroTotal; //非零元素个数
}TriMatrix;
~~~



#### **伪地址表示法**

<img src="./index.assets/image-20240615011904634.png" alt="image-20240615011904634" style="zoom:80%;" />

~~~c++
// 一行的定义
typedef struct{
	int address;  // 伪地址
    ElemType val; // 非零元素的值
}Row;

// 伪地址表的定义
typedef struct{
    Row data[MaxSize];
    int rows; //矩阵行数
    int cols; //矩阵列数
    int noZeroTotal; //非零元素个数
}Matrix;
~~~

- 三元组法存储n个非零元素，需要3n个存储单元
- 伪地址法存储n个非零元素，需要2n个存储单元，但是需要花费时间计算伪地址



#### 领接表表示法

<img src="./index.assets/image-20240614230933774.png" alt="image-20240614230933774" style="zoom:67%;" />



#### 十字链表法

<img src="./index.assets/image-20240614230806195.png" alt="image-20240614230806195" style="zoom:67%;" />

~~~c++
// 普通结点
typedef struct{
	int row; // 非零元素的行下标
    int col; // 非零元素的列下标
    ElemType data;
    struct OLNode *right; //指向同一行的右侧结点
    struct OLNode *down;  //指向同一列的下侧结点
}OLNode;

// 十字链表的头结点
typedef struct{
	int rows; // 矩阵行数
    int cols; // 矩阵列数
    int noZeroTotal; // 矩阵中非零元素个数
    ElemType data;
    struct OLNode *rightHeadArr; //右侧头结点数组
    struct OLNode *downHeadArr;  //下侧头结点数组
}CrossList;
~~~

#### 稀疏矩阵的快速转置

以三元组表示法为例：

![image-20240615013407785](index.assets/image-20240615013407785-1718386449697-2.png)

<img src="./index.assets/image-20240615013611648.png" alt="image-20240615013611648" style="zoom:80%;" />

## 广义表

**广义表**：表元素可以是广义表或原子元素，是**线性表的推广**

- 广义表是**递归定义**的
- 广义表是**层次结构**

**广义表的长度**：第一层括号内元素的个数

**广义表的深度**：括号最大的层数

<img src="./index.assets/default（7）.jpg" alt="default（7）" style="zoom:50%;" />

**广义表的表头**：广义表非空时，第一个元素

**广义表的表尾**：广义表非空时，除了第一个元素，剩余的元素组成的新表

- 广义表的表尾一定是广义表，不是原子元素



## 串

### 串的逻辑结构

串：n(n≥0)个字符组成的有限序列

主串：包含子串的串

子串：串中任意连续的字符构成的子序列

字符、子串的位置：从位序1开始计算

空串：‘’

空格串：' '



### 串的存储结构

#### 顺序存储

~~~c++
// 静态分配
typedef struct{
	char chs[MaxSize+2]; //MaxSize串的最大长度+'\0'+下标从1开始
    int length; //字符串当前的长度
}str;
~~~

~~~c++
// 动态分配
typedef struct{
	char *chs; //MaxSize串的最大长度+'\0'+下标从1开始
    int length; //字符串长度
}str;

// 初始化
str s;
s.chs = (char *)malloc(sizeof(char)*(n+2));
s.length = 0;
~~~



#### 链式存储

![image-20240615192814811](index.assets/image-20240615192814811.png)

- 每个结点可以存放一个字符或多个字符

- 最后一个结点占不满时，通常用"#"补上



### 字符串模式匹配

主串：包含子串的串

模式串串：待定位的子串

模式匹配：在主串中定位模式串



#### 朴素模式匹配

朴素模式匹配：时间复杂度$O(m\times n)$

- 指针i,j分别指向主串和模式串，相同字符则继续向后遍历，不同字符则回溯

- 主串的指针i回溯到主串的下一个位置
- 模式串的指针j回溯到模式串的起始位置

~~~c++
// 起始下标为0版
int patternMatch0(string str, string pattern) {
	int i = 0; // i指向主串str
	int j = 0; // j指向模式串pattern
	int k = 0; // 记录主串下一次的起始位置

	while (i < str.length() && j < pattern.length()) {
		if (str[i] == pattern[j]) {
			i++;
			j++;
		}
		else {
			i = ++k; // i指向主串的下一个位置k
			j = 0;   // j指向模式串的起始位置0
		}
	}

	// 模式串遍历完，匹配成功
	if (j >= pattern.length())
		return k;
	else
		return -1;
}
~~~

~~~c++
// 不使用k变量
int patternMatch1(string str, string pattern) {
	int i = 0; // i指向主串str
	int j = 0; // j指向模式串pattern

	while (i < str.length() && j < pattern.length()) {
		if (str[i] == pattern[j]) {
			i++;
			j++;
		}
		else {
			i = i - j + 1; // i指向主串的下一个位置
			j = 0;         // j指向模式串的起始位置0
		}
	}

	// 模式串遍历完，匹配成功
	if (j >= pattern.length())
		return i - pattern.length();
	else
		return -1;
}
~~~



#### KMP算法

KMP算法：时间复杂度$O(m+ n)$

- 主串的指针i不回溯
- 模式串的指针j回溯，回溯的位置是最长公共前后缀对齐的地方
- next[j]=val表示模式串中第j位失配时，j指针下一次应该回溯到val的位置

- next[j]数组只和模式串有关



下标从1开始

next[j]数组：

1. 若模式串的第1位失配时，**next[1]=0**，主串i向后移动一位与模式串的第一位进行比较

2. 若模式串的第j位失配时，则将第1~j-1位的模式串复制一份，**上下串错开一位**

3. 下面的模式串不断右移，找到**最长公共前后缀+1**即为**next[j]**的值

nextVal[j]数组：

1. **nextVal(1)=0**
2. pattern[j]==pattern[next[j]]（别人）是否相同？
   - 相同，则**nextVal[j]=别人的nextVal**
   - 不同，则**nextVal[j]=自己的next**

| pattern    | a     | b    | a    | a    | b    | c    | a    | c    |
| ---------- | ----- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| j          | 1     | 2    | 3    | 4    | 5    | 6    | 7    | 8    |
| next[j]    | **0** | 1    | 1    | 2    | 2    | 3    | 1    | 2    |
| nextVal[j] | **0** | 1    | 0    | 2    | 1    | 3    | 0    | 2    |

<img src="./index.assets/default (7).jpg" alt="default (7)" style="zoom:50%;" />

下标从0开始

next[j]数组：

1. 若模式串的第1位失配时，**next[0]=-1**，主串i向后移动一位与模式串的第一位进行比较

2. 若模式串的第j位失配时，则将第1~j-1位的模式串复制一份，**上下串错开一位**

3. 下面的模式串不断右移，找到**最长公共前后缀**即为**next[j]**的值

nextVal[j]数组：

1. **nextVal(0)=-1**
2. pattern[j]==pattern[next[j]]（别人）是否相同？
   - 相同，则**nextVal[j]=别人的nextVal**
   - 不同，则**nextVal[j]=自己的next**

| pattern    | a      | b    | a    | a    | b    | c    | a    | c    |
| ---------- | ------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| j          | 0      | 1    | 2    | 3    | 4    | 5    | 6    | 7    |
| next[j]    | **-1** | 0    | 0    | 1    | 1    | 2    | 0    | 1    |
| nextVal[j] | **-1** | 0    | -1   | 1    | 0    | 2    | -1   | 1    |



# 第五章 树与二叉树

## 树

### 树的概念

树：n（n≥0）个结点的有限集合

- n=0时，称为空树

- 当n＞1时，有且仅有一个根结点，其余结点可分为若干互不相交的有限集合，每个集合又是一棵树，称为根结点的子树

森林：n（n≥0）个互不相交的树的集合

- n=0时，称为空森林

有序树与无序树

- 有序树：逻辑上，树中结点的各个子树从左至右是有次序的，不能交换
- 无序树：逻辑上，树中结点的各个子树从左至右是无次序的，可以交换
- **m叉树是有序树**（二叉树为有序树，左右子树不能交换）



**结点的分类：**

![default (9)](index.assets/default (9).jpg)

1. 根结点
2. 叶子结点（终端结点）：度为0的结点
3. 分支结点（非终端结点）：度不为0的结点
4. 内部节点：除了根结点和叶子结点外的结点



**结点的关系：**

- 祖先结点：从某结点开始到根结点的路径上的所有结点
- 子孙结点：以某结点为根的子树的所有结点
- 双亲结点：某结点的直接前驱（只有一个）
- 孩子结点：某结点的直接后继（可以有多个）
- 兄弟结点：拥有同一个双亲结点的结点之间互为兄弟
- 堂兄弟结点：双亲结点在同一层的结点之间互为堂兄弟结点



**结点和树的属性：**

- 结点的路径：从上至下单向的路径，有两结点之间的结点序列构成，A->G路径为(A,C)、(C,G)
- 结点的路径长度：路径上边的个数，A->G路径长度为2

- 树的路径长度：根结点到所有结点的路径长度之和

- 结点的深度（层次）：从根结点到该结点的结点数

- 结点的高度：从叶子结点（最远的叶子）到该结点的结点数

- 树的高度、深度：max{各个结点的深度}或max{各个结点的高度}

- 结点的度：该结点的分支数（出度的个数）

- 树的度：max{各个结点的度}



### 树的性质

#### 树的结点数

树的结点数=边数+1（因为除根结点外，所有结点都有且仅有一个直接前驱）

1.树的结点数 = 各个度的结点数之和

2.树的结点数 = 总度数（边数）+1

例子：度为3的树，叶子结点数为$n_{0}$，度为1的结点数为$n_{0}$，度为2的结点数为$n_{1}$，度为2的结点数为$n_{3}$，则$n_{0}、$$n_{1}、$$n_{2}$的关系为：
$$
设树的结点数为n,则\\
\begin{cases}
    n=n_{0}+n_{1}+n_{2}+n_{3}, &\text{树的结点数=各个度的结点数之和}\\
    n=0n_{0}+n_{1}+2n_{2}+3n_{3}+1,&\text{树的结点数=总度数（边数）+1}
\end{cases}
$$

#### 度为m的树

**度为m的树**：至少有一个结点的度为m

1.第i层最多有$m^{i-1}$个结点(i≥1)

2.度为m的树，高度为h，结点个数n的范围为：$[h-1+m,\frac{m^h-1}{m-1}]$

![default (10)](index.assets/default (10).jpg)

3.度为m的树，结点个数为n，高度h的范围为：$[ceil(log_{m}{[n(m-1)+1]}),n-m+1]$

![default (11)](index.assets/default (11).jpg)

#### m叉树

**m叉树**：每个结点最多有m个分支（即每个结点的度可以为0,1,2,...,m-1），可以是空树

1.第i层最多有$m^{i-1}$个结点(i≥1)

2.m叉树，高度为h，结点个数n的范围为：$[h,\frac{m^h-1}{m-1}]$

![default (12)](index.assets/default (12).jpg)

3.m叉树，结点个数为n，高度h的范围为：$[ceil(log_{m}{[n(m-1)+1]}),n]$

![default (13)](index.assets/default (13).jpg)



### 树的存储

#### 顺序存储

双亲表示法

![image-20240617045748464](index.assets/image-20240617045748464.png)

- 找双亲结点，O(1)
- 找孩子结点，O(n)，遍历整个数组

~~~c++
typedef struct{
	ElemType data;//数据域
    int parent;   //指向父节点
}PNode;

typedef struct{
	PNode nodes[MaxSize];//结点数组
    int n;  //真实结点个数
}PTree;
~~~



#### 链式存储

孩子表示法1

![image-20240617050846086](index.assets/image-20240617050846086.png)

- 按照树的度，设计指针域的个数，可能造成存储空间的浪费

~~~c++
typedef struct Node{
	ElemType data;//数据域
    struct Node *child1, // 第1个孩子指针
    			*child2, // 第2个孩子指针
    			*child3; // 第3个孩子指针
}Node;

typedef struct{
	Node nodes[MaxSize];//结点数组
    int n;              //真实结点个数
}Tree;
~~~



孩子表示法2

![image-20240617051118052](index.assets/image-20240617051118052.png)

- 找双亲结点，遍历n个链表
- 找孩子结点，遍历1个链表，方便



孩子兄弟表示法

![image-20240617051452062](index.assets/image-20240617051452062.png)



~~~c++
typedef struct CSNode {
	ElemType data; //数据域
	struct CSNode* firstChild, //指向第一个孩子结点
		* nextsibling; //指向右边第一个兄弟结点
}CSNode, *CSTree;
~~~



## 二叉树

### 二叉树的概念及性质

二叉树：各个结点最多有2个分支（即各个结点的度≤2，可以为0,1,2），可以是空树

- 二叉树是有序树，有5中基本形态

  ![image-20240617123818802](index.assets/image-20240617123818802.png)

- 度为2的树，若某结点只有一个孩子结点，该孩子结点不用区分左右次序



二叉树的结点数关系：$n_{0}=n_{2}+1$
$$
设二叉树树的结点数为n,则\\
\begin{cases}    
n=n_{0}+n_{1}+n_{2}, &\text{树的结点数=各个度的结点数之和}\\    n=0n_{0}+n_{1}+2n_{2}+1,&\text{树的结点数=总度数（边数）+1}
\end{cases}
$$
二叉树的性质：

1.第i层最多有$2^{i-1}$个结点(i≥1)

2.二叉树，高度为h，结点个数n的范围为：$[h,2^h-1]$

3.二叉树，结点个数为n，高度h的范围为：$[ceil(log_{2}{(n+1)}),n]$

4.n个结点能构成$\frac{1}{n+1}C_{2n}^{n}$中不同形态的二叉树



### 特殊的二叉树

左斜树：所有结点只有左子树

右斜树：所有结点只有右子树

<img src="./index.assets/image-20240617124948539.png" alt="image-20240617124948539" style="zoom: 67%;" />



满二叉树

<img src="./index.assets/image-20240617125235587.png" alt="image-20240617125235587" style="zoom:80%;" />

- 编号规则：自上而下、自左至右从1开始编号
- 若有双亲结点，则双亲结点的编号为$floor(\frac{i}{2})$
- 若有左孩子结点，则左孩子结点的编号为$2i$
- 若有右孩子结点，则右孩子结点的编号为$2i+1$



完全二叉树

<img src="./index.assets/image-20240617125749650.png" alt="image-20240617125749650" style="zoom:67%;" />

- 从满二叉树基础上，从序号大的结点依次删除，得到完全二叉树
- 度为1的结点数只能是1或0，且只能是左孩子
- 若有双亲结点，则双亲结点的编号为$floor(\frac{i}{2})$
  - i为偶数，双亲结点的编号为$\frac{i}{2}$，i是双亲的左孩子
  - i为奇数，双亲结点的编号为$\frac{i-1}{2}$，i是双亲的右孩子
- 若有左孩子结点（$2i<n$），则左孩子结点的编号为$2i$
- 若有右孩子结点（$2i+1<n$），则右孩子结点的编号为$2i+1$

- 若编号$i≤floor(\frac{n}{2})$，则结点i为分支结点，$i=floor(\frac{n}{2})$的结点为最后一个分支结点
- 若编号$i>floor(\frac{n}{2})$，则结点i为叶子结点
- 若结点i的度为1或0，则编号大于i的结点均为叶子结点

- 若完全二叉树的结点数n为奇数（因为满二叉树结点数$2^h-1$为奇数），则每个分支结点都有左右孩子
- 若完全二叉树的结点数n为偶数，则分支结点$floor(\frac{n}{2})$只有左孩子



例1：一颗完全二叉树的第k层（设根为第1层）有m个叶子结点，则结点个数范围为：

1.最多结点数：完全二叉树高为k+1，m个叶子结点在第k层

- 1~k层为满二叉树，结点数为$\frac{2^k-1}{2-1}$
- 第k层结点数的分布
  - 结点数：$2^{k-1}$
  - 叶子结点数：m
  - 分支结点数：第k层结点数-叶子结点数=$2^{k-1}-m$
- 第k+1层结点数：$2\times(2^{k-1}-m)$
- 1~k+1层总结点数=$\frac{2^k-1}{2-1}+2\times(2^{k-1}-m)$

2.最少结点数：完全二叉树高为k，m个叶子结点在第k层

- 1~k-1层为满二叉树，结点数为$\frac{2^{k-1}-1}{2-1}$
- 第k层结点数的分布
  - 叶子结点数：m
- 1~k层总结点数=$\frac{2^{k-1}-1}{2-1}+m$



例2：一颗完全二叉树有768个结点，则二叉树中叶子结点数为：
$$
\begin{cases}
    n_{0}+n_{1}+n_{2}+n_{3}=768, &\text{树的结点数=各个度的结点数之和}\\
    0n_{0}+n_{1}+2n_{2}+3n_{3}+1=768,&\text{树的结点数=总度数（边数）+1}
\end{cases}
$$
解得$2n_{0}+n_{1}=769$，又因为完全二叉树中$n_{1}=1或0$，舍去$n_{1}=0$（除不尽）

解得$n_{0}=384$





### 二叉树的存储

### 二叉树的遍历

### 线索二叉树

### 二叉树的应用

#### 二叉排序树、平衡二叉树

#### 哈夫曼树



## 树与森林

### 森林的概念

### 树、森林、二叉树相互转换

### 应用——并查集



# 第六章 图

## 图的概念

## 图的存储

## 图的遍历

## 图的应用

### 最小生成树

### 最短路径

### 拓扑排序

### 关键路径



# 第七章 查找

## 查找的概念

## 顺序查找、折半查找、分块查找

## 二叉搜索树、平衡二叉树

## B、B+、红黑树

## 散列(Hash)表



# 第八章 排序

## 排序的概念

## 插入类排序

## 交换类排序

## 选择类排序

## 二路归并排序、基数排序

## 外部排序
