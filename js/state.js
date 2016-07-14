var InputState = React.createClass({
    getInitialState: function () {
        return {
            enable: true,
            color: "red",
            height: "100px",
            class:{color: "red"}
        };
    },
    handleClick: function () {
        this.setState({
            enable: !this.state.enable,
            height: "200px",
            class:{color: "blue"}
        });

    },
    render: function () {

        return (
            <div>
                <input type="text" disabled={this.state.enable}/>
                <button onClick={this.handleClick} height={this.state.height} style={this.state.class}>changeState</button>
            </div>
        )
    }
});

React.render(
    <InputState />,
    document.getElementById("inputState")
)