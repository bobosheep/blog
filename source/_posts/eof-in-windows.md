---
title: Windows 特別的 EOF：^Z <0x1A>
date: 2019-11-13 17:19:29
tags:
	- C
	- Programming
categories:
	- 程式
	- C
keywords: c, EOF, 0x1A, windows
---

# Windows 中神奇的字元 :  ^Z (替換) 

在 windows 10 系統中寫 C 程式，真的蠻容易踩雷的。某堂課的作業要處理一個 `2 GB` 的文字資料，但內容並非純文字，有許多跳脫字元，想說用 `fgets` 或是 `fscanf` 應該就可以了，結果處理檔案就一直有問題，資料少很多，想說會不會我不想小心哪裡寫錯了(那時有一陣子沒寫 C code) ，不過我還是先去完成作業的其他部分再來處理這個 。

作業大致完成後，我首先覺得可能是資料有不乾淨的字元所導致的問題，跟同學討論了一下覺得先處理一些跳脫字元以及非法 Unicode。處理完後，問題依舊還在，然後我再想說不用 `fgets` 跟 `fscanf` 改用 `fread` 會不會就解決了呢？事實發現部會，問題還是在。最後我跟我同學決定把有問題的地方 `printf` 出來，看看到底出問題那邊是有甚麼東西，結果發現那邊有個 ascii 碼為 `0x1A` 的字元。上網查了一下發現 Windows 竟然把它當 `EOF`！我的天啊，太誇張了。這個 Bug 不知道找了多久了，結果問題出在系統上.......

最後靠別的系統把檔案裡的所有 `0x1A` 字元都處理掉後，一切就恢復正常了。

然後自己測試了一下

1. 寫個字串裡面有 `0x1A` 的字元到檔案裡
2. 讀出來比對字元數是否一致

### 寫檔

``` c
#include <stdio.h>
int main()
{
    FILE* fptr = fopen("testEOF.txt", "w");
    int i;

    for(i = 0 ; i < 20 ; i++)
    {
        if((i + 1) % 10 == 0)
            fprintf(fptr, "%c", 0x1A);
        else fprintf(fptr, "%c", 'a');
    }

    return 0;
}
```

### 讀檔

```c
#include <stdio.h>
int main()
{
    FILE* fptr = fopen("testEOF.txt", "r");
    char c, count = 0;

    while(fscanf(fptr, "%c", &c) != EOF)
    {
        printf("[%d] %c\n", (++count),  c);

    }
    printf("Bytes: %d\n", count);

    return 0;
}
```

### 執行結果

結果真的在那個字元結束。 太神奇了~捷克

![](https://lh3.google.com/u/2/d/17uUDhOkFsFkffeIwaAEJsKdjqBhAHGeW=w1918-h952-iv1)

### 解決方法

1. 使用 binary 方式讀取檔案，即可避免
2. 把它 (`0x1A`) 處理掉

### 參考資料

1.  [windows 下getc()返回0x1A表示EOF](https://www.cnblogs.com/Donal/archive/2006/08/14/476178.html) 
2. [Why can Windows not read beyond the 0x1A (EOF) character but Unix can?](https://stackoverflow.com/questions/13582804/why-can-windows-not-read-beyond-the-0x1a-eof-character-but-unix-can)