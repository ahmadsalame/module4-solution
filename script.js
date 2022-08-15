var names=new Array();
names[0]="Yaakov";
names[1]="Ahmad";
names[2]="Rim";
names[3]="hollow";
names[4]="arazo";
names[5]="jiyan";
names[6]="reven";
names[7]="James";
names[8]="shaza";
names[9]="nadia";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}