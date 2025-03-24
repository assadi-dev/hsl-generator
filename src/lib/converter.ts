export const formatBytes = (bytes: number) => {
  const marker = 1024; // Change to 1000 if required
  const decimal = 2; // Change as required
  const kiloBytes = marker; // One Kilobyte is 1024 bytes
  const megaBytes = marker * marker; // One MB is 1024 KB
  const gigaBytes = marker * marker * marker; // One GB is 1024 MB

  // return bytes if less than a KB
  if (bytes < kiloBytes) return bytes + " octets";
  // return KB if less than a MB
  else if (bytes < megaBytes)
    return (bytes / kiloBytes).toFixed(decimal) + " Ko";
  // return MB if less than a GB
  else if (bytes < gigaBytes)
    return (bytes / megaBytes).toFixed(decimal) + " Mo";
  // return GB if less than a TB
  else return (bytes / gigaBytes).toFixed(decimal) + " Go";
};
