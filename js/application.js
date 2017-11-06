window.onload = function application() {
    var menuItem = document.getElementById('menu');
    var menuButton = document.getElementById('nav-lines');
    var menuButtonOn = 'active';
    var menuButtonOff = '';
    var menuItemShow = 'f6 f-mono dg  grid-3-col bg-red';
    var menuItemHide = 'dn';
    var menuVisibilityFlag = false;

    //Set defaults if JS is on.
    menuItem.className = menuItemHide;


    // Use Service Worker to check preferences
    // Should this be abstracted?
    function checkPreferences(){

    }


    //Click to toggle visibility flag
    menuButton.onclick = function toggleMenu(){
        if (menuVisibilityFlag === true){
            menuVisibilityFlag = false;
            menuButton.className = menuButtonOff;
            menuItem.className = menuItemHide;
        } else if (menuVisibilityFlag === false){
            menuVisibilityFlag = true;
            menuButton.className = menuButtonOn;
            menuItem.className = menuItemShow;
        }
    }
}
