export interface PageProps {
  pageRefs?: React.MutableRefObject<{}>,
  domRefs?: React.MutableRefObject<{}>,
  containerRef?: any
  isVisible?: boolean | React.MutableRefObject<any>,
  y?: string | number,
  scrollDir?: string | number,
  isLargeScreen?: boolean,
};