document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('searchBtn').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var searchTerm = decodeURIComponent(new URL(tabs[0].url).searchParams.get("q"));
      searchTerm = searchTerm.replace(/\s/g, '+'); // Replace spaces with '+'
      var searchURL = 'https://github.com/search?q=' + searchTerm + '&type=repositories';
      chrome.tabs.create({ url: searchURL });
    });
  });
});
