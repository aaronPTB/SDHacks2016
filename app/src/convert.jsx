import pdfUtil from 'pdf-to-text';

function convert(pdf_path) {
	pdfUtil.pdfToText(pdf_path, function(err, data) {
		var dates = [];
		var indices = [];
		re = /\d{1,2}\/\d{1,2}\/\d{0,4}/g;
		while ((match = re.exec(data)) != null) {
			len = dates.length-1;
			dates.push(match[0]);
			indices.push(match.index);
		}
		var last = indices[indices.length-1];
		var text = '{ "deadlines" : [';
		indices.push(data.indexOf('\n',last));

		output = []
		for (i=0; i<dates.length; i++) {
			start = dates[i].length + indices[i];
			last = data.indexOf('\n',start);
			text = data.substring(start, last).trim().replace(/\s+/g," ");
			output.push({date: dates[i], desc: text});
		}
		return JSON.stringify(output);
	});
}

// var getWeeks = function(data) {
// 	var weeknums = [];
// 	var indices = [];
// 	re = /(\d{1,2}) +/g;
// 	while ((match = re.exec(data)) != null) {
// 		len = weeknums.length-1
// 		if (match[1] === '1' & weeknums.length === 0) {
// 			weeknums.push(parseInt(match[1]));
// 			indices.push(match.index);
// 		}
// 		else if (weeknums.length !== 0) {
// 			if (parseInt(match[1]) === weeknums[len]+1) {
// 				weeknums.push(parseInt(match[1]));
// 				indices.push(match.index);
// 			}
// 		}
// 	}
// 	for (i=0; i<indices.length-1; i++) {
// 		console.log(data.substring(indices[i], indices[i+1]));
// 	}
// }

export default convert