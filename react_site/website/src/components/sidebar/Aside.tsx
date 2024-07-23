import Logo from "./sidebarComponents/Logo"
import Nav from "./sidebarComponents/Nav"

const navItems = [
    { to: "/", icon: "fa-home", label: "Home" },
    { to: "/about", icon: "fa-user", label: "About" },
    { to: "/skills", icon: "fa-list", label: "Skills" },
    { to: "/portfolio", icon: "fa-briefcase", label: "Portfolio" },
    { to: "/contact", icon: "fa-comments", label: "Contact" }
  ];

const Aside: React.FC = () => {
    return(
        <div className="aside">
          <Logo />
          <Nav items={navItems} />
          <div className="nav-toggler">
            <span></span>
          </div>
        </div>
    )

}

export default Aside
