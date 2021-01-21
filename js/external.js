function searchFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


function embassy0() { sessionStorage.setItem('embassy', '0'); }
function embassy10() { sessionStorage.setItem('embassy', '1'); }
function embassy20() { sessionStorage.setItem('embassy', '2'); }
function embassy30() { sessionStorage.setItem('embassy', '3'); }
function embassy40() { sessionStorage.setItem('embassy', '4'); }
function embassy41() { sessionStorage.setItem('embassy', '5'); }
function embassy50() { sessionStorage.setItem('embassy', '6'); }
function embassy60() { sessionStorage.setItem('embassy', '7'); }
function embassy70() { sessionStorage.setItem('embassy', '8'); }
function embassy80() { sessionStorage.setItem('embassy', '9'); }
function embassy90() { sessionStorage.setItem('embassy', '10'); }
function embassy100() { sessionStorage.setItem('embassy', '11'); }
function embassy110() { sessionStorage.setItem('embassy', '12'); }
function embassy120() { sessionStorage.setItem('embassy', '13'); }
function embassy130() { sessionStorage.setItem('embassy', '14'); }
function embassy131() { sessionStorage.setItem('embassy', '15'); }
function embassy132() { sessionStorage.setItem('embassy', '16'); }
function embassy133() { sessionStorage.setItem('embassy', '17'); }
function embassy140() { sessionStorage.setItem('embassy', '18'); }
function embassy150() { sessionStorage.setItem('embassy', '19'); }
function embassy160() { sessionStorage.setItem('embassy', '20'); }
function embassy170() { sessionStorage.setItem('embassy', '21'); }
function embassy180() { sessionStorage.setItem('embassy', '22'); }
function embassy190() { sessionStorage.setItem('embassy', '23'); }
function embassy200() { sessionStorage.setItem('embassy', '24'); }


function pass0() { 
  sessionStorage.setItem('pass', '0');
 }
function pass1() {
  sessionStorage.setItem('pass', '1'); 
}
function pass2() {
  sessionStorage.setItem('pass', '2'); 
}
function pass3() { 
  sessionStorage.setItem('pass', '3'); 
}
function pass4() { 
  sessionStorage.setItem('pass', '4'); 
}
function pass5() { 
  sessionStorage.setItem('pass', '5');
}


function type4() { sessionStorage.setItem('type', '4'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '5'); sessionStorage.setItem('name', document.getElementById('type4').innerHTML); }
function type1() { sessionStorage.setItem('type', '1'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '14'); sessionStorage.setItem('name', document.getElementById('type1').innerHTML); }
function type2() { sessionStorage.setItem('type', '2'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '14'); sessionStorage.setItem('name', document.getElementById('type2').innerHTML); }
function type3() { sessionStorage.setItem('type', '3'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '14'); sessionStorage.setItem('name', document.getElementById('type3').innerHTML); }
function type0() { sessionStorage.setItem('type', '0'); sessionStorage.setItem('subsistence', '3'); sessionStorage.setItem('time', '14'); sessionStorage.setItem('name', document.getElementById('type0').innerHTML); }
function type16() { sessionStorage.setItem('type', '16'); sessionStorage.setItem('subsistence', '4'); sessionStorage.setItem('time', '4'); sessionStorage.setItem('name', document.getElementById('type16').innerHTML); }
function type19() { sessionStorage.setItem('type', '19'); sessionStorage.setItem('subsistence', '4'); sessionStorage.setItem('time', '4'); sessionStorage.setItem('name', document.getElementById('type19').innerHTML); }
function type15() { sessionStorage.setItem('type', '15'); sessionStorage.setItem('subsistence', '1'); sessionStorage.setItem('time', '7'); sessionStorage.setItem('name', document.getElementById('type15').innerHTML); }
function type14() { sessionStorage.setItem('type', '14'); sessionStorage.setItem('subsistence', '4'); sessionStorage.setItem('time', '0'); sessionStorage.setItem('name', document.getElementById('type14').innerHTML); }
function type17() { sessionStorage.setItem('type', '17'); sessionStorage.setItem('subsistence', '1'); sessionStorage.setItem('time', '2'); sessionStorage.setItem('name', document.getElementById('type17').innerHTML); }
function type13() { sessionStorage.setItem('type', '13'); sessionStorage.setItem('subsistence', '1'); sessionStorage.setItem('time', '10'); sessionStorage.setItem('name', document.getElementById('type13').innerHTML); }
function type30() { sessionStorage.setItem('type', '30'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '11'); sessionStorage.setItem('name', document.getElementById('type30').innerHTML); }
function type20() { sessionStorage.setItem('type', '20'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '4'); sessionStorage.setItem('name', document.getElementById('type20').innerHTML); }
function type21() { sessionStorage.setItem('type', '21'); sessionStorage.setItem('subsistence', '5'); sessionStorage.setItem('time', '4'); sessionStorage.setItem('name', document.getElementById('type21').innerHTML); }
function type22() { sessionStorage.setItem('type', '22'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '4'); sessionStorage.setItem('name', document.getElementById('type22').innerHTML); }
function type23() { sessionStorage.setItem('type', '23'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '4'); sessionStorage.setItem('name', document.getElementById('type23').innerHTML); }
function type29() { sessionStorage.setItem('type', '29'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '4'); sessionStorage.setItem('name', document.getElementById('type29').innerHTML); }
function type8() { sessionStorage.setItem('type', '8'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '9'); sessionStorage.setItem('name', document.getElementById('type8').innerHTML); }
function type10() { sessionStorage.setItem('type', '10'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '8'); sessionStorage.setItem('name', document.getElementById('type10').innerHTML); }
function type9() { sessionStorage.setItem('type', '9'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '8'); sessionStorage.setItem('name', document.getElementById('type9').innerHTML); }
function type11() { sessionStorage.setItem('type', '11'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '0'); sessionStorage.setItem('name', document.getElementById('type11').innerHTML); }
function type12() { sessionStorage.setItem('type', '12'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '0'); sessionStorage.setItem('name', document.getElementById('type12').innerHTML); }
function type24() { sessionStorage.setItem('type', '24'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '12'); sessionStorage.setItem('name', document.getElementById('type24').innerHTML); }
function type25() { sessionStorage.setItem('type', '25'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '1'); sessionStorage.setItem('name', document.getElementById('type25').innerHTML); }
function type7() { sessionStorage.setItem('type', '7'); sessionStorage.setItem('subsistence', '8'); sessionStorage.setItem('time', '13'); sessionStorage.setItem('name', document.getElementById('type7').innerHTML); }
function type6() { sessionStorage.setItem('type', '6'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '14'); sessionStorage.setItem('name', document.getElementById('type6').innerHTML); }
function type18() { sessionStorage.setItem('type', '18'); sessionStorage.setItem('subsistence', '6'); sessionStorage.setItem('time', '4'); sessionStorage.setItem('name', document.getElementById('type18').innerHTML); }
function type28() { sessionStorage.setItem('type', '28'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '6'); sessionStorage.setItem('name', document.getElementById('type28').innerHTML); }
function type27() { sessionStorage.setItem('type', '27'); sessionStorage.setItem('subsistence', '1'); sessionStorage.setItem('time', '3'); sessionStorage.setItem('name', document.getElementById('type27').innerHTML); }
function type5() { sessionStorage.setItem('type', '5'); sessionStorage.setItem('subsistence', '0'); sessionStorage.setItem('time', '13'); sessionStorage.setItem('name', document.getElementById('type5').innerHTML); }
function type26() { sessionStorage.setItem('type', '26'); sessionStorage.setItem('subsistence', '7'); sessionStorage.setItem('time', '4'); sessionStorage.setItem('name', document.getElementById('type26').innerHTML); }


var subsistence =[
' 430 EUR',
' 1076 EUR',
' 340 EUR',
' 129 EUR',
' 2152 EUR',
' 1290 EUR',
' 1292-1614 EUR',
' 680 EUR',
''
]



var fullname =[
'A minor child of a citizen of Latvia, a non-citizen of Latvia or a foreigner holding a permanent residence permit',
'Adult child of a Latvian citizen',
'Parents of a Latvian citizen or a non-citizen',
'A spouse of a citizen of Latvia, a non-citizen of Latvia or a foreigner holding a permanent residence permit',
'Up to the third step relative vertically or the third step relative horizontally or a brother/sister-in-law up to the third step to a citizen or a non-citizen of Latvia or to a foreigner holding a permanent residence permit',
'If you are a citizen of third country whose one of the relatives in the direct ascending line is Latvian or Liv',
'',
'You have been a citizen or a non-citizen of the Republic of Latvia prior to acquiring the citizenship of another country',
'',
'',
'',
'',
'An pupil or a student of an educational establishment in connection with studies practice or training at an accredited educational establishment of the Republic of Latvia or a corporate body registered in the Commercial Register',
'A labour agreement or an enterprise agreement',
'',
'',
'An individual merchant (businessman) registered in the Commercial Register',
'',
'',
'A person registered in the Commercial Register as a member of a partnership with rights to represent a partnership, member of the Board or the Council, managing clerk, executive, liquidator or a person authorised to represent a corporate entity (a foreign corporate entity) in activities related to the branch office',
'',
'',
'',
'',
'',
'',
'',
'',
'If you are a person graduating Masters or Doctorate program or completing a research project in Latvia, and apply for residence permit no later than 3 months after completing studies or research project',
'',
'Implementation of an international treaty or a project where the Republic of Latvia is a partner or providing assistance to public or municipal institutions of the Republic of Latvia',
]


var embassy =[
'Contact OCMA',
'Latvian Embassy in the United States of America',
'Latvian Embassy in the United Arab Emirates',
'Latvian Embassy in the Republic of Azerbaijan',
'Latvian Embassy in the Republic of Belarus',
'Consulate in Vitebsk (Republic of Belarus)',
'Latvian Embassy in the Arab Republic of Egypt',
'Latvian Embassy in the French Republic',
'Latvian Embassy in Georgia',
'Latvian Embassy in the Republic of India',
'Latvian Embassy in the State of Israel',
'Latvian Embassy in Japan',
'Latvian Embassy in Canada',
'Latvian Embassy in Kazahkstan',
'Latvian Embassy in the Russian Federation',
"Consular Section's Chancery of the Embassy of the Russian Federation in Kaliningrad",
'Consulate General in St. Petersburg (Russian Federation)',
'Consulate in Pskov (Russian Federation)',
"Latvian Embassy in the People's Republic of China",
'Latvian Embassy in the United Kingdom of Great Britain and Northern Ireland',
'Latvian Embassy in the Republic of Poland',
'Latvian Embassy in Ukraine',
'Latvian Embassy in the Republic of Uzbekistan',
'Latvian Embassy in the Republic of Turkey',
'Latvian Embassy in the Kingdom of Sweden'
]




var rules =[
['Before the submission of the documents your inviter shall approve the call at the Office of Citizenship and Migration Affairs', '(U7)'],
['• residence permit request form', ' (U28.1)'],
['• a photography', '(U28.2)'],
['• a document confirming the state duty payment', '(U28.6)'],
['• a document confirming the necessary subsistence of', '(U28.4)'],
['• a statement on punishability issued by a competent institution of the citizenship or the host country (for a foreigner more than 14 years old), if a foreigner has resided in that country longer than 12 months', '(U28.3)'],
['• a document certifying the origin of the Latvian or Liv', '(R9.1.2)'],
['• copies of documents confirming relationship', '(U Part IV)'],
['• marriage approving document', '(U39)'],
['• a permission notarially approved or signed in the presence of an officer of the administrative body or representation for a child to enter the Republic of Latvia of the other parent who is not travelling to Latvia. If practical guardianship is carried out by the parent who is entering Latvia together with the child and there are no restrictions as concern the change of the place of residence without the consent of the other parent – a decision of the respective court', '(U40.2)'],
['• a business plan approved by a sworn auditor for the envisaged operation period', '(U44.1)'],
['• documents confirming sufficient personal financial means to commence the activities stipulated in the business plan', '(U44.2)'],
['• a permit (a licence, a certificate) if you are engaged in activities which require these documents', '(U44.3)'],
['• a business plan checked by a sworn auditor if the former business plan has already been fulfilled (starting with the second year of operation)', '(U44.4)'],
['• a copy of the registration certificate of a foreign employer', '(U47.1)'],
['• a letter of a foreign employer where it is certified that the foreigner is transferred for the performance of services in the Republic of Latvia', '(U47.2)'],
['• a document issued by a foreign competent authority attesting to the fact that the foreign merchant has been registered abroad at least for five years prior to submitting the application for a residence permit, has employed more than 50 employees in the past year, the net turnover thereof exceeds 10 million euros and he has no tax debts', '(U49/1)'],
['• a business plan certifying that the business strategy of the foreign merchant for operating in the Republic of Latvia will promote the development of production or service sector', '(U49/1)'],
['• forwarding letter from a foreign religious organization', '(U55)'],
['• a copy of an ordination document or a substituting document', '(U55)'],
['• a document confirming that the foreigner participates in implementation of such international agreement or project, in which the Republic of Latvia, a State institution of direct administration or a derived public person participates', '(U48)'],
['• a certification or a statement from the educational institution on his or her studies indicating the duration of the studies for which the temporary residence permit has to be issued', '(U52)'],
['• a contract on studies in the Republic of Latvia', '(U51)'],
['• a contract for studies in the Republic of Latvia', '(U52)'],
['• a notarial deed or a document signed in the presence of an Office or representative office official, indicating the person responsible for the minor during his/her stay in the Republic of Latvia', '(U43)'],
['• a copy of a State-recognised higher education diploma attesting to the acquisition of the study programme or a certification of the research institution regarding successful completion of the research project', '(U53/1)'],
['• a document confirming the payment for the real estate by non-cash settlement', '(U56.1)'],
['• a document confirming that the foreigner has no real estate tax debts if he or she owns the real estate for more than one year', '(U56.2)'],
['• the opinion of a certified real estate appraiser on the market value of the particular real estate (if applicable)', '(U56.3)'],
['• a document issued by the credit institution of the Republic of Latvia certifying that the foreigner has subordinated liabilities to the credit institution of the Republic of Latvia in amount of at least 280 000 euro and the term of transaction is at least five years', '(U49)'],
['• submit a signed application for the purchase of interest-free State securities; additional details will be included with the temporary residence permit', '(U73.4)'],
['• a contract for medical treatment in a hospital or a rehabilitation centre', '(U54)'],
['• documents confirming the citizenship of Latvia', '(U58)'],
['• free form application with a descriptive information regarding the innovative product which he or she plans to create or develop and information regarding the planned commercial activities in the next three years', '(48/1)'],
['• when requesting the first temporary residence permit a payment of 10 000 euro has to be made into State budget after a positive decision; the payment details will be included with the temporary residence permit', '(I23.1.28)'],
['• when requesting the first temporary residence permit a payment of 5% from the value of the immovable property has to be made into State budget after a positive decision; the payment details will be included with the temporary residence permit', '(I23.1.29e)'],
['• when requesting the first temporary residence permit a payment of 25 000 euro has to be made into State budget after a positive decision; the payment details will be included with the temporary residence permit', '(I23.1.30)'],
['• when requesting the first temporary residence permit a payment of 38 000 euro has to be made into State budget after a positive decision; the payment details will be included with the temporary residence permit', '(I23.1.31)']
]

var time =[
['• up to 1 year','',''],
['• up to 1 year (5 years if joining a convent)','',''],
['• up to 2 years (4 years if representing an airline)','',''],
['• up to 3 years','',''],
['• up to 5 years','',''],
['• up to 6 months in 1 year','',''],
['• up to 9 months','',''],
['• up to 90 days in 6 months','',''],
['• the study time','',''],
['• the study time plus 4 months','',''],
['• the time of employment','',''],
['• the time of the project','',''],
['• the time of treatment','',''],
['• permanently','',''],
["• when submitting documents for the first time - a temporary residence permit for one year", "• when submitting documents for the second time - a temporary residence permit for four years", "• when submitting documents for the third time - a permanent residence permit"]
]

function canada() {
  sessionStorage.setItem('spec', '0');
}

function newzealand() {
  sessionStorage.setItem('spec', '1');
}

function world() {
  sessionStorage.setItem('spec', '2');
}

function special() {
  if (sessionStorage.getItem('spec')=='0') {document.getElementById('canada').style.display = 'block'; }
  if (sessionStorage.getItem('spec')=='1') {document.getElementById('newzealand').style.display = 'block';}
}



function pensioner() {
  //take out "pensioner of a visa-free country" if a person comes from unlisted countries
  if (sessionStorage.getItem('pass')=='0') {document.getElementById('type26').style.display = 'none'; }}


function title() {
  document.getElementById("title").innerHTML = sessionStorage.getItem('name');
  document.getElementById("fullname").innerHTML = fullname[sessionStorage.getItem('type')];
  document.getElementById("em").innerHTML = embassy[sessionStorage.getItem('embassy')];
  sub = subsistence[sessionStorage.getItem('subsistence')];
  //take out criminal record if a person comes from listed countries
  if (sessionStorage.getItem('pass')!='0') {document.getElementById('r5').style.display = 'none'; }

  //set of requirements for each type//
  if (sessionStorage.getItem('type')=='0') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r7').innerHTML= rules[7][0]; document.getElementById('r9').innerHTML= rules[9][0]; }
  if (sessionStorage.getItem('type')=='1') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r7').innerHTML= rules[7][0]; }
  if (sessionStorage.getItem('type')=='10') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r23').innerHTML= rules[23][0]; }
  if (sessionStorage.getItem('type')=='11') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; }
  if (sessionStorage.getItem('type')=='12') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; }
  if (sessionStorage.getItem('type')=='13') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; }
  if (sessionStorage.getItem('type')=='14') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r10').innerHTML= rules[10][0]; document.getElementById('r11').innerHTML= rules[11][0]; document.getElementById('r12').innerHTML= rules[12][0]; document.getElementById('r13').innerHTML= rules[13][0]; }
  if (sessionStorage.getItem('type')=='15') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r14').innerHTML= rules[14][0]; document.getElementById('r15').innerHTML= rules[15][0]; }
  if (sessionStorage.getItem('type')=='16') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r10').innerHTML= rules[10][0]; document.getElementById('r11').innerHTML= rules[11][0]; document.getElementById('r12').innerHTML= rules[12][0]; document.getElementById('r13').innerHTML= rules[13][0]; }
  if (sessionStorage.getItem('type')=='17') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r16').innerHTML= rules[16][0]; document.getElementById('r17').innerHTML= rules[17][0]; }
  if (sessionStorage.getItem('type')=='18') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; }
  if (sessionStorage.getItem('type')=='19') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; }
  if (sessionStorage.getItem('type')=='2') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r7').innerHTML= rules[7][0]; }
  if (sessionStorage.getItem('type')=='20') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r34').innerHTML= rules[34][0]; }
  if (sessionStorage.getItem('type')=='21') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r26').innerHTML= rules[26][0]; document.getElementById('r27').innerHTML= rules[27][0]; document.getElementById('r28').innerHTML= rules[28][0]; document.getElementById('r35').innerHTML= rules[35][0]; }
  if (sessionStorage.getItem('type')=='22') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r29').innerHTML= rules[29][0]; document.getElementById('r36').innerHTML= rules[36][0]; }
  if (sessionStorage.getItem('type')=='23') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r30').innerHTML= rules[30][0]; document.getElementById('r37').innerHTML= rules[37][0]; }
  if (sessionStorage.getItem('type')=='24') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r31').innerHTML= rules[31][0]; }
  if (sessionStorage.getItem('type')=='25') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r18').innerHTML= rules[18][0]; document.getElementById('r19').innerHTML= rules[19][0]; }
  if (sessionStorage.getItem('type')=='26') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; }
  if (sessionStorage.getItem('type')=='27') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r33').innerHTML= rules[33][0]; }
  if (sessionStorage.getItem('type')=='28') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r25').innerHTML= rules[25][0]; }
  if (sessionStorage.getItem('type')=='29') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; }
  if (sessionStorage.getItem('type')=='3') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r8').innerHTML= rules[8][0]; }
  if (sessionStorage.getItem('type')=='30') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r20').innerHTML= rules[20][0]; }
  if (sessionStorage.getItem('type')=='4') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r7').innerHTML= rules[7][0]; }
  if (sessionStorage.getItem('type')=='5') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r6').innerHTML= rules[6][0]; }
  if (sessionStorage.getItem('type')=='6') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r32').innerHTML= rules[32][0]; }
  if (sessionStorage.getItem('type')=='7') { document.getElementById('r2').innerHTML= rules[2][0]; }
  if (sessionStorage.getItem('type')=='8') { document.getElementById('r0').innerHTML= rules[0][0]; document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r22').innerHTML= rules[22][0]; }
  if (sessionStorage.getItem('type')=='9') { document.getElementById('r2').innerHTML= rules[2][0]; document.getElementById('r4').innerHTML= rules[4][0]+sub; document.getElementById('r5').innerHTML= rules[5][0]; document.getElementById('r21').innerHTML= rules[21][0]; document.getElementById('r24').innerHTML= rules[24][0]; }

  document.getElementById('t0').innerHTML = time[sessionStorage.getItem('time')][0];
  document.getElementById('t1').innerHTML = time[sessionStorage.getItem('time')][1];
  document.getElementById('t2').innerHTML = time[sessionStorage.getItem('time')][2];

}

function goBack() {
  window.history.back();
}
