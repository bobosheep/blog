---
title: 【入門】C 語言教學
date: 2019-10-03 21:44:42
tags: 
	- C
	- learning
	- programming
categories:
	- 教學
	- 程式
keywords: hello world, c, input, output, variable
cover: https://masterprograming.com/wp-content/uploads/2019/03/c-programming-e1536069688313.png
---

# Hello world

先從最簡單的 C 程式碼說起

```c
#include <stdio.h>

int main()
{
    printf("Hello World!");
    return 0;
}
```

此程式碼分成兩個部分

* 引入的函式庫 `#include <stdio.h>`
* 主程式 `int main() { ... }`

`main()` 是 C 語言程式的一個進入點，每一個可執行的 C 程式都會有一個 main 函式，而後面的小括號 ()是給函式的參數 ( parameters )，此處先不給參數。下面由一對大括號 { } 包起來的程式碼則是 main 函數的程式主體。

printf()為系統提供的輸出函式，可將**雙引號**內的字串 (string) 顯示在螢幕上，也就是把 Hello World! 印出來，為了要調用此函式讓我們做輸出，需要把先前偉人寫好的 code include 進來，所以在第一行加入 `#include <stdio.h>`。

`main`() 前面的 `int` 代表 main 函數的執行結果要以**「整數」(Integer)** 傳回給呼叫它的程式， 而程式主體中
的 `return 0;` 代表程式將結果 0 傳回，請注意程式主體的每一行敘述必須以分號 ; 做為結束。

把程式編譯執行後就會再螢幕視窗裡顯示 Hello World! 喔，**是不是很簡單呢?**





# Variable 變數

我們學會了把字串輸出到螢幕上後，接著就是要學如何儲存我們程式執行時的資料，這時我們就需要**變數**來儲存。 變數是程式在執行時，把所需的資料放在記憶體 (memory) 中，並以變數的名稱當作標記，當需要時把資料取出來使用。



怎樣算是一個變數呢？

`int var;	// int 型態的變數，名為 var`

這樣就算是宣告了一個名為 var 的變數，儲存方式是以 int 型態 (integer, 整數) 做儲存。如果改成以下宣告方式的話:

`int var = 5; 	// int 型態的變數，名為 var，初始值為 5`

就多了一個初始化的步驟，把變數宣告時給定一個數值。

所以宣告一個變數只要給它一個它的**資料型態 (data type)** 以及**變數名稱**就可以囉 ！



以下就是一個範例程式 :

```c
#include <stdio.h>

int main()
{
    int num1, num2 = 5;
    printf("num1 is an uninitialized variable.\n");
    printf("num2 is an initialized vaiable and its value is %d.\n", num2);
    
    return 0;
}
```

可以試著編譯執行看看，輸出結果會如下:

> num1 is an uninitialized variable.
>
> num2 is an initialized variable and its value is 5.



這邊先解釋一下第二個 printf 雙引號中的 **%d** 為一個引數，是把字串後的其他**引數 (arguement) 值** (也就是num2 的值) 5 給塞進去並以 **10 進位 ( decimal)** 的方式顯示。可以參考[附錄](#附錄)





# Input & Output

現在已經大概了解程式在做甚麼了，我們來跟電腦做點小互動吧！

前面我們已經學會怎麼把東西輸出出來，也了解怎麼儲存一些資料，現在要介紹的是如何透過鍵盤把數字輸入給電腦，並做一些簡單的操作，把我們想要的東西顯示出來。

首先，我們需要 <stdio.h> 函式庫裡的 `scanf()` 讓我們做輸入的動作。

```c
#include <stdio.h>

int main()
{
    int num;
    scanf("%d", &num);					//輸入一個數字
    printf("num is %d.\n", num);		//輸出剛剛輸入數字的值
    return 0;
}
```

以上程式碼就是一個簡單的輸入輸出。程式執行時，會先等待使用者輸入一個整數；輸入結束後會顯示 `num is [剛剛輸入的值]` 。
你會發現，`scanf()` 的參數跟 `printf()` 其實很像，會先有個字串，然後再來是放一些變數。`scanf` 的字串表示要輸入的格式，此範例程式表示需要輸入一個整數，並以 `num` 這個變數做儲存。



問題來了，為什麼 `num`變數前面會多一個 `&` 呢​？​ 
`&`　在變數前面的話表示取該變數的記憶體位址，而 `scanf()` 要把輸入的值傳到變數儲存的地方，所以需要變數的記憶體位址。

好，那我們現在來寫一個程式，讓使用者輸入兩個整數，並把兩數字相加後做輸出。

```c
#include <stdio.h>

int main()
{
    int num1, num2, sum;
    
    printf("請輸入兩個數字:");
    scanf("%d%d", &num1, &num2);
    
    sum = num1 + num2;
    printf("結果為 %d + %d = %d\n", num1, num2, sum);
	
    return 0;    
}
```

程式編譯執行，並且輸入 5 和 6 的話：

> 請輸入兩個數字: 5 6
> 結果為 5 + 6 = 11

是不是不難呢？ ：）
可以自己參考附錄練習輸入兩個浮點數，輸入完後輸出它的四則運算。

恭喜，完成入門篇囉！



# 附錄

## 資料型態 Data type

|     型態      |                    數值範圍                    | 大小 (Size) |
| :-----------: | :--------------------------------------------: | :---------: |
|      int      |              -(2^31) ~ (2^31 - 1)              |   4 Byte    |
|   long int    | -(2^31) ~ (2^31 - 1)<br />-(2^63) ~ (2^63 - 1) | 4 or 8 Byte |
| long long int |              -(2^63) ~ (2^63 - 1)              |   8 Byte    |
|     float     |                 10^(-37)~10^38                 |   4 Byte    |
|    double     |                10^(-307)~10^308                |   8 Byte    |
|     char      |                    0 ~ 255                     |   1 Byte    |



## printf 字串裡的引數表示型態 

| printf 引數 |    表示型態    |
| :---------: | :------------: |
|     %d      |   int (整數)   |
|     %ld     |    long int    |
|    %lld     | long long int  |
|     %f      | float (浮點數) |
|     %lf     |     double     |
|     %c      |   char 字元    |
|     %s      | char * (字串)  |
|     %x      |  int (16進位)  |

