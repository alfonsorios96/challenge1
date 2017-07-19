'use strict';

var recentSearches = [];

/**
 * @description This method saves in the array recentSearches a search.
 * @param none
 */
function saveSearch() {
    var search = document.getElementById('input-looking-for').value;
    recentSearches.push({id: recentSearches.length + 1, data: search});
    document.getElementById('input-looking-for').value = '';
}

function showRecentSearches() {
    var list = document.getElementById('list-searches');
    recentSearches.forEach(function (iterator) {
        addElement(list, iterator.data);
    });
}

function addElement (listElement, valueElement) {
    // create a new li element
    // and give it some content
    var newLi = document.createElement('li');
    var newContent = document.createTextNode(valueElement);
    newLi.appendChild(newContent); //add the text node to the newly created li.
    listElement.appendChild(newLi);
}
