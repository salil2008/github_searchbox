
var React = require('react');

module.exports = TweetsApp = React.createClass({

  // getInitialState: function(props){
  //   console.log("getInitialState");
  //   props = props || this.props;
  //
  //   return {
  //     tweets: props.start
  //   };
  //
  // },
  //
  // componentWillReceiveProps: function(newProps, oldProps){
  //   console.log("componentWillReceiveProps");
  //   this.setState(this.getInitialState(newProps));
  // },

  componentDidMount: function(){
    console.log("componentDidMount");
    var self = this;

  },

  render: function(){

    return (
      <div className="tweets-app">
        <h2>Hello React </h2>
      </div>
    )

  }

});
