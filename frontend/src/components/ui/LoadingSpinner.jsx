export default function LoadingSpinner({ size = "md", color = "primary" }) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  const colorClasses = {
    primary: "border-primary-500",
    secondary: "border-secondary-500",
    accent: "border-accent-500",
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div
          className={`${sizeClasses[size]} ${colorClasses[color]} border-4 border-t-transparent rounded-full animate-spin`}
        ></div>
        <div
          className={`absolute inset-0 ${sizeClasses[size]} border-4 border-transparent border-t-gray-200 rounded-full animate-ping`}
        ></div>
      </div>
    </div>
  );
}
