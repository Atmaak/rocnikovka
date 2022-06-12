import React, { useState } from 'react'
import EditLayout from './EditLayout'
import ShopLayout from './ShopLayout'

const AdminPanel = () => {
  
  return <>
  <h1>Admin Panel</h1>
  <div className="adminPanel">
      <ShopLayout />
      <EditLayout />
  </div>
  
  </>
}

export default AdminPanel