// Sample table column
// <tr>
// 		<td width="15">&nbsp;&nbsp;</td>
// 		<td width="100%">
// 		•&nbsp;
// 		<a href="preview_course_nopop.php?catoid=20&amp;coid=152422" target="_blank" onclick="showCourse('20', '152422',this, 'a:2:{s:8:~location~;s:8:~template~;s:28:~course_program_display_field~;N;}'); return false;">ACC 279&nbsp;-&nbsp;Special Topics </a>
// 		</td>
// 	</tr>


// start at get by class block_content
// We will need to grab the elements tr which gives us an array of tr's.  
// Then we want to iterate through that array and grab the td's and store them in an array.  
// Then finally we iterate through the list of td's and find the a tags, which we then 'click'.





// location.href = "http://www.example.com/test";
//http://catalog.emich.edu/content.php?catoid=20&catoid=20&navoid=4199&filter%5Bitem_type%5D=3&filter%5Bonly_active%5D=1&filter%5B3%5D=1&filter%5Bcpage%5D=             7              #acalog_template_course_filter

function expandAnchors() {
	// the sixth table in is the one that we want
	var table1 = document.querySelectorAll("table")[6];
	//grab the first td which is nested in a few elements
	var table2 = table1.querySelectorAll('table')[2];
	//applicable trlist starts at index one.  trList[0] is some other shit
	var trList = table2.querySelectorAll('tr');
	// only run for loop to trList[trList.length-3] clicking all the wayyyyy
	for (i=1; i++; i<trList.length-2) {
		trList[i].querySelectorAll('a')[0].click(); 
	}
} 







http://catalog.emich.edu/content.php?catoid=20&catoid=20&navoid=4199&filter%5Bitem_type%5D=3&filter%5Bonly_active%5D=1&filter%5B3%5D=1&filter%5Bcpage%5D=10#acalog_template_course_filter

//use this for onclicks
// var elem = document.getElementById("linkid");
// if (typeof elem.onclick == "function") {
//     elem.onclick.apply(elem);
// }