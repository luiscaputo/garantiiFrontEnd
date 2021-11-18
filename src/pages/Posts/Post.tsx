import { Link } from "react-router-dom";

interface ListProps {
  route: string;
  title: string;
  desc: string;
  className: string;
}

export function Post({ className, route, title, desc }: ListProps) {
  return (
    <div className={className}>
      <Link to={`${route}`}>
        <h1>{title}</h1>
      </Link>
      <p>{desc}</p>
    </div>
  );
}
