import { usePage } from '@inertiajs/react';
import React from 'react'

const Index = () => {
      const { auth } = usePage().props;
  return (
    <div>
      Users
    </div>
  )
}

export default Index
