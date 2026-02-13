import { Head } from '@inertiajs/react';

const GuestLayout = ({ children, title = '' }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head title={title} />
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default GuestLayout;