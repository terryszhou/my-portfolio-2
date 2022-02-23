export interface PageProps {
  pageRefs?: React.MutableRefObject<{}>,
  visRef?: any,
  visible?: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
  y?: string | number,
  scrollDir?: string | number,
  isLargeScreen?: boolean,
};