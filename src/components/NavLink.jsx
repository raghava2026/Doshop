import { NavLink as RouterNavLink } from "react-router-dom";
import React from "react";

export const NavLink = React.forwardRef(
  ({ className = "", activeClassName = "", pendingClassName = "", to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          [
            className,
            isActive ? activeClassName : "",
            isPending ? pendingClassName : ""
          ].join(" ")
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";
