function setPreview() {
	let text = 'Listen friends. This is so so important to me, and even though we do talk about it, I don’t think we talk about it as thoroughly as I would like.';
	document.getElementById('preview').innerHTML = text;
}

function setLink() {
	let title = '6 guidelines to the art of saying no';
	let link = title.link('guidelines-to-no.html');
	document.getElementById('link').innerHTML = link;
}

function setLink2() {
	let title = "It's ok to be scared of relationships. They're scary.";
	let link = title.link('scared-of-relationships.html');
	document.getElementById('link2').innerHTML = link;
}

function setPreview2() {
	let text = 'You know what? I’m going to start right off with a truly mind-blowing fact: ';
	document.getElementById('preview2').innerHTML = text;
}

function setFooter() {
	let text = "This blog belongs to Dominique Salman. Please don't steal it. This blog is published using GitHub pages. This site is under construction and not yet complete.";
	document.getElementById('footer').innerHTML = text;
}
