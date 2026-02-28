export default function UserSkeleton() {
    return (
        <div className="animate-pulse space-y-4">
            {[1,2,3,4].map((i) => (
                <div key={i} className="h-12 bg-gray-300 rounded"></div>
            ))}
        </div>
    );
}