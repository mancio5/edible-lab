var tags = [];
var active_tags = [];
//// QUOTES /////////////////////////////////////////////////////////
function  get_quotes_from_tags(t){
	result_quotes = [];
	for(var j =0; j < quotes_db.length; j++){
		q = quotes_db[j];
		c = 0;
		for(var i =0; i < t.length; i++){
			if(q.tags.indexOf(t)<0){
				break;
			}else{
				c++;
			}
		}
		if(c == t.length){
			result_quotes.push(q);
		}
	}
	console.log(result_quotes)
	return result_quotes;
}

function print_quotes(quotes){
	var html =``;
	for(var i =0; i< quotes.length;i++){
		q = quotes[i];
		html+=`
			<div class="quote">
				<h4 class="capitalize">"`+q.quote+`"</h4>
				<p class="author capitalize"><i> -- `+q.author+`</i></p>
				<p class="tags">`+q.tags+`</p>
			</div>
		`;
	}
	return html;
}
//// TAGS /////////////////////////////////////////////////////////
function print_tags(t){
	var html =``;
	for(var i =0; i< t.length;i++){
		tag = t[i];
		html+=`<span class="tag" value="`+tag+`">`+tag+`</span>`
	}
	return html;
}

function get_unique_tags(t){
	tags = [];
	for(var i =0; i< t.length;i++){
		a = t[i];
		//console.log(t);
		c =0;
		for(var x=0;x<tags.length;x++){
			b = tags[x];
			if(a==b){
				c++;
			}
		}
		if(c==0){
			tags.push(a)
		}
	}
	return tags;
}
///// CLEAN FORMAT //////////////////////
function clean_string(s){
	//remove beginning space 
	s = s.replace(/ ,/g, ",");
	s = s.replace(/, /g, ",");
	s = s.replace(/,,/g, ",");
	return s;
}
function clean_tag(a){
	//remove beginning space 
	if(a[0]==" "){
		a = a.slice(1, a.length);
	}
	a = a.replace(" ,", ",");
	a = a.replace(", ", ",");
	//remove end space 
	if(a[a.length-1]==" "){
		a = a.slice(0, a.length-2);
	}
	return a;
}

//////////////////////////
function getURLParameter(name) {
   return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
function array_to_string(array){
	// array = ["shoes","t-shirt","trousers"]
	s = "";
	for(var i =0; i< array.length;i++){
		t = array[i];
		
		if(t!="" && t!=null && t!=undefined && t!=" " && t!=","){
			if(i< array.length-1){
				s += t+",";
			}
			else{
				s += t;
			}
		}
	}
	s = clean_string(s);
	//  s = "shoes,t-shirt,trousers"
	return s;
}

function string_to_array(string){
	//  s = "shoes,t-shirt,trousers"
	s = string.split(",");
	for(var i =0;i<s.length;i++){
		s[i] = clean_tag(s[i]);
	}
	// array = ["shoes","t-shirt","trousers"]
	return s;
}









