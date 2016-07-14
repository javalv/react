var Hello = React.createClass({
    render: function () {
        return <h1> Hello {this.props.name}</h1>
    }
})

React.render(
    <Hello name="zhangsan " />,
    document.getElementById('example')
);