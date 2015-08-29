var AmountBox = React.createClass({
    render: function () {
        /*
         @todo: wait for es6;
         */
        var type = "panel panel-" + this.props.type;
        return (<div className="col-md-4">
            <div className={type}>
                <div className="panel-heading">
                    {this.props.text}
                </div>
                <div className="panel-body">
                    {amountFormat(this.props.amount)}
                </div>
            </div>
        </div>);
    }
});
