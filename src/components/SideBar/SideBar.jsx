import "./SideBar.css";
import avatar from "../../assets/avatar.png";

function SideBar() {
  return (
    <aside className="sidebar">
      <img
        src={avatar}
        alt="Moise Michaud's avatar"
        className="sidebar__avatar"
      />
      <p className="sidebar__username">Moise Michaud</p>
    </aside>
  );
}

export default SideBar;
