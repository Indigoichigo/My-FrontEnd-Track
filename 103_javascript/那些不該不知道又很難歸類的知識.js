/*
	學習來源
	http://huziketang.mangojuice.top/books/react/lesson32

	1.純粹函式(pure function)
		1.1一個函式返回(return)的值只依賴參數	
*/								
		//這樣有依賴外部參數a就不符合1.1的條件，因為a隨時會改變
		const a = 1;
		const total = (b) => a + b;
		total(2);
		
		//這樣total2永遠都會式3，是可預期的結果也就符合1.1的條件
		const total2 = (x, y) => x + y;
		total2(1, 2)
		



		//1.2執行過程中沒有副作用

		//內部的obj.x影響到了外部的counter.x，這就是副作用
		const a = 1;
		const foo = (obj, b) => {
			obj.x = 2;
			return obj.x + b;
		}
		const counter = { x: 1 }
		foo(counter, 2); // => 4
		counter.x; // => 2

		//這樣只在內部修改沒有影響到外部環境，是符合1.2條件的
		const foo = (b) => {
		const obj = { x: 1 }
			obj.x = 2
			return obj.x + b
		}
/*
		●純粹函式很嚴格，幾乎除了計算甚麼都不能做
		●建立這種函式是因為非常可靠，他不影響外面，外面不影響裡面
