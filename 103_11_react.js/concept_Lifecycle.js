/*
	零零碎碎的觀念整合

	學習來源
	https://ithelp.ithome.com.tw/articles/10185194
	http://andyyou.logdown.com/posts/370308
	
*/
/*
	1.每個component都是繼承React.Component來的
*/

/*
	2.每個component除了一定會有render方法外，還有一些生命週期的方法
*/

/*
	3.component三種與生命週期有關的描述
		依照時間Mounting→Updating→Unmounting
		
		3.1 Mounting
			當component被掛載到DOM上時

			詳細看4.

		3.2 Updating
			當component的props或state被改變時，re-render

			詳細看5.
		
		3.3 Unmounting
			當component將從DOM上ˋ被移除時

			詳細看6.
*/

/*
4.Mounting method
	4.1 render()
		4.1.1每次props或state被改變時執行
		
		4.1.2每個componenet必定要寫的，可回傳一個html tag(小寫)或是user-defined component(大寫)
			若不回傳elemenet可回傳 null或false

		4.1.3 The render function should be pure
			不要再render中改變state，也就是不要用setState
			在這邊調用會讓顯示不正確且變得複雜難懂

	4.2 constructor(props)
		4.2.1會在mount之前先執行一次 
									*/
			constructor(props) {
				super(props);
				this.state = {
					total: 0,
					price: 100,
				}

			}
		/*
		4.2.2 若沒有props可以只寫super()
		
	4.3 componentWillMount()
		4.3.1component將要被mount上畫面時，會發生在第一次render前

		4.3.2在這裡設定的state不會被re-render
	
		(murmur:比較沒屁用的)

	4.4 componentDidMount()
		4.4.1掛載到DOM上之後執行，適合做與dom有關的初始化
			eg1.i18n的localize(murmur:還不知這甚麼鬼)
			eg2.Ajax
			eg3.addEventListener

	執行順序 constructor() → componentWillMount() → render() → componentDidMount()
													不要用setState()
							

5.Updating method
	5.1 componentWillReceiveProps(nextProps)
		5.1.1父component更新後，會接收新的props，如果state會根據props改變，可以在這裡setState
																					*/
		componentWillReceiveProps(nextProps) {
			if (this.props.initialColor !=== nextProps.initialColor ) {
				this.setState = ({
					color: props.initialColor
				});
			}
		}
		/*
	
	5.2 shouldComponentUpdate(nextProps, nextState)
		5.2.1接收到新的props和state會return是否要re-render的boolean(default TRUE)

		5.2.2不會在第一次render()和forceUpdate()被執行

		5.2.3若return false，後面的componentWillUpdate()、render()、componentDidUpdate()也不會執行

		5.2.4因為不希望做不必要的re-render，React還提供React.PureComponent方法，通常用於提升效能
			5.2.4.2React.PureComponent只提供shallow comparison(murmur:還不知這甚麼鬼)

	5.3 componentWillUpdate(nextProps, nextState)
		5.3.1接收到新的props和state會執行，shouldComponentUpdate()若return false則不執行

		5.3.2在這不可做setState，要在componentWillReceiveProps()中使用

	5.4 componentDidUpdate(preProps, prevState)
		5.4.1第一次render不會觸發，只有update後才會

		5.4.2在這可以根據被更新的props或state需求做變化

	執行順序 componentWillReceiveveProps() → shouldComponentUpdate() → componentWillUpdate() → render() → componentDidUpdate() 
											若return false，停在這
											不要用setState()				不要用setState()			不要用setState()

6.Unmounting method
	6.1componentWillUnmount()
		6.1.1將從DOM被卸載前執行

		6.1.2若component中有setInterval、addEventListener等時，在componentDidMount()被設定，
		就需要在這clearInterval, removeEventListener

7.其他兩個方法，跟生命周期較無關，但與render有關
	7.1 this.setState(nextState, callback)
		7.1.1第一個參數
						*/

			this.setState({ name: 'Harry Potter'});
			
			//第一次個參數也可以設function，通常是根據目前props設定state會用到

			this.setState( () => {
				return {Total: preState.price + props.currentPrice};
			})

		/*
		7.1.2第二個callback參數
			7.1.2.1當第一個參數更新完成且re-render之後執行
			
			7.1.2.2通常建議寫在componentDidUpdate()中

	7.2 component.forceUpdate(callback)
		7.2.1component通常會依據props和state來re-render，但如果有依賴其他data來render，
		可以跳過shouldComponentUpdate()直接re-render

		7.2.2避免使用這個method，component越pure越好!

8.不要使用setState()的地方
	●render()
	●shouldComponentUpdate()
	●componentWillUpdate()
	●componentWillUnmount()

9.其他要點
	9.1在複合式元件下，子元件的生命週期從父元件render之後開始發動
	
	9.2一旦父元件發生改變，子元件的componentWillReceiveProps就是會觸發。

	9.3也就是每次父元件更新，子元件都會重新渲染(Update流程)

