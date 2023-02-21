import { Loading } from "notiflix";

export default function loader() {
    // const color = getComputedStyle(document.documentElement).getPropertyValue(`$ic-accent`);
    Loading.circle('Loading ...', {svgColor: '#ff6b08'});
}