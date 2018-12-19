import React, {Component} from 'react';


class AddItem extends Component {
    constructor(props){
        super(props);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.state = {
            error: undefined,
        }
    }

    handleAddItem(e) {
        //1.阻止預設行為
        //2.取得值
        //3.送到父元件檢查對值做檢查
            //3.1是否已沒輸入任何東西
            //3.2是否已輸入過
        //4.設定狀態error
        //5.若3.沒有return任何error，表示新增成功

        e.preventDefault();
        
        const item = e.target.elements.new_item.value.trim();
        const error = this.props.handleAddItem(item);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.new_item.value = '';
        }   
    }

    render() {
        return(
            <div>
                <form id="addItem" onSubmit={this.handleAddItem}>
                    <input type="text" name="new_item"></input>
                    <button>Add Item</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
};

export default AddItem 