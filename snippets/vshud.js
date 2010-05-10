/* A tiny Status display for logging etc. */
var vsHud = {
	// A tiny HUD status console
	hudId: "status",
	hud: null,
	hudHeader: null,
	hudClear: null,
	hudList: null,
	state: null,

	init: function(){
		// setuup the HUD
		this.hud = document.createElement('div');
		this.hud.setAttribute('id', this.hudId);

		this.hudHeader = document.createElement('h2');
		this.hudHeader.innerHTML = "Status";

		this.hudClear = document.createElement('a');
		this.hudClear.setAttribute('href', '#');
		this.hudClear.setAttribute('id', 'clear-hud');
		this.hudClear.innerHTML = "Clear";
		this.hudClear.onclick = function(e){
			e.preventDefault();
			vsHud.clear();
		}

		this.hudList = document.createElement('ul');

		this.hud.appendChild(this.hudHeader);
		this.hud.appendChild(this.hudList);
		this.hud.appendChild(this.hudClear);
		document.getElementsByTagName('body')[0].appendChild(this.hud);
	},
	log: function(t,m){
		var classN, labelN;
		if (t && !m) m = t;
		if(t == 'success' || t == 'warning' || t == 'error'){
			classN = t;
			labelN = t[0].toUpperCase();
			labelN += t.substring(1,t.length)+':';
		}else{
			classN = '';
			labelN = 'Msg:';
		}
		var li = document.createElement('li');
		li.setAttribute('class', classN);
		li.innerHTML = "<strong>"+labelN+"</strong> "+m;
		this.hudList.appendChild(li);
	},
	clear: function(){
		var i = this.hudList.childNodes.length;
		while(i--){
			var li = this.hudList.childNodes[i];
			li.parentNode.removeChild(li);
		}
	}
};

