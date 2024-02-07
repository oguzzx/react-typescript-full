type CategoriItemProps = {
  img: string;
  name: string;
};
function CategoriItem({ img, name }: CategoriItemProps) {
  return (
    <li className="category-item">
      <a href="#">
        <img src={img} alt="" className="category-image" />
        <span className="category-title">{name}</span>
      </a>
    </li>
  );
}

export default CategoriItem;
