// SVG 외에도 이미지 파일을 인식해야 하는 경우
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg" {
  const content: string;
  export default content;
}

// CSS, SCSS, 모듈 CSS를 인식해야 하는 경우
declare module "*.css";
declare module "*.scss";
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
