//(c) Patrick Rathje und Nils Ziermann
$( document ).ready(function() {
    
});

Math.clip = function(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
var f = "";
var num_variables = 1;
$( "form" ).submit(function( event ) {
 
 f = $( "input:eq(0)" ).val();
  num_variables = Math.clip(parseInt($( "input:eq(1)" ).val()), 0, 26);
 calcf();

  event.preventDefault();
});

var characters = "abcdefghijklmnopqrstuvwxyz";

function createMinTerm(vars)
{
	var s =""; //"(";
	for(var i= 0; i < vars.length; ++i)
	{
		if(vars[i] > 0)
			s+= characters.charAt(i);
		else
			s+= "~" + characters.charAt(i);
		if(i < vars.length-1)
		s += "&";
	}
	//s += ")";
	return s;

}
function calcf() {



var temp = f;
var variables = [];
var tempVariable = 0;
var minTerms = [];
for(var i= num_variables; i > 0; --i)
{
	variables.push(tempVariable);
}

$("#table-01").empty();
var s = "<caption>Wertetabelle</caption><tr><thead>";

for(var i= 0; i < variables.length; ++i)
{
	s+= "<th>" + characters.charAt(i) + "</th>";
}

$('#table-01').append(s+"<th>f</th></thead></tr>");
var max = Math.pow(2, num_variables);
$('#table-01').append( "<tbody>");
for(var row = 0; row < max; ++row)
{


	s = "<tr>";
	for(var i= 0; i < variables.length; ++i)
	{
			s+="<td>" + variables[i] + "</td>";
	
	}
	temp = f;	
	for(var i= 0; i < variables.length; ++i)
	{
		temp=temp.replace(new RegExp(characters.charAt(i),"gim"), variables[i]);
	}
		
	
	var out = Math.clip(parseInt(eval(temp)), 0, 1);
	if(out == 1)
		minTerms.push(createMinTerm(variables));
	$('#table-01').append( s + "<td>" + out + "</td></tr>");
	for(var i= variables.length-1; i >= 0; --i)
	{
			variables[i]++;
			if(variables[i] > 1)
			{
				variables[i] = 0;
			}
			else
				break;
	}
}
$('#table-01').append( "</tbody>");


s = "f=";
for(var i= 0; i < minTerms.length; ++i)
	{
			s+=minTerms[i];
			if(i < minTerms.length-1)
			s += "|";	
	}
	
	$('#minterm').html(s);
}