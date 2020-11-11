// ==UserScript==
// @name        open jira links in new window
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This little user script will append "Open in new window" to every link in your jira tickets. CONFSERVER-11194 - https://jira.atlassian.com/browse/CONFSERVER-11194 
// @author       nemnesic@gmail.com
// @match        ADD_YOUR_JIRA_URL_HERE/*
// @require      https://code.jquery.com/jquery-3.5.1.js
// @grant        none
// ==/UserScript==

$(document).ready(function() {
 $('a[data-renderer-mark="true"]').each(function(i, obj) {
     var link = obj.innerText;
     $(this).append(' | <a class="my-opener" style="color:#FF0000;" target="_blank" href="'+link+'">Open in new window</a>');
});
});