
var React = require('react');
var $ = require('jquery');
var ResultSet = require('./result-set.react');
var SearchBox = require('./search-box.react');

module.exports = SearchApp = React.createClass({

  getInitialState: function(props){
    console.log("getInitialState");
    return {
      list: 'empty',
      remembered : ['empty']
    };

  },

  componentWillReceiveProps: function(newProps, oldProps){
    console.log("componentWillReceiveProps");
    this.setState(this.getInitialState(newProps));
  },

  componentDidMount: function(){
    console.log("componentDidMount");
    var self = this;
    //self.initiateAutocomplete();
    //className = "awesomplete" autoComplete = 'off' autoComplete = 'list'
  },

  // initiateAutocomplete : function(){
  //   var ajax = new XMLHttpRequest();
  //   ajax.open("GET", "https://api.github.com/search/users", true);
  //   ajax.onload = function() {
  //     console.log(ajax.responseText);
  //   	var list = JSON.parse(ajax.responseText).map(function(i) { return i.name; });
  //   	new Awesomplete(document.querySelector("#searchbox"),{ list: list });
  //   };
  //   ajax.send();
  // },

  makeHTTPGetRequest : function(url, successCallback){
  	$.ajax({
  	    type:'GET',
  	    url:url,
  	    datatype:'json',
  	    success: successCallback,
  	    error: function(httpRequest,status,error) {
              console.log(error);
          }
  	});
  },

  onChange : function(event){
    console.log("Changed");
    var flag = false;
    var str = document.getElementById("searchbox").value;

    console.log(str.length);

    if(str.length >= 3) {
      var successCallback = function(response){
        $( ".search-box-container" ).removeClass( "loading" )
		    console.log('Fetched')
				console.log(response)

        //this.state.remembered.concat(str)
		    this.setState({
		    	list : response.items,
          remembered : this.state.remembered.concat(str)
		    })

	    }.bind(this);

      $('#suggestlist').html('');
      this.state.remembered.forEach(function(i){
        if (i == str) {
          flag = true
        }
        $('#suggestlist').append('<option id ='+ i +'>'+i+'</option>')
      })

	    var server_url = "https://api.github.com/search/users?q="+ str +"+in:login+type:user&per_page=10";
      console.log(server_url);
      $( ".search-box-container" ).addClass( "loading" );
	    this.makeHTTPGetRequest(server_url, successCallback);
    }

  },

  render: function(){

    // var rlist = this.state.remembered
    // console.log(rlist);
    // if(rlist && rlist.length > 0){
    //   for (var i = 0; i < rlist.length; i++) {
    //     $('#suggestlist').append('<option id ='+ rlist[i] +'>'+rlist[i]+'</option>')
    //   }
    // }

    return (
      <div className="search-app">
        <h2 > Search Box </h2>
        <SearchBox change = {this.onChange} rlist = {this.state.remembered} />
        <ResultSet list = {this.state.list} />
      </div>
    )

  }

});
