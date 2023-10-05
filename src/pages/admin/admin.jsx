import { Bars4Icon } from '@heroicons/react/24/outline';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';


const drawerWidth = 240;

function AdminPage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate=useNavigate();
  const {appId}=useParams()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  const Menu=[{
    menu:[
      {text:"DashBoard",icon:"D",to:"/a/admin/"+appId},
      {text:"QR",icon:"Q",to:`/a/admin/${appId}/my-qr`}
     ],},

    {menu:[
      {text:"New Order",icon:"N",to:`/a/admin/${appId}`},
      {text:"Accepted Order",icon:"A",to:`/a/admin/${appId}/my-qr`}
    ]},
    {menu:[
      {text:"Products",icon:"P",to:`/a/admin/${appId}/products`},
    ]}
  ]

  

 


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {Menu.map(({menu},menuIndex)=>(
            <List key={menuIndex}>
          {menu.map((mItem, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={()=>{navigate(mItem.to)}}>
                    <ListItemIcon>
                      {mItem.icon}
                    </ListItemIcon>
                    <ListItemText primary={mItem.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
        </List>
        
        ))
      }
      
        
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Bars4Icon className='w-8 h-8'/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
          <Outlet></Outlet>
      </Box>
    </Box>
  );
}


export default AdminPage;