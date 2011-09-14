/**
 * JSONLint This bookmarklet v0.2.1 by Joss Crowcroft
 * http://www.josscrowcroft.com/2011/code/jsonlint-bookmarklet-for-inline-validation-and-reformatting/
 * 
 * Click this bookmarklet to reformat (pretty-print) and validate/debug a block of JSON code or unformatted JSON API response
 * Hit 'escape' to exit/cancel.
 * 
 * Uses JSONLint.js by Zach Carter (https://github.com/zaach/jsonlint)
 * and Simple JavaScript DOM Inspector by Joss Crowcroft (https://github.com/josscrowcroft/Simple-JavaScript-DOM-Inspector)
 * 
 * No warranty; probably won't break the internet, this time. Improvements and comments welcome!
 */
(function(document) {
	var last;

	/**
	 * JSONLint.js 1.2.0 (minified)
	 * https://github.com/zaach/jsonlint
	 */
	var jsonlint=(function(){var f={trace:function c(){},yy:{},symbols_:{error:2,JSONString:3,STRING:4,JSONNumber:5,NUMBER:6,JSONNullLiteral:7,NULL:8,JSONBooleanLiteral:9,TRUE:10,FALSE:11,JSONText:12,JSONValue:13,EOF:14,JSONObject:15,JSONArray:16,"{":17,"}":18,JSONMemberList:19,JSONMember:20,":":21,",":22,"[":23,"]":24,JSONElementList:25,"$accept":0,"$end":1},terminals_:{2:"error",4:"STRING",6:"NUMBER",8:"NULL",10:"TRUE",11:"FALSE",14:"EOF",17:"{",18:"}",21:":",22:",",23:"[",24:"]"},productions_:[0,[3,1],[5,1],[7,1],[9,1],[9,1],[12,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,2],[15,3],[20,3],[19,1],[19,3],[16,2],[16,3],[25,1],[25,3]],performAction:function b(g,j,k,n,m,i,l){var h=i.length-1;switch(m){case 1:this.$=g;break;case 2:this.$=Number(g);break;case 3:this.$=null;break;case 4:this.$=true;break;case 5:this.$=false;break;case 6:return this.$=i[h-1];break;case 13:this.$={};break;case 14:this.$=i[h-1];break;case 15:this.$=[i[h-2],i[h]];break;case 16:this.$={};this.$[i[h][0]]=i[h][1];break;case 17:this.$=i[h-2];i[h-2][i[h][0]]=i[h][1];break;case 18:this.$=[];break;case 19:this.$=i[h-1];break;case 20:this.$=[i[h]];break;case 21:this.$=i[h-2];i[h-2].push(i[h]);break}},table:[{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],12:1,13:2,15:7,16:8,17:[1,14],23:[1,15]},{1:[3]},{14:[1,16]},{14:[2,7],18:[2,7],22:[2,7],24:[2,7]},{14:[2,8],18:[2,8],22:[2,8],24:[2,8]},{14:[2,9],18:[2,9],22:[2,9],24:[2,9]},{14:[2,10],18:[2,10],22:[2,10],24:[2,10]},{14:[2,11],18:[2,11],22:[2,11],24:[2,11]},{14:[2,12],18:[2,12],22:[2,12],24:[2,12]},{14:[2,3],18:[2,3],22:[2,3],24:[2,3]},{14:[2,4],18:[2,4],22:[2,4],24:[2,4]},{14:[2,5],18:[2,5],22:[2,5],24:[2,5]},{14:[2,1],18:[2,1],21:[2,1],22:[2,1],24:[2,1]},{14:[2,2],18:[2,2],22:[2,2],24:[2,2]},{3:20,4:[1,12],18:[1,17],19:18,20:19},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:23,15:7,16:8,17:[1,14],23:[1,15],24:[1,21],25:22},{1:[2,6]},{14:[2,13],18:[2,13],22:[2,13],24:[2,13]},{18:[1,24],22:[1,25]},{18:[2,16],22:[2,16]},{21:[1,26]},{14:[2,18],18:[2,18],22:[2,18],24:[2,18]},{22:[1,28],24:[1,27]},{22:[2,20],24:[2,20]},{14:[2,14],18:[2,14],22:[2,14],24:[2,14]},{3:20,4:[1,12],20:29},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:30,15:7,16:8,17:[1,14],23:[1,15]},{14:[2,19],18:[2,19],22:[2,19],24:[2,19]},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:31,15:7,16:8,17:[1,14],23:[1,15]},{18:[2,17],22:[2,17]},{18:[2,15],22:[2,15]},{22:[2,21],24:[2,21]}],defaultActions:{16:[2,6]},parseError:function d(h,g){throw new Error(h)},parse:function e(o){var x=this,l=[0],G=[null],s=[],H=this.table,h="",q=0,E=0,j=0,n=2,u=1;this.lexer.setInput(o);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}}var i=this.lexer.yylloc;s.push(i);if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError}function w(p){l.length=l.length-2*p;G.length=G.length-p;s.length=s.length-p}function v(){var p;p=x.lexer.lex()||1;if(typeof p!=="number"){p=x.symbols_[p]||p}return p}var D,z,k,C,I,t,B={},y,F,g,m;while(true){k=l[l.length-1];if(this.defaultActions[k]){C=this.defaultActions[k]}else{if(D==null){D=v()}C=H[k]&&H[k][D]}if(typeof C==="undefined"||!C.length||!C[0]){if(!j){m=[];for(y in H[k]){if(this.terminals_[y]&&y>2){m.push("'"+this.terminals_[y]+"'")}}var A="";if(this.lexer.showPosition){A="Parse error on line "+(q+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+m.join(", ")}else{A="Parse error on line "+(q+1)+": Unexpected "+(D==1?"end of input":("'"+(this.terminals_[D]||D)+"'"))}this.parseError(A,{text:this.lexer.match,token:this.terminals_[D]||D,line:this.lexer.yylineno,loc:i,expected:m})}if(j==3){if(D==u){throw new Error(A||"Parsing halted.")}E=this.lexer.yyleng;h=this.lexer.yytext;q=this.lexer.yylineno;i=this.lexer.yylloc;D=v()}while(1){if((n.toString()) in H[k]){break}if(k==0){throw new Error(A||"Parsing halted.")}w(1);k=l[l.length-1]}z=D;D=n;k=l[l.length-1];C=H[k]&&H[k][n];j=3}if(C[0] instanceof Array&&C.length>1){throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+D)}switch(C[0]){case 1:l.push(D);G.push(this.lexer.yytext);s.push(this.lexer.yylloc);l.push(C[1]);D=null;if(!z){E=this.lexer.yyleng;h=this.lexer.yytext;q=this.lexer.yylineno;i=this.lexer.yylloc;if(j>0){j--}}else{D=z;z=null}break;case 2:F=this.productions_[C[1]][1];B.$=G[G.length-F];B._$={first_line:s[s.length-(F||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(F||1)].first_column,last_column:s[s.length-1].last_column};t=this.performAction.call(B,h,E,q,this.yy,C[1],G,s);if(typeof t!=="undefined"){return t}if(F){l=l.slice(0,-1*F*2);G=G.slice(0,-1*F);s=s.slice(0,-1*F)}l.push(this.productions_[C[1]][0]);G.push(B.$);s.push(B._$);g=H[l[l.length-2]][l[l.length-1]];l.push(g);break;case 3:return true}}return true}};var a=(function(){var j=({EOF:1,parseError:function l(o,n){if(this.yy.parseError){this.yy.parseError(o,n)}else{throw new Error(o)}},setInput:function(n){this._input=n;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};return this},input:function(){var o=this._input[0];this.yytext+=o;this.yyleng++;this.match+=o;this.matched+=o;var n=o.match(/\n/);if(n){this.yylineno++}this._input=this._input.slice(1);return o},unput:function(n){this._input=n+this._input;return this},more:function(){this._more=true;return this},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;if(n.length<20){n+=this._input.substr(0,20-n.length)}return(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput();var o=new Array(n.length+1).join("-");return n+this.upcomingInput()+"\n"+o+"^"},next:function(){if(this.done){return this.EOF}if(!this._input){this.done=true}var r,p,o,n;if(!this._more){this.yytext="";this.match=""}var s=this._currentRules();for(var q=0;q<s.length;q++){p=this._input.match(this.rules[s[q]]);if(p){n=p[0].match(/\n.*/g);if(n){this.yylineno+=n.length}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-1:this.yylloc.last_column+p[0].length};this.yytext+=p[0];this.match+=p[0];this.matches=p;this.yyleng=this.yytext.length;this._more=false;this._input=this._input.slice(p[0].length);this.matched+=p[0];r=this.performAction.call(this,this.yy,this,s[q],this.conditionStack[this.conditionStack.length-1]);if(r){return r}else{return}}}if(this._input===""){return this.EOF}else{this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function g(){var n=this.next();if(typeof n!=="undefined"){return n}else{return this.lex()}},begin:function h(n){this.conditionStack.push(n)},popState:function m(){return this.conditionStack.pop()},_currentRules:function k(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules}});j.performAction=function i(r,o,q,n){var p=n;switch(q){case 0:break;case 1:return 6;break;case 2:o.yytext=o.yytext.substr(1,o.yyleng-2);return 4;break;case 3:return 17;break;case 4:return 18;break;case 5:return 23;break;case 6:return 24;break;case 7:return 22;break;case 8:return 21;break;case 9:return 10;break;case 10:return 11;break;case 11:return 8;break;case 12:return 14;break;case 13:return"INVALID";break}};j.rules=[/^\s+/,/^-?([0-9]|[1-9][0-9]+)(\.[0-9]+)?([eE][-+]?[0-9]+)?\b/,/^"(\\["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^\0-\x09\x0a-\x1f"\\])*"/,/^\{/,/^\}/,/^\[/,/^\]/,/^,/,/^:/,/^true\b/,/^false\b/,/^null\b/,/^$/,/^./];j.conditions={INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],inclusive:true}};return j})();f.lexer=a;return f})();if(typeof require!=="undefined"&&typeof exports!=="undefined"){exports.parser=jsonlint;exports.parse=function(){return jsonlint.parse.apply(jsonlint,arguments)};exports.main=function commonjsMain(a){if(!a[1]){throw new Error("Usage: "+a[0]+" FILE")}if(typeof process!=="undefined"){var c=require("fs").readFileSync(require("path").join(process.cwd(),a[1]),"utf8")}else{var b=require("file").path(require("file").cwd());var c=b.join(a[1]).read({charset:"utf-8"})}return exports.parser.parse(c)};if(typeof module!=="undefined"&&require.main===module){exports.main(typeof process!=="undefined"?process.argv.slice(1):require("system").args)}};

	/**
	 * MouseOver action for all elements on the page:
	 */
	function inspectorMouseOver(e) {
		// NB: this doesn't work in IE (needs fix):
		var element = e.target;
		
		// Set outline:
		element.style.outline = '2px solid #f00';
		
		// Set last selected element so it can be 'deselected' on cancel.
		last = element;
	}
	
	/**
	 * MouseOut event action for all elements
	 */
	function inspectorMouseOut(e) {
		// Remove outline from element:
		e.target.style.outline = '';
	}
	
	/**
	 * console.log or alert a message
	 */
	function inspectorLog(message, isError) {
		// If console exists:
		if ('console' in window) {
			// If this was an error, and console.warn method exists, warn it (else log it):
			if ( isError && 'warn' in window.console ) console.warn(message);
			else console.log(message);
		} else if (isError) {
			// Only alert if no console.log available, and it was an error:
			alert(message);
		}
	}
	
	/**
	 * Click action for hovered element
	 */
	function inspectorOnClick(e) {
		e.preventDefault();
			
		try {
			var result = jsonlint.parse(e.target.innerText);
			if (result) {
				inspectorLog("JSON is valid!");
				// Reformat and replace double-escaped slashes:
				e.target.innerText = JSON.stringify(result, false, 4).replace(/\\\\/g, "\\");
			}
		} catch(err) {
			inspectorLog(err.toString(), 1);
		}
		return false;
	}

	/**
	 * Function to cancel inspector:
	 */
	function inspectorCancel(e) {
		// Unbind inspector mouse and click events:
		if (e === null && event.keyCode === 27) { // IE (won't work yet):
			document.detachEvent("mouseover", inspectorMouseOver);
			document.detachEvent("mouseout", inspectorMouseOut);
			document.detachEvent("click", inspectorOnClick);
			document.detachEvent("keydown", inspectorCancel);
			last.style.outlineStyle = 'none';
		} else if(e.which === 27) { // Better browsers:
			document.removeEventListener("mouseover", inspectorMouseOver, true);
			document.removeEventListener("mouseout", inspectorMouseOut, true);
			document.removeEventListener("click", inspectorOnClick, true);
			document.removeEventListener("keydown", inspectorCancel, true);
			
			// Remove outline on last-selected element:
			last.style.outline = 'none';
		}
	}
	

	/**
	 * Add event listeners for DOM-inspectorey actions
	 */
	if ( document.addEventListener ) {
		document.addEventListener("mouseover", inspectorMouseOver, true);
		document.addEventListener("mouseout", inspectorMouseOut, true);
		document.addEventListener("click", inspectorOnClick, true);
		document.addEventListener("keydown", inspectorCancel, true);
	} else if ( document.attachEvent ) {
		document.attachEvent("mouseover", inspectorMouseOver);
		document.attachEvent("mouseout", inspectorMouseOut);
		document.attachEvent("click", inspectorOnClick);
		document.attachEvent("keydown", inspectorCancel);
	}
	
})(document);