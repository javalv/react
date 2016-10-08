var MessageBox = React.createClass({
    getInitialState:function(){
        return {
            isVisible: true,
            //subMessages:[
            //    '我会代码搬砖',
            //    '以及花式搬砖',
            //    '不说了，工头叫我回去搬砖了。。。。。。',
            //]
            subMessages:"test"
        }
    },
    handleClick:function(){
        console.info('handleClick');
        this.setState({
            subMessages:"测试"
        })
    },
    render:function(){

        return (
            <div>
                <h1>{this.props.title}</h1>
                <Submessage messages={this.state.subMessages} />
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
});

var Submessage = React.createClass({
    propTypes:{
        messages: React.PropTypes.string.isRequired,
    },
    getDefaultProps:function(){
        return {
            messages: ['默认的子消息'],
        }
    },
    handleClick: function () {
        console.log('Submessage...');
    },
    render:function(){
        var msgs = [];
        //this.props.messages.forEach(function(msg,index){
        //    msgs.push(
        //        <p>码农说： {msg}</p>
        //    )
        //});

        return (
            <div onClick={this.handleClick}>{this.props.messages}</div>

        )
    }
});

var title = '你好世界（来自props哦）';

var messageBox = ReactDOM.render( <MessageBox title={title}/>,
    document.getElementById('app')
)
messageBox.set