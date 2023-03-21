import { Menu, MenuItem } from '@mui/material'
import React from 'react'

const DropDownMenu = ({anchor, open, values, handleClose}) => {
  return (
    <div>
        <Menu anchorEl={anchor} open={open} onClose={handleClose}>
            {
                values && values.map((value, i) => (
                    <MenuItem onClick={handleClose} key={i}>
                      {value}
                    </MenuItem>
                ))
            }
        </Menu>
    </div>
  )
}

export default DropDownMenu