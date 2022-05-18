import React, { useState } from 'react'

import AddShopLayout from './AddShopLayout'
import DeleteShopLayout from './DeleteShopLayout'

const AdminPanel = () => {
  const [showAddShopLayout, setShowAddShopLayout] = useState(false)
  const [showDeleteShopLayout, setShowDeleteShopLayout] = useState(true)

  return <>
  <h1>Admin Panel</h1>
  <div className="adminPanel">
      {showAddShopLayout && <AddShopLayout />}
     <DeleteShopLayout />
  </div>
  
  </>
}

export default AdminPanel