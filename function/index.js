function myFunction() {
	alert("I am an alert box!");
}

var panes = ['Home', 'FindConnections', 'ChatHistory', 'Settings'];
var currentPane = 'Home';
$('.pane_change[pane-link=FindConnections]').hide();
$('.pane_change[pane-link=ChatHistory]').hide();
$('.pane_change[pane-link=Settings]').hide();

function showHome(){
	$('.pane_change[pane-link=FindConnections]').hide();
	$('.pane_change[pane-link=ChatHistory]').hide();
	$('.pane_change[pane-link=Settings]').hide();
	$('.pane_change[pane-link=Home]').show();

	// $('.pane_change[pane-link=Home]').fadeIn({
 //      width: '200px'
 //    }, 300);
}
function showFindConnections(){
	$('.pane_change[pane-link=Home]').hide();
	$('.pane_change[pane-link=ChatHistory]').hide();
	$('.pane_change[pane-link=Settings]').hide();
	$('.pane_change[pane-link=FindConnections]').show();
	// .fadeIn({
 //      width: '200px'
 //    }, 300);
}
function showChatHistory(){
	$('.pane_change[pane-link=Home]').hide();
	$('.pane_change[pane-link=FindConnections]').hide();
	$('.pane_change[pane-link=Settings]').hide();
	$('.pane_change[pane-link=ChatHistory]').show();
	// fadeIn({
 //      width: '200px'
 //    }, 300);
}
function shwoSettings(){

}