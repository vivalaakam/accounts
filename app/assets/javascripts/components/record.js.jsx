var Record = React.createClass({
    getInitialState: function () {
        return {
            edit: false
        };
    },
    handleToggle: function (e) {
        e.preventDefault();
        this.setState({
            edit: !this.state.edit
        });
    },
    handleDelete: function (e) {
        e.preventDefault();
        /*
         @todo: wait for es6;
         */
        var ajax = $.ajax({
            method: "delete",
            url: "/records/" + this.props.record.id,
            dataType: "json",
            context: this,
            success: function () {
                this.props.handleDeleteRecord(this.props.record);
            }
        });
    },
    handleEdit: function (e) {
        e.preventDefault();
        var data = {
                title: React.findDOMNode(this.refs.title).value,
                date: React.findDOMNode(this.refs.date).value,
                amount: React.findDOMNode(this.refs.amount).value
            },
            ajax = $.ajax({
                method: "put",
                url: "/records/" + this.props.record.id,
                dataType: "json",
                data: {
                    record: data
                },
                context: this,
                success: function (data) {
                    this.setState({edit: false});
                    this.props.handleEditRecord(this.props.record, data);
                }
            });

    },
    recordForm: function () {
        return (<tr>
            <td>
                <input type="text" className="form-control" defaultValue={this.props.record.date} ref="date"/>
            </td>
            <td>
                <input type="text" className="form-control" defaultValue={this.props.record.title} ref="title"/>
            </td>
            <td>
                <input type="text" className="form-control" defaultValue={this.props.record.amount} ref="amount"/>
            </td>
            <td>
                <button className="btn btn-danger" onClick={this.handleEdit}>
                    Update
                </button>
                <button className="btn btn-danger" onClick={this.handleToggle}>
                    Cancel
                </button>
            </td>
        </tr>);
    },
    recordRow: function () {
        return (<tr>
            <td>{this.props.record.date}</td>
            <td>{this.props.record.title}</td>
            <td>{this.props.record.amount}</td>
            <td>
                <button className="btn btn-danger" onClick={this.handleToggle}>
                    Edit
                </button>
                <button className="btn btn-danger" onClick={this.handleToggle}>
                    Delete
                </button>
            </td>
        </tr>);

    },
    render: function () {
        return this.state.edit ? this.recordForm() : this.recordRow();
    }
});
