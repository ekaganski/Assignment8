class DoneList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <button onClick={this.props.handleClick}>{this.props.text}</button>)
        
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.handleErase = this.handleErase.bind(this);
        this.handleAddToDone = this.handleAddToDone.bind(this);
        
    }
    handleErase(index) {

        this.props.deleteTask(index);
    }
    handleAddToDone(index){

        this.props.addTask(index);
    }

    render() {
        return (

            <ul className="list">
                {this.props.activities.map((x, i) =>
                    <tbody>
                        <tr key={i}>
                            <button  className="erase" onClick={() => this.handleErase(i)}><i class="fa fa-trash"></i></button>
                            <span><button id=" {`${x.name}  `}" onClick={() =>this.handleAddToDone(i)} className="edit"><i class="fa fa-check-circle"></i></button></span>
                            {`${x.name}  `}
                        </tr>


                    </tbody>
                )}
            </ul>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: [],
            doneActivities: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        var new_activity = {
            name: this.name.value,
        };
        this.state.activities.push(new_activity);
        this.setState({
            activities: this.state.activities,
        });
    }

    handleRemove(index) {
        console.log("removes task from list");
        console.log(index);
        var activities = this.state.activities;
        console.log(activities);
        activities.splice(index, 1);
        //update the state of activities
        this.setState({
            activities:
                this.state.activities
        });
        console.log(activities);

    }
    handleAdd(index) {
        console.log("done activities");
        event.preventDefault();
        var doneActivities = this.state.doneActivities;
        var new_doneActivity = {
            name: this.name.value,
        };
        this.state.doneActivities.push(new_doneActivity);
        this.setState({
            doneActivities: this.state.doneActivities
        });
        var endDoneAct = doneActivities;
        for(var i = 0; endDoneAct<length; i++){
            return endDoneAct[i]
        }
        console.log(doneActivities);
       
    }

    renderOptions(arr) {
        return arr.map(x => <option key={x} value={x}>{x}</option>);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2 className="header">TO DO LIST</h2>
                    <input className="todo" ref={input => this.name = input} placeholder="my new to do"></input>
                    <input type="submit" value="add"></input>
                </form>
                <List activities={this.state.activities} deleteTask={this.handleRemove} addTask={this.handleAdd} />
                <h3 style={{color: "white"}}>DONE LIST</h3>
                <div>{this.handleAdd} {App} </div>
              
            </div>
        );
    }
}

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}

render();