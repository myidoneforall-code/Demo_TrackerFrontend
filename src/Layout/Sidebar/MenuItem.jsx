// import {Fragment, useMemo} from "react";
// import {Link, useLocation} from "react-router-dom";

// const MenuItem = (props) => {
//     const {title, iconClass, type, path, badgeCount, children: links, name, collapseId} = props;
//     const {pathname} = useLocation();

//     if (type === "title") {
//     return (
//         <li className="menu-title">
//         <span>{title}</span>
//         </li>
//     );
//     }


//     // const isActive = useMemo(() => {
//     //     return (linkPath) => linkPath === pathname
//     // }, [pathname]);
//     const isActive = useMemo(() => {
//   return (linkPath) =>
//     pathname === linkPath ||
//     pathname.startsWith(linkPath + "/");
// }, [pathname]);

//     const checkUnder = (links) => {
//         return (links || []).some(link =>
//             isActive(link.path) || (link.children && link.children.some(link => isActive(link.path)))
//         );
//     };

//     return (
//         <Fragment>
//             {type === "dropdown" ? (
//                 <Fragment>
//                     {title && (
//                         <li className="menu-title">
//                             <span>{title}</span>
//                         </li>
//                     )}
//                     <li>
//                         <Link
//                             data-bs-toggle="collapse"
//                             to={collapseId ? `#${collapseId}` : ""}
//                             aria-expanded={(links || []).some(link => isActive(link.path))}
//                         >
//                             <i className={iconClass}></i>
//                             {name}
//                             {badgeCount && (
//                                 <span
//                                     className={`badge ${
//                                         collapseId === "advance-ui"
//                                             ? "rounded-pill bg-warning"
//                                             : badgeCount === "new"
//                                                 ? "text-light-success"
//                                                 : "text-bg-success"
//                                         } badge-notification ms-2
//                                     `}
//                                 >
//                                   {badgeCount}
//                                 </span>
//                             )}
//                         </Link>
//                         {links && (
//                             <ul
//                                 className={`collapse ${((links || []).some(link => isActive(link.path)) || checkUnder(links)) ? "show" : ""}`}
//                                 id={collapseId}
//                             >
//                                 {(links || []).map((link, index) => {
//                                     return (
//                                         <Fragment key={index}>
//                                             {link.children ? (
//                                                 <li key={index} className="another-level">
//                                                     <Link
//                                                         data-bs-toggle="collapse"
//                                                         to={`#${link.collapseId}`}
//                                                         aria-expanded="false"
//                                                     >
//                                                         {link.name}
//                                                     </Link>
//                                                     <ul className={`collapse  ${link.children.some(link => isActive(link.path)) ? "show" : ""}`}
//                                                         id={link.collapseId}>
//                                                         {link.children.map((underLink, index) => (
//                                                             <li key={index}
//                                                                 className={isActive(underLink.path) ? "active" : ""}>
//                                                                 <Link className="" to={underLink.path}>
//                                                                     {underLink.name}
//                                                                 </Link>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </li>
//                                             ) : (
//                                                 <Fragment>
//                                                     <li key={index} className={isActive(link.path) ? 'active' : ''}>
//                                                         <Link to={link.path}>{link.name}</Link>
//                                                     </li>
//                                                 </Fragment>
//                                             )}
//                                         </Fragment>
//                                     );
//                                 })}
//                             </ul>
//                         )}
//                     </li>
//                 </Fragment>
//             ) : (
//                 <li className="no-sub">
//                     <Link to={path}>
//                         <i className={iconClass}></i>
//                         {name}
//                     </Link>
//                 </li>
//             )}
//         </Fragment>
//     );
// };

// export default MenuItem;
import { Fragment, useMemo, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuItem = (props) => {
  const {
    title,
    iconClass,
    type,
    path,
    badgeCount,
    children: links,
    name,
    collapseId,
  } = props;

  const { pathname } = useLocation();

  /* ================= HOVER (FIXED – per item) ================= */
  const [hoverKey, setHoverKey] = useState(null);

  /* ================= ACTIVE LOGIC (FIXED + NORMALIZED) ================= */
  const isActive = useMemo(
    () => (linkPath) => {
      if (!linkPath) return false;

      // skip external links
      if (
        linkPath.startsWith("http") ||
        linkPath.startsWith("mailto:")
      ) {
        console.log("🚫 SKIP EXTERNAL:", linkPath);
        return false;
      }

      // normalize path
      const normalized = linkPath.startsWith("/")
        ? linkPath
        : `/${linkPath}`;

      const exact = pathname === normalized;
      const sub = pathname.startsWith(normalized + "/");
      const matched = exact || sub;

      console.log(
        matched ? "✅ MATCH" : "❌ NO MATCH",
        "| URL:", pathname,
        "| MENU:", normalized
      );

      return matched;
    },
    [pathname]
  );

  const isParentActive = (items = []) =>
    items.some(
      (item) =>
        isActive(item.path) ||
        (item.children && isParentActive(item.children))
    );

  useEffect(() => {
    console.log("🔵 CURRENT URL:", pathname);
  }, [pathname]);

  /* ================= INLINE STYLES ================= */
  const hoverStyle = {
    backgroundColor: "rgba(var(--primary),0.15)",
    color: "rgba(var(--primary),1)",
    borderRadius: 6,
    transition: "all 0.2s ease-in-out",
  };

  const activeStyle = {
    backgroundColor: "rgba(var(--primary),1)",
    color: "var(--white)",
    borderRadius: 6,
  };

  /* ================= TITLE ================= */
  if (type === "title") {
    return (
      <li className="menu-title">
        <span>{title}</span>
      </li>
    );
  }

  return (
    <Fragment>
      {type === "dropdown" ? (
        <Fragment>
          {title && (
            <li className="menu-title">
              <span>{title}</span>
            </li>
          )}

          <li
            className={isParentActive(links) ? "active parent-active" : ""}
            style={{
              ...(hoverKey === "parent" ? hoverStyle : {}),
              ...(isParentActive(links) ? activeStyle : {}),
            }}
            onMouseEnter={() => setHoverKey("parent")}
            onMouseLeave={() => setHoverKey(null)}
          >
            <Link
              data-bs-toggle="collapse"
              to={collapseId ? `#${collapseId}` : "#"}
              aria-expanded={isParentActive(links)}
              title={name}
            >
              <i className={iconClass}></i>
              <span>{name}</span>

              {badgeCount && (
                <span
                  className={`badge ${
                    collapseId === "advance-ui"
                      ? "rounded-pill bg-warning"
                      : badgeCount === "new"
                      ? "text-light-success"
                      : "text-bg-success"
                  } badge-notification ms-2`}
                >
                  {badgeCount}
                </span>
              )}
            </Link>

            {links && (
              <ul
                className={`collapse ${
                  isParentActive(links) ? "show" : ""
                }`}
                id={collapseId}
              >
                {links.map((link, index) => {
                  const key = `child-${index}`;
                  const active = isActive(link.path);

                  return (
                    <Fragment key={index}>
                      {link.children ? (
                        <li
                          className={`another-level ${
                            isParentActive(link.children)
                              ? "active parent-active"
                              : ""
                          }`}
                          style={{
                            ...(hoverKey === key ? hoverStyle : {}),
                            ...(isParentActive(link.children)
                              ? activeStyle
                              : {}),
                          }}
                          onMouseEnter={() => setHoverKey(key)}
                          onMouseLeave={() => setHoverKey(null)}
                        >
                          <Link
                            data-bs-toggle="collapse"
                            to={`#${link.collapseId}`}
                            aria-expanded={isParentActive(link.children)}
                            title={link.name}
                          >
                            {link.name}
                          </Link>

                          <ul
                            className={`collapse ${
                              isParentActive(link.children)
                                ? "show"
                                : ""
                            }`}
                            id={link.collapseId}
                          >
                            {link.children.map(
                              (underLink, i) => {
                                const subKey = `${key}-${i}`;
                                const subActive = isActive(
                                  underLink.path
                                );

                                return (
                                  <li
                                    key={i}
                                    className={
                                      subActive ? "active" : ""
                                    }
                                    style={{
                                      ...(hoverKey === subKey
                                        ? hoverStyle
                                        : {}),
                                      ...(subActive
                                        ? activeStyle
                                        : {}),
                                    }}
                                    onMouseEnter={() =>
                                      setHoverKey(subKey)
                                    }
                                    onMouseLeave={() =>
                                      setHoverKey(null)
                                    }
                                  >
                                    <Link
                                      to={
                                        underLink.path.startsWith(
                                          "/"
                                        )
                                          ? underLink.path
                                          : `/${underLink.path}`
                                      }
                                    >
                                      {underLink.name}
                                    </Link>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </li>
                      ) : (
                        <li
                          className={active ? "active" : ""}
                          style={{
                            ...(hoverKey === key ? hoverStyle : {}),
                            ...(active ? activeStyle : {}),
                          }}
                          onMouseEnter={() => setHoverKey(key)}
                          onMouseLeave={() => setHoverKey(null)}
                        >
                          {link.path?.startsWith("mailto:") ? (
                            <a href={link.path}>{link.name}</a>
                          ) : (
                            <Link
                              to={
                                link.path.startsWith("/")
                                  ? link.path
                                  : `/${link.path}`
                              }
                            >
                              {link.name}
                            </Link>
                          )}
                        </li>
                      )}
                    </Fragment>
                  );
                })}
              </ul>
            )}
          </li>
        </Fragment>
      ) : (
        /* ================= SINGLE MENU ================= */
        <li
          className="no-sub"
          style={{
            ...(hoverKey === "single" ? hoverStyle : {}),
            ...(isActive(path) ? activeStyle : {}),
          }}
          onMouseEnter={() => setHoverKey("single")}
          onMouseLeave={() => setHoverKey(null)}
        >
          {path?.startsWith("mailto:") ? (
            <a href={path}>
              <i className={iconClass}></i>
              <span>{name}</span>
            </a>
          ) : (
            <Link
              to={path.startsWith("/") ? path : `/${path}`}
            >
              <i className={iconClass}></i>
              <span>{name}</span>
            </Link>
          )}
        </li>
      )}
    </Fragment>
  );
};

export default MenuItem;