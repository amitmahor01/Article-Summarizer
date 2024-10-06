const btn = document.getElementById('btn');
const summaryOut = document.getElementById('summarize-url-output');

btn.addEventListener('click',()=>{
    const inputUrl=document.getElementById('summarize-url').value;

    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${inputUrl}&lang=en&engine=2`;


const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'abcde', // Your api key 
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};
fetch(url, options)
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();  // Convert the response to JSON
  })
  .then(data => {
    summaryOut.innerText= data?.summary;  // Handle the data from the API
    summaryOut.style.opacity='1';
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

})




