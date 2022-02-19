export interface PageProps {
  pageRefs?: React.MutableRefObject<{}>,
  domRefs?: React.MutableRefObject<{}>,
  isVisible?: boolean,
  y?: number,
  scrollDir?: string,
};