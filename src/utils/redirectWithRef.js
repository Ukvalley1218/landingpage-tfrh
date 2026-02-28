// export const redirectWithRef = (url) => {
//   const ref = sessionStorage.getItem("reference") || "direct";

//   const utm_source = sessionStorage.getItem("utm_source") || null;
//   const utm_medium = sessionStorage.getItem("utm_medium") || null;
//   const utm_campaign = sessionStorage.getItem("utm_campaign") || null;
//   const utm_content = sessionStorage.getItem("utm_content") || null;

//   const separator = url.includes("?") ? "&" : "?";

//   // Build query string
//   let finalURL = `${url}${separator}reference=${ref}`;

//   if (utm_source) finalURL += `&utm_source=${utm_source}`;
//   if (utm_medium) finalURL += `&utm_medium=${utm_medium}`;
//   if (utm_campaign) finalURL += `&utm_campaign=${utm_campaign}`;
//   if (utm_content) finalURL += `&utm_content=${utm_content}`;

//   window.location.href = finalURL;
// };
