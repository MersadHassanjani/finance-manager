import "./CategoryBadge.css";
import { invertColor, colorNameToHex } from "../../../Utils/utils.js";
const CategoryBadge = ({ title, color, background_color }) => {
  console.log(`!color: ${!color}  !background_color: ${!background_color}`);
  console.log(`color: ${color}  background_color: ${background_color}`);
  console.log(
    `ttcolor: ${typeof color}  ttbackground_color: ${typeof background_color}`
  );
  if (!String(color).startsWith("#") && String(color) !== "undefined") {
    color = colorNameToHex(color);
  }
  if (
    !String(background_color).startsWith("#") &&
    String(background_color) !== "undefined"
  ) {
    background_color = colorNameToHex(background_color);
  }
  if (!color && background_color) {
    color = invertColor(background_color);
  }
  if (color && !background_color) {
    background_color = invertColor(color);
  }
  if (!color && !background_color) {
    color = colorNameToHex("white");
    background_color = colorNameToHex("black");
  }

  return (
    <span
      className="category-badge"
      style={{ color: color, backgroundColor: background_color }}
    >
      {title}
    </span>
  );
};

export default CategoryBadge;
