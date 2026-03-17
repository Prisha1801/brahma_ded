import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

// ─── Desktop: third-level nested dropdown ───────────────────────────────────
const NestedDropdown = ({ item, onClose }) => {
  const [open, setOpen] = useState(false);
  const nestedRef = useRef(null);

  const handleToggle = (e) => { e.preventDefault(); setOpen(!open); };
  const handleClose = () => { setOpen(false); onClose(); };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (nestedRef.current && !nestedRef.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={nestedRef}>
      <button
        onClick={handleToggle}
        className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
      >
        <span>{item.title}</span>
        <FaChevronDown className={`text-[8px] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && item.items && (
        <ul className="absolute left-full top-0 ml-1 w-auto bg-white border border-gray-200 shadow-md z-50 rounded-md">
          {item.items.map((subItem, index) => (
            <li key={index}>
              {subItem.external ? (
                <a href={subItem.link} target="_blank" rel="noopener noreferrer" onClick={handleClose}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                  {subItem.label}
                </a>
              ) : (
                <Link to={subItem.link} onClick={handleClose}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                  {subItem.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ─── Desktop: top-level dropdown ────────────────────────────────────────────
const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <li className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-0.5 px-3 py-2 text-[12px] xl:text-[13px] font-semibold text-gray-800 hover:text-green-600 uppercase tracking-wide transition-colors"
      >
        {title}
        <FaChevronDown className={`text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && items.length > 0 && (
        <ul className="absolute left-0 top-full mt-1 w-auto min-w-64 whitespace-nowrap bg-white border border-gray-200 shadow-md z-[80] rounded-md">
          {items.map((item, index) => (
            <li key={index}>
              {item.items ? (
                <NestedDropdown item={item} onClose={handleClose} />
              ) : item.external ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={handleClose}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                  {item.label}
                </a>
              ) : (
                <Link to={item.link} onClick={handleClose}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

// ─── Mobile: recursive accordion item ───────────────────────────────────────
const MobileNavItem = ({ item, closeMobileMenu, depth = 0 }) => {
  const [open, setOpen] = useState(false);

  if (item.items) {
    return (
      <li>
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-between w-full py-2 text-sm font-semibold text-gray-800 hover:text-green-700 transition-colors
            ${depth === 0 ? "uppercase tracking-wide border-b border-gray-100" : "pl-3 border-l border-gray-200 font-medium"}`}
        >
          <span>{item.title || item.label}</span>
          <FaChevronDown className={`text-[10px] transition-transform duration-200 mr-1 ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <ul className={`mt-1 space-y-1 ${depth === 0 ? "pl-3" : "pl-4"}`}>
            {item.items.map((child, i) => (
              <MobileNavItem key={i} item={child} closeMobileMenu={closeMobileMenu} depth={depth + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      {item.external ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMobileMenu}
          className={`block py-1.5 text-sm text-gray-700 hover:text-green-700 transition-colors
            ${depth > 0 ? "pl-3 border-l border-gray-200" : ""}`}
        >
          {item.label}
        </a>
      ) : (
        <Link
          to={item.link}
          onClick={closeMobileMenu}
          className={`block py-1.5 text-sm text-gray-700 hover:text-green-700 transition-colors
            ${depth > 0 ? "pl-3 border-l border-gray-200" : ""}`}
        >
          {item.label}
        </Link>
      )}
    </li>
  );
};

// ─── Mobile: top-level group accordion ──────────────────────────────────────
const MobileGroup = ({ group, closeMobileMenu }) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2 text-sm font-bold text-gray-900 uppercase tracking-wide border-b border-gray-100 hover:text-green-700 transition-colors"
      >
        <span>{group.title}</span>
        <FaChevronDown className={`text-[10px] transition-transform duration-200 mr-1 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="pl-3 mt-1 space-y-1">
          {group.items.map((item, i) => (
            <MobileNavItem key={i} item={item} closeMobileMenu={closeMobileMenu} depth={1} />
          ))}
        </ul>
      )}
    </li>
  );
};

// ─── Main Navbar ─────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const stickyStartYRef = useRef(0);
  const isStickyRef = useRef(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const updateNavMetrics = () => {
      if (navRef.current) {
        const currentNavHeight = navRef.current.offsetHeight;
        setNavHeight(currentNavHeight);
        if (!isStickyRef.current) {
          const navTop = navRef.current.getBoundingClientRect().top + window.scrollY;
          stickyStartYRef.current = navTop + currentNavHeight;
        }
      }
    };
    const updateStickyState = () => {
      const shouldStick = window.scrollY >= stickyStartYRef.current;
      if (shouldStick !== isStickyRef.current) {
        isStickyRef.current = shouldStick;
        setIsSticky(shouldStick);
      }
    };
    updateNavMetrics();
    updateStickyState();
    window.addEventListener("scroll", updateStickyState, { passive: true });
    window.addEventListener("resize", updateNavMetrics);
    window.addEventListener("resize", updateStickyState);
    return () => {
      window.removeEventListener("scroll", updateStickyState);
      window.removeEventListener("resize", updateNavMetrics);
      window.removeEventListener("resize", updateStickyState);
    };
  }, []);

  const navData = [
    {
      title: "About Us",
      items: [
        { label: "President Desk", link: "/president-desk" },
        { label: "General Secretary Desk", link: "/general-secretary-desk" },
        { label: "Vice President Desk", link: "/vice-president-desk" },
        { label: "Campus Director Desk", link: "/campus-director-desk" },
        { label: "Board Member", link: "/board-member" },
        { label: "Principal Desk", link: "/principal-desk" },
        { label: "Our Vision/Mission", link: "/our-vision-mission" },
      ],
    },
    {
      title: "GOVERNANCE",
      items: [
        { label: "Student Grievances", link: "/student-grievances" },
        { label: "Anti-Ragging Committee", link: "/anti-ragging-committee" },
        { label: "Womens Committee", link: "/womens-committee" },
        { label: "Anti Harassment Committee", link: "/anti-harassment-committee" },
        { label: "Anti - Sexual Committee", link: "/anti-sexual-committee" },
        { label: "SC/ST Committee", link: "/sc-st-committee" },
        { label: "Entrepreneurship Committee", link: "/entrepreneurship-committee" },
        { label: "Social Life Committee", link: "/social-life-committee" },
        { label: "Vishakha Committee", link: "/vishakha-committee" },
        { label: "Emergency Committee", link: "/emergency-committee" },
      ],
    },
    {
      title: "Admissions",
      items: [
        { label: "Eligibility Criteria", link: "/eligibility-criteria" },
        { label: "Required Documents", link: "/required-documents" },
      ],
    },
    {
      title: "FACILITIES",
      items: [
        { label: "Hostel", link: "/hostel" },
        { label: "Food Facilitie", link: "/food" },
        { label: "Sports Facilitie", link: "/sports" },
        { label: "Medical Facilitie", link: "/medical" },
      ],
    },
    {
      title: "Campus Life",
      items: [
        { label: "Brahmutsav", link: "/brahmutsav" },
        { label: "Academic & Achievements", link: "/academic-achievements" },
        { label: "Theme Days", link: "/theme-days" },
        { label: "Extracurriculum Activities", link: "/extracurriculum-activities" },
      ],
    },
  ];

  return (
    <>
      {isSticky && <div style={{ height: navHeight }} />}
      <header
        ref={navRef}
        className={`w-full bg-white text-gray-800 shadow-sm border-b border-gray-200 transition-all duration-200 ${
          isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative"
        }`}
      >
        <nav className="w-full px-6 xl:px-10 py-3 flex items-center">

          {/* LEFT LOGO */}
          <div className="shrink-0">
            <Link to="/">
              <img src="/logo/left-logo.png" alt="Logo" className="h-10 md:h-12 xl:h-14" />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="flex-1 hidden xl:flex items-center justify-center px-2">
            <ul className="flex items-center space-x-1 text-[12px] xl:text-[13px] font-semibold uppercase tracking-wide whitespace-nowrap">
              <li>
                <Link to="/" className="px-1.5 text-gray-800 hover:text-green-600 transition-colors">
                  Home
                </Link>
              </li>
              {navData.slice(0, 2).map((group, idx) => (
                <Dropdown key={idx} title={group.title} items={group.items} />
              ))}
              <li>
                <Link to="/faculty" className="px-1.5 text-gray-800 hover:text-green-600 transition-colors">
                  Faculty
                </Link>
              </li>
              {navData.slice(2).map((group, idx) => (
                <Dropdown key={idx} title={group.title} items={group.items} />
              ))}
              <li>
                <Link to="/contact" className="px-1.5 text-gray-800 hover:text-green-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* HAMBURGER — only visible on mobile */}
          <div className="flex-1 xl:flex-none flex items-center justify-end xl:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl p-2 text-gray-800 hover:text-green-600 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </nav>

        {/* MOBILE OVERLAY */}
        <div
          className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 xl:hidden ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMobileMenu}
        />

        {/* MOBILE SIDE MENU */}
        <div
          className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[70] shadow-2xl transition-transform duration-300 ease-in-out transform xl:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-5 flex flex-col h-full overflow-y-auto">

            {/* Mobile header */}
            <div className="flex justify-between items-center mb-6">
              <img src="/logo/left-logo.png" alt="Logo" className="h-10" />
              <button onClick={closeMobileMenu} className="text-2xl text-gray-700 hover:text-gray-900">
                <FaTimes />
              </button>
            </div>

            <ul className="space-y-1">

              {/* Home */}
              <li>
                <Link to="/" onClick={closeMobileMenu}
                  className="block py-2 text-sm font-bold text-gray-900 hover:text-green-700 uppercase tracking-wide border-b border-gray-100">
                  Home
                </Link>
              </li>

              {/* About Us + Governance */}
              {navData.slice(0, 2).map((group, idx) => (
                <MobileGroup key={idx} group={group} closeMobileMenu={closeMobileMenu} />
              ))}

              {/* Faculty */}
              <li>
                <Link to="/faculty" onClick={closeMobileMenu}
                  className="block py-2 text-sm font-bold text-gray-900 hover:text-green-700 uppercase tracking-wide border-b border-gray-100">
                  Faculty
                </Link>
              </li>

              {/* Admissions + Facilities + Campus Life */}
              {navData.slice(2).map((group, idx) => (
                <MobileGroup key={idx} group={group} closeMobileMenu={closeMobileMenu} />
              ))}

              {/* Contact */}
              <li>
                <Link to="/contact" onClick={closeMobileMenu}
                  className="block py-2 text-sm font-bold text-gray-900 hover:text-green-700 uppercase tracking-wide border-b border-gray-100">
                  Contact
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;