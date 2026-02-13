import { Head } from '@inertiajs/react';

const GuestLayout = ({ children, title = '' }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head title={title} />
      <main className="container mx-auto">
        {children}
      </main>
    </div>
  );
};

export default GuestLayout;