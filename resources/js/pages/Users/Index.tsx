import { usePage } from '@inertiajs/react';
import React from 'react'

const Index = () => {
      const { auth } = usePage().props;
  return (
    <div>
      cest {auth.user.name}  qui est en ligne
    </div>
  )
}

export default Index
