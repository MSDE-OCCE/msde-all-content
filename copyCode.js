<script>
function copyCode(name) {
  var owner = 'MSDE-OCCE';
  var repo = 'msde-all-content';
  var path = name + '.html';
  
  $.ajax({
    url: 'https://api.github.com/repos/' + owner + '/' + repo + '/contents/' + path,
    type: 'GET',
    headers: {
      "Accept": "application/vnd.github.v3+json"
    },
    success: function(data) {
      var content = atob(data.content);

      const textArea = document.createElement('textArea');
      textArea.value = content;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Code copied to clipboard!');
	  },
      error: function(error) {
        alert("Code not copied! Error: " + error);
      }
  });
}

function setupButtonOnclicks() {
  var buttons = document.querySelectorAll('.copy-code-btn');

  buttons.forEach(function(button) {
    button.onclick = function() {
      event.preventDefault();
      var githubPath = this.getAttribute('data-github');
      
      if (githubPath) {
        copyCode(githubPath);
      } else {
        alert('No GitHub path specified in the data-github attribute.');
      }
    };
  });
}

window.onload = setupButtonOnclicks;
</script>