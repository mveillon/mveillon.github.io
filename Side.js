function setPreview() {
	let text = 'I learned the other day that there are people in this world who will lie in bed and eat toast.';
	document.getElementById('preview').innerHTML = text;
}

function setLink() {
	let title = 'Toast in Bed';
	let link = title.link('toast-in-bed.html');
	document.getElementById('link').innerHTML = link;
}

function setLink2() {
	let title = 'Not Just a Man';
	let link = title.link('not-just-a-man.html');
	document.getElementById('link2').innerHTML = link;
}

function setPreview2() {
	let text = 'Anthony, an idiot, wanted to get Chinese food with his girlfriend for lunch.';
	document.getElementById('preview2').innerHTML = text;
}

function setFooter() {
	let text = "This blog belongs to Dominique Salman. Please don't steal it.";
	document.getElementById('footer').innerHTML = text;
}