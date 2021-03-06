import React from 'react';
import {
  Toolbar,
  MenuItem,
  Menu,
  Typography,
  makeStyles,
  AppBar
} from '@material-ui/core';

import {
  Link,
  withRouter
} from "react-router-dom";

import './Navbar.scss';

// import Authentication from "./Authentication/Authentication";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 999,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Navbar(props) {
  const classes = useStyles();
  // const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none"
  }
  
  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" style={linkStyle} className={classes.title} color="inherit">
              <Typography variant="h6" color="inherit" >
                Interactive Classroom
              </Typography>
            </Link>
            {!props.user && (
              <Typography variant="body2" color="inherit" >
                <Link to="/Login" style={linkStyle} label={props.user ? 'Logout' : 'Login'}>
                  Login
                </Link>
                {" | "}
                <Link to="/Register" style={linkStyle} label={props.user ? 'Logout' : 'Login'}>
                  Register
                </Link>
              </Typography>
            )}
            {props.user && (
              <div>
                <div
                  className="welcome-back"
                  onClick={handleMenu}
                >
                  <Typography
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    Welcome back, { props.user.first_name }!
                  </Typography>
                  {/* <div className="little-avatar">
                    <img src={ props.user.avatar} />
                  </div> */}
                  <div className="arrow-dropdown"></div>
                </div>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    Hi { props.user.first_name },
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/MyGames"
                      style={{textDecoration: "none", color: "rgba(0, 0, 0, 0.87)"}}
                      onClick={handleClose}
                    >
                      My Games
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/newgame"
                      style={{textDecoration: "none", color: "rgba(0, 0, 0, 0.87)"}}
                      onClick={handleClose}
                    >
                      Create Game
                    </Link>
                  </MenuItem>
                  {/* <MenuItem>
                    <Link
                      to="/teacher/:id"
                      style={{textDecoration: "none", color: "rgba(0, 0, 0, 0.87)"}}
                      onClick={handleClose}
                    >
                      Create Room
                    </Link>
                  </MenuItem> */}
                  <MenuItem>
                    <Link 
                      to="/Logout" 
                      style={{textDecoration: "none", color: "rgba(0, 0, 0, 0.87)"}}>
                      Logout
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
  );
}

export default withRouter(Navbar);





// export default function MenuListComposition() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   return (
//     <div className={classes.root}>
      
//       <div>
//         <Button
//           ref={anchorRef}
//           aria-controls={open ? 'menu-list-grow' : undefined}
//           aria-haspopup="true"
//           onClick={handleToggle}
//         >
//           Toggle Menu Grow
//         </Button>
//         <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    
                  
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </div>
//     </div>
//   );
// }