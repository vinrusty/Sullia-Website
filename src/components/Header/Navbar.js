import React, { useCallback, useRef, useState } from "react";
import { Button, Menu, MenuItem, useTheme, IconButton, Toolbar, Box } from "@mui/material";
import { Search, KeyboardArrowDown } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {Link as MuiLink} from "@mui/material";

export const MENU_ITEMS = [
  {
    title: "Home",
    pathname: "/"
  },
  {
    title: "About Sullia",
    // pathname: "/about",
    subMenus: [
      {
        title: "History",
        pathname: "/about/history"
      },
      {
        title: "Team",
        pathname: "/about/team"
      },
      {
        title: "Vison & Mission",
        pathname: "/about/vision-mission"
      },
    ]
  },
  {
    title: "Development",
    // pathname: "/development",
    subMenus: [
      {
        title: "Before and After",
        pathname: "/about/before-after"
      },
      {
        title: "Sullia View",
        pathname: "/about/sullia-view"
      },
      {
        title: "Useful Links",
        pathname: "/about/useful-links"
      },
    ]
  },
  {
    title: "Future Plan",
    pathname: "/future-plan"
  },
  {
    title: "Media",
    // pathname: "/media",
    subMenus: [
      {
        title: "Events",
        pathname: "/about/events"
      },
      {
        title: "Press Release",
        pathname: "/about/press-release"
      },
      {
        title: "Photos Gallery",
        pathname: "/about/photos-gallery"
      },
      {
        title: "Video Gallery",
        pathname: "/about/video-gallery"
      },
    ]
  },
  {
    title: "Contact Us",
    pathname: "contact-us"
  },
];

const DropdownMenuItem = ({
  menuItem,
  menuShowingDropdown,
  setMenuShowingDropdown
}) => {
  const { title, subMenus } = menuItem;
  const buttonRef = useRef(null);

  const showSubMenu = useCallback(() => {
    setMenuShowingDropdown(menuItem.title);
  }, [menuItem.title, setMenuShowingDropdown]);

  const closeSubMenu = useCallback(() => {
    setMenuShowingDropdown("");
  }, [setMenuShowingDropdown]);

  const subMenusNodes = subMenus?.map((subMenuItem) => {
    return (
      <MuiLink component={Link} to={subMenuItem.pathname} underline="none">
        <MenuItem
          key={subMenuItem.title}
        >
          {subMenuItem.title}
        </MenuItem>

      </MuiLink>
    );
  });

  const theme = useTheme();

  return (
    <>
      <Button
        id={`menuItem-${title}`}
        sx={{ zIndex: theme.zIndex.modal + 1 }}
        ref={buttonRef}
        onClick={() => {
          if (!menuItem.subMenus) {
            
          }
        }}
        onMouseLeave={() => {
          setMenuShowingDropdown("");
        }}
        onMouseEnter={() => {
          if (menuItem.subMenus) {
            showSubMenu();
            return;
          }
        }}
        LinkComponent={Link}
        to={menuItem.pathname}
      >
        {title} {menuItem.subMenus ? <KeyboardArrowDown /> : ""}
      </Button>
      <Menu
        PaperProps={{
          onMouseEnter: () => {
            showSubMenu();
          },
          onMouseLeave: () => {
            closeSubMenu();
          }
        }}
        anchorEl={buttonRef.current}
        open={menuShowingDropdown === menuItem.title}
        onClose={closeSubMenu}
      >
        {subMenusNodes}
      </Menu>
    </>
  );
};

const Navbar = () => {
  const [menuShowingDropdown, setMenuShowingDropdown] = useState("");

  const handleMenuShowingDropdownChange = useCallback((menuTitle) => {
    setMenuShowingDropdown(menuTitle);
  }, []);

  const menuItems = MENU_ITEMS.map((menuItem) => {
    return (
      <DropdownMenuItem
        key={menuItem.title}
        menuItem={menuItem}
        menuShowingDropdown={menuShowingDropdown}
        setMenuShowingDropdown={handleMenuShowingDropdownChange}
      />
    )
  });

  return (
    <>
    <Toolbar>
           <Box sx={{display: "flex", marginLeft: "auto"}}>
              {menuItems}
              <IconButton>
                  <Search />
              </IconButton>
           </Box>
       </Toolbar>
    </>
  );
};

export default Navbar;
