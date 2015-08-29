var RecordForm = React.createClass({
    getInitialState: function () {
        return {
            title: '',
            date: '',
            amount: ''
        };
    },
    handlerChange: function (e) {
        var name = e.target.name,
            data = {};
        data[name] = e.target.value;
        this.setState(data);
    },
    handlerSubmit: function (e) {
        e.preventDefault();
        var ajax = $.ajax({
            url: "",
            method: "post",
            data: {
                record: this.state
            },
            dataType: "json",
            context: this
        });
        ajax.done(function (data) {
            this.props.handleNewRecord(data);
            this.setState(this.getInitialState());
        });
    },
    valid: function () {
        return this.state.title && this.state.date && this.state.amount;
    },
    render: function () {
        return (
            <form className="form-inline" onSubmit={this.handlerSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Date" name="date" value={this.state.date}
                           onChange={this.handlerChange}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Title" name="title"
                           value={this.state.title} onChange={this.handlerChange}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Amount" name="amount"
                           value={this.state.amount} onChange={this.handlerChange}/>
                </div>
                <button className="btn btn-primary" disabled={!this.valid()}>Create record</button>
            </form>
        );
    }
});
