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

待更新...