window.onload = function application() {
    var menuItem = document.getElementById('menu');
    var menuItemShow = 'db';
    var menuItemHide = 'dn';

    // //Set defaults if JS is on.
    menuItem.className = menuItemHide;

    // Set button to click.
    var button = document.getElementById( 'menu-toggle' );

    // Click the button.
    button.onclick = function() {
      // Toggle class "opened". Set also aria-expanded to true or false.
    if ( -1 !== button.className.indexOf( 'opened' ) ) {
      button.className = button.className.replace( ' opened', '' );
      button.setAttribute( 'aria-expanded', 'false' );
      menuItem.className = menuItemHide;
    } else {
       button.className += ' opened';
      button.setAttribute( 'aria-expanded', 'true' );
      menuItem.className = menuItemShow;
     }
   };
}
