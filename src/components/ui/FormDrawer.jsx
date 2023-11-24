import { Drawer } from 'antd'
import { useEffect, useState } from 'react';

const FormDrawer = ({children, onClose, openDrawer}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(openDrawer)
  },[openDrawer])

  return (
      <Drawer className="mc-drawer" placement="right" onClose={onClose} open={open} destroyOnClose={true}>
        {children}
      </Drawer>
  )
}

export default FormDrawer