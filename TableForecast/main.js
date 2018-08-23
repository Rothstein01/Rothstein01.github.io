let e = document.getElementById("inp3").value;
let e2 = document.getElementById("inp3-2").value;
let e3 = document.getElementById("inp3-3").value;
let e4 = document.getElementById('inp3-4').value;
ee1=document.getElementById('inp3');
ee2=document.getElementById('inp3-2');
ee3=document.getElementById('inp3-3');
ee4=document.getElementById('inp3-4');

function my() {
  let a = document.getElementById("inp1").value;
  let b = document.getElementById("inp12").value;
  let c = document.getElementById("inp2").value;
  let d = document.getElementById("inp22").value;
  let out = document.getElementById("output");

  console.log(a - b);
  console.log(c - d);
  console.log( (a > b) & (c > d) & (b != "") & (d!=''));

  console.log( (a > b));
  console.log( (+a > +b));

  if ((a === c) & (b === d) & (a >= 0) & (b >= 0) & (a!='') & (b!='')) {
    e = 10;
    ee1.setAttribute('placeholder', 10);
    out.innerHTML = "10 score";
  } else if ((a - b == c - d) & (a != "") & (c!='') & (b!='')) {
    e = 7;
    ee1.setAttribute('placeholder', 7);
    out.innerHTML = "7 score";
  } else if (
    (+a > +b) & (+c > +d) & (b != "") & (d!='') ||
    (+b > +a) & (+d > +c) & (a != "") & (c!='')|| 
    (a == b) & (c == d) & (a != "") & (c!='')
  ) {
    e = 4;
    ee1.setAttribute('placeholder', 4);
    out.innerHTML = "4 score";
  } else if (a == "" || b == "" || c == "" || d == "") {
    e = 0;
    ee1.setAttribute('placeholder', '?');
    out.innerHTML = "Заполните поле ввода";
  } else {
    e = 0;
    ee1.setAttribute('placeholder', 0);
    out.innerHTML = "0 score";
  }
};

function my2() {
  let a2 = document.getElementById("inp1-2").value;
  let b2 = document.getElementById("inp12-2").value;
  let c2 = document.getElementById("inp2-2").value;
  let d2 = document.getElementById("inp22-2").value;
  let out2 = document.getElementById("output2");

  if ((a2 === c2) & (b2 === d2) & (a2 >= 0) & (b2 >= 0) & (a2 !='') &(b2!='')) {
    e2 = 10;
    ee2.setAttribute('placeholder', 10);
    out2.innerHTML = "10 score";
  } else if ((a2 - b2 == c2 - d2) & (a2 != "") & (c2!="") & (b2 != "")) {
    e2 = 7;
    ee2.setAttribute('placeholder', 7);
    out2.innerHTML = "7 score";
  } else if (
    (+a2 > +b2) & (+c2 > +d2) & (b2 != "") & (d2!='') ||
    (+b2 > +a2) & (+d2 > +c2) & (a2 != "") & (c2!='') ||
    (a2 == b2) & (c2 == d2) & (a2 != "") & (c2!="")
  ) {
    e2 = 4;
    ee2.setAttribute('placeholder', 4);
    out2.innerHTML = "4 score";
  } else if (a2 == "" || b2 == "" || c2 == "" || d2 == "") {
    e2 = 0;
    ee2.setAttribute('placeholder', '?');
    out2.innerHTML = "Заполните поле ввода";
  } else {
    e2 = 0;
    ee2.setAttribute('placeholder', 0);
    out2.innerHTML = "0 score";
  }
};

function my3() {
  let a3 = document.getElementById("inp1-3").value;
  let b3 = document.getElementById("inp12-3").value;
  let c3 = document.getElementById("inp2-3").value;
  let d3 = document.getElementById("inp22-3").value;
  let out3 = document.getElementById("output3");

  if ((a3 === c3) & (b3 === d3) & (a3 >= 0) & (b3 >= 0) & (a3!='') & (b3!='')) {
    e3 = 10;
    ee3.setAttribute('placeholder', 10);
    out3.innerHTML = "10 score";
  } else if ((a3 - b3 == c3 - d3) & (a3 != "") & (c3!='') & (b3!='')) {
    e3 = 7;
    ee3.setAttribute('placeholder', 7);
    out3.innerHTML = "7 score";
  } else if (
    (+a3 > +b3) & (+c3 > +d3) & (b3 != "") & (d3!='') ||
    (+b3 > +a3) & (+d3 > +c3) & (a3 != "") & (c3!='') ||
    (a3 == b3) & (c3 == d3) & (a3 != "") & (c3!='')
  ) {
    e3 = 4;
    ee3.setAttribute('placeholder', 4);
    out3.innerHTML = "4 score";
  } else if (a3 == "" || b3 == "" || c3 == "" || d3 == "") {
    e3 = 0;
    ee3.setAttribute('placeholder', '?');
    out3.innerHTML = "Заполните поле ввода";
  } else {
    e3 = 0;
    ee3.setAttribute('placeholder', 0);
    out3.innerHTML = "0 score";
  }
};

function my4() {
  //привести к числу (+)
  let a4 =document.getElementById("inp1-4").value;
  let b4 = document.getElementById("inp12-4").value;
  let c4 = document.getElementById("inp2-4").value;
  let d4 = document.getElementById("inp22-4").value;
  let out4 = document.getElementById("output4");

  if ((a4 === c4) & (b4 === d4) & (a4 >= 0) & (b4 >= 0) & (a4!='') & (b4!='')) {
    e4 = 10;
    ee4.setAttribute('placeholder', 10);
    out4.innerHTML = "10 score";
  } else if ((a4 - b4 == c4 - d4) & (a4 != "") & (c4!='') & (b4!='')) {
    e4 = 7;
    ee4.setAttribute('placeholder', 7);
    out4.innerHTML = "7 score";
  } else if (
    (+a4 > +b4) & (+c4 > +d4) & (b4 != "") & (d4!='') ||
    (+b4 > +a4) & (+d4 > +c4) & (a4 != "") & (c4!='') ||
    (a4 == b4) & (c4 == d4) & (a4 != "") & (c4!='')
  ) {
    e4 = 4;
    ee4.setAttribute('placeholder', 4);
    out4.innerHTML = "4 score";
  } else if (a4 == "" || b4 == "" || c4 == "" || d4 == "") {
    e4 = 0;
    ee4.setAttribute('placeholder', '?');
    out4.innerHTML = "Заполните поле ввода";
  } else {
    e4 = 0;
    ee4.setAttribute('placeholder', 0);
    out4.innerHTML = "0 score";
  }
};

function total() {
  let allout = document.getElementById("totaloutput");
  let alle = +e + +e2 + +e3 + +e4;
  allout.innerHTML = "Всего очков: " + alle;
};

/*console.log(a, b, c, d, e);
console.log(e);*/

///////////////////////////////////////////////////////////

function res() {
  $("input").val('');
  $(".ost").html('')
  $(".totalscore").html('')

//узнать, почему не получилось сделать на чистом JS

  /*let del = document.getElementsByTagName("input");
  for (i = 0; del.length; i++) {
    console.log(del[21]);
    del[i].value = '';
  }*/
};

/*function res2() {
  let del2 = document.getElementsByClassName('ost');
  for (ii = 0; del2.length; ii++) {
    del2[ii].innerHTML = '';
    console.log('delete');
  }
};*/

//function calculation(){
  /*let cl = document.getElementsByClassName('inter');
  let z1 = +cl[20].value; 
  let z12 = cl[21].value;
  let z2 = cl[22].value;
  let z22 = cl[23].value;
  let z3 = cl[24].value;
  let z32 = cl[25].value;
  let z4 = cl[26].value;
  let z42 = cl[27].value;
  let z5 = cl[28].value;
  let z52 = cl[29].value;
  let z6 = cl[30].value;
  let z62 = cl[31].value;
  let z7 = cl[32].value;
  let z72 = cl[33].value;
  let z8 = cl[34].value;
  let z82 = cl[35].value;

  let text = 'wow';
  
  let x = document.getElementById('in1');
  */
  
 /* console.log(z1);
  console.log(z12);
  console.log(z2);
  console.log(z22);
  console.log(z3);
  console.log(z32);
  console.log(z4);
  console.log(z42);
  console.log(z5);
  console.log(z52);
  console.log(z6);
  console.log(z62);
  console.log(z7);
  console.log(z72);
  console.log(z8);
  console.log(z82);*/

//}

function for1() {
  let cl  = document.getElementsByClassName('inter');

// inputs for results matches
  
  let z1  = cl[20].value; 
  let z12 = cl[21].value;
  let z2  = cl[22].value;
  let z22 = cl[23].value;
  let z3  = cl[24].value;
  let z32 = cl[25].value;
  let z4  = cl[26].value;
  let z42 = cl[27].value;
  let z5  = cl[28].value;
  let z52 = cl[29].value;
  let z6  = cl[30].value;
  let z62 = cl[31].value;
  let z7  = cl[32].value;
  let z72 = cl[33].value;
  let z8  = cl[34].value;
  let z82 = cl[35].value;

                              // FOR PLAYER 1 (MAIN VARIABLE: F)
// inputs for player №1

  let f1  = cl[36].value; //1 
  let f12 = cl[37].value; //2
  let f2  = cl[38].value; //3
  let f22 = cl[39].value; //4
  let f3  = cl[40].value; //5
  let f32 = cl[41].value; //6
  let f4  = cl[42].value; //7
  let f42 = cl[43].value; //8
  let f5  = cl[44].value; //9
  let f52 = cl[45].value; //10
  let f6  = cl[46].value; //11
  let f62 = cl[47].value; //12
  let f7  = cl[48].value; //13
  let f72 = cl[49].value; //14
  let f8  = cl[50].value; //15
  let f82 = cl[51].value; //16

//score for each match

  let tf1 = 0;
  let tf2 = 0;
  let tf3 = 0;
  let tf4 = 0;
  let tf5 = 0;
  let tf6 = 0;
  let tf7 = 0;
  let tf8 = 0;
  
// output score for each match in text format

  let fv1 = document.getElementsByClassName('ost')[4];
  let fv2 = document.getElementsByClassName('ost')[5];
  let fv3 = document.getElementsByClassName('ost')[6];
  let fv4 = document.getElementsByClassName('ost')[7];
  let fv5 = document.getElementsByClassName('ost')[8];
  let fv6 = document.getElementsByClassName('ost')[9];
  let fv7 = document.getElementsByClassName('ost')[10];
  let fv8 = document.getElementsByClassName('ost')[11];
  
  // for 1th match

  if (z1===''|| z12===''|| f1===''|| f12===''){
    fv1.innerHTML = 'Write number'
  }
  
  else if ((+z1 === +f1) & (+z12 === +f12) & (+z1 >= 0) & (+z12 >= 0) /*& (z1!='') & (z12!='')*/) {
    //e = 10;
    //ee1.setAttribute('placeholder', 10);
    //console.log('hi');
    tf1 = 10;
    fv1.innerHTML = "10 score";
  } else if (+z1 - +z12 === +f1 - +f12 /* & (z1 != "") /*& (c!='') & (b!='')*/) {
    tf1 = 7;
    fv1.innerHTML = "7 score";
  }  else if (
    (+z1 > +z12) & (+f1 > +f12) //& (b != "") & (d!='') 
    ||
    (+z12 > +z1) & (+f12 > +f1) //& (a != "") & (c!='')
    || 
    (+z1 == +z12) & (+f1 == +f12) //& (a != "") & (c!='')
  ) {
    tf1 = 4;
    fv1.innerHTML = "4 score";
  } /*else if (a == "" || b == "" || c == "" || d == "") {
    e = 0;
    ee1.setAttribute('placeholder', '?');
    out.innerHTML = "Заполните поле ввода";
  } */else {
   // e = 0;
   // ee1.setAttribute('placeholder', 0);
    tf1 = 0;
    fv1.innerHTML = "0 score";
  }

  // for 2th match
  //console.log(z2, z22, f2, f22);
  
  if (z2===''|| z22===''|| f2===''|| f22===''){
    fv2.innerHTML = 'Write number'
  }  
  else if ((+z2 === +f2) & (+z22 === +f22) & (+z2 >= 0) & (+z22 >= 0)){
    tf2 = 10;
    fv2.innerHTML = "10 score";
  } 
  else if (+z2 - +z22 === +f2 - +f22 ) {
    tf2 = 7;
    fv2.innerHTML = "7 score";
  } 
  else if ((+z2 > +z22) & (+f2 > +f22) || (+z22 > +z2) & (+f22 > +f2) || (+z2 == +z22) & (+f2 == +f22)) {
    tf2 = 4;   
    fv2.innerHTML = "4 score";
  } 
  else {
    tf2 = 0;
    fv2.innerHTML = "0 score";
  }


  // for 3th match

  if (z3===''|| z32===''|| f3===''|| f32===''){
    fv3.innerHTML = 'Write number'
  }  
  else if ((z3 === f3) & (z32 === f32) & (z3 >= 0) & (z32 >= 0)){
    tf3 = 10;
    fv3.innerHTML = "10 score";
  } 
  else if (z3 - z32 === f3 - f32 ) {
    tf3 = 7;
    fv3.innerHTML = "7 score";
  } 
  else if ((z3 > z32) & (f3 > f32) || (z32 > z3) & (f32 > f3) || (z3 == z32) & (f3 == f32)) {   
    tf3 = 4;
    fv3.innerHTML = "4 score";
  } 
  else {
    tf3 = 0;
    fv3.innerHTML = "0 score";
  }
  
  // for 4th match
  
  if (z4===''|| z42===''|| f4===''|| f42===''){
    fv4.innerHTML = 'Write number'
  }  
  else if ((z4 === f4) & (z42 === f42) & (z4 >= 0) & (z42 >= 0)){
    tf4 = 10;
    fv4.innerHTML = "10 score";
  } 
  else if (z4 - z42 === f4 - f42 ) {
    tf4 = 7;
    fv4.innerHTML = "7 score";
  } 
  else if ((z4 > z42) & (f4 > f42) || (z42 > z4) & (f42 > f4) || (z4 == z42) & (f4 == f42)) {   
    tf4 = 4;
    fv4.innerHTML = "4 score";
  } 
  else {
    tf4 = 0;
    fv4.innerHTML = "0 score";
  }
  
  // for 5th match

  if (z5===''|| z52===''|| f5===''|| f52===''){
    fv5.innerHTML = 'Write number'
  }  
  else if ((z5 === f5) & (z52 === f52) & (z5 >= 0) & (z52 >= 0)){
    tf5 = 10;
    fv5.innerHTML = "10 score";
  } 
  else if (z5 - z52 === f5 - f52 ) {
    tf5 = 7;
    fv5.innerHTML = "7 score";
  } 
  else if ((z5 > z52) & (f5 > f52) || (z52 > z5) & (f52 > f5) || (z5 == z52) & (f5 == f52)) {   
    tf5 = 4;
    fv5.innerHTML = "4 score";
  } 
  else {
    tf5 = 0;
    fv5.innerHTML = "0 score";
  }
  
  // for 6th match

  if (z6===''|| z62===''|| f6===''|| f62===''){
    fv6.innerHTML = 'Write number'
  }  
  else if ((z6 === f6) & (z62 === f62) & (z6 >= 0) & (z62 >= 0)){
    tf6 = 10;
    fv6.innerHTML = "10 score";
  } 
  else if (z6 - z62 === f6 - f62 ) {
    tf6 = 7;
    fv6.innerHTML = "7 score";
  } 
  else if ((z6 > z62) & (f6 > f62) || (z62 > z6) & (f62 > f6) || (z6 == z62) & (f6 == f62)) {   
    tf6 = 4;
    fv6.innerHTML = "4 score";
  } 
  else {
    tf6 = 0;
    fv6.innerHTML = "0 score";
  }
  
  // for 7th match

  if (z7===''|| z72===''|| f7===''|| f72===''){
    fv7.innerHTML = 'Write number'
  }  
  else if ((z7 === f7) & (z72 === f72) & (z7 >= 0) & (z72 >= 0)){
    tf7 = 10;
    fv7.innerHTML = "10 score";
  } 
  else if (z7 - z72 === f7 - f72 ) {
    tf7 = 7;
    fv7.innerHTML = "7 score";
  } 
  else if ((z7 > z72) & (f7 > f72) || (z72 > z7) & (f72 > f7) || (z7 == z72) & (f7 == f72)) {   
    tf7 = 4;
    fv7.innerHTML = "4 score";
  } 
  else {
    tf7 = 0;
    fv7.innerHTML = "0 score";
  }
 
 // fot 8th match

  if (z8 === '' || z82 === '' || f8 === '' || f82 === '') {
    fv8.innerHTML = 'Write number'
  }
  else if ((z8 === f8) & (z82 === f82) & (z8 >= 0) & (z82 >= 0)) {
    tf8 = 10;
    fv8.innerHTML = "10 score";
  }
  else if (z8 - z82 === f8 - f82) {
    tf8 = 8;
    fv8.innerHTML = "8 score";
  }
  else if ((z8 > z82) & (f8 > f82) || (z82 > z8) & (f82 > f8) || (z8 == z82) & (f8 == f82)) {
    tf8 = 4;
    fv8.innerHTML = "4 score";
  }
  else {
    tf8 = 0;
    fv8.innerHTML = "0 score";
  }

  tfall = tf1 + tf2 + tf3 + tf4 + tf5 + tf6 + tf7 + tf8;
  let tfcall = document.getElementsByClassName('totalscore')[0];
  tfcall.innerHTML = tfall;




                                // FOR PLAYER 2 (MAIN VARIABLE: G)
// inputs for player №2

let g1  = cl[52].value; //1 
let g12 = cl[53].value; //2
let g2  = cl[54].value; //3
let g22 = cl[55].value; //4
let g3  = cl[56].value; //5
let g32 = cl[57].value; //6
let g4  = cl[58].value; //7
let g42 = cl[59].value; //8
let g5  = cl[60].value; //9
let g52 = cl[61].value; //10
let g6  = cl[62].value; //11
let g62 = cl[63].value; //12
let g7  = cl[64].value; //13
let g72 = cl[65].value; //14
let g8  = cl[66].value; //15
let g82 = cl[67].value; //16

//score gor each match

let tg1 = 0;
let tg2 = 0;
let tg3 = 0;
let tg4 = 0;
let tg5 = 0;
let tg6 = 0;
let tg7 = 0;
let tg8 = 0;

// output score for each match in text format

let gv1 = document.getElementsByClassName('ost')[12];
let gv2 = document.getElementsByClassName('ost')[13];
let gv3 = document.getElementsByClassName('ost')[14];
let gv4 = document.getElementsByClassName('ost')[15];
let gv5 = document.getElementsByClassName('ost')[16];
let gv6 = document.getElementsByClassName('ost')[17];
let gv7 = document.getElementsByClassName('ost')[18];
let gv8 = document.getElementsByClassName('ost')[19];

// for 1th match

if (z1===''|| z12===''|| g1===''|| g12===''){
  gv1.innerHTML = 'Write number'}
else if ((+z1 === +g1) & (+z12 === +g12) & (+z1 >= 0) & (+z12 >= 0)) {
  tg1 = 10;
  gv1.innerHTML = "10 score";
} else if (+z1 - +z12 === +g1 - +g12) {
  tg1 = 7;
  gv1.innerHTML = "7 score";
}  else if ((+z1 > +z12) & (+g1 > +g12) || (+z12 > +z1) & (+g12 > +g1) || (+z1 == +z12) & (+g1 == +g12)) {
  tg1 = 4;
  gv1.innerHTML = "4 score";
} 
  else {
  tg1 = 0;
  gv1.innerHTML = "0 score";
}

// for 2th match

if (z2===''|| z22===''|| g2===''|| g22===''){
  gv2.innerHTML = 'Write number'
}  
else if ((+z2 === +g2) & (+z22 === +g22) & (+z2 >= 0) & (+z22 >= 0)){
  tg2 = 10;
  gv2.innerHTML = "10 score";
} 
else if (+z2 - +z22 === +g2 - +g22 ) {
  tg2 = 7;
  gv2.innerHTML = "7 score";
} 
else if ((+z2 > +z22) & (+g2 > +g22) || (+z22 > +z2) & (+g22 > +g2) || (+z2 == +z22) & (+g2 == +g22)) {
  tg2 = 4;   
  gv2.innerHTML = "4 score";
} 
else {
  tg2 = 0;
  gv2.innerHTML = "0 score";
}


// for 3th match

if (z3===''|| z32===''|| g3===''|| g32===''){
  gv3.innerHTML = 'Write number'
}  
else if ((z3 === g3) & (z32 === g32) & (z3 >= 0) & (z32 >= 0)){
  tg3 = 10;
  gv3.innerHTML = "10 score";
} 
else if (z3 - z32 === g3 - g32 ) {
  tg3 = 7;
  gv3.innerHTML = "7 score";
} 
else if ((z3 > z32) & (g3 > g32) || (z32 > z3) & (g32 > g3) || (z3 == z32) & (g3 == g32)) {   
  tg3 = 4;
  gv3.innerHTML = "4 score";
} 
else {
  tg3 = 0;
  gv3.innerHTML = "0 score";
}

// for 4th match

if (z4===''|| z42===''|| g4===''|| g42===''){
  gv4.innerHTML = 'Write number'
}  
else if ((z4 === g4) & (z42 === g42) & (z4 >= 0) & (z42 >= 0)){
  tg4 = 10;
  gv4.innerHTML = "10 score";
} 
else if (z4 - z42 === g4 - g42 ) {
  tg4 = 7;
  gv4.innerHTML = "7 score";
} 
else if ((z4 > z42) & (g4 > g42) || (z42 > z4) & (g42 > g4) || (z4 == z42) & (g4 == g42)) {   
  tg4 = 4; // ????
  gv4.innerHTML = "4 score";
} 
else {
  tg4 = 0;
  gv4.innerHTML = "0 score";
}

// for 5th match

if (z5===''|| z52===''|| g5===''|| g52===''){
  gv5.innerHTML = 'Write number'
}  
else if ((z5 === g5) & (z52 === g52) & (z5 >= 0) & (z52 >= 0)){
  tg5 = 10;
  gv5.innerHTML = "10 score";
} 
else if (z5 - z52 === g5 - g52 ) {
  tg5 = 7;
  gv5.innerHTML = "7 score";
} 
else if ((z5 > z52) & (g5 > g52) || (z52 > z5) & (g52 > g5) || (z5 == z52) & (g5 == g52)) {   
  tg5 = 4;
  gv5.innerHTML = "4 score";
} 
else {
  tg5 = 0;
  gv5.innerHTML = "0 score";
}

// for 6th match

if (z6===''|| z62===''|| g6===''|| g62===''){
  gv6.innerHTML = 'Write number'
}  
else if ((z6 === g6) & (z62 === g62) & (z6 >= 0) & (z62 >= 0)){
  tg6 = 10;
  gv6.innerHTML = "10 score";
} 
else if (z6 - z62 === g6 - g62 ) {
  tg6 = 7;
  gv6.innerHTML = "7 score";
} 
else if ((z6 > z62) & (g6 > g62) || (z62 > z6) & (g62 > g6) || (z6 == z62) & (g6 == g62)) {   
  tg6 = 4;
  gv6.innerHTML = "4 score";
} 
else {
  tg6 = 0;
  gv6.innerHTML = "0 score";
}

// for 7th match

if (z7===''|| z72===''|| g7===''|| g72===''){
  gv7.innerHTML = 'Write number'
}  
else if ((z7 === g7) & (z72 === g72) & (z7 >= 0) & (z72 >= 0)){
  tg7 = 10;
  gv7.innerHTML = "10 score";
} 
else if (z7 - z72 === g7 - g72 ) {
  tg7 = 7;
  gv7.innerHTML = "7 score";
} 
else if ((z7 > z72) & (g7 > g72) || (z72 > z7) & (g72 > g7) || (z7 == z72) & (g7 == g72)) {   
  tg7 = 4;
  gv7.innerHTML = "4 score";
} 
else {
  tg7 = 0;
  gv7.innerHTML = "0 score";
}

// fot 8th match

if (z8 === '' || z82 === '' || g8 === '' || g82 === '') {
  gv8.innerHTML = 'Write number'
}
else if ((z8 === g8) & (z82 === g82) & (z8 >= 0) & (z82 >= 0)) {
  tg8 = 10;
  gv8.innerHTML = "10 score";
}
else if (z8 - z82 === g8 - g82) {
  tg8 = 7;
  gv8.innerHTML = "7 score";
}
else if ((z8 > z82) & (g8 > g82) || (z82 > z8) & (g82 > g8) || (z8 == z82) & (g8 == g82)) {
  tg8 = 4;
  gv8.innerHTML = "4 score";
}
else {
  tg8 = 0;
  gv8.innerHTML = "0 score";
}

tgall = tg1 + tg2 + tg3 + tg4 + tg5 + tg6 + tg7 + tg8;
let tgcall = document.getElementsByClassName('totalscore')[1];
tgcall.innerHTML = tgall;

let alltpl = document.getElementsByClassName('totalallplayer')[0]
if (tfall>tgall) {
  alltpl.innerHTML='Победил Игрок <span>№1</span> с результатом '+ '<span>'+tfall+'</span> ' + ' очков'
}
else if (tgall>tfall){
  alltpl.innerHTML='Победил Игрок <span>№2</span> с результатом '+ '<span>'+tgall+'</span> ' + ' очков'
}
else {alltpl.innerHTML='Победитель не определен'}

};
                                      