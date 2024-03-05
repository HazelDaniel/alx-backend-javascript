export default function loadBalancer(chinaDownload, USDownload) {
  const raced = Promise.race([chinaDownload, USDownload]);
  return raced;
}
