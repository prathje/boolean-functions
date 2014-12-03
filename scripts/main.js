//(c) Patrick Rathje und Nils Ziermann
$( document ).ready(function() {
    
});

Math.clip = function(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
var f = "";
var num_variables = 1;
var kv_rows = 0;
var kv_columns = 0;
var kv = new kvTabelle({rows: 4, columns: 2, KVCells: [0,0,0,0,1,1,1,1]});
var kvView = new kvTabelleView({model: kv});
kvView.render();
$( "form" ).submit(function( event ) {
 
 f = $( "input:eq(0)" ).val();
  num_variables = Math.clip(parseInt($( "input:eq(1)" ).val()), 0, 26);
 //calcf();
	if(num_variables%2 == 0)
	{
		kv_columns = Math.sqrt(Math.pow(2, num_variables));
		kv_rows = Math.sqrt(Math.pow(2, num_variables));
	}
	else
	{
		kv_columns = Math.sqrt(Math.pow(2, num_variables-1));
		kv_rows = Math.sqrt(Math.pow(2, num_variables+1));
	}
  event.preventDefault();
});

var characters = "abcdefghijklmnopqrstuvwxyz";

function getMintermsFromKV()
{
	var terms = [];
	for(var i = 0; i < Math.pow(2, num_variables); ++i)
	{
		var cell = document.getElementById(i);
		if(cell.value == 1)
		{
			terms.push(document.getElementById("top"+(i%rows)) + "&" + document.getElementById("side" + ((i-(i%rows))/rows))); 
		}
	}
}

function createMinTerm(vars)
{
	var s =""; //"(";
	for(var i= 0; i < vars.length; ++i)
	{
		if(vars[i] > 0)
			s+= characters.charAt(i);
		else
			s+= "!" + characters.charAt(i);
		if(i < vars.length-1)
		s += "&";
	}
	//s += ")";
	return s;
}

function createMaxTerm(vars)
{
	var s ="("; //"(";
	for(var i= 0; i < vars.length; ++i)
	{
		if(vars[i] == 0)
			s+= characters.charAt(i);
		else
			s+= "!" + characters.charAt(i);
		if(i < vars.length-1)
		s += "|";
		else
		s += ")";
	}
	//s += ")";
	return s;
}

/** Function count the occurrences of substring in a string;
 * @param {String} string   Required. The string;
 * @param {String} subString    Required. The string to search for;
 * @param {Boolean} allowOverlapping    Optional. Default: false;
 */
function StringOccurrences(string, subString, allowOverlapping){

    string+=""; subString+="";
    if(subString.length<=0) return string.length+1;

    var n=0, pos=0;
    var step=(allowOverlapping)?(1):(subString.length);

    while(true){
        pos=string.indexOf(subString,pos);
        if(pos>=0){ n++; pos+=step; } else break;
    }
    return(n);
}

function minimizeMinTerms(minTerms)
{
	
	var s = "DMF: f=";
	var arr = McCluskeyIter(minTerms);
	for(var i= 0; i < arr.length; ++i)
	{
			s+= arr[i];
		
		if(i < arr.length-1)
		s += "|";
	}	
	return s;
	
}


function DeleteCharsFromString(str, start, len)
{
return (str.substring(0, start) + str.substring(start+len, str.length));
}
function McCluskeyIter(minTerms)
{
	var newArr = [];
	var checkArr = [];
	var changed = false;
	for( var a = 0; a < minTerms.length; ++a)
	{
		checkArr.push(false);
	}
	for( var a = 0; a < minTerms.length; ++a)
	{
		for( var b = a+1; b < minTerms.length; ++b)
		{
			
			// check if we got a match
			var diffs = 0;
			var offset = 0;
			var newTerm = minTerms[a];
			for( var i = 0; i < num_variables; ++i)
			{
				var compare_string = characters.charAt(i);
				
				var oc1 = minTerms[a].indexOf(characters.charAt(i));
				var oc2 = minTerms[b].indexOf(characters.charAt(i));
				
			
				if(oc1 != oc2  && (oc1 == -1 || oc2 == -1))
				{
					diffs = 2;
					break;
				}
				else if(oc1 == -1 && oc2 == -1)
				{
					continue;
				}
				if(oc1 - oc2 + offset == -1) //bei oc2 kommt der buchstabe eine stellespäter
				{
					++diffs;
					--offset;					
					if(oc1 == minTerms[a].length-1)
						newTerm = DeleteCharsFromString(newTerm, oc1-1, 2);
					else
						newTerm = DeleteCharsFromString(newTerm, oc1, 2);
				}
				else if(oc1-oc2 + offset == 1) // bei oc1 kommt buchstabe später
				{
					++diffs;
					++offset;
					if(oc1 == minTerms[a].length-1)
						newTerm = DeleteCharsFromString(newTerm, oc1-2, 3);
					else
						newTerm = DeleteCharsFromString(newTerm, oc1-1, 3);
				}
				else if(oc1 == oc2  + offset)
				{
					//do absolutely nothing
				}
				else
				{
				diffs = 2;
					break; }

					
			}
			if(diffs == 1)
			{
				newArr.push(newTerm);
				checkArr[a] = true;
				checkArr[b] = true;
				changed = true;
			}
			else if(diffs == 0)
			{
				newArr.push(newTerm);			
				checkArr[a] = true;
				checkArr[b] = true;
				changed = true;
			}
			else
			{
			
			
			}
		}
	}
	for( var a = 0; a < checkArr.length; ++a)
	{
		if(checkArr[a] == false)
			newArr.push(minTerms[a]);
	}
	if(changed == true)
		return McCluskeyIter(newArr);
	else
		return newArr;
}

function calcf() {



var temp = f;
var variables = [];
var tempVariable = 0;
var minTerms = [];
var maxTerms = [];
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
	{
		minTerms.push(createMinTerm(variables));
	}
	else
	{
		maxTerms.push(createMaxTerm(variables));
	}
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
s = "f=";
for(var i = 0; i < maxTerms.length; i++)
{
	s+= maxTerms[i];
	if(i < maxTerms.length - 1)
	s += "&";
}
	$('#maxterm').html(s);
	$('#dmf').html(minimizeMinTerms(minTerms));
	
}