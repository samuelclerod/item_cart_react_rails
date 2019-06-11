class NewItem extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: '',
            description: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: {item: this.state },
            success: (item) => {
                this.props.handleSubmit(item)
            }
        })

    }

    render() {
        return (
            <div class="ui segment mini form">
                <div class=" two fields">
                    <div class="field">
                        <input type='text' name="name"
                               onChange={(evt)=> this.setState({name: evt.target.value})}
                               placeholder='item name'/>
                    </div>
                    <div class="field">
                        <input type='text' name="description"
                           onChange={(evt)=> this.setState({description: evt.target.value})}
                           placeholder='item description'/>
                    </div>

                    <button class="ui button" onClick={this.handleClick}>Submit</button>
                </div>
            </div>
        )
    }
}

