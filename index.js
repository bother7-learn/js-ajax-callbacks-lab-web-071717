$(document).ready(function (){
  $('#ok').click(function() {
    searchRepositories()
    })

});

function displayError(error){
  const errordiv = document.getElementById("errors")
  errordiv.innerHTML = "error"
}

function showCommits(data){
  // debugger
  // let string = ""
  // datamine.items.forEach(function(item){
  //   string += `${item.name} `
  // })
  // let detaildiv = document.getElementById("details")
  // detaildiv.innerHTML = string

  $.get(`https://api.github.com/repos/${data.dataset.owner}/${data.dataset.repository}/commits`, function(data) {
    var details = document.getElementById("details")
    details.innerHTML = `${data[0].sha}`
  }).fail(function(error) {
    displayError(error)
    });
}

function searchRepositories(){
  let searchstring = $('#searchTerms').val();
  console.log(searchstring)
  $.get(`https://api.github.com/search/repositories?q=${searchstring}`, function(data) {
    var results = document.getElementById("results")
    searchstring = searchstring.charAt(0).toUpperCase() + searchstring.slice(1);
    results.innerHTML = `${searchstring}`
    const datamine = data
    // showCommits()
  }).fail(function(error) {
    displayError(error)
    });
}
