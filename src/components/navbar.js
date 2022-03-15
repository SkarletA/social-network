export default function loadNavbar() {
  const header = document.createElement('section');
  header.innerHTML = `<navbar class="nav-bar">
    <div class="nav-bar-container">
    <form action="">
      <input class="search-in" type="text" placeholder="Buscar en Mapask">
      <img class="search" src='https://svgshare.com/i/fAN.svg' title='Search' />
    </form>
    <ul>
      <li><a href="#" data-path="/home"><img class="mapask" src='https://svgshare.com/i/f6U.svg'
            title='Home' /></a>
      </li>
    </ul>
    <ul class="icons-bar">
      <li><a  data-path="/src/"><img class="log-out" src='https://svgshare.com/i/fAy.svg' title='LogOut' /></a></li>
      <li><a  id="navHome" data-path=""><img class="notifications" src='https://svgshare.com/i/fBy.svg' title='Notifications' /></a></li>
      <li><a  id="navProfile" data-path="/profile"><img class="img-profile" src='https://svgshare.com/i/f5r.svg'
            title='Profile' /></a></li>
    </ul>
    </div>
  </navbar>`;
  return header;
}
