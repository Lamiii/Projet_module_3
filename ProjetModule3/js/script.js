/*function grand(){
	var x = document.getElementById('myid');
	x.style.height = "510px";
	x.style.width = "310px";
	console.log("je passe");
	console.log("je passais");
}*/
/*function change() {
	var x = document.getElementById('ima');
	x.style.opacity = 0.5;
    x.style.filter = alpha(opacity=50);
    //document.write('<a href="" class="btn btn-primary">Commander</a>');
}
function changed() {
	var y = document.getElementById('ima');
	y.style.opacity = "";
    y.style.filter = "";
}*/
$(document).ready(function(){
var objet1 = {
	id : 1,
	nom : "poulet braisé",
	prix : 1500 ,
	description : 'Descriptions Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	img : "Images/grill1.jpg"

};
var objet2 = {
	id : 2,
	nom : "poulet braisé",
	prix : 1500 ,
	description : 'Descriptions Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	img : "Images/grill1.jpg"

};
var objet3 = {
	id : 3,
	nom : "poulet braisé",
	prix : 1500 ,
	description : 'Descriptions Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	img : "Images/grill1.jpg"

};
var objet4 = {
	id : 4,
	prix : 1500 ,
	nom : "poulet braisé",
	description : 'Descriptions Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	img : "Images/grill1.jpg"

};
var objet5 = {
	id : 5,
	nom : "poulet braisé",
	prix : 1500 ,
	description : 'Descriptions Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	img : "Images/grill1.jpg"

};
var objet6 = {
	id : 6,
	nom : "poulet braisé",
	prix : 1500 ,
	description : 'Descriptions Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	img : "Images/grill1.jpg"

};
var objet7 = {
	id : 7,
	nom : "poulet braisé",
	prix : 1500 ,
	description : 'Descriptions Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	img : "Images/grill1.jpg"

};
var objet8 = {
	id : 8,
	nom : "poulet braisé",
	prix : 1500 ,
	description : 'Descriptions Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	img : "Images/grill1.jpg"

};
var objet9 = {
	id : 9,
	nom : "poulet braisé",
	prix : 1500 ,
	description : 'Descriptions Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	img : "Images/grill1.jpg"

};
var objet10 = {
	id : 10,
	nom : "poulet braisé",
	prix : 1500 ,
	description : 'Descriptions Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	img : "Images/grill1.jpg"

};
var objet11 = {
	id : 11,
	nom : "poulet braisé",
	prix : 1500 ,
	description : 'Descriptions Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	img : "Images/grill1.jpg"

};
var objet12 = {
	id : 12,
	nom : "poulet braisé",
	prix : 1500 ,
	description : 'Descriptions Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	img : "Images/grill1.jpg"

};

var data = [objet1,objet2,objet3,objet4,objet5,objet6,objet7,objet8,objet9,objet10,objet11,objet12];

for (var i = 0; i < data.length; i++) {
	var myid = "myid"+i;
	$('#container .row').append(`
		<div class="col-lg-3" style="height: 500px; width: 300px;" id="myid">
                <div class="img-thumbnail">
                    <img src="${data[i].img}" class="gras" id="ima">
                <h5 style="text-align: center";>${data[i].nom}</h5>
                <p>${data[i].description}</p>
                <h5 style="font-weight: bold">Prix: ${data[i].prix} fr 
                <img src= "Images/commander.png" class="comm" style="margin-left: 70px;"></h5>
                
                
                </div>
                
            </div>
		`);

	$("#ima").on("mouseover", function(){
     console.log(myid);
	$("#ima").css({ "height": "600px", "width": "400px"});
    	
   
   // });
}
//var myid = ${data[" "].id};
//for (var i = 0; i < data.length; i++) {

//}
}
);