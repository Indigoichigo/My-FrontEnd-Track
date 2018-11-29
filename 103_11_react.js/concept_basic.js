/*
	零零碎碎的觀念整合

	學習來源
	https://blog.gtwang.org/web-development/react-hello-world-tutorial/
	
*/


/*
	1.React有兩種方式可以當組件
		1.1用function
			通常用在比較單純的東西
		2.1用class

		範例檔案：two_render_ways.js
*/

/*
	2.標籤的大小寫的區分
		2.1React會將所有小寫開頭視為DOM標籤
			eg.<div />
		2.2大寫視為組件
			eg.<Hello />
*/

/*
	3.建構子constructor
		裏頭會有屬性和狀態
			1.super(props)
			2.this.state
*/


//  4.state不可直接指定
		//錯誤寫法
			this.state.comment = 'Hello';
		//正確寫法
			this.setState({comment: 'Hello';});

		//且更改時是用物件的方式!!

//  5.state的更新是非同步的
		//錯誤寫法
			this.setState({counter: this.state.counter + this.props.increment});
		//正確寫法
			this.setState((prevState.counter, props) => ({
				counter: prevState.counter + props.increment
				})
			)
			//或
			this.setState(function(prevState.counter, props) {
				return {
					counter:prevState.counter + props.increment
				};
			});

/*  6.資料向下流動原則
		6.1組件中state只有組件本身可以存取，其餘不管是父組件或子組件都無法直接得知其內容
		6.2state可以傳給下方的子組件，但不可向上
*/
