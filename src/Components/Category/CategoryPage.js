import CategoryBadge from "./CategoryBadge/CategoryBadge.js";
const CategoryPage = () => {
  return (
    <div className="CategoryPage container-fluid">
      <CategoryBadge title="newtag" color="white" background_color="#36a832" />
      <CategoryBadge title="ag" color="white" background_color="#36a832" />
      <CategoryBadge title="nil" />
    </div>
  );
};
export default CategoryPage;
