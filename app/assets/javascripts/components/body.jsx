class Body extends React.Component{

    constructor(props){
        super(props)
        this.state = {items: []}

        //binding methods used on template
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentDidMount() {
        console.log('Component mounted')
        $.getJSON('/api/v1/items.json', (response) => {
            this.setState({items: response})
        })
    }

    handleSubmit(item) {
        console.log(item);
        var newState = this.state.items.concat(item);
        this.setState({ items: newState })
    }

    handleDelete(id) {
        $.ajax({
            url: `/api/v1/items/${id}`,
            type: 'DELETE',
            success: () => {
                this.removeItemClient(id)
            }
        })
    }

    removeItemClient(id){
        var newItems = this.state.items.filter( (item) => {
            return item.id != id
        })
        this.setState({ items: newItems })
    }

    handleUpdate(item){
        $.ajax({
            url: `/api/v1/items/${item.id}`,
            type: 'PUT',
            data: {item: item},
            success: () => {
                console.log('you did it!!!');
                this.updateItems(item);
                // callback to swap objects
            }
        })
    }

    updateItems(item) {
        let items = this.state.items.filter(i => {
            return i.id != item.id
        })
        items.push(item);
        this.setState({items: items });
    }

    render(){
        return(
            <div class="stackable grid">
                <NewItem handleSubmit={this.handleSubmit}/>
                <AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
            </div>
        )
    }
}