const List = ({ className, listItems, imageClassName }) => {
    return (
        <ul className={`divide-y divide-gray-200 ${className}`}>
            {listItems.map((listItem) => (
                <li key={listItem.id} className="py-4 flex hover:bg-gray-700">
                    <img
                        className={imageClassName}
                        src={listItem.image}
                        alt=""
                    />
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white text-left">
                            {listItem.label}
                        </p>
                        <p className="text-sm text-gray-300">
                            {listItem.email}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default List;
