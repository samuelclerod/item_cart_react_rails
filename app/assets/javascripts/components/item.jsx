class Item extends React.Component{
    constructor(props){
        super(props)
        this.state={
            editable: false,
            name: this.props.item.name,
            description: this.props.item.description
        }

        this.handleEdit=this.handleEdit.bind(this)
    }

    getInitial

    handleEdit() {
        if(this.state.editable) {
            let name = this.state.name;
            let id = this.props.item.id;
            let description = this.state.description;
            let item = {id: id , name: name , description: description};
            console.log('in handleEdit', item);
            this.props.handleUpdate(item);
        }
        this.setState({editable: !this.state.editable})
    }
    render(){
        let name='';
        let description = ''
        if (this.state.editable){
            name = <div class="field"><input type='text'
                             onChange={(evt)=> this.setState({name: evt.target.value})}
                             defaultValue={this.props.item.name} /></div>
            description = <div class="field"> <input type='text'
                                 onChange={(evt)=> this.setState({description: evt.target.value})}
                                                     defaultValue={this.props.item.description} /></div>
            divClass = "ui mini form"
        }else{
            name = <h3>{this.props.item.name}</h3>
            description = <p>{this.props.item.description}</p>
            divClass = ""
        }

        return(
            <div class={divClass}>
                <div class="two fields">
                    {name}
                    {description}
                    <button class="ui button" onClick={this.props.handleDelete}>Delete</button>
                    <button class="ui button" onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
                </div>
            </div>
        )
    }
}