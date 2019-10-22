---
title: 【基礎篇】C 語言教學
date: 2019-10-11 23:18:48
tags: 
	- C
	- learning
	- programming
categories:
	- 教學
	- 程式
keywords: if, else , else if, switch

cover: https://masterprograming.com/wp-content/uploads/2019/03/c-programming-e1536069688313.png

---

# 條件判斷 

## if else

> 如果 ( if ) 能重來，我要當天才。可惜沒如果 ( else)。

if else 在程式裡是非常常見的語法。寫程式通常都在解決遇到的問題，而對於問題我們就要去判斷說甚麼時候要做甚麼事等等，所以 if else 是非常重要滴，而用法非常簡單。

```c
if(判斷)
{
    //成立的話
    // <-這是註解的意思 
    Do something
}
else
{
    //判斷不成立的話
    Do something
}
```

簡單吧！這樣你又學會如何使用了。那出個簡單的題目: 輸入兩個數字，輸出比較大的那個數字。

```c
#include <stdio.h>

int main()
{
    int a, b;
    scanf("%d%d", &a, &b);
    if(a > b)
    {
        printf("%d 比較大\n", a);
    }
    else
    {
        printf("%d 比較大\n", b);
    }
    return 0;
}
```

但是當我們要判斷更多的時候呢？這時候 if 跟 else 中間可以加個 else if 喔 ！
假如我們的題目改成: 輸入兩個數 `a` `b`，如果兩個數一樣就輸出`a == b`；`a > b` 的話，輸出 `a > b`； `a < b` 的話輸出 `a < b`。

```c
#include <stdio.h>

int main()
{
    int a, b;
    scanf("%d%d", &a, &b);
    if(a == b)
    {
        printf("a == b\n");
    }
    else if(a > b)
    {
        printf("a > b\n");
    }
    else
    {
        printf("a < b\n");
    }
    return 0;
}
```

是不是對程式又更進一步了解了呢？

## Switch

> ​	我想買一台 switch...

下面大概介紹一下 switch 的語法:

```c
switch (變數名稱或運算式)
{
     case 符合數字或字元:
         Do something;
         break;
     case 符合數字或字元:
         Do something;
         break;
     default:
         Do something;
}
```

switch 會根據後面括號裡的變數值或是判斷式，符合下列 case 的情況去做。那為什麼會需要加 break 呢 ? 因為假如沒有加 break 的話，它會繼續往下執行喔，要注意！ 

舉個例子: 

```c
#include <stdio.h>

int main()
{
    int number;
    scanf("%d", &number);
    switch(number)
    {
        case 1:
            printf("The number is 1\n");
           	break;
        case 2:
            printf("The number is 2\n");
            break;
        case 3:
            printf("The number is 3\n");
            break;
        default:
            printf("The number is not 1, 2, and 3.\n");
            break;
    }
    return 0;
}
```

程式執行會如下:

輸入 `1` 輸出 `The number is 1`
輸入 `3` 輸出 `The number is 3`
輸入 `10` 輸出 `The number is not 1, 2, and3.`

但如果沒有家 `break` 會發生甚麼事呢？

```c
#include <stdio.h>

int main()
{
    int number;
    scanf("%d", &number);
    switch(number)
    {
        case 1:
            printf("The number is 1\n");
        case 2:
            printf("The number is 2\n");
        case 3:
            printf("The number is 3\n");
        default:
            printf("The number is not 1, 2, and 3.\n");
    }
    return 0;
}
```

那程式執行會如下:

輸入 `1` 輸出 `The number is 1`
					  `The number is 2`
					  `The number is 3`
					  `The number is not 1, 2, and 3.`
輸入 `3` 輸出 `The number is 3`
					  `The number is not 1, 2, and 3.`
輸入 `10` 輸出 `The number is not 1, 2, and3.`

有沒有發現程式跟預期的不太一樣，因為 `switch` 只要 `case` 符合就會一直往下執行直到  `break` 或是 `switch` 的程式區塊結束。

條件判斷的部分就先講到這裡！
看可不可以自己寫出一個閏年判斷程式！

# 迴圈

## while

>  當你的眼睛 瞇著笑 當你喝可樂 當你吵  		-- 林俊傑 《當你》

while 顧名思義就是當甚麼事情成立的時候就做事情，可以重複做一件事情，簡單語法如下:

```c
while(判斷式)
{
    //判斷式成立執行以下程式碼
    Do something
}
```

甚麼事後會用到 while 呢？
當你想重複做一件事情時！

假如我們想讓程式可以一直輸入 2 個數字並輸出相加的結果，程式碼如下：

```c
#include <stdio.h>

int main()
{
    int x, y;
    while(scanf("%d%d", &x, &y) != EOF)
    {
        printf("%d + %d = %d\n", x , y, x + y);
    }
    
    return 0;
}
```

說明一下：

> scanf 的函式會回傳輸入的個數，例如上方程式碼每當書如兩個數字 scanf 就會回傳 2 。
> EOF 的意思代表 end of file，這個代表已經到檔案結尾了，數值為 -1。自己在測試執行時按下 ctrl + c 讓程式中止。

假如你還不會 while 迴圈的話，你可能就是下面這種 code 然後執行完再重新執行，自己都要被自己累死。

```c
#include <stdio.h>

int main()
{
    int x, y;
    scanf("%d%d", &x, &y);
    printf("%d + %d = %d\n", x , y, x + y);
        
    return 0;
}
```

所以是不是又學到一招好用的招式了呢？

## for

> 就只為了你

`for` 跟 `while` 很像，不過它 `while` 多了兩個欄位，可以方便做一些處理，語法如下:

```c
for(初始化變數 ; 判斷式 ; 每執行完一次迴圈做的事情)
{
    //判斷式成立執行以下程式碼
    Do something;
}
```

因為 `for` 比 `while` 多了 前後兩個欄位，很方便處理計數的部分。假如輸入一個 N 我要把 1 到 N 的數字顯示出來，這時 `for` 就很好用了。

```c
#include <stdio.h>

int main()
{
    int N, i;
    scanf("%d", &N);
    for(i = 1 ; i <= N ; i++)
    {
        printf("%d ", i);
    }
    
    return 0;
}
```

> 假如輸入 `10` 則會顯示 `1 2 3 4 5 6 7 8 9 10 `
>
> `i = 1` 為變數初始化的部分， `i <= N` 為判斷式， `i++` 則是每次迴圈做完就把 `i` 的值做加一。

這邊就先恭喜你都學會 C 基本的語法了，可以自己多練練。

程式解題網站:

* [高中生程式解題系統]( https://zerojudge.tw/ )
* [HackerRank]( https://www.hackerrank.com/domains/c )
* [codeforces]( https://codeforces.com/ ) (會定期舉行競賽，不過時間通常都在台灣的半夜QQ)
* [LeetCode]( https://leetcode.com/?cong=true ) (很多公司會看?)

如果一開始解題有問題歡迎寄信問我，或者再下方留言！