import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterIcon from '@mui/icons-material/Filter'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'



const Menu_Styles ={
  color: 'primary.main',
  backgroundColor: 'white',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root':{
    color: 'primary.main'
  },
  '&:hover':{
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: 2,
      overflowX: 'auto',
      border: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip sx={{
          color: 'primary.main',
          backgroundColor: 'white',
          paddingX: '5px',
          borderRadius: '4px',
          '& .MuiSvgIcon-root':{
            color: 'primary.main'
          },
          '&:hover':{
            bgcolor: 'primary.50'
          }
        }}
        icon={<DashboardIcon />}
        label="KennyCode FullStack"
        clickable
        variant="outlined"
        />
        <Chip sx={Menu_Styles}
          icon={<VpnLockIcon />}
          label="Public/Private WorkSpaces"
          clickable
          variant="outlined"
        />
        <Chip sx={Menu_Styles}
          icon={<AddToDriveIcon />}
          label="ADD to Driver Google "
          clickable
          variant="outlined"
        />
        <Chip sx={Menu_Styles}
          icon={<BoltIcon />}
          label="Automation"
          clickable
          variant="outlined"
        />
        <Chip sx={Menu_Styles}
          icon={<FilterIcon />}
          label="Automation"
          clickable
          variant="outlined"
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup
          max={7}
          sx={{
            '& .MuiAvatar-root':{
              width: '34px',
              height: '34px',
              fontSize: '16px'
            }
          }}
        >
          <Tooltip title="Kennycode">
            <Avatar alt="Kennycode" src="https://th.bing.com/th?q=Internet+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247" />
          </Tooltip>
          <Tooltip title="Kennycode">
            <Avatar alt="Kennycode" src="https://th.bing.com/th?q=Internet+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247" />
          </Tooltip>
          <Tooltip title="Kennycode">
            <Avatar alt="Kennycode" src="https://th.bing.com/th?q=Internet+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247" />
          </Tooltip>
          <Tooltip title="Kennycode">
            <Avatar alt="Kennycode" src="https://th.bing.com/th?q=Internet+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247" />
          </Tooltip>
          <Tooltip title="Kennycode">
            <Avatar alt="Kennycode" src="https://th.bing.com/th?q=Internet+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247" />
          </Tooltip>
          <Tooltip title="Kennycode">
            <Avatar alt="Kennycode" src="https://th.bing.com/th?q=Internet+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247" />
          </Tooltip>
          <Tooltip title="Kennycode">
            <Avatar alt="Kennycode" src="https://th.bing.com/th?q=Internet+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247" />
          </Tooltip>
          <Tooltip title="Kennycode">
            <Avatar alt="Kennycode" src="https://th.bing.com/th?q=Internet+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247" />
          </Tooltip>
          <Tooltip title="Kennycode">
            <Avatar alt="Kennycode" src="https://th.bing.com/th?q=Internet+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247" />
          </Tooltip>
          <Tooltip title="Kennycode">
            <Avatar alt="Kennycode" src="https://th.bing.com/th?q=Internet+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247" />
          </Tooltip>
          <Tooltip title="Kennycode">
            <Avatar alt="Kennycode" src="https://th.bing.com/th?q=Internet+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247" />
          </Tooltip>
          <Tooltip title="Kennycode">
            <Avatar alt="Kennycode" src="https://th.bing.com/th?q=Internet+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar