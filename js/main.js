'use strict';
// Create a last element property for arrays.
if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

var recentSearches = [];

/**
 * @description This method saves in the array {recentSearches} a search.
 */
function saveSearch() {
    var search = document.getElementById('input-looking-for').value;
    if (recentSearches.length !== 0) {
        recentSearches.push({id: recentSearches.last().id + 1, data: search});
    } else {
        recentSearches.push({id: 0, data: search});
    }
    if (search.length == 0) {
        recentSearches.pop();
    }
    document.getElementById('input-looking-for').value = '';
}

/**
 * @description Show the div with the recomendations.
 */
function showRecentSearches() {
    var textArea = document.getElementById('text-area');
    var sizeRecentSearches = recentSearches.length;
    if (sizeRecentSearches >= 1) {
        textArea.classList.remove('hidden');
        const heightByItem = 30;
        textArea.style.height = (20 + (heightByItem * sizeRecentSearches)).toString() + 'px';
    }
    var list = document.getElementById('list-searches');
    recentSearches.forEach(function (iterator) {
        addSearchItem(list, iterator);
    });
}

/**
 * @description hide the div when losses the focus.
 */
function hideRecentSearches() {
    setTimeout(function() {
        var textArea = document.getElementById('text-area');
        var list = document.getElementById('list-searches');
        textArea.classList.add('hidden');
        list.innerHTML = '';
    }, 300);
}

/**
 * @description Insert a li web element into the ul (list of searches)
 * @param listElement: {id: number, data: string}[] - Array with the recentSearches
 * @param valueElement: The item iterator has display value and id for delete it.
 */
function addSearchItem (listElement, valueElement) {
    var link = '&#09; <a href="#" onclick="removeSearch(' + valueElement.id + ')">Eliminar</a>';
    var newLi = document.createElement('li');
    var newContent = document.createTextNode(valueElement.data);
    newLi.appendChild(newContent);
    newLi.innerHTML += link;
    listElement.appendChild(newLi);
}

/**
 * @description Removes the item was selected.
 * @param id {number} - Id of recent searches.
 */
function removeSearch(id) {
    for(var i = 0; i < recentSearches.length; i++) {
        if (recentSearches[i].id == id) {
            recentSearches.splice(i,1);
            break;
        }
    }
}
