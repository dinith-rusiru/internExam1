import PropTypes from "prop-types";

export default function Card({
  children,
  className = "",
  gradient = false,
  hover = true,
}) {
  const baseClasses = "bg-white rounded-xl shadow-lg overflow-hidden";
  const gradientClasses = gradient
    ? "bg-gradient-to-br from-white via-blue-50 to-purple-50"
    : "";
  const hoverClasses = hover
    ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    : "";

  return (
    <div
      className={`${baseClasses} ${gradientClasses} ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  gradient: PropTypes.bool,
  hover: PropTypes.bool,
};

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`px-6 py-4 border-b border-gray-100 ${className}`}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function CardBody({ children, className = "" }) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`px-6 py-4 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
